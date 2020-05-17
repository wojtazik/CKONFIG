import { IAllowedGearbox, ICarColor, ICarOption, IPossibleEngine } from '../model/carOptionInterface'

export default (carOption: ICarOption) => {
  const selectedEngine = carOption.possibleEngines.find((engine: IPossibleEngine) => engine.isSelected)
  const selectedGearbox = selectedEngine.allowedGearbox.find((gearbox: IAllowedGearbox) => gearbox.isSelected)
  const selectedColor = carOption.colors.find((color: ICarColor) => color.isSelected)

  return carOption.price + selectedEngine.price + selectedGearbox.price + selectedColor.price
}
