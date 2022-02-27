import React from "react";
import Splash from "../Splash";
import "./Frame12.css";

function Frame12(props) {
  const { splashProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="frame-12 screen">
        <Splash {...splashProps} />
      </div>
    </div>
  );
}

export default Frame12;
