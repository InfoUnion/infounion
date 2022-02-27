import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Frame12 from "./Frame12";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|frame-12)">
          <Frame12 splashProps={frame12Data.splashProps} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const splashData = {
    infounion: "/img/infounion--1@2x.png",
    spanText1: "I am a/an",
    occupationDropDown: "/img/drop-down-box-3@2x.png",
    spanText2: "Occupation",
    spanText3: "based in",
    locationDropDown: "/img/drop-down-box-3@2x.png",
    spanText4: "Location",
    spanText5: "I want",
    informationDropDown: "/img/drop-down-box-3@2x.png",
    spanText6: "Information",
    frame6: "/img/frame-6-1@2x.png",
    frame7: "/img/frame-7-1@2x.png",
};

const frame12Data = {
    splashProps: splashData,
};

