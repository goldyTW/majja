import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Table, Tag, Modal, Select, Input, Pagination  } from "antd";
// import { dokter } from "../../../DokterData";
import moment from "moment";
import "moment/locale/id";
import { Icon } from "@iconify/react";
// import NewDoctor from "../NewDoctor";
import axios from "axios";
import { toast } from "react-toastify";
moment.locale("id");
const { Search } = Input;
const { Option } = Select;
const { TextArea } = Input;

const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

function BookingSchedule() {
  useEffect(() => {
    axios
      .get(`${url}/api/booking`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setDataBookingSchedule(res.data.result);
        setDataBookingScheduleMaster(res.data.result);
      });
  }, []);

  const [DataBookingSchedule, setDataBookingSchedule] = useState();
  const [DataBookingScheduleMaster, setDataBookingScheduleMaster] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [nama, setnama] = useState();
  const [jadwal, setjadwal] = useState();
  const [dokter, setdokter] = useState();
  const [statusbook, setstatusbook] = useState();
  const [telepon, settelepon] = useState();
  const [kategori, setkategori] = useState();
  const [keluhan, setkeluhan] = useState();

  const dateSorter = (a, b) => {
    const dateA = a.tanggal_booking.valueOf();
    const dateB = b.tanggal_booking.valueOf();
    return dateA - dateB;
  };

  const columns = [
    {
      title: "Nama Pasien",
      dataIndex: "nama",
      sorter: (a, b) => a.nama.localeCompare(b.nama),
      width: 200,
      render: (_, record) => (
        <span
          style={{ cursor: "pointer" }}
          onClick={() => openBookingSchedule(record)}
        >
          {record.nama}
        </span>
      ),
    },
    {
      title: "Jadwal Konsultasi",
      dataIndex: "tanggal_booking",
      defaultSortOrder: "ascend",
      sorter: dateSorter,
      render: (_, record) =>
        moment(record.tanggal_booking).format("DD MMM YY") + ", " + record.jam_booking,
      width: 300,
    },
    {
      title: "Dokter",
      dataIndex: "nama_dokter",
      width: 400,
    },
    {
      title: "Status",
      dataIndex: "action_status",
      sorter: (a, b) => a.action_status - b.action_status,
      render: (text, record) => {
        const statusLabels = {
          1: "New Bookings",
          2: "Reminded",
          3: "Completed",
          4: "Not Shown",
        };

        return (
          <Select
            defaultValue={
              record.action_status && record.action_status.toString()
            }
            onChange={(value) => handleStatusChange(value, record)}
            status={
              record.action_status && record.action_status == 1
                ? "warning"
                : record.action_status && record.action_status == 3
                ? "success"
                : ""
            }
          >
            {Object.entries(statusLabels).map(([value, label]) => (
              <Option key={value} value={value}>
                {label}
              </Option>
            ))}
          </Select>
        );
      },
      width: 300,
    },
    {
      title: "Catatan",
      dataIndex: "catatan",
      width: 400,
    },
  ];

  const openBookingSchedule = (record) => {
    setModalOpen(true)
    setnama(record.nama)
    setjadwal(moment(record.tanggal_booking).format('DD MMM YY')+', '+record.jam_booking)
    setdokter(record.nama_dokter)
    setstatusbook(record.action_status)
    settelepon(record.phone)
    setkategori(record.kategori)
    setkeluhan(record.keluhan)
  }

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const onSearch = (value) => {
    const filteredData = DataBookingScheduleMaster.filter((entry) =>
      entry.pasien.toLowerCase().includes(value)
    );
    setDataBookingSchedule(filteredData);
  };

  return (
    <>
      <Wrapper className="container-fluid">
        <div className="row">
          <StyledTitle>Jadwal Temu</StyledTitle>
        </div>
        <div className="row">
          <BigCard className="col m-2">
            {/* <StyledTitle>Jadwal Booking Konsultasi</StyledTitle> */}
            <div className="col-lg-3 col-12 ">
              <Search
                className="py-2"
                placeholder="Search"
                allowClear
                onSearch={onSearch}
              />
            </div>
            <div>
              <Table
                columns={columns}
                dataSource={DataBookingSchedule}
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
            <div className="col-lg-4 col-12 modalSubtitle">Nomor Telepon</div>
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
          <div className="row py-2">
            <div className="col-lg-4 col-12 modalSubtitle">Catatan</div>
            <div className="col-lg-8 col-12 modalSubtitleData"><TextArea rows={4} placeholder="maxLength is 6" maxLength={6} /></div>
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

export default BookingSchedule;
