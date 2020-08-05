import React from "react";

function Quote(props) {
  return (
    <div className="quote-box">
      <h1>{props.content}</h1>
      <h3>-- {props.author}</h3>
    </div>
  );
}

export default Quote;
