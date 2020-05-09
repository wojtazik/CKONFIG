import React from 'react'
import ReactDOM from 'react-dom'
import Ckonfig from './components/Ckonfig/Ckonfig'

if(document.getElementById('ckonfig-root')) {
  ReactDOM.render(
    <Ckonfig />,
    document.getElementById('ckonfig-root')
  )
}
