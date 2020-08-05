import React, { useState } from "react";
import musics from "../musics";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Musics() {
  const [isBackward, setisBackward] = useState(false);
  const [isForward, setisForward] = useState(true);
  const [dis, setDis] = useState(0);

  const slideStyle = {
    // overFlow: "hidden",
    width: 400 + "%",
    marginLeft: dis + "px",
    transition: "margin-left 1s",
  };

  function handleForward() {
    setisBackward(true);
    let newDis = dis - 1480;
    setDis(newDis);
    //can be use related variable for quotes.length and newDis
    if (newDis === -1480 && musics.length <= 10) {
      setisForward(false);
    } else if (newDis === -2960 && musics.length <= 15) {
      setisForward(false);
    } else if (newDis === -4440 && musics.length <= 20) {
      setisForward(false);
    }
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
    <div className="music">
      <h1 id="music-h1">Music</h1>
      {isBackward && (
        <button className="backward-btn" onClick={handleBackward}>
          <ArrowBackIosIcon />
        </button>
      )}
      <div style={slideStyle} className="music-box-wrap">
        {musics.map((item, index) => {
          return (
            <iframe
              key={index}
              className="music-box"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${item.youtubeId}`}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          );
        })}
      </div>
      {isForward ? (
        <button className="forward-btn" onClick={handleForward}>
          <ArrowForwardIosIcon />
        </button>
      ) : null}
      {/* <div className="playList">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?list=PLedqE6or7oY4YwXSviaSjXPY1IviBU9px"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div> */}
    </div>
  );
}

export default Musics;
