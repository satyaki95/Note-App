import React from "react";
import LeftScreen from "./screen/LeftScreen";
import RightScreen from "./screen/RightScreen";
import "./app.scss";

const App = () => {
  return (
    <div className="container">
      <LeftScreen />
      <RightScreen />
    </div>
  );
};

export default App;
