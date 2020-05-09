import express from 'express'
import bodyParser from 'body-parser'
import carConfigRoutes from './src/routes/carConfigRoutes'

const app = express()

app.use(bodyParser.json())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')

  next()
})

app.use('/api/car-config', carConfigRoutes)

app.use((req, res, next) => {
  const error = new Error('Couldn\'t find this route')
  res.status(404).send(error)
  return next()
})

app.listen(process.env.PORT || 9000)
