
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import Typewriter from 'typewriter-effect';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled!', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled!', 'success');
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-4">
          
          {/* <Routes> */}
            {/* <Route exact path='/about' element={<About mode={mode}/>} /> */}

           
            <TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove Space" 
            Typewriter={<Typewriter
              options={{
               
                autoStart: true,
                loop: true,
                deleteSpeed: 20,
              }}
              onInit={(typewriter) => {
                typewriter
                .typeString("Try TextUtils -  ")
                .pauseFor(1000)
                .deleteChars(1)
                .typeString("Word Counter")
                .pauseFor(1000)
                .deleteChars(12)
                .typeString("Character Counter")
                .pauseFor(1000)
                .deleteChars(17)
                .typeString("Remove Spaces")
                .pauseFor(1000)
                .deleteChars(13)
                .typeString("Capitalize First Letter")
                .pauseFor(1000)
                .deleteChars(23)
                .typeString("Remove Extra Spaces")
                .pauseFor(1000)
                .deleteChars(19)
                .typeString("Uppercase To Lowercase")
                .pauseFor(1000)
                .deleteChars(22)
                .typeString("Lowercase To Uppercase")
                .pauseFor(1000)
                .deleteChars(22)
                .start();
                
              }  }/> }
            mode={mode} showAlert={showAlert} />

          {/* </Routes> */}

        </div>
      {/* </Router> */}
    </>
  );
}


export default App;

