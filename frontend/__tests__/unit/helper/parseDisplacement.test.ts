import each from 'jest-each'
import parseDisplacement from '../../../src/helper/parseDisplacement'

describe('unit test for function which can parse displacement in cm3 to dm3', () => {
  each([
    {
      testInput: 1234,
      expectedOutput: '1.2'
    },
    {
      testInput: 545,
      expectedOutput: '0.5'
    },
    {
      testInput: 1000,
      expectedOutput: '1.0'
    }
  ]).test('should properly parse displacement', (testData: any) => {
    expect(parseDisplacement(testData.testInput)).toEqual(testData.expectedOutput)
  })
})
