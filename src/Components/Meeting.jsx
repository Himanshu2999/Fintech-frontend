import { useMemo, useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import "../App.css"
import { useSelector } from 'react-redux';

const advisor = {
  name: 'Neha Verma',
  role: 'Financial Advisor',
  experience: '8+ Years',
  fee: 1499,
  rating: 4.8,
  reviews: 124,
};

const timeSlots = ['10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'];


function Meeting() {
  const nav = useNavigate();
  const [selectedAdvisor, setSelectedAdvisor] = useState(advisor);
  const [selectedDate, setSelectedDate] = useState(16);
  const [selectedSlot, setSelectedSlot] = useState('11:00 AM');
  const [message, setMessage] = useState('');
  const [monthOffset, setMonthOffset] = useState(0);
  const [advore, setadvore] = useState([]);
  const { name, idk } = useSelector((state) => state)

  const handleSubmit = async () => {
    const data = {
      aid: selectedAdvisor._id, adname: selectedAdvisor.name, uid: idk, uname: name,
      schld: `${selectedDate}'/'${monthOffset}'/2026' ${selectedSlot}`, msg: message, rid: `room${uuidv4().replace(/-/g, "").slice(0, 6)}`
    }
    const resp = await fetch("http://localhost:9000/api/consult",
      {
        method: "post",
        body: JSON.stringify(data),
        headers: { 'Content-type': 'application/json' },
      })
    if (resp.ok) {
      let res = await resp.json();
      if (res.statuscode == 1) {
        alert("meeting requested successfully")
        if (!selectedDate || !selectedSlot) return;
        nav('/meetsuccess', {
          state: {
            advisor: selectedAdvisor,
            date: `${monthName} ${selectedDate}`,
            time: selectedSlot,
            message,
          },
        });
      }

    }
  }


  const monthName = useMemo(() => {
    const date = new Date(2025, 4 + monthOffset, 1);
    return date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
  }, [monthOffset]);

  const days = useMemo(() => createCalendar(2025, 4 + monthOffset), [monthOffset]);



  const fetchadvisors = async () => {
    const resp = await fetch("http://localhost:9000/api/getadvisall")
    if (resp.ok) {
      let res = await resp.json();
      if (res.statuscode == 1) {
        setadvore(res.datadv)
      }
    }
  }




  useEffect(() => {
    fetchadvisors()
  }, [advore]); // empty deps — run once on mount


  return (
    <main className="page-shell">
      <section className="meeting-card">
        <header className="page-header">
          <h1>Request a Meeting</h1>
          <p>Schedule a meeting with your preferred advisor.</p>
        </header>

        <div>
          <section className="section-block">
            <h2>Select Advisor</h2>
            <div className="advisor-list">
              {advore.map((item) => (
                <button
                  type="button"
                  key={item.name}
                  className={`advisor-card ${selectedAdvisor?.name === item.name ? 'selected' : ''}`}
                  aria-pressed={selectedAdvisor?.name === item.name}
                  onClick={() => setSelectedAdvisor(item)}
                >

                  <div className="avatar">  <img src={`uploads/profiles/${item.photo}`} width={"60px"} /> </div>
                  <div className="advisor-main">
                    <strong>{item.name}</strong>
                    <span>{item.specialization}</span>
                    <small><span className="star">★</span> 4 <em>344 reviews)</em></small>
                  </div>
                  <div className="advisor-stat">
                    <span>Experience</span>
                    <strong>{item.experience} years</strong>
                  </div>

                </button>
              ))}
            </div>
          </section>

          <section className="section-block schedule-block">
            <h2>Select Date &amp; Time</h2>
            <div className="schedule-grid">
              <div className="calendar-card">
                <div className="calendar-head">
                  <button type="button" onClick={() => setMonthOffset((value) => value - 1)} aria-label="Previous month">‹</button>
                  <strong>{monthName}</strong>
                  <button type="button" onClick={() => setMonthOffset((value) => value + 1)} aria-label="Next month">›</button>
                </div>
                <div className="weekdays">
                  {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => <span key={day}>{day}</span>)}
                </div>
                <div className="calendar-days">
                  {days.map((day, index) => (
                    <button
                      type="button"
                      key={`${day.date}-${index}`}
                      className={`${day.current ? '' : 'muted'} ${day.current && day.date === selectedDate ? 'active' : ''}`}
                      disabled={!day.current}
                      onClick={() => setSelectedDate(day.date)}
                    >
                      {day.date}
                    </button>
                  ))}
                </div>
              </div>

              <div className="slot-area">
                <h3>Available Time Slots</h3>
                <div className="slot-grid">
                  {timeSlots.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      className={`slot ${selectedSlot === slot ? 'active' : ''}`}
                      onClick={() => setSelectedSlot(slot)}
                    >
                      {slot}
                    </button>
                  ))}
                </div>

                <h3 className="mode-title">Meeting Mode</h3>
                <div className="mode-card">
                  <span className="video-icon">▣</span>
                  <div>
                    <strong>Video Call</strong>
                    <span>Online meeting</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-block message-block">
            <label htmlFor="message">Add Message <span>(Optional)</span></label>
            <textarea
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Write a message to the advisor..."
              rows="3"
            />
          </section>

          <footer className="request-footer">
            <div className="total">
            </div>
            <button onClick={handleSubmit} className="request-button" type="submit">Request Meeting</button>
          </footer>
        </div>
      </section>
    </main>
  );
}



function createCalendar(year, month) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const previousMonthDays = new Date(year, month, 0).getDate();
  const cells = [];

  for (let i = firstDay - 1; i >= 0; i -= 1) {
    cells.push({ date: previousMonthDays - i, current: false });
  }
  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push({ date: day, current: true });
  }
  let nextDay = 1;
  while (cells.length < 42) {
    cells.push({ date: nextDay, current: false });
    nextDay += 1;
  }
  return cells;
}

export default Meeting;
