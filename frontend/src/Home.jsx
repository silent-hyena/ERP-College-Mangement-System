import React from "react";
import { useState } from "react";
import { useTheme } from "./useTheme";
import Navbar from "./Navbar";
import Footer from "./AppFooter";
import Banner from "./Carousel";
import QuickAccess from "./QuickAcess";

import './Home.css'

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
    <>

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

          <div className="col-1 theme-toggle" >
            <button className="btn" onClick={handleThemeClick} >


              <img src={`${themeIcon}`} className="object-fit-scale" alt="theme icon" style={{ maxWidth: "40px" }} />
            </button>
          </div>
        </div>
      </div>
      <Navbar />
      <Banner />
      {/* <div className="container-fluid " style={{ minHeight: "2000px" }}></div> */}
      <QuickAccess />
      <Footer />

    </>
  )
}
export default Home;

