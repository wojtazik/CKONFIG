import each from 'jest-each'
import convertDefaultToSelected from '../../../src/helper/convertDefaultToSelected'

describe('unit test for convert car option defaults to selected function', () => {
  each([
    {
      argument: [
        {
          someData: 'aaa',
          isDefault: true
        },
        {
          someData: 'bbb',
          isDefault: false
        }
      ],
      expectedTestData: [
        {
          someData: 'aaa',
          isSelected: true
        },
        {
          someData: 'bbb',
          isSelected: false
        }
      ]
    },
    {
      argument: {
        objProperty: 'some property',
        isDefault: true
      },
      expectedTestData: {
        objProperty: 'some property',
        isSelected: true
      }
    }
  ]).test('should properly convert default to selected for given item', (testData: any) => {
    expect(convertDefaultToSelected(testData.argument)).toEqual(testData.expectedTestData)
  })
})
