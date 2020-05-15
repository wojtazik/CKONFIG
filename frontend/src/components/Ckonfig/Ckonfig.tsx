import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IPossibleCar } from '../../model/possibleCarInterface'
import { IState } from '../../model/stateInterface'
import { getPossibleCarsData } from '../../store/actions/possibleCarsActions'
import { IAllowedGearbox, ICarColor, ICarOption, IPossibleEngine } from '../../model/carOptionInterface'
import { getSelectedCar } from '../../store/actions/selectedCarActions'
import { setCarColor, setCarEngine, setCarGearbox } from '../../store/actions/carOptionActions'

const Ckonfig = () => {
  const dispatch = useDispatch()
  const possibleCars: IPossibleCar[] = useSelector((state: IState) => state.possibleCarsState)
  const selectedCar: ICarOption = useSelector((state: IState) => state.carOptionState)
  const [colorInputState, setColorInputState] = useState(null)

  useEffect(() => {
    dispatch(getPossibleCarsData())
  }, [])

  const onCarSelect = (name: string) => {
    dispatch(getSelectedCar(name))
  }

  const onEngineSelect = (engine: IPossibleEngine) => {
    dispatch(setCarEngine(engine))
  }

  const onGearboxSelect = (gearbox: IAllowedGearbox) => {
    dispatch(setCarGearbox(gearbox))
  }

  const onColorSelect = (color: ICarColor) => {
    dispatch(setCarColor(color))
  }

  return (
    <div>
      {possibleCars.length && possibleCars.map((car) => {
        return (
          <div key={car._id.toString()} onClick={() => { onCarSelect(car.name) }}>{car.name} {selectedCar && selectedCar.carName === car.name ? 'selected' : ''}</div>
        )
      }
      )}
      {selectedCar &&
        <div style={{ margin: '100px', background: 'rgba(100,100,200, .6)' }}>
          <p>{selectedCar.carName}</p>
          <div>
            Price: {selectedCar.price}
            <div>
              ENGINES:
            </div>
            <ul style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', listStyle: 'none' }}>
              {selectedCar.possibleEngines.map((engine: IPossibleEngine) => (
                <li key={engine._id}>
                  <span onClick={() => { onEngineSelect(engine) }}>{engine.displacementCC}cm3 {engine.horsePower}HP {engine.isSelected ? 'SELECTED' : ''}</span>
                </li>
              ))}
            </ul>
            <div>
              GEARBOXES:
            </div>
            <ul style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', listStyle: 'none' }}>
              {selectedCar.possibleEngines.find((engine: IPossibleEngine) => engine.isSelected).allowedGearbox.map((gearbox: IAllowedGearbox) => (
                <li key={gearbox._id}>
                  <span onClick={() => { onGearboxSelect(gearbox) }}>{gearbox.name} {gearbox.isSelected ? 'SELECTED' : ''}</span>
                </li>
              ))}
            </ul>
            <div>
              COLORS:
              <ul style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', listStyle: 'none' }}>
                {selectedCar.colors.map((color: ICarColor) => (
                  <li key={color._id}>
                    <span
                      style={{ height: '20px', width: '20px', background: color.colorCode }}
                      onClick={() => { onColorSelect(color) }}
                    >
                      {color.colorCode} {color.isSelected ? 'SELECTED' : ''}
                    </span>
                  </li>
                ))}
              </ul>
              <form>
                <input type='text' placeholder='newColor(rgba, rgb, hex, code)' value={colorInputState} onChange={(event => setColorInputState(event.target.value))} />
                <button onClick={(event) => {
                  event.preventDefault()
                  onColorSelect({
                    colorCode: colorInputState,
                    price: selectedCar.customColorPrice
                  })
                }}
                >add color
                </button>
              </form>
            </div>
          </div>
        </div>}
    </div>
  )
}

export default Ckonfig
