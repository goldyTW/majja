/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper'
import "swiper/css/navigation"
SwiperCore.use([Navigation]);
import AOS from 'aos';
import Card from '../Card';
// import i18n from '../../i18n';

const eventsEN = [
    {
        id:1,
        text:'“Rekomended.. sudah terbukti, kami pasien dari Dr. Cindy, dari awal kandungan istri lemah sampai di pantau terus, dan akhirnya lahir dengan selamat putri kami tercinta.. Terima kasih Dr. Cindy, suster Theresa.”',
        title:'Shania Wiranty'
    },
    {
        id:2,
        text:'"dari awal kontrol sampe lahiran selalu disini , bagus banget pelayananan nya khusus nya buat Dr.Cindy yg udh selalu kasih penjelasan mendetail tanpa harus di tanya2 ❤️"',
        title:'Indrawati Ekaria'
    },
    {
        id:3,
        text:' “Dari program mau punya baby sampe skrg anak udah mo 5 tahun, kalau masalah obgyn selalu cari dr. Cindy. Kliniknya juga uda semakin keren, alat2nya canggih. Vaksin HPV Gardasil 9 juga uda tersedia disini. Thank you dr. Cindy 👍👍”',
        title:'Amelia Juliani'
    },
    {
        id:4,
        text:'“Love banget sm dok Cindy & dok HariantoHamil 12 week nge flek ud ke dok lain tp malah ampuhnya ke dok Cindy smpai lahiran di Majja juga ❤ pelayanan nya duhhhh mantul deh pkknya”',
        title:'Rika Andriani'
    },
   
]
function Testimonies() {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div className='container py-5 my-5'>
      <h1 className='testi-title mb-4'>Dipercaya Oleh 8,500+ Pelanggan</h1>
      <div className="row justify-content-center backtestimonies">
        <div className='col-12 my-5'>
            <div className="swipercarousel">
                <Swiper
                slidesPerView={3.75}
                navigation={true} 
                >
                {eventsEN.map((item, i) => (
                    <SwiperSlide key={i}>
                        <Card text={item.text} title={item.title}></Card>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
            <div className="swipercarouselphone">
                <Swiper
                slidesPerView={1.5}
                navigation={true} 
                >
                {eventsEN.map((item, i) => (
                    <SwiperSlide key={i}>
                        <Card text={item.text} title={item.title}></Card>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>          
        </div>
        </div>
    </div>
  )
}

export default Testimonies
