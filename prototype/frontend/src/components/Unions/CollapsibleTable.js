import * as React from 'react'
import axios from 'axios'
// import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableContainer,
  TablePagination,
  Paper
} from '@mui/material'

import CollapsibleRow from './CollapsibleRow'
import CollapsibleTableHead from './CollapsibleTableHead'
// import unions from '../../assets/data/unions';

const columns = [
  {
    id: 'name',
    numeric: false,
    label: 'Name',
    minWidth: 170
  },
  {
    id: 'city',
    numeric: false,
    label: 'City',
    minWidth: 100
  },
  {
    id: 'state',
    numeric: false,
    label: 'State',
    minWidth: 170,
    align: 'right'
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'numEmp',
    numeric: true,
    label: 'Num.\u00a0Employees',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US')
  },
  {
    id: 'founded',
    numeric: true,
    label: 'Founded',
    minWidth: 170,
    align: 'right'
    // format: (value) => value.toFixed(2),
  }
]

function createData (name, street, city, state, postal, numEmp, founded, website, phone, description, comments) {
  return { name, street, city, state, postal, numEmp, founded, website, phone, description, comments }
}

function descendingComparator (a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function getComparator (order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort (array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) {
      return order
    }
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}

export default function CollapsibleTable({loc}) {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  async function fetchAll () {
    try {
      const response = await axios.get('http://localhost:4000/unions')
      return response
    } catch (error) {
      // We're not handling errors. Just logging into the console.
      console.log(error)
      return false
    }
  }

  const [unions, setUnions] = React.useState([])

  React.useEffect(() => {
    fetchAll().then(result => {
      if (result) { setUnions(result.data) }
    })
  }, [])

 //console.log(unions.union.addressRegion);


  const rows1 = unions.map((union) => (
    (union.address.addressRegion === 'CA') && createData(
      union.name,
      union.address.streetAddress,
      union.address.addressLocality,
      union.address.addressRegion,
      union.address.postalCode,
      union.numberOfEmployees,
      union.foundingDate,
      union.sameAs,
      union.telephone,
      union.description,
      []) 
    ));

  const rows = rows1.filter(row => (row))
  console.log(loc);
  //console.log(rows);

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label='sticky table'>
          <CollapsibleTableHead
            columns={columns}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => <CollapsibleRow key={row.name} row={row} columns={columns} />)}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}
