import React from 'react'
import CardLayanan from '../CardLayanan'
import Button from '../Button'

function LayananHome() {
    const layanan = [
        {
            title:'Ovulasi Induksi',
            text:'Sebuah metode pengobatan untuk merangsang ovulasi pada wanita yang mengalami masalah kesuburan.'
        },
        {
            title:'Intrauterine Insemination',
            text:'Sebuah prosedur inseminasi buatan untuk meningkatkan peluang kehamilan.'
        },
        {
            title:'Liquid Based Cytology',
            text:'Sebuah metode pemeriksaan untuk mendeteksi perubahan sel-sel yang bisa menjadi tanda awal kanker serviks.'
        },
        {
            title:'Kesuburan',
            text:'Sebuah metode pemeriksaan untuk mendeteksi perubahan sel-sel yang bisa menjadi tanda awal kanker serviks.'
        },
        {
            title:'Deteksi HPV',
            text:'Human Papillomavirus (HPV) dapat menyebabkan kanker pada area genital pria dan wanita.'
        },
        {
            title:'USG Transvaginal',
            text:'Sebuah prosedur pemeriksaan gambaran organ reproduksi wanita dengan probe kecil melalui vagina.'
        },
    ]
  return (
    <section className='layananWrapper py-5'>
        <div className="container my-5">
            <h1 className='ArticleTitleHome'>Layanan Terbaik Untuk Kamu</h1>
            <div className="row" data-aos="fade-up">
                {
                    layanan.map((item, i) => (
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12 p-3' key={i}>
                            <CardLayanan title={item.title} text={item.text}></CardLayanan>
                        </div>
                    ))
                }
            </div>
            <div className="row justify-content-center my-4">
                <div className='col-12 text-center'>
                <Button link="/" text="Lihat Semua Layanan"></Button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LayananHome