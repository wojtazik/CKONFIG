export interface IAllowedGearbox {
  _id: string,
  name: string,
  price: number
  isDefault?: boolean
  isSelected?: boolean
}

export interface ICarColor {
  _id?: string,
  colorCode: string,
  price: number,
  isSelected?: boolean
  isDefault?: boolean
}

export interface IPossibleEngine {
  _id: string,
  displacementCC: number,
  horsePower: number,
  price: number,
  isSelected?: boolean
  isDefault?: boolean
  allowedGearbox: IAllowedGearbox[]
}

export interface ICarOption {
  _id: string,
  carName: string,
  price: number,
  possibleEngines: IPossibleEngine[],
  colors: ICarColor[],
  customColorPrice: number
}
