import React, { useState } from 'react'
import styled from "styled-components";
import { Input, Pagination, Select } from "antd";

function NewDoctor() {
    const [nama, setnama] = useState();
    const [phone, setphone] = useState();
    const [spesialis, setspesialis] = useState();
    const [password, setPassword] = useState();
    const [errornama, seterrornama] = useState(false);
    const [errorphone, seterrorphone] = useState(false);
    const [erroremail, seterroremail] = useState(false);
    const [errorPass, seterrorPass] = useState(false);
    const [errorspesialis, seterrorspesialis] = useState(false);
    const [xpNumber, setxpNumber] = useState();
    const [xpText, setxpText] = useState();
    const [status, setstatus] = useState();
    const [email, setemail] = useState();

  return (
    <Wrapper className="container-fluid">
    <div className="row">
      <div className="col-6"><StyledTitle>Tambah Dokter Baru</StyledTitle></div>
    </div>
    <div className="row">
        <BigCard className="col m-2 p-3">
        <div className="row align-items-center align-self-center">
            <div className="col-md-7 col-12 p-3">
                <span className="bookingInputLabel py-2">
                Nama Dokter<span className='required'>*</span>
                </span>
                <Input
                placeholder="Input nama dokter"
                value={nama}
                onChange={(event) => setnama(event.target.value)}
                />
                {
                errornama &&  
                <span className='error mt-4'>Nama Dokter harus diisi!</span>
                }
            </div>
            <div className="col-md-5 col-12 p-3">
                <span className="bookingInputLabel py-2">
                Nomor Telepon<span className='required'>*</span>
                </span>
                <Input
                placeholder="+628894848429"
                value={phone}
                onChange={(event) => setphone(event.target.value)}
                />
                {
                errorphone &&  
                <span className='error mt-4'>Nomor Telepon harus diisi!</span>
                }
            </div>
        </div>
        <div className="row align-items-center align-self-center">
            <div className="col-md-7 col-12 p-3">
                <span className="bookingInputLabel py-2">
                Spesialis<span className='required'>*</span>
                </span>
                <Input
                placeholder="Input spesialisasi"
                value={spesialis}
                onChange={(event) => setspesialis(event.target.value)}
                />
                {
                errorspesialis &&  
                <span className='error mt-4'>Spesialisasi harus diisi!</span>
                }
            </div>
        </div>
        <div className="row align-items-center align-self-center">
            <div className="col-md-3 col-12 p-3">
                <span className="bookingInputLabel py-2">
                Pengalaman<span className='required'>*</span>
                </span>
                <div className='row align-self-center'>
                    <div className='col-4 py-1'>
                        <Input
                            className='col-6'
                            placeholder="3"
                            type='number'
                            value={xpNumber}
                            width="50px"
                            onChange={(event) => setxpNumber(event.target.value)}
                        />
                    </div>
                    <div className='col-8 py-1'>
                        <Select
                        placeholder="Tahun"
                        onChange={(e) => setxpText(e)}
                        value={xpText}>
                            <Option value="tahun">tahun</Option>
                            <Option value="bulan">bulan</Option>
                        </Select>
                    </div>
                  </div>
            </div>
            <div className="col-md-3 col-12 p-3">
                <span className="bookingInputLabel py-2">
                Status<span className='required'>*</span>
                </span><br></br>
                <Select
                    className='py-1'
                    placeholder="Praktek Rutin"
                    value={xpText}>
                        <Option value={1}>Praktek Rutin</Option>
                        <Option value={2}>Dengan Perjanjian</Option>
                  </Select>
            </div>
        </div>
        <div className="row align-items-center align-self-center">
            <div className="col-md-6 col-12 p-3">
                <span className="bookingInputLabel py-2">
                Email<span className='required'>*</span>
                </span>
                <Input
                placeholder="emaildokter@mail.com"
                value={email}
                onChange={(event) => setemail(event.target.value)}
                />
                {
                erroremail &&  
                <span className='error mt-4'>Email harus diisi!</span>
                }
            </div>
        </div>
        <div className="row align-items-center align-self-center">
            <div className="col-md-6 col-12 p-3">
                <span className="bookingInputLabel py-2">
                Password<span className='required'>*</span>
                </span>
                <Input.Password 
                className="text-lg"
                placeholder="Input Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                ></Input.Password>
                {
                errorPass ? <p className='error pt-2'>Fill Your Password!</p> : <p>{''}</p>
                }   
                </div>
        </div>
        <div className='text-end'>
            <button className='button mx-1'>Batalkan</button>
            <button className='buttonAlt mx-1'>Simpan</button>
        </div>
        </BigCard>
    </div>
  </Wrapper>
  )
}

const Wrapper = styled.div``;

const StyledTitle = styled.div`
  color: #433b3b;
  font-size: var(--fs-24);
  font-family: Poppins;
  font-weight: 600;

  margin: 1% 0;
`;

const BigCard = styled.div`
  border-radius: 0.625rem;
  box-shadow: 0px 0.375rem 1.25rem 0px rgba(192, 192, 192, 0.25);
  padding: 1.5rem;
  min-height: 32rem;
  background-color: #ffffff;
`;

export default NewDoctor