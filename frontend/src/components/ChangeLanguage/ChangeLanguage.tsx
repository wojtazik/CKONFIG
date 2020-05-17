import React from 'react'
import config from '../../config/config'
import './ChangeLanguage.scss'
import { useTranslation } from 'react-i18next'

const ChangeLanguage = () => {
  const { i18n } = useTranslation()

  return (
    <div className='change-language'>
      {config.languages.map((lang: string) => (
        <div
          className={`change-language__item ${i18n.language === lang ? 'change-language__item--selected' : ''}`}
          key={lang}
          onClick={() => { i18n.changeLanguage(lang) }}
        >{lang.toUpperCase()}
        </div>
      ))}
    </div>
  )
}

export default ChangeLanguage
