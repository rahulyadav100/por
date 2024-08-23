import React from "react";
import Navbar from "../Components/Navbar";
import "../Pages-css/Home.css";
// import img1 from "../Images/finacial_report.jpg";
function Home() {
  return (
    <div className="main">
      {/* for laptops */}
      <header>
        <Navbar />
      </header>
      <div className="home-main">
        <div className="home-written-content">
          <div className="home-written-content-1">
            <h2>Full Stack Web Developer</h2>
            <h1>
              <span>Rahul Yadav</span>
            </h1>
            <h2>
              I'm Full stack Web Developer <br></br>Remotely from Mumbai
            </h2>
          </div>
        </div>

        <div className="home-img-content">
          <div className="home-img-content2">
           
          </div>
        </div>
      </div>

      {/* for smartphones */}
      <div className="home-main-phone">
        <Navbar/>
        <div className="home-phone-head">
          <h1>Welcome!!</h1>
        </div>
        <div className="home-img-content2">
           
           </div>
        <div className="home-main-phone-home-written-content-1">
       
            <h1>
              <span>Rahul Yadav</span>
            </h1>
           
        </div>
        <div className="home-main-phone-home-written-content-2">
        <h2>Full Stack Web Developer</h2>
        <h2>
              I'm Full stack Web Developer <br></br>Remotely work from Mumbai
            </h2>
        </div>

      </div>
    </div>
  );
}

export default Home;
