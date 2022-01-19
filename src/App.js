import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
 const [mode,setmode] = useState('light');
 const [alert,setalert] = useState(null)

 const showalert = (message ,type)=>{
   setalert({
     msg: message,
     type: type
   })
   setTimeout(()=>{
       setalert(null);
   },1500);
 }

 const toggleMode=()=>{
   if(mode=== 'light'){
     setmode('dark')
     document.body.style.backgroundColor='#042743'
     showalert("Dark mode has been enabled", "success");
    //  let t=7;
    //  while(t--){
    //  setTimeout(() => {
    //   document.title="This is working "
    //  }, 1000);
    //  setTimeout(() => {
    //   document.title="good work buddy "
    //  }, 1500);
    //  }
     
   }
   else
   {
    setmode('light')
    document.body.style.backgroundColor='white';
    showalert("Light mode has been enabled", "success");
   }
 }
  return (
    
    <>
    <Router>
 <Navbar title="MyApp" mode={mode} toggleMode={toggleMode} />
                  {/*  
                    title is for title of applicaiton 
                      mode is for choice of dark and light
                      toggleMode is function  which is defined outside return
                  */ }
  <Alert alert={alert} />
 {/* <div className="container my-3">
  <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextForm heading="enter the text to analyze" showalert={showalert} mode={mode}/>
          </Route>
  </Switch>
 </div> */}

 
 <div className="container">
          <Routes>
            <Route path="/about" 
            element={<About />}>
            </Route>
            <Route path="/"
             element={<TextForm heading="Enter text to analyze"  mode={mode} showalert={showalert} />}>
            </Route>
          </Routes>
        </div>


 
 
 </Router>
    </>

  );
}

export default App;
