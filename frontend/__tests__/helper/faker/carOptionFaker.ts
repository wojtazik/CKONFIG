import { IAllowedGearbox, ICarColor, ICarOption, IPossibleEngine } from '../../../src/model/carOptionInterface'

const fakeGearbox: IAllowedGearbox = {
  _id: '1a2s3d4faaasd',
  name: 'manual',
  isSelected: true,
  price: 0
}

const fakeColor: ICarColor = {
  _id: '125498124ada',
  colorCode: 'blue',
  isSelected: true,
  price: 78
}

const fakeEngine: IPossibleEngine = {
  _id: '1a2s3d4ffsd',
  horsePower: 150,
  displacementCC: 1999,
  isSelected: true,
  price: 678,
  allowedGearbox: [
    {
      _id: '1a2s3d4faaasd',
      name: 'manual',
      isSelected: true,
      price: 0
    },
    {
      _id: '1a2s3d4fsfdsg',
      name: 'automatic',
      isSelected: false,
      price: 100
    }
  ]
}

const defaults: ICarOption = {
  _id: '1a2s3d4f',
  carName: 'TOYOTA X',
  price: 9385,
  customColorPrice: 100,
  possibleEngines: [
    {
      _id: '1a2s3d4ffsd',
      horsePower: 150,
      displacementCC: 1999,
      isSelected: true,
      price: 678,
      allowedGearbox: [
        {
          _id: '1a2s3d4faaasd',
          name: 'manual',
          isSelected: true,
          price: 0
        },
        {
          _id: '1a2s3d4fsfdsg',
          name: 'automatic',
          isSelected: false,
          price: 100
        }
      ]
    },
    {
      _id: '1a2s3d4fa',
      horsePower: 200,
      displacementCC: 2499,
      isSelected: true,
      price: 678,
      allowedGearbox: [
        {
          _id: '1a2s3d4fsdfb',
          name: 'automatic',
          isSelected: true,
          price: 0
        }
      ]
    }
  ],
  colors: [
    {
      _id: '125498124ada',
      colorCode: 'blue',
      isSelected: true,
      price: 78
    },
    {
      _id: 'ad23c12ccv1',
      colorCode: 'red',
      isSelected: false,
      price: 111
    }
  ]
}

export { fakeColor, fakeEngine, fakeGearbox }

export default (carOptionData?: any): ICarOption => {
  return { ...defaults, ...carOptionData }
}
