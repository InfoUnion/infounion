import React from 'react'
import { Map, Marker, } from "pigeon-maps"
import {
  Paper
} from '@mui/material'

const MAPTILER_ACCESS_TOKEN = 'RLexnCa0O1fFakYpXl7z'
const MAP_ID = 'toner'

function mapTiler(x, y, z, dpr) {
  return `https://api.maptiler.com/maps/${MAP_ID}/256/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.png?key=${MAPTILER_ACCESS_TOKEN}`
}

function UnionMap(props) {
  const [hue, setHue] = React.useState(0);
  const [focus , setFocus] = React.useState([39.8283, -98.5795]);

  const { width, height, unions, coords } = props;
  const color = `hsl(${hue % 360}deg 39% 70%)`

  // navigator.geolocation.getCurrentPosition(function (position) {
  //   console.log("Latitude is :", position.coords.latitude);
  //   console.log("Longitude is :", position.coords.longitude);
  // });

  return (
    <Paper sx={{ width: width }}>
      <Map
        provider={mapTiler}
        dprs={[1, 2]} // add this to support hidpi/retina (2x) maps if your provider supports them
        height={height}
        defaultCenter={focus}
        defaultZoom={4}
      >
        {unions.map((union) => {
          const coords = [parseFloat(union.latitude.$numberDecimal), parseFloat(union.longitude.$numberDecimal)]
          return (
            <Marker
              key={union.name}
              width={50}
              anchor={coords}
              color={'#1976d2'}
              onClick={(event) => {setFocus([0, 0])}}
            />
          );
        })}
      </Map >
    </Paper>
  )
}

export default UnionMap;