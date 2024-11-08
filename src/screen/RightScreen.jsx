import React from "react";
import "./rightScreen.scss";

function RightScreen() {
  return (
    <div className="right-screen_container">
      <div className="right-screen_body">
        <div className="right-screen_body__header">
          <img src="image-removebg-preview.png" alt="image" />
        </div>
        <div className="right-screen_body_content">
          <h1>Pocket Notes</h1>
          Send and receive messages without keeping your phone online. Use
          Pocket Notes on up to 4 linked devices and 1 mobile phone.
        </div>
        <div className="right-screen_body_footer">
          <img src="Vector.png" alt="" />
          <p>end-to-end encrypted</p>
        </div>
      </div>
    </div>
  );
}

export default RightScreen;
