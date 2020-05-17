import { RGBColor } from 'react-color'

export default (color: RGBColor) => {
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
}
