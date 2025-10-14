import React from "react";
import { useState } from "react";
import { useTheme } from "../../useTheme";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/AppFooter.jsx";
import Banner from "../../components/Carousel/Carousel.jsx";
import QuickAccess from "../../components/QuickAccess/QuickAcess.jsx";
import './Home.css'
import Performance from "../../components/Performance/Performance.jsx";

function Home() {

  const { toggleTheme } = useTheme();

  const [themeIcon, setThemeIcon] = useState("icons8-sun-50.png")

 


  function handleThemeIcon() {
    setThemeIcon((themeIcon == "icons8-sun-50.png") ? "icon-moon-white.png" : "icons8-sun-50.png")
  }
  function handleThemeClick() {
    toggleTheme();
    handleThemeIcon();
  }



  return (
    <div  style = {{"backgroundColor":  "#faf9f5"}}>

      <div className="container-fluid top-bar">
        <div className="row">
          {/* Logo Section */}
          <div className="col-2 college-logo">
            <img src="/college-logo.jpg" className="rounded-circle" alt="College Logo" />
          </div>

          {/* Title Section */}
          <div className="col-9 college-title">
            <h1>Student Management System</h1>
          </div>

          {/* Toggle Theme */}

          {/* <div className="col-1 theme-toggle" >
            <button className="btn" onClick={handleThemeClick} >


              <img src={`${themeIcon}`} className="object-fit-scale" alt="theme icon" style={{ maxWidth: "40px" }} />
            </button>
          </div> */}
        </div>
      </div>
      <Navbar />
      <Banner />
      {/* <div className="container-fluid " style={{ minHeight: "2000px" }}></div> */}
      <QuickAccess />
      {/* other homepage content */}
      <  Performance />
      <Footer />
     
      

    </div>
  )
}
export default Home;

