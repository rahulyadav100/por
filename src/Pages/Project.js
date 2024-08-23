import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import "../Pages-css/Project.css";
import axios from 'axios'

function Project() {
  const [dod,setdod]=useState('')
  useEffect(() => {
    axios.get("http://localhost:4000/").then((res)=>setdod(res.data))
  }, []);
 console.log(dod)
 if (dod) {
  console.log(dod.map((i)=>i.title))
 } 
  return (
    <div className="project-main">
      <div className="project-navbar">
        <Navbar />
      </div>
      <div className="project-body">
        {/* {dod.map((item)=>item.title)} */}
        {dod?
        <>
      {dod.map((item=>
        <div className="project-body-content">
          <div className="project-body-content-head">
            <h1>Project Name</h1>
          </div>
          <div className="project-body-content-img">
           
           <iframe  title="YouTube video player" src={item.video} allow="autoplay" >
           </iframe>
            
         
          </div>
          <div className="project-body-content-description">
            <div className="project-body-content-description1">
              <h1>Tilte:PMS (Pharmacy Management System)</h1>
            </div>
            <div className="project-body-content-description1">
              <h1>Project Objectives:</h1>
              <p>
                Primary Goals: Briefly describe the main goal of the project.
                What problem does it solve, or what need does it address?
              </p>
              <p>
                Secondary Goals: Outline the project's boundaries, including
                what it will and won't cover.
              </p>
            </div>

            <div className="project-body-content-description1">
              <h1>Technology Stack:</h1>
              <p>Front-end:</p>
              <p>Back-end: </p>
              <p>Database:</p>
            </div>

            <div className="project-body-content-description1">
              <h1>Deployment:</h1>
              <p>Environment: </p>
            </div>

            <div className="project-body-content-description1">
              <h1>Github repo:</h1>
            </div>
          </div>
        </div>
        ))}
        </>
        :
        <>
        {console.log("data not found")}
        </>
}
      </div>
    </div>
  );
}

export default Project;
