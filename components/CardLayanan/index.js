import React from 'react'
import BacaSelengkapnya from '../BacaSelengkapnya'

function CardLayanan({text, title}) {
  return (
    <div className='cardLayanan p-3'>
        <div className='row justify-content-center'>
            <div className='col-2'>
                <img src='/images/layananimg.png' width="100%"></img>
            </div>
            <div className='col-10'>
                <p className='cardLayananTitle align-self-center'>{title}</p>
            </div>
        </div>
        <p className='article'>
            {text}
        </p>
        <BacaSelengkapnya></BacaSelengkapnya>
    </div>
  )
}

export default CardLayanan