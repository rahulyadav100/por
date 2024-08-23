import React from 'react'
import Navbar from '../Components/Navbar'
import '../Pages-css/Service.css'
import img1 from '../Images/finacial_report.jpg'
function Service() {
  return (
    
    <div className='service-main'>
    <div className="navbar">
    <Navbar />
    </div>
      <div className="service-body-main">
  <div className="service-body">
    <div className="service-card">
        <div className="card-img">
          <img src={img1} id='img1' alt="immag1" />
        </div>
        <div className="card-content">
            <h1>Fornt-End Developer</h1>
            <p>Designing and Developing User Interfaces:<br></br>Translating design mockups, wireframes, and <br></br> prototypes into responsive, interactive, and<br></br> functional web pages using HTML, CSS, and <br></br> JavaScript.</p>
            <p>Responsive Design:<br></br>Ensuring that web pages are responsive, meaning<br></br> they adapt to various screen sizes, resolutions, and devices</p>
        </div>
    </div>


    <div className="service-card">
        <div className="card-img">
          <img src={img1} id='img1' alt="immag1" />
        </div>
        <div className="card-content">
            <h1>Back-End Developer</h1>
            <p>Server-Side Logic:<br></br>Writing and maintaining server-side code to handle business logic, application functionality, and data processing.This includes implementing APIs and<br></br> services that the front-end consumes.</p>
            <p>API Development:<br></br>Creating and managing APIs that allow <br></br> communication between the front-end and back-end.</p>
        </div>
    </div>


    <div className="service-card">
        <div className="card-img">
          <img src={img1} id='img1' alt="immag1" />
        </div>
        <div className="card-content">
            <h1>Full-Stack Developer</h1>
            <p>Front-End Development:<br></br> Implementing user interfaces and user experiences using React. This includes creating reusable components, managing state, and handling user interactions.</p>
            <p>Back-End Development:<br></br>Developing server-side applications and APIs using Node.js and Express.js. This includes handling HTTP requests, processing data, and integrating with front-end components.</p>
            
        </div>
    </div>


    <div className="service-card">
        <div className="card-img">
          <img src={img1} id='img1' alt="immag1" />
        </div>
        <div className="card-content">
            <h1>Java</h1>
            <p>Core Java:<br></br>Proficient in Java SE features, including OOP principles, exception handling, concurrency, and collections framework.</p>
        </div>
    </div>



    


   


    
   
  </div>
  <div className="end">
    hiowdbk
  </div>
  </div>
    </div>
    
  )
}

export default Service
