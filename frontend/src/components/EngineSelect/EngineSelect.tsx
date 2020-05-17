import React from 'react'
import { ICarOption, IPossibleEngine } from '../../model/carOptionInterface'
import { useDispatch, useSelector } from 'react-redux'
import { IState } from '../../model/stateInterface'
import { setCarEngine } from '../../store/actions/carOptionActions'
import parseDisplacement from '../../helper/parseDisplacement'
import { useTranslation } from 'react-i18next'

const EngineSelect = () => {
  const selectedCar: ICarOption = useSelector((state: IState) => state.carOptionState)
  const dispatch = useDispatch()

  const { t } = useTranslation()

  const onEngineSelect = (engine: IPossibleEngine) => {
    dispatch(setCarEngine(engine))
  }

  return selectedCar ? (
    <div className='car-configuration__section'>
      <span className='car-configuration__section-name'>{t('engine')}</span>
      <ul className='car-configuration__section-list'>
        {selectedCar.possibleEngines.map((engine: IPossibleEngine) => {
          return (
            <li
              key={engine._id.toString()}
              onClick={() => { onEngineSelect(engine) }}
              onKeyDown={(event) => {
                if (event.keyCode === 13) {
                  onEngineSelect(engine)
                }
              }}
              tabIndex={1}
              className={`car-configuration__section-item${engine.isSelected ? ' car-configuration__section-item--selected' : ''}`}
            >
              {parseDisplacement(engine.displacementCC)}L {engine.horsePower}BHP
            </li>
          )
        }
        )}
      </ul>
    </div>
  ) : null
}

export default EngineSelect
