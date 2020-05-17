import React from 'react'
import { IAllowedGearbox, ICarOption, IPossibleEngine } from '../../model/carOptionInterface'
import { useSelector } from 'react-redux'
import { IState } from '../../model/stateInterface'
import parseDisplacement from '../../helper/parseDisplacement'
import './SummaryData.scss'
import calculateTotalPrice from '../../helper/calculateTotalPrice'
import { useTranslation } from 'react-i18next'

const SummaryData = () => {
  const selectedCar: ICarOption = useSelector((state: IState) => state.carOptionState)

  const { t } = useTranslation()

  return selectedCar ? (
    <ul className='summary-data'>
      <li className='summary-data__item'>
        <span>{t('model')}</span>
        <span>
          {selectedCar.carName}
        </span>
      </li>
      <li className='summary-data__item'>
        <span>{t('engine')}</span>
        <span>
          {parseDisplacement(selectedCar.possibleEngines.find((engine: IPossibleEngine) => engine.isSelected).displacementCC)} L
          {selectedCar.possibleEngines.find((engine: IPossibleEngine) => engine.isSelected).horsePower} BHP
        </span>
      </li>
      <li className='summary-data__item'>
        <span>{t('gearbox')}</span>
        <span>
          {selectedCar.possibleEngines
            .find((engine: IPossibleEngine) => engine.isSelected).allowedGearbox
            .find((gearbox: IAllowedGearbox) => gearbox.isSelected).name}
        </span>
      </li>
      <li className='summary-data__item summary-data__item--price'>
        <span>{t('price')}</span>
        <span>{calculateTotalPrice(selectedCar)} PLN</span>
      </li>
    </ul>
  ) : null
}

export default SummaryData
