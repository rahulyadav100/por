import React from 'react'
import { useState } from 'react';
import '../Pages-css/Admin.css'
import Navbar from './Navbar';
import axios from 'axios'
function Admin() {

  const [formData, setFormData] = useState({
    title: '',
    video: '',
    projectTitle: '',
    primaryGoal: '',secondaryGoal:'',frontEnd:'',backend:'',database:'',enviorment:'',github:'',

});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
      ...formData, 
      [name]: value 
  });
};


const handleSubmit=async(e)=>{
   await axios.post("http://localhost:4000/",formData).then((res)=>{
    console.log(`Successfull ${res.data.title}`)
  }).catch((err)=>{
    console.log(err)
  })
}
console.log(formData)
  return (
    <div className='admin-main'>
      <header><Navbar/></header>
      <div className="admin-content">
     
      <label htmlFor="Title">Title  <input type='text' placeholder='Project ' name='Title' value={formData.name} onChange={handleChange}/></label>
      <label htmlFor="VideoSrc">VideoLink<input type='link' placeholder='Video Link' name='video'  value={formData.video} onChange={handleChange}/></label>
      <label htmlFor="Title">ProjectTitle<input type='text' placeholder='Project Title' name='projectTitle'  value={formData.projectTitle} onChange={handleChange}/></label>
      <label htmlFor="Project Objectives:">Project Objectives:<input type='text' placeholder='Primary Goals:' name='primaryGoal' value={formData.primaryGoal} onChange={handleChange} /></label>
      <label htmlFor="Project Objectives:">Project Objectives:<input type='text' placeholder=' Secondary Goals:' name='secondaryGoal'  value={formData.secondaryGoal} onChange={handleChange}/></label>
      <label htmlFor="Project Objectives:">Technology Stack:<input type='text' placeholder='Front-end:' name='frontEnd'  value={formData.frontEnd} onChange={handleChange}/></label>
      <label htmlFor="Project Objectives:">Technology Stack:<input type='text' placeholder='Back-end:' name='backend'  value={formData.backend} onChange={handleChange}/></label>
      <label htmlFor="Project Objectives:">Technology Stack:<input type='text' placeholder='Database:' name='database'  value={formData.database} onChange={handleChange}/></label>
      <label htmlFor="Project Objectives:">Deployment:<input type='text' placeholder='Enviorment:' name='enviorment'  value={formData.enviorment} onChange={handleChange}/></label>
      <label htmlFor="Project Objectives:">Github repo:<input type='text' placeholder='Github repo' name='github'  value={formData.github} onChange={handleChange}/></label>
      <button onClick={handleSubmit}>Submit</button>
    </div>
    </div>
  )
}

export default Admin
