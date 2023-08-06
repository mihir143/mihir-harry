import React, { useState } from "react";

export default function TextForms(props) {
  const [text, SetText] = useState("");
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    SetText(newText);
    props.showAlert("converted to uppercase !","success");
  };
  const handleLowClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    SetText(newText);
    props.showAlert("converted to lowercase !","success");
  };

  const cleartext = () => {
    console.log("Uppercase was clicked" + text);
    // let newText = text.toLowerCase();
    SetText("");
    props.showAlert("all text are cleared !","success");
  };

  const handleOnChange = (event) => {
    console.log("OnChanged");
    SetText(event.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#07037f" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* <label for="mybox" className="form-label">
          Example textarea
        </label> */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#07037f",
            }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert To Upper case
        </button>
        <p />
        <button className="btn btn-primary" onClick={handleLowClick}>
          Convert To lower case
        </button>
        <p />
        <button className="btn btn-primary" onClick={cleartext}>
          clear text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#07037f" }}
      >
        <h2>your text summary</h2>
        <p>
          {" "}
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p> {0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in textbox to preview it here"}
        </p>
      </div>
    </>
  );
}
