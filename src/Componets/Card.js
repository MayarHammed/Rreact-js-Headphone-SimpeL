import React from "react";
import Zoom from "react-reveal/Zoom";
import pro5 from "./Data/Images/pro5.jpg";

import "./Card.css";

function Card({ state }) {
  const data = state.length ? (
    state.map((item) => {
      return (
        <div className="App-Card">
          <div className="card">
            <Zoom>
              <div className="card-d">
                <div className="card-img">
                  <img src={pro5} alt="" />
                </div>
                <h1>HeadPhpone!</h1>
                <h2> Type: {item.Titel}</h2>
                <p> <pre>Color</pre>:{item.color}</p>
                <p className="sp">{item.price}</p>
                <p className="pp">
                  <span>DESCRIPTION : </span>
                  Logitech H390 Wired Headset for PC/Laptop, Stereo Headphones
                  with Noise Cancelling Microphone, USB, In-Line Controls, Works
                  with Chromebook
                </p>
                
              </div>
            </Zoom>
          </div>
        </div>
      );
    })
  ) : (
    <h1> NO Found Items</h1>
  );

  return <Zoom>{data}</Zoom>;
}

export default Card;
