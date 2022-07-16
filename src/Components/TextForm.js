import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success")
  };

  const handleDnClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success")
  };

  const handleCrClick = () => {
    let newText = ""
    setText(newText);
    props.showAlert("Cleared","success")
    
  };
  const handleLnClick = () => {
    let newText = text.length;
    return newText;
  };
 

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter Text Here");

  return (
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}} >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control "
          value={text}
          
          onChange={handleOnChange}
          
          style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}
          
          id="myBox"
          rows="8"
        ></textarea>
        <span>{handleLnClick()} characters</span>
      </div>
      <button className="btn btn-outline-info mx-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>

      
      <button className="btn btn-outline-info mx-2" onClick={handleDnClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-outline-info mx-2" onClick={handleCrClick}>
        Clear All
      </button>
      
      


    </div>
  );
}
