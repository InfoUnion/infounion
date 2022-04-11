import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import unions from '../../assets/data/unions';
import './Unions.css';

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

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
                <ListGroup className="unions-cards-listgroup">
                    {unions.map(union => (<ListGroup.Item key={union.name}><a href={union.sameAs} target="_blank" rel="noreferrer">{union.name}</a></ListGroup.Item>))}
                </ListGroup>
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

