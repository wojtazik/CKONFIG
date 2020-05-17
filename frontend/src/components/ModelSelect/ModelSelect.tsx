import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IState } from '../../model/stateInterface'
import { getSelectedCar } from '../../store/actions/selectedCarActions'
import { ICarOption } from '../../model/carOptionInterface'
import { useTranslation } from 'react-i18next'

const ModelSelect = () => {
  const possibleCars = useSelector((state: IState) => state.possibleCarsState)
  const selectedCar: ICarOption = useSelector((state: IState) => state.carOptionState)
  const dispatch = useDispatch()

  const { t } = useTranslation()

  const onCarSelect = (name: string) => {
    dispatch(getSelectedCar(name))
  }

  return (
    <div className='car-configuration__section'>
      <span className='car-configuration__section-name'>{t('model')}</span>
      <ul className='car-configuration__section-list'>
        {possibleCars.length && possibleCars.map((car) => {
          return (
            <li
              key={car._id.toString()}
              onClick={() => { onCarSelect(car.name) }}
              onKeyDown={(event) => {
                if (event.keyCode === 13) {
                  onCarSelect(car.name)
                }
              }}
              tabIndex={1}
              className={`car-configuration__section-item${selectedCar && selectedCar.carName === car.name ? ' car-configuration__section-item--selected' : ''}`}
            >
              {car.name}
            </li>
          )
        }
        )}
      </ul>
    </div>
  )
}

export default ModelSelect
