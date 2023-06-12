import Link from 'next/link'
import React from 'react'

function Button({link, text}) {
  return (
    <Link href={link}>
    <span className='button'>{text}</span>
    </Link>
  )
}

export default Button