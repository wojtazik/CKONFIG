import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPossibleCarsData } from '../../store/actions/possibleCarsActions'
import CarConfiguration from '../CarConfiguration/CarConfiguration'
import CarSummary from '../CarSummary/CarSummary'
import './Ckonfig.scss'
import { IState } from '../../model/stateInterface'
import ErrorPopup from '../ErrorPopup/ErrorPopup'

const Ckonfig = () => {
  const dispatch = useDispatch()

  const isError = useSelector((state: IState) => state.errorState)

  useEffect(() => {
    dispatch(getPossibleCarsData())
  }, [])

  return (
    <div className='ckonfig'>
      {isError ? <ErrorPopup /> : (
        <div className='ckonfig__wrapper container no-padding'>
          <div className='row no-padding ckonfig__row-wrapper no-margin'>
            <div className='col-12 col-lg-8 no-padding no-margin'>
              <CarConfiguration />
            </div>
            <div className='col-12 col-lg-4 no-padding no-margin'>
              <CarSummary />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Ckonfig
