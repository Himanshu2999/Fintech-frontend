import { Routes, Route } from "react-router-dom";
import Maindashbody from "./Maindashbody";
import ConsultList from "./ConsultList";
import JoinRoom from "./JoinRoom";
import Meeting from "./Meeting";


const DashRouetes = () => {
    return (
        <>
            <Routes>
                <Route path="/userdash" element={<Maindashbody />} />
                <Route path="/consultreq" element={<ConsultList />} />
                <Route path="/join" element={<JoinRoom />} />
                <Route path="/meeting" element={<Meeting/>} />
            </Routes>
        </>
    );
};

export default DashRouetes;