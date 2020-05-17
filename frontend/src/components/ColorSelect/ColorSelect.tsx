import React, { useEffect, useState } from 'react'
import { ICarColor, ICarOption } from '../../model/carOptionInterface'
import { useDispatch, useSelector } from 'react-redux'
import { IState } from '../../model/stateInterface'
import { setCarColor } from '../../store/actions/carOptionActions'
import { ColorResult, HuePicker, RGBColor } from 'react-color'
import convertRgbaColorToString from '../../helper/convertRgbaColorToString'
import { v4 as uuidv4 } from 'uuid'
import { useTranslation } from 'react-i18next'

const ColorSelect = () => {
  const selectedCar: ICarOption = useSelector((state: IState) => state.carOptionState)
  const [showColorCustomization, setShowColorCustomization] = useState<Boolean>(false)
  const [customColor, setCustomColor] = useState<RGBColor>((): RGBColor => ({ r: 0, g: 255, b: 250, a: 1 }))
  const dispatch = useDispatch()

  const { t } = useTranslation()

  const onColorSelect = (color: ICarColor) => {
    dispatch(setCarColor(color))
  }

  const addCustomColor = (color: RGBColor): void => {
    onColorSelect({
      colorCode: convertRgbaColorToString(color),
      price: selectedCar.customColorPrice,
      _id: uuidv4()
    })
  }

  return selectedCar ? (
    <div className='car-configuration__section'>
      <span className='car-configuration__section-name'>{t('configuration.color')}</span>
      <ul className='car-configuration__section-list car-configuration__section-list--colors'>
        {selectedCar.colors.map((color: ICarColor) => {
          return (
            <li
              key={color._id.toString()}
              onClick={() => { onColorSelect(color) }}
              onKeyDown={(event) => {
                if (event.keyCode === 13) {
                  onColorSelect(color)
                }
              }}
              tabIndex={1}
              className={`car-configuration__section-item-color${color.isSelected ? ' car-configuration__section-item-color--selected' : ''}`}
              style={{ background: color.colorCode }}
            />
          )
        }
        )}
      </ul>
      <div className='car-configuration__color-button-wrapper'>
        <button
          className='car-configuration__custom-color-button'
          onClick={() => { setShowColorCustomization(!showColorCustomization) }}
          onKeyPress={(event) => {
            if (event.keyCode === 13) {
              setShowColorCustomization(!showColorCustomization)
            }
          }}
        >
          {t('configuration.customize-color')}
        </button>
        {showColorCustomization &&
          <button
            className='car-configuration__custom-color-button'
            onClick={() => { addCustomColor(customColor) }}
            onKeyPress={(event) => {
              if (event.keyCode === 13) {
                addCustomColor(customColor)
              }
            }}
          >
            {t('configuration.add-color')}
          </button>}
      </div>
      {showColorCustomization &&
        <div className='car-configuration__custom-color-wrapper'>
          <HuePicker color={customColor} onChange={(color: ColorResult) => setCustomColor(color.rgb)} />
        </div>}
    </div>
  ) : null
}

export default ColorSelect
