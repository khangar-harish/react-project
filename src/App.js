import './App.css';
import About from './components/About';
import Enquiry from './components/Enquiry';
import Navbar from './components/Navbar';
import Home from  './components/Home';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [switchText, setswitchText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);
  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light');
      setswitchText("Enable Dark Mode");
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been applied successfully','success');
    }else{
      setMode('dark');
      setswitchText("Enable Light Mode");
      document.body.style.backgroundColor = '#162b50';
      showAlert('Dark mode has been applied successfully','success');
    }
  }
  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
        setAlert(null);
    },2000)
  }
  return (
  <>
  <BrowserRouter>
    <Navbar mode={mode} switchText={switchText} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Routes>
      <Route exact path='/Home' element={<Home mode={mode}/>}/>
      <Route exact path='/About' element={<About mode={mode}/>}/>
      <Route exact path='/Contact' element={<Enquiry mode={mode}/>}/>
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
