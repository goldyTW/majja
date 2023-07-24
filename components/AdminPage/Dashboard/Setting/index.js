import { Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { UserOutlined } from '@ant-design/icons';
import { LockOutlined } from '@ant-design/icons';
import Cookies from 'js-cookie';
import axios from 'axios';
import { toast } from 'react-toastify';

function Setting() {
    const [email, setEmail] = useState(Cookies.get('email') != undefined ? Cookies.get('email').split("\"")[1] : '');
    const [password, setPassword] = useState('');
    const [oldPass, setOldPass] = useState('');
    const [errorPass, setErrorPass] = useState(false);
    const [errorOldPass, setErrorOldPass] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

    const onSubmit = () => {
        if(!password){
            setErrorPass(true)
        }
        else if(!oldPass){
            setErrorOldPass(true)
        }
        else{
            axios.post(`${url}/api/auth/forgot`,{email, password, oldPass},{
                headers: {
                  'Content-Type': 'application/json',
                },
              })
              .then(res => {
                if(res.status == 200){
                    toast.success("Ubah Password Berhasil");
                    setModalOpen(false)
                    setPassword('')
                    setOldPass('')
                }
            })
            .catch(function (error) {
                  if (error.response) {
                    if(error.response.status == 404){
                        toast.error(error.response.data.msg);
                        setModalOpen(false)
                        setPassword('')
                        setOldPass('')
                    }
                    else if(error.response.status == 405){
                        toast.error(res.data.msg);
                        setModalOpen(false)
                        setPassword('')
                        setOldPass('')
                    }
                }
            })
        }
    }
    
    return (
        <>
        <Wrapper className="container-fluid">
            <div className="row">
                <div className="col-6"><StyledTitle>Pengaturan</StyledTitle></div>
            </div>  
            <BigCard className="col m-2">
                <div className="col-6">
                    <label><b>Email</b></label>
                    <Input 
                    type="email"
                    className="text-lg"
                    placeholder="youremail@mail.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    disabled
                    prefix={<UserOutlined className='iconOutline' style={{color:'#DF3034'}}/>} 
                    />
                </div>
                <div className="col-6 pt-4">
                    <label><b>Password</b></label>
                    <Input.Password 
                    className="text-lg"
                    placeholder="Password"
                    value={password}
                    prefix={<LockOutlined className='iconOutline'/>}
                    onChange={(event) => setPassword(event.target.value)}
                    onKeyPress={event => event.key === 'Enter' ? onSubmit() : null}
                    style={{color:'#DF3034'}}
                    ></Input.Password>
                     {
                        errorPass ? 
                        <p className='error pt-2'>Fill Your Password!</p> 
                        : <p>{''}</p>
                    }    
                </div>
                <div className="col-6 pt-4">
                <button type="button" className="py-2 buttonAlt my-1" onClick={() => setModalOpen(true)}>
                    Change Password
                </button>
                </div>
            </BigCard>
        </Wrapper>
        <Modal
        centered
        open={modalOpen}
        footer={null}
        width={600}
        // onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        >
        <div className="p-3">
            <h5 className="pb-3 modalDoctorTitle" style={{fontSize:'16px'}}>Masukkan Password Lama untuk Mengkonfirmasi Perubahan</h5>
        
            <StyledText className='text'>Konfirmasi Password Lama</StyledText>
            <Input.Password placeholder="Masukkan Password Lama Anda" 
              prefix={<LockOutlined className='iconOutline'/>}
              value={oldPass}
              style={{color:'#DF3034'}} onChange={(e) => setOldPass(e.target.value)}/>           
            {
                errorOldPass ? 
                <p className='error pt-2'>Isi Password Lama Anda!</p> 
                : <p>{''}</p>
            }    
            <div className="text-end mt-5">
                <ModalButtonCancel className="batalkan me-3" onClick={() => setModalOpen(false)}>
                  Batalkan
                </ModalButtonCancel>
                <ModalButtonOk className="ok" onClick={onSubmit}>
                  Ok
                </ModalButtonOk>
              </div>
        </div>
        </Modal>
        </>
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

const StyledText = styled.div`
  color: #8D8D8D;
  font-size: var(--fs-14);
  font-family: Poppins;
  font-weight: 500;
`;

const BigCard = styled.div`
  border-radius: 0.625rem;
  box-shadow: 0px 0.375rem 1.25rem 0px rgba(192, 192, 192, 0.25);
  padding: 1.5rem;
//   min-height: 32rem;
  background-color: #ffffff;
`;

const ModalButtonCancel = styled.a`
  color: #262626;
  font-family: Poppins;
  font-size: var(--fs-16);
  font-style: normal;
  font-weight: 500;
`;

const ModalButtonOk = styled.a`
  color: #09a53e;
  font-family: Poppins;
  font-size: var(--fs-16);
  font-style: normal;
  font-weight: 600;
`;

export default Setting