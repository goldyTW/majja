import Head from 'next/head'
import React from 'react'
import Footer from '../../../components/footer'
import Navbar from '../../../components/Navbar';
import { Select, Input } from 'antd';
import axios from 'axios';
import FloatingWA from '../../../components/FloatingWA';
import { Icon } from '@iconify/react';

const dokter = [
  {
      id:1,
      name:'Dr.RM Denny Dhanardono, MPH&TM, Sp.OG-KFER',
      position:'Spesialis Obstetri dan Ginekologi',
      image:'images/dr_denny.png',
      xp:20,
      jadwal:[
        {
          hari:'Senin',
          jam:'10.00-12.00'
        },
        {
          hari:'Selasa',
          jam:''
        },
        {
          hari:'Rabu',
          jam:''
        },
        {
          hari:'Kamis',
          jam:'10.00-12.00'
        },
        {
          hari:'Jumat',
          jam:''
        },
        {
          hari:'Sabtu',
          jam:''
        },
      ]
  },
  {
      id:2,
      name:'Dr. Harianto Wijaya, SpOG-KFER',
      position:'Spesialis Obstetri dan Ginekologi',
      image:'images/dr_harianto.png',
      xp:18,
      jadwal:[
        {
          hari:'Senin',
          jam:'',
        },
        {
          hari:'Selasa',
          jam:'08.00-10.00',
          jam2:'17.00-20.00'
        },
        {
          hari:'Rabu',
          jam:'08.00-10.00',
          jam2:'17.00-21.00'
        },
        {
          hari:'Kamis',
          jam:'08.00-10.00',
          jam2:'17.00-21.00'
        },
        {
          hari:'Jumat',
          jam:'08.00-10.00',
          jam2:'17.00-21.00'
        },
        {
          hari:'Sabtu',
          jam:'10.00-15.00'
        },
      ]
  },
  {
      id:3,
      name:'Dr. Cindy Rani, SpOG-KFER',
      position:'Spesialis Obstetri dan Ginekologi',
      image:'images/dr_cindy.png',
      xp:15,
      jadwal:[
        {
          hari:'Senin',
          jam:'08.00-10.00',
          jam2:'17.00-21.00'
        },
        {
          hari:'Selasa',
          jam:'08.00-10.00',
          jam2:'17.00-21.00'
        },
        {
          hari:'Rabu',
          jam:'08.00-10.00',
          jam2:'17.00-21.00'
        },
        {
          hari:'Kamis',
          jam:'08.00-10.00',
          jam2:'17.00-21.00'
        },
        {
          hari:'Jumat',
          jam:'08.00-10.00',
          jam2:'17.00-21.00'
        },
        {
          hari:'Sabtu',
          jam:'Dengan Perjanjian'
        },
      ]
  },
  {
      id:4,
      name:'Dr. Edward D. Suwito,Sp.OG,MARS',
      position:'Spesialis Obstetri dan Ginekologi',
      image:'images/dr_edward.png',
      xp:10,
      jadwal:[
        {
          hari:'Senin',
          jam:'',
        },
        {
          hari:'Selasa',
          jam:'',
        },
        {
          hari:'Rabu',
          jam:'',
        },
        {
          hari:'Kamis',
          jam:'',
        },
        {
          hari:'Jumat',
          jam:'',
        },
        {
          hari:'Sabtu',
          jam:'10.00-15.00'
        },
      ]
  },
  {
      id:5,
      name:'Dr. Juliana, SpA',
      position:'Spesialis Anak',
      image:'images/dr_juliana.png',
      xp:7,
      jadwal:[
        {
          hari:'Senin',
          jam:'08.00-10.00'
        },
        {
          hari:'Selasa',
          jam:''
        },
        {
          hari:'Rabu',
          jam:'08.00-10.00'
        },
        {
          hari:'Kamis',
          jam:''
        },
        {
          hari:'Jumat',
          jam:''
        },
        {
          hari:'Sabtu',
          jam:''
        },
      ]
  },
  {
      id:6,
      name:'Dr. Lioe Ivana, Sp.A',
      position:'Spesialis Anak',
      image:'images/dr_lioe.png',
      xp:14,
      jadwal:[
        {
          hari:'Senin',
          jam:'17.00-20.00'
        },
        {
          hari:'Selasa',
          jam:'17.00-20.00'
        },
        {
          hari:'Rabu',
          jam:'17.00-20.00'
        },
        {
          hari:'Kamis',
          jam:'17.00-20.00'
        },
        {
          hari:'Jumat',
          jam:'17.00-20.00'
        },
        {
          hari:'Sabtu',
          jam:''
        },
      ]
  },
  {
      id:7,
      name:'Dr. Hendarto Natadidjaja, MARS, Sp.PD',
      position:'Spesialis Penyakit Dalam',
      image:'images/dr_hendarto.png',
      xp:17,
      jadwal:[ 
        {
          hari:'Senin',
          jam:'Dengan Perjanjian'
        },
        {
          hari:'Selasa',
          jam:'Dengan Perjanjian'
        },
        {
          hari:'Rabu',
          jam:'Dengan Perjanjian'
        },
        {
          hari:'Kamis',
          jam:'Dengan Perjanjian'
        },
        {
          hari:'Jumat',
          jam:'Dengan Perjanjian'
        },
        {
          hari:'Sabtu',
          jam:'Dengan Perjanjian'
        },
      ]
  },
  {
    id:8,
    name:'Dr. Stephanie Dewi, Sp.PD., BmedSc',
    position:'Spesialis Penyakit Dalam',
    image:'images/dr_stephanie.png',
    xp:9,
    jadwal:[ 
      {
        hari:'Senin',
        jam:'08.00-10.00'
      },
      {
        hari:'Selasa',
        jam:''
      },
      {
        hari:'Rabu',
        jam:''
      },
      {
        hari:'Kamis',
        jam:''
      },
      {
        hari:'Jumat',
        jam:''
      },
      {
        hari:'Sabtu',
        jam:''
      },
    ]
  },
  {
    id:9,
    name:'Dr. Antin Tri Laksmi, Sp.An-K',
    position:'Spesialis Anestesi Konsultan Intensive Care',
    image:'images/dr_antin.png',
    xp:12,
    jadwal:[ 
      {
        hari:'Senin',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Selasa',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Rabu',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Kamis',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Jumat',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Sabtu',
        jam:'Dengan Perjanjian'
      },
    ]
  },
  {
    id:10,
    name:'Dr. Lineke Guntara, Sp.GK',
    position:'Spesialis Gizi',
    image:'images/dr_lineke.png',
    xp:8,
    jadwal:[ 
      {
        hari:'Senin',
        jam:''
      },
      {
        hari:'Selasa',
        jam:''
      },
      {
        hari:'Rabu',
        jam:''
      },
      {
        hari:'Kamis',
        jam:''
      },
      {
        hari:'Jumat',
        jam:''
      },
      {
        hari:'Sabtu',
        jam:'09.00-15.00'
      },
    ]
  },
  {
    id:11,
    name:'Nadia Merlin S.Psi, M.Sc',
    position:'Psikolog',
    image:'images/dr_nadia.png',
    xp:6,
    jadwal:[ 
      {
        hari:'Senin',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Selasa',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Rabu',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Kamis',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Jumat',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Sabtu',
        jam:'Dengan Perjanjian'
      },
    ]
  },
  {
    id:12,
    name:'Dr. Lalan Melia, DIPL. CIDESCO',
    position:'Dokter Umum',
    image:'images/dr_lalan.png',
    xp:5,
    jadwal:[ 
      {
        hari:'Senin',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Selasa',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Rabu',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Kamis',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Jumat',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Sabtu',
        jam:'Dengan Perjanjian'
      },
    ]
  },
  {
    id:13,
    name:'Dr. Raymond Andhika',
    position:'Dokter Umum',
    image:'images/dr_raymond.png',
    xp:8,
    jadwal:[ 
      {
        hari:'Senin',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Selasa',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Rabu',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Kamis',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Jumat',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Sabtu',
        jam:'Dengan Perjanjian'
      },
    ]
  },
]

function Dokter() {
  const { Option } = Select;
  const { Search } = Input;

  const onSearch = (value) => {
      const filteredData = dataDokterMaster.filter(entry =>
        (entry.name.toLowerCase().includes(value))
      );
      setDataDokter(filteredData);
  }

  return (
    <>
    <Head><title>Dokter</title></Head>
    <Navbar></Navbar>
    <section className='dokterWrapper'>
        <div className='container'>
          <h1 className='dokterPageTitle'>Dokter</h1>
          <div className='filter p-2 my-3'>
            <div className="row align-items-center my-1">
              <div className="col-md-6 col-12 px-5">
                <div className="row">
                  <div className="col-xl-3 col-lg-4 col-12 align-self-center ">
                    <span className=''><b>Filter by Skills:</b></span>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-12">
                    <Select
                      style={{width: '100%'}}
                      showSearch
                      placeholder="Choose Skill"
                      optionFilterProp="children"
                      // onChange={(e) => setsekilselected(e)}
                      // value={sekilselected}
                      // filterOption={(input) =>
                      //   (option.children).toLowerCase().includes(input.toLowerCase())
                      //   }
                        >
                      <Option value="all">All</Option>
                  </Select>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 px-5">
                <div className="row">
                   <div className="col-xl-4 col-lg-5 col-12 align-self-center ">
                    <span className=''><b>Search By Name:</b></span>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-12">
                    <Search placeholder="Fill Partner's Name" allowClear onSearch={onSearch} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            {
              dokter.map((item, i) => (
                <div className='col-xl-4 col-lg-6 col-12 p-3'>
                  <div className='cardDokterList' key={i}>
                    <div className='d-flex'>
                      <img src={item.image} height="122px"></img>
                      <div className='ps-3' style={{height:"122px"}}>
                        <span className='cardDokterTitle'>{item.name}</span>
                        <p className='cardDokterText'>{item.position}</p>
                        <div className='d-flex'>
                            <Icon
                                icon="fa6-solid:briefcase-medical"
                                className="me-2"
                                style={{ cursor: "pointer", fontSize: "18px", color: "#8D8D8D" }}
                            />
                            <p className='cardDokterText'>Pengalaman: {item.xp} tahun</p>
                        </div>
                      </div>
                    </div>
                    <div className='dot my-3'></div>
                    {
                      item && item.jadwal && item.jadwal.map((jdwl, i) => (
                        <>
                        <div className='row text py-1'>
                          <div className='col-3'>{jdwl.hari}</div>
                          <div className='col-9'>
                            {jdwl.jam != '' ? jdwl.jam : 'Tidak ada jadwal praktek'}
                            <span className='ms-5'>{jdwl.jam2 && jdwl.jam2 != '' ? jdwl.jam2 : ''}</span>
                          </div>
                        </div>
                        <div className='line'></div>
                        </>
                      ))
                    }
                    

                    <div className='button2 mt-5'>Booking Jadwal</div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
    </section>
    <FloatingWA></FloatingWA>
    <Footer></Footer>
    </>
  )
}

export default Dokter