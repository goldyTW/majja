import React from 'react'
import Button from '../Button'
import BacaSelengkapnya from '../BacaSelengkapnya'
import { Icon } from '@iconify/react'

function DoctorHome() {
    const dokter = [
        {
            name:'Dr. Cindy Rani Wirasti, SpOG-KFER',
            position:'Endocrinology Consultant',
            image:'images/doctor1.png',
            xp:'Pengalaman: 10 tahun',
        },
        {
            name:'Dr. Harianto Wijaya, SpOG-KFER',
            position:'Endocrinology Consultant',
            image:'images/doctor2.png',
            xp:'Pengalaman: 13 tahun',
        },
        {
            name:'Dr. Surya Tjahyadi, SpOG-KFER',
            position:'Endocrinology Consultant',
            image:'images/doctor3.png',
            xp:'Pengalaman: 7 tahun',
        },
        {
            name:'Dr. Viviana Agustina, SpOG-KFER',
            position:'Endocrinology Consultant',
            image:'images/doctor4.png',
            xp:'Pengalaman: 10 tahun',
        },
        {
            name:'Dr. Reza Adisatria, SpOG-KFER',
            position:'Endocrinology Consultant',
            image:'images/doctor5.png',
            xp:'Pengalaman: 10 tahun',
        },
        {
            name:'Dr. Herlina Pertiwi, SpOG-KFER',
            position:'Endocrinology Consultant',
            image:'images/doctor6.png',
            xp:'Pengalaman: 5 tahun',
        }
    ]
  return (
    <section className='doctorwrapper py-5'>
    <div className="container my-5">
        <div className='row justify-content-center'>
            <div className="col-xl-3 col-12 align-self-center pe-5">
                <h2 className="doctorTitle">Temui Dokter Berpengalaman</h2>
                <p className='doctorText'>MAJJA Klinik memiliki dokter-dokter terbaik yang ahli pada bidangnya dan berpengalaman</p>
                <Button link="/" text="Lihat Semua Dokter"></Button>
            </div>
            <div className="col-xl-9 col-12 ps-3">
                <div className="row justify-content-center">
                    {
                        dokter.map((item, i) => (
                            <div className='col-xl-5 col-md-5 col-9 m-md-4 ms-4 me-0 my-3' key={i}>
                                <img className='doctorImg align-self-center' src={item.image}></img>
                                <div className='cardDokter'>
                                    <div className='row'>
                                        <div className='col-2'></div>
                                        <div className='col-10'>
                                            <p className='cardDokterTitle'>{item.name}</p>
                                            <p className='cardDokterText'>{item.position}</p>
                                            <div className='d-flex'>
                                            <Icon
                                                icon="fa6-solid:briefcase-medical"
                                                className="me-2"
                                                style={{ cursor: "pointer", fontSize: "18px", color: "#8D8D8D" }}
                                            />
                                            <p className='cardDokterText'>{item.xp}</p>
                                            </div>
                                            <BacaSelengkapnya text="Booking Jadwal"></BacaSelengkapnya>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default DoctorHome