import { RGBColor } from 'react-color'
import convertRgbaColorToString from '../../../src/helper/convertRgbaColorToString'

describe('unit test for function which converts rgba color object to string', () => {
  test('should return properly converted object', () => {
    const testObject: RGBColor = {
      r: 120,
      g: 150,
      b: 170,
      a: 0.8
    }
    const expectedOutput = 'rgba(120, 150, 170, 0.8)'

    expect(convertRgbaColorToString(testObject)).toEqual(expectedOutput)
  })
})
