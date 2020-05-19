import React from 'react'
import { IAllowedGearbox, ICarOption, IPossibleEngine } from '../../model/carOptionInterface'
import { useDispatch, useSelector } from 'react-redux'
import { IState } from '../../model/stateInterface'
import { setCarGearbox } from '../../store/actions/carOptionActions'
import { useTranslation } from 'react-i18next'

const GearboxSelect = () => {
  const selectedCar: ICarOption = useSelector((state: IState) => state.carOptionState)
  const dispatch = useDispatch()

  const { t } = useTranslation()

  const onGearboxSelect = (gearbox: IAllowedGearbox) => {
    dispatch(setCarGearbox(gearbox))
  }

  return selectedCar ? (
    <div className='car-configuration__section' data-testid='gearboxSelect'>
      <span className='car-configuration__section-name'>{t('gearbox')}</span>
      <ul className='car-configuration__section-list'>
        {selectedCar.possibleEngines.find((engine: IPossibleEngine) => engine.isSelected).allowedGearbox.map((gearbox: IAllowedGearbox) => {
          return (
            <li
              key={gearbox._id.toString()}
              onClick={() => { onGearboxSelect(gearbox) }}
              onKeyDown={(event) => {
                if (event.keyCode === 13) {
                  onGearboxSelect(gearbox)
                }
              }}
              tabIndex={1}
              className={`car-configuration__section-item${gearbox.isSelected ? ' car-configuration__section-item--selected' : ''}`}
            >
              {gearbox.name}
            </li>
          )
        }
        )}
      </ul>
    </div>
  ) : null
}

export default GearboxSelect
