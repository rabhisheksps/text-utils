import './App.css';
import Navbar from './components/Navbar'
import React, { useState } from 'react';
import TextForm from './components/TextForm';
import Footer from './components/Footer';
import AlertMsg from './components/AlertMsg';
import About from './components/About';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  // const removeBodyClasses = () => {
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  // }
  const toggleMode = () => {
    // removeBodyClasses();
    // document.body.classList.add('bg-' + cls)
    // showAlert("Theme has been successffully changed", "success")
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <AlertMsg alert={alert} />
        <div className="container my-5">
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Please enter your text below" mode={mode} />} />
            <Route exact path="/about" element={<About mode={mode}/>} />
          </Routes>
        </div>
        {/* <div className='container my-5'>
          <TextForm showAlert={showAlert} heading="Please enter the text to analyze" mode={mode} />
        </div>  */}
        <Footer mode={mode}/>
      </Router>
    </>
  );
}

export default App;
