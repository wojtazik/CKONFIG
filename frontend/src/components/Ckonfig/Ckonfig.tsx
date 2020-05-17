import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPossibleCarsData } from '../../store/actions/possibleCarsActions'
import CarConfiguration from '../CarConfiguration/CarConfiguration'
import CarSummary from '../CarSummary/CarSummary'
import './Ckonfig.scss'

const Ckonfig = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPossibleCarsData())
  }, [])

  return (
    <div className='ckonfig'>
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
    </div>
  )
}

export default Ckonfig
