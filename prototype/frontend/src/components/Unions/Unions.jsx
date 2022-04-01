import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { ListGroup, Collapse, Button, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import unions from '../../assets/data/unions';
import './Unions.css';

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import AccordionBody from "react-bootstrap/esm/AccordionBody";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function Unions() {
    return (
        <div className='unions-container'>
            <div className='cards-container'>
                <Accordion className="unions-cards-listgroup">
                {unions.map(union => (
                    <Accordion.Item eventKey ={union.name} key={union.name}>
                        <Accordion.Header>{union.name}</Accordion.Header>
                        <Accordion.Body> {union.description} </Accordion.Body>
                    </Accordion.Item>))}
                </Accordion>
            </div>
            <div className='map-container'>
                <MapContainer center={[35.282753, -120.659615]} zoom={13}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url=
                        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[35.282753, -120.659615]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
}
export default Unions;

