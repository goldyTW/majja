import Head from 'next/head'
import React from 'react'
import Footer from '../../../components/footer'
import Navbar from '../../../components/Navbar';
import { Select, Input } from 'antd';
import axios from 'axios';
import FloatingWA from '../../../components/FloatingWA';

function BookingSuccess() {
  return (
    <>
    <Head><title>Booking Success</title></Head>
    <Navbar></Navbar>
    <section className='dokterWrapper'>
        <div className='container'>
            pembayaran berhasil
        </div>
    </section>
    <FloatingWA></FloatingWA>
    <Footer></Footer>
    </>
  )
}

export default BookingSuccess