import Head from 'next/head'
import React from 'react'
import Footer from '../../../components/footer'
import Navbar from '../../../components/Navbar';
import { Select, Input } from 'antd';
import axios from 'axios';
import FloatingWA from '../../../components/FloatingWA';
import Search from 'antd/es/transfer/search';

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
                      filterOption={(input) =>
                        (option.children).toLowerCase().includes(input.toLowerCase())
                        }
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
          <div className='col-3'>

          </div>
        </div>
    </section>
    <FloatingWA></FloatingWA>
    <Footer></Footer>
    </>
  )
}

export default Dokter