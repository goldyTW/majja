import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Footer from '../../../components/footer'
import Navbar from '../../../components/Navbar';
import { Select, Input, Pagination } from 'antd';
import axios from 'axios';
import FloatingWA from '../../../components/FloatingWA';
import { Icon } from '@iconify/react';
// import Pagination from '../../components/Pagination';

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
  const [DataDokter, setDataDokter] = useState(dokter)
  // const [DataDokter2, setDataDokter2] = useState(dokter)
  const [dayselected, setdayselected] = useState()

  const onSearch = (value) => {
      const filteredData = dokter.filter(entry =>
        (entry.name.toLowerCase().includes(value))
      );
      setDataDokter(filteredData);
  }

  const filterday = (value) => {
    // console.log(filteredData2)
    // setDataDokter(filteredData);
  }

  const handlePagination = async (value) => {
    if((value*9)-1 > dokter.length){
      setDataDokter([...slice2(dokter, (value-1)*9, dokter.length)])
    }
    else{
      setDataDokter([...slice2(dokter, (value-1)*9, (value*9))])
    }
  };

  function slice2(array, val, offset) {
    var subarray = [];
    for (var i = val; i<offset; i++) {
        subarray.push(array[i]);
    }

    return subarray;
}

  useEffect(() => {
    setDataDokter([...slice2(dokter, 0, 9)])
  }, [])
  

  return (
    <>
    <Head><title>Dokter</title></Head>
    <Navbar></Navbar>
    <section className='dokterWrapper'>
        <div className='container'>
          <h1 className='dokterPageTitle'>Dokter</h1>
          <div className='filter p-2 my-3'>
            <div className="row align-items-center my-1 px-5">
              <div className="col-xl-4 col-md-6 col-12 py-2 px-3">
                  <span className='py-3'><b>Cari berdasarkan nama dokter</b></span>
                  <Search className='py-1' placeholder="Ketik Nama Dokter" allowClear onSearch={onSearch} />
              </div>
              <div className="col-xl-3 col-md-6 col-12 px-3">
                <span className='py-3'><b>Cari layanan</b></span>
                 <Select
                      style={{width: '100%'}}
                      showSearch
                      className='py-1'
                      placeholder="Nama Layanan"
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
              <div className="col-xl-3 col-md-6 col-12 px-3">
                <span className='py-3'><b>Cari berdasarkan hari</b></span>
                 <Select
                      style={{width: '100%'}}
                      className='py-1'
                      placeholder="Nama hari"
                      onChange={(e) => filterday(e)}
                      // value={dayselected}
                        >
                      <Option value="Senin">Senin</Option>
                      <Option value="Selasa">Selasa</Option>
                      <Option value="Rabu">Rabu</Option>
                      <Option value="Kamis">Kamis</Option>
                      <Option value="Jumat">Jumat</Option>
                      <Option value="Sabtu">Sabtu</Option>
                  </Select>
              </div>
              <div className="col-xl-2 col-md-6 col-12 px-3">
                <span className='py-3'><b>Diurutkan dari</b></span>
                 <Select
                      style={{width: '100%'}}
                      showSearch
                      className='py-1'
                      placeholder=""
                      optionFilterProp="children"
                      defaultValue="atoz"
                      // onChange={(e) => setsekilselected(e)}
                      // value={sekilselected}
                      // filterOption={(input) =>
                      //   (option.children).toLowerCase().includes(input.toLowerCase())
                      //   }
                        >
                      <Option value="atoz">A to Z</Option>
                      <Option value="ztoa">Z to A</Option>
                  </Select>
              </div>
            </div>
          </div>
          <div className='row'>
            {
              DataDokter.map((item, i) => (
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
                        <div className='row py-1'>
                          <div className='col-3 text'>{jdwl.hari}</div>
                          <div className='col-9'>
                          {jdwl.jam != '' ? <span className='text2'> {jdwl.jam} </span> : <span className='text'>Tidak ada jadwal praktek</span>}
                          {jdwl.jam2 && jdwl.jam2 != '' ? <span className='text2 ms-5'> {jdwl.jam2} </span> : ''}
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
          <div className='row justify-content-center'>
            <div className='col-12 text-center py-4'>
              <Pagination onChange={(value) => handlePagination(value)} defaultCurrent={1} total={dokter.length}/>
            </div>
          </div>
        </div>
      
    </section>
    
    <FloatingWA></FloatingWA>
    <Footer></Footer>
    </>
  )
}

export default Dokter