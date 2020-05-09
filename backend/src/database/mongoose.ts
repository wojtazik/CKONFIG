import mongoose from 'mongoose'
import CarOption from '../models/CarOption'
import { response } from 'express'

mongoose.connect('mongodb+srv://USER_ID:USER_PASSWORD@carsoptions-uedal.mongodb.net/DB_NAME?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('connected to the db')
}).catch(() => {
  console.error('Connection to the fb failed')
})

const createCarOption = async (req, res, next) => {
  const createdCarOption = new CarOption({
    carName: 'PRO RS3',
    price: 12420,
    possibleEngines: [
      {
        displacementCC: 5187,
        price: 692,
        horsepPower: 532,
        isDefault: true,
        allowedGearbox: [
          {
            name: 'automatic',
            price: 0
          }
        ]
      },
      {
        displacementCC: 4212,
        price: 466,
        horsepPower: 443,
        isDefault: false,
        allowedGearbox: [
          {
            name: 'automatic',
            price: 120
          },
          {
            name: 'manual',
            price: 0
          }
        ]
      },
      {
        displacementCC: 3589,
        price: 422,
        horsepPower: 374,
        isDefault: false,
        allowedGearbox: [
          {
            name: 'automatic',
            price: 100
          },
          {
            name: 'manual',
            price: 0
          }
        ]
      },
      {
        displacementCC: 1998,
        price: 0,
        horsepPower: 166,
        isDefault: false,
        allowedGearbox: [
          {
            name: 'manual',
            price: 0
          }
        ]
      }
    ],
    colors: [
      {
        colorCode: 'red',
        price: 0,
        isDefault: true
      },
      {
        colorCode: 'gray',
        price: 44,
        isDefault: false
      },
      {
        colorCode: 'orange',
        price: 52,
        isDefault: false
      },
      {
        colorCode: 'black',
        price: 71,
        isDefault: false
      }
    ]
  })

  try {
    const result = await createdCarOption.save()
    response.json(result)
  } catch (e) {
    response.status(500).send('something goes wrong on savind data to db')
    next()
  }
}

export { createCarOption }
