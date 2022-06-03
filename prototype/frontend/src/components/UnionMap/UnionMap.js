import React from 'react'
import { Map, Marker, Overlay, ZoomControl } from "pigeon-maps"
import {
  Paper,
  Popover,
  Typography,
  Card,
  Snackbar

} from '@mui/material'

const MAPTILER_ACCESS_TOKEN = 'RLexnCa0O1fFakYpXl7z'
const MAP_ID = 'toner'

function mapTiler(x, y, z, dpr) {
  return `https://api.maptiler.com/maps/${MAP_ID}/256/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.png?key=${MAPTILER_ACCESS_TOKEN}`
}

function UnionMap(props) {
  const { width, height, unions, } = props;


  const [focus, setFocus] = React.useState([39.8283, -98.5795]);
  const [zoom, setZoom] = React.useState(5);
  const [anchor, setAnchor] = React.useState([39.8283, -98.5795]);
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = React.useState("");


  const handleOpen = (args) => {
    setOpen(true);
    setContent(args.payload.name);
    setAnchor(args.anchor)

  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  // const handleMarkerMouseOver = (args) => {
  // }


  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setFocus([position.coords.latitude, position.coords.longitude]);
    })
  }, [])

  return (
    <Paper sx={{ width: width }}>
      <Map
        provider={mapTiler}
        dprs={[1, 2]} // add this to support hidpi/retina (2x) maps if your provider supports them
        height={height}
        center={focus}
        zoom={zoom}
      >
        <ZoomControl />
        {unions.map((union) => {
          const coords = [parseFloat(union.latitude.$numberDecimal), parseFloat(union.longitude.$numberDecimal)]
          return (
            <Marker
              key={union.name}
              width={50}
              payload={union}
              anchor={coords}
              color={'#1976d2'}
              onMouseOver={handleOpen}
            />
          );
        })}
        <Overlay anchor={anchor} offset={[0, 0]}>
          <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
            message={content}
          >
          </Snackbar>
        </Overlay>
        <Marker
          width={50}
          anchor={focus}
          color={'red'}
        />
      </Map >
    </Paper>
  )
}

export default UnionMap;