import React, { useState } from "react";
import Quote from "./Quote";
import quotes from "../quotes";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Quotes() {
  const [isBackward, setisBackward] = useState(false);
  const [isForward, setisForward] = useState(true);
  const [dis, setDis] = useState(0);

  const slideStyle = {
    // overFlow: "hidden",
    width: 400 + "%",
    marginLeft: dis + "px",
    transition: "margin-left 1s"
  };

  function handleForward() {
    setisBackward(true);
    let newDis = dis - 1480;
    setDis(newDis);
    //can be use related variable for quotes.length and newDis
    if (newDis === -1480 && quotes.length <= 10) setisForward(false);
  }

  function handleBackward() {
    let newDis = dis + 1480;
    setDis(newDis);
    if (newDis === 0) {
      setisBackward(false);
    }
    setisForward(true);
  }

  return (
    <div className="quote">
      <h1 id="quote-h1">Quote</h1>

      {isBackward && (
        <button className="backward-btn" onClick={handleBackward}>
          <ArrowBackIosIcon />
        </button>
      )}

      <div style={slideStyle} className="quote-box-wrap">
        {quotes.map((item, index) => (
          <Quote
            key={index}
            id={index}
            content={item.sentence}
            author={item.author}
          />
        ))}
      </div>

      {isForward ? (
        <button className="forward-btn" onClick={handleForward}>
          <ArrowForwardIosIcon />
        </button>
      ) : null}
      
    </div>
  );
}

export default Quotes;
