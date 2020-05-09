const express = require('express');
const bodyParser = require('body-parser');
const carConfigRoutes = require('./routes/carConfigRoutes')

const app = express();

app.use(bodyParser.json())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
})

app.use('/api/car-config', carConfigRoutes)

app.use((req, res, next) => {
  const error = new HttpError('Couldn\'t find this route', 404)
  throw error
})

app.listen(9000)
