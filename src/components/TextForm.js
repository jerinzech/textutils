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
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container">
        <div className="mb-3">
          {/* <label for="myBox" className="form-label"> */}
          <h2>{props.heading}</h2>
          {/* </label>  */}
          <textarea
            className="form-control"
            id="myBox"
            rows="6"
            value={text}
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
    </>
  );
}
