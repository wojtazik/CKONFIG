import React from 'react'
import './Summary.scss'
import SummaryImage from '../SummaryImage/SummaryImage'
import SummaryData from '../SummaryData/SummaryData'
import { useTranslation } from 'react-i18next'

const CarSummary = () => {
  const { t } = useTranslation()

  return (
    <div className='summary'>
      <span className='summary__title'>{t('summary.text')}</span>
      <SummaryImage />
      <SummaryData />
    </div>
  )
}

export default CarSummary
