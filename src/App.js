// import Navbar from "./Components/Navbar";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home  from './Pages/Home'
import About from "./Pages/About";
import Service from "./Pages/Service";
import Project from "./Pages/Project";
import Admin from "./Components/Admin";


function App() {
  return (
   
   
  <>
  <BrowserRouter>
  {/* <Navbar/> */}
  {/* <Admin/> */}
  <Routes>
   <Route path="/" element={<Home/>}></Route>
   <Route path="/about" element={<About/>}></Route>
   <Route path="/services" element={<Service/>}></Route>
   <Route path="/project" element={<Project/>}></Route>
   <Route path="/Admin"  element={<Admin/>}></Route>
  </Routes>
  </BrowserRouter>
  </>
   
  );
}

export default App;
