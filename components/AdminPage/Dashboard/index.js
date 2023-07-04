import React, { useState } from "react";
import styled from "styled-components";
import { Table, Tag, Select, Modal } from "antd";
import { dataSource } from "../../DashboardData";
import moment from "moment";
import "moment/locale/id";
import { Icon } from "@iconify/react";
moment.locale("id");

const { Option } = Select;

const handleStatusChange = (value, record) => {
  console.log(`Status changed to ${value} for record:`, record);
};

function Dashboard() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [range, setrange] = useState("7");
  const [modalOpen, setModalOpen] = useState(false);
  const [nama, setnama] = useState();
  const [jadwal, setjadwal] = useState();
  const [dokter, setdokter] = useState();
  const [statusbook, setstatusbook] = useState();
  const [telepon, settelepon] = useState();
  const [kategori, setkategori] = useState();
  const [keluhan, setkeluhan] = useState();

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  
  const openModal = (record) => {
    setModalOpen(true)
    setnama(record.name)
    setjadwal(record.dateTime)
    setdokter(record.doctorName)
    setstatusbook(record.status)
    settelepon(record.telepon)
    setkategori(record.category)
    setkeluhan(record.keluhan)
  }

  const columns = [
    {
      title: "Nama Pasien",
      dataIndex: "name",
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: ((_, record) => ( 
        <span style={{cursor:'pointer'}} onClick={() => openModal(record)}>{record.name}</span>
      ))
    },
    {
      title: "Jadwal Konsultasi",
      dataIndex: "dateTime",
      sorter: (a, b) => a.age - b.age,
      render: (datetime) => moment(datetime).format("DD MMM, HH.mm"),
    },
    {
      title: "Dokter",
      dataIndex: "doctorName",
      sorter: (a, b) => a.doctorName.localeCompare(b.doctorName),
    },
    {
      title: "Status",
      dataIndex: "status",
      sorter: (a, b) => a.status - b.status,
      render: (text, record) => {
        const statusLabels = {
          1: "New Bookings",
          2: "Reminded",
          3: "Completed",
          4: "Not Shown",
        };
  
        return (
          <Select
            defaultValue={text.toString()}
            onChange={(value) => handleStatusChange(value, record)}
            status={text == 2 ? "warning":""}
          >
            {Object.entries(statusLabels).map(([value, label]) => (
              <Option key={value} value={value}>
                {label}
              </Option>
            ))}
          </Select>
        );
      },
    },
  ];

  return (
    <>
    <Wrapper className="container-fluid">
       <div className="row">
        <div className="col-6"><StyledTitle>Dashboard</StyledTitle></div>
        <div className="col-6 text-end align-self-center">
          <Select
            style={{fontFamily:'Poppins'}}
            defaultValue={range}
            onChange={(value) =>setrange(value)}
          >
              <Option key={1} value="7">7 Hari Terakhir</Option>
              <Option key={1} value="30">30 Hari Terakhir</Option>
              <Option key={1} value="365">1 Tahun Terakhir</Option>
              <Option key={1} value="all">Semua Periode</Option>
          </Select>
        </div>
      </div>
      <div className="row">
        <SmallCard className="col m-2">
          <StyledCardTitle>Total Pasien Booking</StyledCardTitle>
          <StyledCardContent>20,000</StyledCardContent>
          <StyledCardSubTitle>
            Weekly Bookings <StyledCardPercent>^ 0%</StyledCardPercent>
          </StyledCardSubTitle>
        </SmallCard>
        <SmallCard className="col m-2">
          <StyledCardTitle>Total Pasien</StyledCardTitle>
          <StyledCardContent>20,000</StyledCardContent>
          <StyledCardSubTitle>
            Weekly Patients <StyledCardPercent>^ 0%</StyledCardPercent>
          </StyledCardSubTitle>
        </SmallCard>
        <SmallCard className="col m-2">
          <StyledCardTitle>Pemasukan Booking</StyledCardTitle>
          <StyledCardContent>Rp 0</StyledCardContent>
          <StyledCardSubTitle>
            Weekly Earning <StyledCardPercent>^ 0%</StyledCardPercent>
          </StyledCardSubTitle>
        </SmallCard>
        <SmallCard className="col m-2">
          <StyledCardTitle>Pengunjung Website</StyledCardTitle>
          <StyledCardContent>Rp 0</StyledCardContent>
          <StyledCardSubTitle>
            Weekly Visitors <StyledCardPercent>^ 0%</StyledCardPercent>
          </StyledCardSubTitle>
        </SmallCard>
      </div>
      <div className="row">
        <BigCard className="col m-2">
          <StyledTitle>Jadwal Booking Konsultasi</StyledTitle>
          <div>
            <Table
              columns={columns}
              dataSource={dataSource}
              onChange={onChange}
              pagination={false}
            />
          </div>
        </BigCard>
      </div>
    </Wrapper>
    <Modal
      centered
      open={modalOpen}
      footer={null}
      width={650}
      // onOk={() => setModalOpen(false)}
      onCancel={() => setModalOpen(false)}
    >
      <div className="p-3">
        <h5 className="pb-3 modalDoctorTitle">{nama}</h5>

        <div className="row justify-content-center">
          <div className="col-4">
            <span className="modalSubtitle">Jadwal Konsultasi</span><br></br>
            <span className="modalSubtitleData">{moment(jadwal).format('DD MMM, HH:mm')}</span>
          </div>
          <div className="col-5">
            <span className="modalSubtitle">Dokter</span><br></br>
            <span className="modalSubtitleData">
              {dokter}
            </span>
          </div>
          <div className="col-3">
            <span className="modalSubtitle">Status</span><br></br>
            {
            statusbook == 1 ?
            <Tag color="geekblue">
              New Bookings
            </Tag>
            :
            statusbook == 2 ?
            <Tag color="yellow">
             Reminded
            </Tag>
            :
            statusbook == 3 ?
            <Tag color="green">
             Completed
            </Tag>
            :
            <Tag>
             Not Shown
            </Tag>
            }
          </div>
        </div>
        <div className="p-3 my-4" style={{border:'1px solid #ccc', borderRadius:'10px'}}>
          <div className="row py-2">
            <div className="col-lg-4 col-12 modalSubtitle">Telepon</div>
            <div className="col-lg-8 col-12 modalSubtitleData">{telepon}
            <Icon
                icon="solar:copy-bold"
                className="ms-1 align-self-center"
                style={{
                  cursor: "pointer",
                  fontSize: "16px",
                  color: "#8D8D8D",
                }}
              />
            </div>
          </div>
          <div className="row py-2">
            <div className="col-lg-4 col-12 modalSubtitle">Kategori Pasien</div>
            <div className="col-lg-8 col-12 modalSubtitleData">
                {kategori}
            </div>
          </div>
          <div className="row py-2">
            <div className="col-lg-4 col-12 modalSubtitle">Keluhan</div>
            <div className="col-lg-8 col-12 modalSubtitleData">{keluhan}</div>
          </div>
        </div>
        <div className="text-end">
          {
            statusbook == 1 ?
            <button className='buttonModalReminded'>Reminded</button>
            :
            statusbook == 2 ?
            <div className="text-end">
              <button className='buttonModalNot mx-1'>Not Shown</button>
              <button className='buttonModalComplete mx-1'>Completed</button>
            </div>
            :
            ''
          }
        </div>
      </div>
    </Modal>
    </>
  );
}

const Wrapper = styled.div``;

const SmallCard = styled.div`
  border-radius: 0.625rem;
  background: #fff;
  box-shadow: 0px 0.375rem 1.25rem 0px rgba(192, 192, 192, 0.25);
  padding: 1rem;
  min-width: 15.875rem;
`;

const BigCard = styled.div`
  border-radius: 0.625rem;
  box-shadow: 0px 0.375rem 1.25rem 0px rgba(192, 192, 192, 0.25);
  padding: 1.5rem;
  min-height: 32rem;
  background-color: #ffffff;
`;

const StyledTitle = styled.div`
  color: #433b3b;
  font-size: var(--fs-24);
  font-family: Poppins;
  font-weight: 600;

  margin: 1% 0;
`;

const StyledCardTitle = styled.div`
  color: #8d8d8d;
  font-size: var(--fs-16);
  font-family: Poppins;
  font-weight: 500;
`;

const StyledCardContent = styled.div`
  color: #433b3b;
  font-size: var(--fs-24);
  font-family: Poppins;
  font-weight: 600;
`;

const StyledCardSubTitle = styled.div`
  color: rgba(67, 59, 59, 0.85);
  font-size: var(--fs-12);
  font-family: Poppins;
  font-weight: 500;
`;

const StyledCardPercent = styled.span`
  color: #09a53e;
  font-size: var(--fs-12);
  font-family: Poppins;
  font-weight: 500;
`;

export default Dashboard;
