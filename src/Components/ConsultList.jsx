import React, { useState, useEffect } from "react";
import "./Consult.css";
import { useSelector } from "react-redux";

const ConsultList = () => {

  const { idk, usertype } = useSelector((state) => state)
  const [cont, setconslt] = useState();

  const accept = async (cid) => {
    const resp = await fetch(`https://fintech-backend-6.onrender.com/api/accept/${cid}`, {
      method: "put",
      headers: { 'Content-type': 'application/json' }
    })

     if(resp.ok) {
      let res = await resp.json();
      if (res.statuscode == 1) {
        alert("req accdpted successfuly")
        getconsult();
      }
    }

  }
  const getconsult = async () => {

    const resp = await fetch(`https://fintech-backend-6.onrender.com/api/getconslt/${idk}`, {
      cache: "no-store", // <-- key fix, prevents 304
      headers: {
        "Cache-Control": "no-cache",
      },
    })

    if (resp.ok) {
      const res = await resp.json();
      if (res.statuscode == 1) {
        setconslt(res.consltdat)
      }
    }
  }

  useEffect(() => {
    if (!idk) return;
    getconsult();
  }, [idk]);
  return (
    <>

      {
        cont?.map((data, ind) => (
          <div className="consult-card" key={ind}>
            <div className="consult-header">
              <h3>
                Incoming Meeting Request <span className="badge-new">New</span>
              </h3>
            </div>

            <div className="consult-user-row">
              <div className="consult-user-info">
                <img
                  className="consult-avatar"
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Rahul Sharma"
                />
                <div>
                  <p className="consult-name">{data.user}</p>
                  <p className="consult-role">Customer</p>
                  <p className="consult-rating">★ 4.6</p>
                </div>
              </div>

              <div className="consult-requested">
                <p className="consult-label">Requested On</p>
                <p className="consult-value"> {data.Date}</p>
              </div>
            </div>

            <div className="consult-details-row">
              <div className="consult-detail">
                <p className="consult-label">📅 Date - 🕐 Time </p>
                <div> {data.scheduledAt} </div>
              </div>
              <div className="consult-detail">
                <p className="consult-label"> Room ID</p>
                <p className="consult-value"> {data.roomid}</p>
              </div>
              <div className="consult-detail">
                <p className="consult-label">🎥 Modde</p>
                <p className="consult-value">Video Call</p>
              </div>
            </div>

            <div className="consult-message-box">
              <p className="consult-label">Message</p>
              <p className="consult-message-text">
                {data.message}
              </p>
            </div>

            {
              usertype === "customer" ?
                <div> {data.status} </div>
                : <div className="consult-actions">

                  {
                    data.status == "accepted"?
                    <>
                    <h2> the consultation is accepted </h2>
                    </>
                    :
                    <>
                  
                  <button className="btn-decline">Decline</button>
                  <button onClick={()=>accept(data._id)} className="btn-accept">Accept Meeting</button>
  </>
                  }

                </div>
            }


          </div>
        ))
      }

    </>
  );
};

export default ConsultList;
