import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClear = () => {
    setText("");
    document.getElementById("myBox").value = "";
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
    // textarea.value = "";
  };
  return (
    <>
      <div className="container">
        <div className="mb-3">
          {/* <label for="myBox" className="form-label"> */}
          <h3>{props.heading}</h3>
          {/* </label>  */}
          <textarea
            className="form-control"
            id="myBox"
            rows="6"
            // value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div className="container my-3">
        <p>
          {text.split(" ").length} words | {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
      </div>
      <div className="container">
        <h3>Preview</h3>
        <p className="preview-para" onChange={handleOnChange}>
          {text}
        </p>
      </div>
    </>
  );
}
