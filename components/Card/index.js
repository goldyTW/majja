import React from 'react'

function Card({title, text}) {
  return (
    <div className='card'>
        <h3 className='cardTitle'>{title}</h3>
        <div className='col-lg-7'>
        <img className='my-2' src='/images/star.png' width="50%"></img>
        </div>
        <p>{text}</p>
    </div>
  )
}

export default Card