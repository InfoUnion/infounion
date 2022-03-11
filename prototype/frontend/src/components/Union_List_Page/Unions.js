import { Routes, Route, Link } from "react-router-dom";
import '../../App.css';
import { Home } from '../../App.js';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


function Unions() {
  return (
 
<MapContainer center={[35.282753, -120.659615]} zoom={13}>
  
    
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[35.282753, -120.659615]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
  <Marker position={[38, -120.659615]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>

</MapContainer>
  );
}
  export {Unions};
