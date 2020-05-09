const getPossibleCarsOptions = async (req, res, next) => {
  try {
    res.json({
      carName: 'Cupra AWD',
      price: 899,
      possibleEngines: [
        {
          displacementCC: 1996,
          price: 189,
          manualPrice: 0,
          automaticPrice: 29,
          marketingName: '2.0 Turbo',
          allowedGearbox: [
            'manual',
            'automatic'
          ]
        },
        {
          displacementCC: 2491,
          price: 244,
          marketingName: '2.5 WRX',
          manualPrice: 0,
          automaticPrice: 32,
          allowedGearbox: [
            'manual',
            'automatic'
          ]
        },
        {
          displacementCC: 3762,
          price: 321,
          marketingName: '3.8 GT',
          manualPrice: null,
          automaticPrice: 0,
          allowedGearbox: [
            'automatic'
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
          colorCode: 'green',
          price: 20,
          isDefault: false
        },
        {
          colorCode: 'yellow',
          price: 25,
          isDefault: false
        },
        {
          colorCode: 'black',
          price: 39,
          isDefault: false
        }
      ]
    })
  } catch (err) {
    res.status(500).send(new Error('Something goes wrong'))
    return next()
  }
}

export { getPossibleCarsOptions }
