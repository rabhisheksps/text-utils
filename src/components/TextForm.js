import React, { useState }from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('Enter the text here!')
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
  return (
    <>
      <div className='container'>
        <h1>{props.heading}:</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleDownClick}>Convert to Lowercase</button>
      </div>
      <div className="container my-3">
        <h2>Your text summary:</h2>
        <p><strong>{text.split(" ").length}</strong> words, <strong>{text.length}</strong> characters.</p>
        <p><strong>{0.008 * text.split(" ").length }</strong> minutes read.</p>
        <h3><p><strong>Preview</strong>: {text.slice(0, 25)}...</p></h3>
      </div>
    </>
  )
}
