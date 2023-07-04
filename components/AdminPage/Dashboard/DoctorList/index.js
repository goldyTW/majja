import React, { useState } from "react";
import styled from "styled-components";
import { Table, Tag, Modal, Select } from "antd";
import { dokter } from "../../../DokterData";
import moment from "moment";
import "moment/locale/id";
import { Input, Pagination } from "antd";
import { Icon } from "@iconify/react";
import NewDoctor from "../NewDoctor";
moment.locale("id");
const { Search } = Input;

const handleStatusChange = (value, record) => {
  console.log(`Status changed to ${value} for record:`, record);
};

function DoctorList() {
  const [DataDokter, setDataDokter] = useState(dokter)
  const [modalOpen, setModalOpen] = useState(false);
  const [namaDokter, setNamaDokter] = useState();
  const [posisi, setPosisi] = useState();
  const [telepon, setTelepon] = useState();
  const [email, setEmail] = useState();
  const [status_dokter, setstatus_dokter] = useState();
  const [password, setPassword] = useState();
  const [xp, setxp] = useState();
  const [jadwal, setjadwal] = useState();
  const [showpassword, setshowpassword] = useState(false);
  const [showTambahDokter, setShowTambahDokter] = useState(false);
  
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const onSearch = (value) => {
    const filteredData = dokter.filter(entry =>
      (entry.name.toLowerCase().includes(value))
    );
    setDataDokter(filteredData);
  }

  const openModalDoctor = (record) => {
    setModalOpen(true)
    setNamaDokter(record.name)
    setPosisi(record.position)
    setTelepon(record.telp)
    setEmail(record.email)
    setPassword(record.password)
    setstatus_dokter(record.status)
    setxp(record.xp)
    setjadwal(record.jadwal)
  }

  const columns = [
    {
      title: "Nama Dokter",
      dataIndex: "name",
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.name.localeCompare(b.name),
      width: 500,
      render: ((_, record) => ( 
        <span style={{cursor:'pointer'}} onClick={() => openModalDoctor(record)}>{record.name}</span>
      ))
    },
    {
      title: "Spesialis",
      dataIndex: "position",
      // sorter: (a, b) => a.age - b.age,
      // render: (datetime) => moment(datetime).format("DD MMM, HH.mm"),
      filters: [
        {
          text: 'Spesialis Obstetri dan Ginekologi',
          value: 'Spesialis Obstetri dan Ginekologi',
        },
        {
          text: 'Spesialis Anak',
          value: 'Spesialis Anak',
        },
        {
          text: 'Spesialis Penyakit Dalam',
          value: 'Spesialis Penyakit Dalam',
        },
        {
          text: 'Spesialis Anestesi Konsultan Intensive Care',
          value: 'Spesialis Anestesi Konsultan Intensive Care',
        },
        {
          text: 'Spesialis Gizi',
          value: 'Spesialis Gizi',
        },
        {
          text: 'Psikolog',
          value: 'Psikolog',
        },
        {
          text: 'Dokter Umum',
          value: 'Dokter Umum',
        },
      ],
      onFilter: (value, record) => record.position.indexOf(value) === 0,
      width: 500,
    },
    {
      title: "Nomor Telepon",
      dataIndex: "telp",
      // sorter: (a, b) => a.doctorName.localeCompare(b.doctorName),
      width: 350,
    },
    {
      title: "Status",
      dataIndex: "status",
      sorter: (a, b) => a.status - b.status,
      render: ((_, record) => (
        record.status == 1 ?
        <Tag color="green">
          Praktek Rutin
        </Tag>
        :
        <Tag>
          Dengan Janji
        </Tag>
    )),
      // render: (text, record) => {
      //   const statusLabels = {
      //     1: "Prakter Rutin",
      //     2: "Dengan Janji",
      //   };
  
      //   return (
      //     <Select
      //       defaultValue={text.toString()}
      //       onChange={(value) => handleStatusChange(value, record)}
      //       status={text == 1 ? "success" : ""}
      //     >
      //       {Object.entries(statusLabels).map(([value, label]) => (
      //         <Option key={value} value={value}>
      //           {label}
      //         </Option>
      //       ))}
      //     </Select>
      //   );
      // },
    },
  ];

  return (
    <>
    {
      showTambahDokter ?
      <NewDoctor></NewDoctor>
      :
      <Wrapper className="container-fluid">
      <div className="row">
        <div className="col-6"><StyledTitle>Daftar Dokter</StyledTitle></div>
        <div className="col-6 text-end align-self-center">
          <button className='buttonAlt' onClick={()=>setShowTambahDokter(true)}>+ Tambah Dokter Baru</button>
        </div>
      </div>
      <div className="row">
        <BigCard className="col m-2">
          {/* <StyledTitle>Jadwal Booking Konsultasi</StyledTitle> */}
          <div className="col-lg-3 col-12 ">
          <Search
          className="py-2"
          placeholder="Cari Dokter"
          allowClear
          onSearch={onSearch}
        />
        </div>
          <div>
            <Table
              columns={columns}
              dataSource={DataDokter}
              onChange={onChange}
              pagination={false}
            />
          </div>
        </BigCard>
      </div>
    </Wrapper>
    }
    <Modal
        centered
        open={modalOpen}
        footer={null}
        width={650}
        // onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
      >
        <div className="p-3">
          <h5 className="pb-3 modalDoctorTitle">{namaDokter}</h5>

          <div className="row justify-content-center">
            <div className="col-6">
              <span className="modalSubtitle">Spesialis</span><br></br>
              <span className="modalSubtitleData">{posisi}</span>
            </div>
            <div className="col-3">
              <span className="modalSubtitle">Telepon</span><br></br>
              <span className="modalSubtitleData">
                {telepon}
                <Icon
                  icon="solar:copy-bold"
                  className="ms-1 align-self-center"
                  style={{
                    cursor: "pointer",
                    fontSize: "16px",
                    color: "#8D8D8D",
                  }}
                />
              </span>
            </div>
            <div className="col-3">
              <span className="modalSubtitle">Status</span>
              {status_dokter == 1 ?
              <Tag color="green">
                Praktek Rutin
              </Tag>
              :
              <Tag>
                Dengan Janji
              </Tag>}
            </div>
          </div>
          <div className="p-3 my-4" style={{border:'1px solid #ccc', borderRadius:'10px'}}>
            <div className="row py-2">
              <div className="col-lg-4 col-12 modalSubtitle">Email</div>
              <div className="col-lg-8 col-12 modalSubtitleData">{email}</div>
            </div>
            <div className="row py-2">
              <div className="col-lg-4 col-12 modalSubtitle">Password</div>
              <div className="col-lg-8 col-12 modalSubtitleData">
                {showpassword ? password : '*********'} 
                <Icon
                  icon="mdi:eye"
                  className="ms-2 align-self-center"
                  onClick={() => setshowpassword(!showpassword)}
                  style={{
                    cursor: "pointer",
                    fontSize: "16px",
                    color: "#8D8D8D",
                  }}
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-lg-4 col-12 modalSubtitle">Pengalaman</div>
              <div className="col-lg-8 col-12 modalSubtitleData">{xp} tahun</div>
            </div>
            <div className="row py-2">
              <div className="col-lg-4 col-12 modalSubtitle">Jadwal Praktek</div>
              <div className="col-lg-8 col-12 modalSubtitleData">
                {
                jadwal && jadwal.map((item, i) => (
                    <div className="py-1">
                      <span>{item.hari}</span>
                      <span className="ms-2">{item.jam}</span>
                      <span className="ms-2">{item.jam2 && item.jam2}</span>
                      <br></br>
                    </div>
                ))
                }
               </div>
            </div>
          </div>
          <div className="text-center">
            <button className='buttonAlt'>Hapus Dari Daftar</button>
          </div>
        </div>
    </Modal>
      </>
  );
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

export default DoctorList;
