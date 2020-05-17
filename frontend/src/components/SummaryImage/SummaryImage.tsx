import React from 'react'
import './SummaryImage.scss'
import { ICarColor, ICarOption } from '../../model/carOptionInterface'
import { useSelector } from 'react-redux'
import { IState } from '../../model/stateInterface'

const SummaryImage = () => {
  const selectedCar: ICarOption = useSelector((state: IState) => state.carOptionState)

  return selectedCar ? (
    <div
      className='summary-image'
      style={{ background: selectedCar.colors.find((color: ICarColor) => color.isSelected).colorCode === 'white' ? '#373737' : '#FCFCFC' }}
    >
      <i
        className={`summary-image__icon ico-car-${selectedCar.carName.replace(' ', '-')}`}
        style={{ color: selectedCar.colors.find((color: ICarColor) => color.isSelected).colorCode }}
      />
    </div>
  ) : null
}

export default SummaryImage
