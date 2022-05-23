import React from 'react';
import { Link, } from "react-router-dom";

// import PropTypes from 'prop-types';
import {
  Box,
  Collapse,
  IconButton,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


export default function CollapsibleRow(props) {
  const { row, columns, } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
        <TableCell
          style={{ minWidth: 10 }}
        >
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {columns.map((column) => {
          const value = row[column.id];
          return (
            <TableCell key={column.id} align={column.numeric ? 'right' : 'left'}>
              {column.format && typeof value === 'number'
                ? column.format(value)
                : column.id === 'name'
                  ?
                    <Typography variant='body2'>
                      <Link to={`${value}`} state={{u : {row}}} >{value}</Link>
                    </Typography>
                  : <Typography variant='body2'>
                    {value}
                  </Typography>
              }
            </TableCell>
          );
        })}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h10" gutterBottom component="div">
                {row.description}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}