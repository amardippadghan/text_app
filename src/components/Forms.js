import React, { useState } from "react";

export default function Forms(props) {
  const [text, settext] = useState("entre the text here");
  const handleupclick = () => {
    let newtext = text.toUpperCase();
    props.showAlert("your text converted to uppercase ", "success");

    settext(newtext);
  };
  const handleonchange = (event) => {
    settext(event.target.value);
  };

  const handleupclick2 = () => {
    let newtext2 = text.toLowerCase();
    settext(newtext2);
    props.showAlert("your text converted to lowercase ", "success");
  };

  const cleartext = () => {
    settext("");
    props.showAlert("you cleared text successfully ", "success");
  };
  const copytext = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("copied to clipboard  ", "success");
  };
  return (
    <>
      <div className="container">
        <h1
          className="my-3"
          style={{ color: props.mode == "light" ? "#0e122d" : "white" }}
        >
          {props.Heading}{" "}
        </h1>
        <div className="mb-3 pd-5">
          <textarea
            className="form-control"
            id="mybox"
            value={text}
            onChange={handleonchange}
            style={{
              backgroundColor: props.mode == "light" ? "white" : "gray",
              color: props.mode == "light" ? "#0e122d" : "white",
            }}
            rows="8"
          ></textarea>

          <button
            type="button"
            className="btn btn-primary my-3 mx-2"
            onClick={handleupclick}
          >
            convert to uppercase
          </button>

          <button
            type="button"
            className="btn btn-primary my-3 mx-2"
            onClick={handleupclick2}
          >
            convert to lowacase
          </button>
          <button
            type="button"
            className="btn btn-primary my-3 mx-2"
            onClick={cleartext}
          >
            Clear Text
          </button>
          <button
            type="button"
            className="btn btn-primary my-3 mx-2"
            onClick={copytext}
          >
            Copy To Clipboard
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode == "light" ? "#0e122d" : "white" }}
      >
        <h2>Your Text Summery </h2>
        <p>
          you have{" "}
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>you need {text.length * 0.008} Minute to read </p>
        <br />
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "entre your text to preview it here"}</p>
      </div>
    </>
  );
}
