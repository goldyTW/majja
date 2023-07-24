import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Footer from '../../../components/footer'
import Navbar from '../../../components/Navbar';
import { Select, Input, Pagination } from 'antd';
import axios from 'axios';
import FloatingWA from '../../../components/FloatingWA';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { dokter } from '../../../components/DokterData';

function Dokter() {
  const { Option } = Select;
  const { Search } = Input;
  const [DataDokter, setDataDokter] = useState(dokter)
  const [dayselected, setdayselected] = useState()

  const onSearch = (value) => {
      const filteredData = dokter.filter(entry =>
        (entry.name.toLowerCase().includes(value))
      );
      setDataDokter(filteredData);
  }

  const filterday = (value) => {
    const filteredData = dokter.filter(entry =>
      (entry.jadwal.forEach(item => {
        item.hari.includes(value)
        }
      ))
    );
    setDataDokter(filteredData);
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
                <div className='col-xl-4 col-lg-6 col-12 p-3' key={i}>
                  <div className='cardDokterList' >
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
                    <Link href={'/booking/'+item.id} style={{textDecoration:'none'}}>
                    <div className='button2 mt-5'>Booking Jadwal</div>
                    </Link>
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