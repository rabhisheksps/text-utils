import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'
import React, { useState } from 'react';
import TextForm from './components/TextForm';
import Footer from './components/Footer';

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <div className="container my-5">
      <TextForm heading="Please enter the text to analyze" mode={mode} />
      {/* <About /> */}
    </div>
    <Footer mode={mode}/>
    </>
  );
}

export default App;
