import each from 'jest-each'
import parseNameToUrlPart from '../../../src/helper/parseNameToUrlPart'

describe('should replace spaces in string to _', () => {
  each([
    {
      testInput: 'some input',
      expectedOutput: 'some_input'
    },
    {
      testInput: '_',
      expectedOutput: '_'
    },
    {
      testInput: ' ',
      expectedOutput: ''
    },
    {
      testInput: 'some test with spaces at the end ',
      expectedOutput: 'some_test_with_spaces_at_the_end'
    }
  ]).test('should return proper string', (testData: any) => {
    expect(parseNameToUrlPart(testData.testInput)).toEqual(testData.expectedOutput)
  })
})
