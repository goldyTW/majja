import React from 'react'
import BacaSelengkapnya from '../BacaSelengkapnya'

function CardLayanan({text, title}) {
  return (
    <div className='cardLayanan p-3'>
        <div className='row justify-content-center'>
            <div className='col-2 align-self-center'>
                <img src='/images/layananimg.png' width="100%"></img>
            </div>
            <div className='cardLayananTitle col-10 align-self-center py-2'>
                {title}
            </div>
        </div>
        <div className='cardLayananArticle py-2'>
            {text}
        </div>
        <BacaSelengkapnya></BacaSelengkapnya>
    </div>
  )
}

export default CardLayanan