import React from "react";
import "./Splash.css";

function Splash(props) {
  const {
    infounion,
    spanText1,
    occupationDropDown,
    spanText2,
    spanText3,
    locationDropDown,
    spanText4,
    spanText5,
    informationDropDown,
    spanText6,
    frame6,
    frame7,
  } = props;

  return (
    <div className="splash">
      <div className="splash-prompt">
        <img className="info-union" src={infounion} />
        <div className="flex-row josefinsans-normal-bridal-heath-48px">
          <h1 className="title valign-text-middle">
            <span>
              <span className="josefinsans-normal-bridal-heath-48px">{spanText1}</span>
            </span>
          </h1>
          <div className="occupation-drop-down" style={{ backgroundImage: `url(${occupationDropDown})` }}>
            <div className="occupation valign-text-middle josefinsans-normal-azure-radiance-36px">
              <span>
                <span className="josefinsans-normal-azure-radiance-36px">{spanText2}</span>
              </span>
            </div>
          </div>
          <div className="based-in valign-text-middle">
            <span>
              <span className="josefinsans-normal-bridal-heath-48px">{spanText3}</span>
            </span>
          </div>
          <div className="location-drop-down" style={{ backgroundImage: `url(${locationDropDown})` }}>
            <div className="occupation-1 valign-text-middle josefinsans-normal-azure-radiance-36px">
              <span>
                <span className="josefinsans-normal-azure-radiance-36px">{spanText4}</span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex-row-1">
          <div className="i-want valign-text-middle josefinsans-normal-bridal-heath-48px">
            <span>
              <span className="josefinsans-normal-bridal-heath-48px">{spanText5}</span>
            </span>
          </div>
          <div className="information-drop-down" style={{ backgroundImage: `url(${informationDropDown})` }}>
            <div className="occupation-2 valign-text-middle josefinsans-normal-azure-radiance-36px">
              <span>
                <span className="josefinsans-normal-azure-radiance-36px">{spanText6}</span>
              </span>
            </div>
          </div>
          <img className="frame-6" src={frame6} />
        </div>
      </div>
      <img className="frame-7" src={frame7} />
    </div>
  );
}

export default Splash;
