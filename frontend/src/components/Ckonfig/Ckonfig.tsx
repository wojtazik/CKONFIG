import React, { useEffect } from 'react'

const Ckonfig = () => {
  useEffect(() => {
    fetch('http://localhost:9000/api/car-config')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
      })
  }, [])

  return (
    <div>A</div>
  )
}

export default Ckonfig
