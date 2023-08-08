import React, { useState }from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('')
  const handleOnChange = (event) => {
    // console.log("On change.");
    setText(event.target.value);
  }
  const handleUpClick = () => {
    // console.log("Uppercase button is clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleDownClick = () => {
    // console.log("Uppercase button is clicked");
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleClear = () => {
    let newText = ('');
    setText(newText)
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value)
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "))
  }
  return (
    <>
      <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}:</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleDownClick}>Convert to Lowercase</button>
        <button className='btn btn-primary' onClick={handleClear}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={speak}>Speak</button>
        <button className='btn btn-primary' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary:</h2>
        <p><strong>{text.split(" ").length}</strong> words, <strong>{text.length}</strong> characters.</p>
        <p><strong>{(0.08 * text.split(" ").length).toFixed(3)}</strong> minutes read.</p>
        <h3><strong>Preview</strong>:</h3>
        <p style={{width: '80%'}}>{text.length>0?text.slice(0, 2500):"Enter your text to preview here"}</p>
      </div>
    </>
  )
}
