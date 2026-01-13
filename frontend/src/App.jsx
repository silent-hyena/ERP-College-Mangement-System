import './App.css'

import { Routes, Route,useLocation  } from 'react-router-dom'

import { useEffect } from "react";
import NewAdmission from './routes/NewAdmission/NewAdmission.jsx'
import Home from './routes/Home/Home.jsx'
import AdminPage from './routes/AdminPage/AdminPage.jsx';
import StudentLogin from './routes/StudentLogin/StudentLoginBox.jsx';
import StaffLogin from './routes/AdminLogin/StaffLoginBox.jsx';
import History from './routes/History/History.jsx';
import PostgraduatePrograms from './routes/Postgraduate/Postgraduate.jsx';
import UndergraduatePrograms from './routes/Undergraduate/Undergraduate.jsx';
import FeeStructure from './routes/FeeStructure/FeeStructure.jsx';
import AcademicCalendar from './routes/AcademicCalendar/AcademicCalendar.jsx';
import StudentPortal from './routes/StudentPortal/StudentPortal.jsx';
// import AdminPage from './routes/AdminPage/AdminPage.jsx';
import DatbaseTables from './routes/AdminPage/DatabaseCards.jsx';
import EventBox from './routes/EventPage/DisplayEvents.jsx';

function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-6P7CYRW1TG", {
        page_path: location.pathname,
      });
    }
  }, [location]);
}

function App() {
   usePageTracking()
  
  return (
    <>
      
        {/* mapping route/path to react componenets:  */}

        <div className="container-fluid  p-0 m-0">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/newAdmission" element={<NewAdmission />} />
              <Route path="/counselling" element={<Home />} />
              <Route path="/feeStructure" element={<FeeStructure />} />
              <Route path="/studentLogin" element={<StudentLogin />} />
              <Route path="/studentportal" element={<StudentPortal />} />
              <Route path="/programmes/undergraduate" element={<UndergraduatePrograms />} />
              <Route path="/programmes/postgraduate" element={<PostgraduatePrograms />} />
              <Route path="/institute/history" element={<History />} />
              <Route path="/institute/location" element={<Home />} />
              <Route path="/staff/login" element={<StaffLogin />} />
              {/* <Route path="/professor/login" element={<Home />} /> */}
              <Route path="/staffadminpage" element={<AdminPage />} />
              <Route path="/dashboard" element={<Home />} />
              <Route path="/academicCalendar" element={<AcademicCalendar />} />
              <Route path="/institute/events" element={<EventBox />} />
            </Routes>
          </div>

    </>
  )
}

export default App
