import { Routes, Route, BrowserRouter } from "react-router-dom";
import Meeting from "./Components/Meeting";
import AdminDashboard from "./AdminDashboard";
import SignUp from "./SignUp";
import LandingPage from "./LandingPage";
import Login from "./Components/Login";
import SuccessPage from "./Components/SuccessPage";
import UserDashboard from "./Components/UserDashboard";
import Consult from "./Components/Consult";
import ConsultList from "./Components/ConsultList";
import JoinRoom from "./Components/JoinRoom";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/meetsuccess" element={<SuccessPage/>}/>
      <Route path="/userdash" element={<UserDashboard/>}/>

    </Routes>
  );
};

export default AppRoutes;