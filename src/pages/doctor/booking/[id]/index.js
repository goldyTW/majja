import Head from 'next/head'
import React from 'react'
import Footer from '../../../../../components/footer'
import Navbar from '../../../../../components/Navbar';
import { Select, Input } from 'antd';
import axios from 'axios';
import FloatingWA from '../../../../../components/FloatingWA';

function Dokter() {
  return (
    <>
    <Head><title>Dokter</title></Head>
    <Navbar></Navbar>
    <section className='dokterWrapper'>
        <div className='container'>
          <h1 className='dokterPageTitle'>Booking Jadwal</h1>
        </div>
    </section>
    <FloatingWA></FloatingWA>
    <Footer></Footer>
    </>
  )
}

export default Dokter