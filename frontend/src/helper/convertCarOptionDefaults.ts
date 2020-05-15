import { IAllowedGearbox, ICarOption, IPossibleEngine } from '../model/carOptionInterface'
import convertDefaultToSelected from './convertDefaultToSelected'

export default (carOption: ICarOption) => {
  const convertedCarOption: ICarOption = convertDefaultToSelected(carOption)

  convertedCarOption.possibleEngines = convertedCarOption.possibleEngines.reduce((engines: IPossibleEngine[], currentEngine: IPossibleEngine) => {
    const convertedEngine: IPossibleEngine = convertDefaultToSelected(currentEngine)
    convertedEngine.allowedGearbox = convertedEngine.allowedGearbox.reduce((gearboxes: IAllowedGearbox[], currentGearbox: IAllowedGearbox) => {
      return [...gearboxes, convertDefaultToSelected(currentGearbox)]
    }, [])
    return [...engines, convertedEngine]
  }, [])
  convertedCarOption.colors = convertDefaultToSelected(convertedCarOption.colors)

  return convertedCarOption
}
