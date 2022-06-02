// import React from 'react'
// import axios from 'axios'
// import unions from '../../assets/data/unions'

// import { Container } from '@mui/material'
// import SelectInput from '@mui/material/Select/SelectInput'

// function Forum() {

//   async function postOne(union) {
//     try {
//       const response = await axios.post('http://localhost:4000/unions', union)
//       return response
//     } catch (error) {
//       // We're not handling errors. Just logging into the console.
//       console.log(error)
//       return false
//     }
//   }


//   React.useEffect(() => {
//     unions.forEach(
//       union => {
//         union._id = 0
//         postOne(union)
//         console.log(union)
//       }
//     )
//   }, []);


//   return (
//     <Container maxWidth='xl'>
//       <div className='wrapper'>
//         <h1>Forum</h1>
//       </div>
//     </Container>
//   )
// }

// export default Forum
