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

  const { width, height, lat, lng } = props;

  return (
    <Paper sx={{ width: width }}>
      <Map
        provider={mapTiler}
        dprs={[1, 2]} // add this to support hidpi/retina (2x) maps if your provider supports them
        height={height}
        defaultCenter={[lat, lng]}
        defaultZoom={11}
      />
    </Paper>
  )
}

export default UnionMap;