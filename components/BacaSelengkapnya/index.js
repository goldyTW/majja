import React from 'react'
import { Icon } from '@iconify/react';
import Link from 'next/link';

function BacaSelengkapnya({text, link}) {
  return (
    <Link href={link ? link : '/'} style={{textDecoration:'none'}}>
    <div className='row justify-content-center bacaSelengkapnya'>
        <div className='col-10' style={{ cursor: "pointer" }}>
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
    </Link>
  )
}

export default BacaSelengkapnya