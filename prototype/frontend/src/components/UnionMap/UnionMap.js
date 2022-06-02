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
  const [hue, setHue] = React.useState(0)

  const { width, height, lat, lng, unions } = props;
  const color = `hsl(${hue % 360}deg 39% 70%)`

  return (
    <Paper sx={{ width: width }}>
      <Map
        provider={mapTiler}
        dprs={[1, 2]} // add this to support hidpi/retina (2x) maps if your provider supports them
        height={height}
        defaultCenter={[lat, lng]}
        defaultZoom={5}
      >
        {unions.map((union) => {
          if (union.latitude && union.longitude) {
            const coords = [parseFloat(union.latitude.$numberDecimal), parseFloat(union.longitude.$numberDecimal)]
            return (
              <Marker
                key={union.name}
                width={50}
                anchor={coords}
                color={color}
              />
            );
          }
        })}
      </Map >
    </Paper>
  )
}

export default UnionMap;