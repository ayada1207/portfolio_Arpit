
import Navbar from './Components/Navbar/Navbar.tsx';
import './App.css';
import React from 'react';
import Home from './Components/Home/Home.tsx';
import About from './Components/About/About.tsx';
import Experience from './Components/Experience/Experience.tsx';
import Project from './Components/Projects/Project.tsx';
import Contact from './Components/Contact/Contact.tsx';
import Footer from './Components/Footre.tsx';


const App =()=> {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <About/>
     <Experience/>
     <Project/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
