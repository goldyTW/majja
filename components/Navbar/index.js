/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-html-link-for-pages */
import { Icon } from '@iconify/react'
import Link from 'next/link';
import React, { useState } from 'react'
import { useRouter } from 'next/router'

function Navbar() {
  const [lang, setlang] = useState('EN');
  const [open, setopen] = useState(false);
  const [active, setactive] = useState(false);
  const router = useRouter()

  const handleClick = (param) => {
    setlang(param)
    if(param == 'EN'){
      router.push('/en','/en', {locale:'en'})
    }
    else{
      router.push('/id', '/id', {locale:'id'})
    }
  }
  
  return (
    <nav className={`navbar ${open ? 'open' : ''} navbar-expand-lg navbar-light`}>
      <div className='container py-3'>
        <Link href="/">
          <img src="/images/logo.png" alt='petanetra'></img>
        </Link>
        <button className="navbar-toggler" 
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#navbarNav"
         aria-controls="navbarNav"
         aria-expanded="false"
         aria-label="Toggle navigation"
         onClick={() => setopen(!open)}
         >
          {!open ? <Icon icon="charm:menu-hamburger" /> : <Icon icon="material-symbols:close" />}
          
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto my-2 my-lg-0">
            <li className={`nav-item ${active ? 'active':''} my-auto mx-1`}>
              <a className='nav-link' aria-current="page" href="#about" rel='noreferrer'>
              {/* {i18n.t('about')} */}satu
              </a>
            </li>
            <li className={`nav-item ${active ? 'active':''} my-auto mx-1`}>
              <a className='nav-link' aria-current="page" href="#features" rel='noreferrer'>
              {/* {i18n.t('features')} */}dua
              </a>
            </li>
            <li className={`nav-item ${active ? 'active':''} my-auto mx-1`}>
              <a className='nav-link' aria-current="page" href="/" rel='noreferrer'>
              {/* {i18n.t('partner')} */}tiga
              </a>
            </li>
            <li className={`nav-item ${active ? 'active':''} my-auto mx-1`}>
              <a className='nav-link' aria-current="page" href="/" rel='noreferrer'>
              {/* {i18n.t('article')} */}empat
              </a>
            </li>
            <a href="https://apps.apple.com/id/app/petanetra-navigasi-tunanetra/id1583207456">
              {/* <button className="btn-try">{i18n.t('coba_petanetra')}</button> */}
            </a>
            
            <li className="dropdown m-lg-0 m-2">
            <button className="btn-lang">{lang}<Icon icon="tabler:chevron-down"/></button>
                <div className="dropdown-content">
                  {
                    lang == 'ID' ?
                    <a onClick={() => handleClick('EN')}>EN</a> 
                    : 
                    <a onClick={() => handleClick('ID')}>ID</a>
                  }
                </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
