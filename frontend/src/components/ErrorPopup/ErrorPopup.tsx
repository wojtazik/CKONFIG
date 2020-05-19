import React from 'react'
import { useTranslation } from 'react-i18next'
import './ErrorPopup.scss'

const ErrorPopup = () => {
  const { t } = useTranslation()

  return (
    <div className='error-popup'>
      {t('errorMessage')}
    </div>
  )
}

export default ErrorPopup
