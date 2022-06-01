const express = require('express')
const app = express()
const port = 4000
const myFunctions = require('./user-services.js')
const unionFunc = require('./union-services.js')
const comFunc = require('./comment-services.js')
const axios = require('axios')

const cors = require('cors')
const e = require('express')

app.use(cors())
app.use(express.json())

app.get('/map', async (req, res) => {
  const street = req.query.street
  const city = req.query.city
  const state = req.query.state
  const zip = req.query.zip
  await axios
    .get(`https://geocoding.geo.census.gov/geocoder/locations/address?street=${street}&city=${city}&state=${state}&zip=${zip}&benchmark=Public_AR_Census2020&format=json`)
    .then(resp => {
      let geocode = resp.data;
      console.log('geocode info: ', geocode);
      res.send(geocode);
   })
    .catch((error) => console.log(error))
});

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/users', async (req, res) => {

    const name = req.query['name'];
    const job = req.query['job'];
    const sub = req.query['sub'];
    try{
        result = await myFunctions.getUsers(name,job,sub);
        res.send(result);
    } catch(error){
        console.log(error);
        res.status(500).send('An error ocurred in the server.');
    }
});


app.get('/unions', async (req, res) => {
  const name = req.query['name'];
  const postalCode = req.query['postalCode'];
  //console.log(name,postalCode);
  try {
    result = await unionFunc.getUnions(name, postalCode);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error ocurred in the server.');
  }
});

app.get('/states', async (req, res) => {
  try {
    result = await unionFunc.getStates();
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error ocurred in the server.');
  }
});

app.get('/comments', async (req, res) => {
  const user = req.query.user
  const union = req.query.union
  try {
    result = await comFunc.getComments(user, union)
    res.send(result)
  } catch (error) {
    console.log(error)
    res.status(500).send('An error ocurred in the server.')
  }
})

app.get('/users/:id', async (req, res) => {
  const id = req.params.id // or req.params.id

  try {
    let result = await myFunctions.findUserById(id)
    if (result === undefined || result.length == 0) { res.status(404).send('Resource not found.') } else {
      result = { users_list: result }
      res.send(result)
    }
  } catch (error) {
    console.log(error)
    res.status(500).send('An error ocurred in the server.')
  }
})

app.post('/users', async (req, res) => {
  const userToAdd = req.body
  const savedUser = await myFunctions.addUser(userToAdd)
  if (savedUser) { res.status(201).send(savedUser).end() } else { res.status(500).end() }
})

app.post('/unions', async (req, res) => {
  const unionToAdd = req.body
  let geocode;
  await axios
    .get(`https://geocoding.geo.census.gov/geocoder/locations/address?street=${unionToAdd.address.streetAddress}&city=${unionToAdd.address.addressLocality}&state=${unionToAdd.address.addressRegion}&zip=${unionToAdd.address.postalCode}&benchmark=Public_AR_Census2020&format=json`)
    .then(resp => {
      geocode = resp.data;
      console.log(geocode);
      
      
   })
    .catch((error) => console.log(error))
  console.log(geocode);
  unionToAdd.longitude = geocode.result.addressMatches[0].coordinates.x;
  unionToAdd.latitude = geocode.result.addressMatches[0].coordinates.y;
  const savedUnion = await unionFunc.addUnion(unionToAdd)
  if (savedUnion) { res.status(201).send(savedUnion).end() } else { res.status(500).end() }
})

app.post('/comments', async (req, res) => {
  const commentToAdd = req.body
  const savedComment = await comFunc.addComment(commentToAdd)
  if (savedComment) { res.status(201).send(savedComment).end() } else { res.status(500).end() }
})

app.delete('/users/:id', async (req, res) => {
  const id = req.params.id
  if (myFunctions.findUserById(id) == {}) {
    res.status(404).send('Resource not found.')
  } else {
    try {
      const userDelete = await myFunctions.deleteUserById(id)
      if (userDelete) {
        res.status(204).end()
      } else { res.status(500).end() }
    } catch (error) {
      console.log(error)
      res.status(500).send('An error ocurred in the server.')
    }
  }
})

app.delete('/unions/:id', async (req, res) => {
  const id = req.params.id
  if (unionFunc.findUnionById(id) == {}) {
    res.status(404).send('Resource not found.')
  } else {
    try {
      const unionDelete = await unionFunc.deleteUnionById(id)
      if (unionDelete) {
        res.status(204).end()
      } else { res.status(500).end() }
    } catch (error) {
      console.log(error)
      res.status(500).send('An error ocurred in the server.')
    }
  }
})

app.delete('/comments/:id', async (req, res) => {
  const id = req.params.id
  if (comFunc.findCommentById(id) == {}) {
    res.status(404).send('Resource not found.')
  } else {
    try {
      const commentDelete = await comFunc.deleteCommentById(id)
      if (commentDelete) {
        res.status(204).end()
      } else { res.status(500).end() }
    } catch (error) {
      console.log(error)
      res.status(500).send('An error ocurred in the server.')
    }
  }
})

app.patch('/users', async (req, res) => {
  const id = req.body.id
  const name = req.body.name
  const location = req.body.location
  const occupation = req.body.occupation
  if (myFunctions.findUserById(id) == {}) {
    res.status(404).send('Resource not found.')
  } else {
    try {
      const userUpdate = await myFunctions.updateUserById(id, name, location, occupation)
      if (userUpdate) {
        res.status(200).send(userUpdate).end()
      } else { res.status(500).end() }
    } catch (error) {
      console.log(error)
      res.status(500).send('An error ocurred in the server.')
    }
  }
})

app.patch('/unions', async (req, res) => {
  const id = req.body.id
  const name = req.body.name
  const address = req.body.address
  const description = req.body.description
  const member_count = req.body.member_count
  const industry = req.body.industry
  const year_founded = req.body.year_founded
  const website = req.body.website
  const longitude = req.body.longitude
  const latitude =  req.body.latitude
  if (unionFunc.findUnionById(id) == {}) {
    res.status(404).send('Resource not found.')
  } else {
    try {
      const unionUpdate = await unionFunc.updateUnionById(id, name, address, description, member_count, industry, year_founded, website,longitude,latitude)
      if (unionUpdate) {
        res.status(200).send(unionUpdate).end()
      } else { res.status(500).end() }
    } catch (error) {
      console.log(error)
      res.status(500).send('An error ocurred in the server.')
    }
  }
})

app.patch('/comments', async (req, res) => {
  const id = req.body.id
  const comment = req.body.comment
  const rating = req.body.rating
  if (comFunc.findCommentById(id) == {}) {
    res.status(404).send('Resource not found.')
  } else {
    try {
      const commentUpdate = await comFunc.updateCommentById(id, comment, rating)
      if (commentUpdate) {
        res.status(200).send(commentUpdate).end()
      } else { res.status(500).end() }
    } catch (error) {
      console.log(error)
      res.status(500).send('An error ocurred in the server.')
    }
  }
})

/* app.delete('/users', async (req,res) => {
    const id = req.query['id'];
    if(myFunctions.findUserById(id)=={}){
        res.status(404).send('Resource not found.');
    }else{
        try{
            const userDelete = await myFunctions.deleteUserById(id);
            if(userDelete){
                res.status(204).end();
            }
            else
                res.status(500).end();

        }catch(error){
            console.log(error);
            res.status(500).send('An error ocurred in the server.');
        }

    }

}); */

app.listen(process.env.PORT || port, () => {
  console.log("REST API is listening.");
});
