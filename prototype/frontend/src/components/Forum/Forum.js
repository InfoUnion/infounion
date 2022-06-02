// import React from 'react'
// import axios from 'axios'
// import unions from '../../assets/data/unions'

// import { Container } from '@mui/material'
// import SelectInput from '@mui/material/Select/SelectInput'

// import { withAuth0 } from '@auth0/auth0-react'

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

//   async function getOne(name) {
//     try {
//       const response = await axios.get(`http://localhost:4000/unions?name=${name}`)
//       return response
//     } catch (error) {
//       // We're not handling errors. Just logging into the console.
//       console.log(error)
//       return false
//     }
//   }

//   function sleep(milliseconds) {
//     var start = new Date().getTime();
//     for (var i = 0; i < 1e7; i++) {
//       if ((new Date().getTime() - start) > milliseconds) {
//         break;
//       }
//     }
//   }

//   React.useEffect(() => {
//     const missing = [{
//       "address": { "addressLocality": "St Louis", "addressRegion": "MO", "streetAddress": "PO Box 2223", "postalCode": "63139" },

//       "name": "National Electrical Contractors Association St Louis (NECA)",
//       "description": "NECA administers substance abuse education, drug tests, and record keeping for union workforce on a pooled basis and documents the results for employers and customers.", "comment_id": [], "__v": 0
//     },
//     { 
//       "address": { "addressLocality": "Trenton", "addressRegion": "NJ", "streetAddress": "180 W State Street PO Box 1211", "postalCode": "08607" },
      
//       "name": "New Jersey Education Association (NJEA)",
//       "description": "To advance and protect the rights,  benefits, and interests of members, and promote a quality system of public education for all  students.", "comment_id": [], "__v": 0
//     },
//     {
//       "address": { "addressLocality": "Indianapolis", "addressRegion": "IN", "streetAddress": "150 W Market St No 900 Suite 900", "postalCode": "46204" },
      
//       "name": "Indiana State Teachers Association (ISTA)",
//       "description": "The mission of the Indiana State Teachers Association is to provide the resources necessary to enable local affiliates to effectively advocate for members, children, and for public education.", "comment_id": [], "__v": 0
//     },
//     {
//       "address": { "addressLocality": "Honolulu", "addressRegion": "HI", "streetAddress": "3375 KOAPAKA STREET Suite B217", "postalCode": "96819" },
      
//       "name": "Hawaii Nurses Association Office and Professional Employees International Union Local 50",
//       "description": "From its founding in 1917 to the present, the Hawai'i Nurses' Association has served as the organization for nursing in Hawai'i and continually strives to preserve the identity, integrity, and continuity of the profession.", "comment_id": [], "__v": 0
//     },
//     {
//       "address": { "addressLocality": "Roseville", "addressRegion": "MN", "streetAddress": "2277 Hwy 36 West No 301", "postalCode": "55113" },
      
//       "name": "Office and Professional Employees International Union Local 12",
//       "description": "To organize all workers for the economic, moral and social advancement of their condition and status. Labor Union.", "comment_id": [], "__v": 0
//     },
//     {
//       "address": { "addressLocality": "Shoreview", "addressRegion": "MN", "streetAddress": "529 W County Road E", "postalCode": "55126" },
      
//       "name": "United Association of Journeymen and Apprentices Local 417",
//       "description": "To organize all workers for the economic, moral and social advancement of their condition and status. Labor union.", "comment_id": [], "__v": 0
//     }]
//     postOne(
//       missing[6]
//     );
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
