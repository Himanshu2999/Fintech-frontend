import { useState, useEffect } from "react";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import SignUp from "./SignUp";
import AdminDashboard from "./AdminDashboard";
import AppRoutes from "./AppRoutes";
import { useDispatch } from "react-redux";

function App() {
  // keeps track of which page we're showing right now
  const dispatch = useDispatch();
  
 const [userdata, setUserdata] = useState(null);

useEffect(() => {
  const stored = JSON.parse(sessionStorage.getItem("udata"));
  if (stored != null) {
    setUserdata(stored);
    dispatch({ type: 'update_idk', payload: stored._id });
    dispatch({ type: 'update_name', payload: stored.name });
    dispatch({ type: 'update_email', payload: stored.email });
    dispatch({ type: 'update_usrtype', payload: stored.usertype });
    dispatch({ type: 'update_image', payload: stored.photo});
  }
}, [userdata]); // empty dependency — sirf mount pe run ho
  return (
    <>
      <AppRoutes/>
    </>
  );
}

export default App;
