import React, { ChangeEvent, useState } from "react";
import Output from "./Output";
import "./style.css";

const Input = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    setResult(input);
  };

  return (
    <>
      <div className="wrapper">
        <div className="section">
          <div className="input-div">
            <h3>Thala For a Reason - No. 7</h3>
            <input
              type="text"
              value={input}
              autoComplete="off"
              onChange={handleChange}
              placeholder="Please Enter a Value..."
            />
            <button className="btn" onClick={handleClick}>
              Check
            </button>
          </div>
          <div className="output-div">
            <p>
              <Output result={result} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Input;
