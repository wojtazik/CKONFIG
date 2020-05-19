import React from 'react'
import ModelSelect from '../ModelSelect/ModelSelect'
import EngineSelect from '../EngineSelect/EngineSelect'
import GearboxSelect from '../GearboxSelect/GearboxSelect'
import ColorSelect from '../ColorSelect/ColorSelect'
import appConfig from '../../config/config'
import './CarConfiguration.scss'
import ChangeLanguage from '../ChangeLanguage/ChangeLanguage'

const CarConfiguration = () => {
  return (
    <div className='car-configuration' data-testid='carConfiguration'>
      <span className='car-configuration__name'>{appConfig.appName} {appConfig.appVersion}</span>
      <ChangeLanguage />
      <ModelSelect />
      <EngineSelect />
      <GearboxSelect />
      <ColorSelect />
    </div>
  )
}

export default CarConfiguration
