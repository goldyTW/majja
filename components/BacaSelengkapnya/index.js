import React from 'react'
import { Icon } from '@iconify/react';

function BacaSelengkapnya({text}) {
  return (
    <div className='row justify-content-center bacaSelengkapnya'>
        <div className='col-10'>
            {text ? text : 'Baca Selengkapnya'}
        </div>
        <div className='col-2 text-end'>
        <Icon
            icon="ci:chevron-right"
            className="text-right"
            style={{ cursor: "pointer", fontSize: "18px" }}
        />
        </div>
    </div>
  )
}

export default BacaSelengkapnya