import React, { useState } from "react";
import styled from "styled-components";
import {
  Table,
  Tag,
  Modal,
  Select,
  DatePicker,
  TimePicker,
  Radio,
  Space,
} from "antd";
import { dokter } from "../../../DokterData";
import moment from "moment";
import "moment/locale/id";
import { Input, Pagination, Option } from "antd";
import { Icon } from "@iconify/react";
import NewDoctor from "../NewDoctor";
import dayjs from "dayjs";
moment.locale("id");
const { Search } = Input;

const handleStatusChange = (value, record) => {
  console.log(`Status changed to ${value} for record:`, record);
};

function DoctorSchedule() {
  const [DataDokter, setDataDokter] = useState(dokter);
  const [dokterSelected, setdokterSelected] = useState();
  const [date, setDate] = useState();
  const [tanggalpraktek, settanggalpraktek] = useState();
  const [jampraktek, setjampraktek] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);
  const [namaDokter, setNamaDokter] = useState();
  const [hapusJadwal, sethapusJadwal] = useState();
  const [btnTab, setbtnTab] = useState("tabel");
  const [today, setToday] = useState(new Date());

  const showModal3 = () => {
    setModalOpen3(true);
  };
  const handleModal3Ok = () => {
    setModalOpen3(false);
  };
  const handleModal3Cancel = () => {
    setModalOpen3(false);
  };

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const onSearch = (value) => {
    const filteredData = dokter.filter((entry) =>
      entry.name.toLowerCase().includes(value)
    );
    setDataDokter(filteredData);
  };

  const openModalJadwal = () => {
    setModalOpen(true);
  };

  const openModalDoctor = (record) => {
    setModalOpen2(true);
    setNamaDokter(record.name);
  };

  const columns = [
    {
      title: "Nama Dokter",
      dataIndex: "name",
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.name.localeCompare(b.name),
      width: 500,
      render: (_, record) => (
        <span
          style={{ cursor: "pointer" }}
          onClick={() => openModalDoctor(record)}
        >
          {record.name}
        </span>
      ),
    },
    {
      title: "Spesialis",
      dataIndex: "position",
      // sorter: (a, b) => a.age - b.age,
      // render: (datetime) => moment(datetime).format("DD MMM, HH.mm"),
      filters: [
        {
          text: "Spesialis Obstetri dan Ginekologi",
          value: "Spesialis Obstetri dan Ginekologi",
        },
        {
          text: "Spesialis Anak",
          value: "Spesialis Anak",
        },
        {
          text: "Spesialis Penyakit Dalam",
          value: "Spesialis Penyakit Dalam",
        },
        {
          text: "Spesialis Anestesi Konsultan Intensive Care",
          value: "Spesialis Anestesi Konsultan Intensive Care",
        },
        {
          text: "Spesialis Gizi",
          value: "Spesialis Gizi",
        },
        {
          text: "Psikolog",
          value: "Psikolog",
        },
        {
          text: "Dokter Umum",
          value: "Dokter Umum",
        },
      ],
      onFilter: (value, record) => record.position.indexOf(value) === 0,
      width: 500,
    },
    {
      title: "Jadwal Praktek",
      dataIndex: "jadwal_praktek",
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.name.localeCompare(b.name),
      width: 200,
    },
    {
      title: "Jam Praktek",
      dataIndex: "jam_praktek",
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.name.localeCompare(b.name),
      width: 200,
    },
  ];

  const disabledDate = (current) => {
    return current && current <= dayjs().endOf("day");
  };

  const onChangeDate = (dateChosen, dateString) => {
    setDate(dateChosen);
  };

  const onChangeHapus = () => {};

  return (
    <>
      <Wrapper className="container-fluid">
        <div className="row">
          <div className="col-md-2 col-12">
            <StyledTitle>{moment(today).format("MMMM YYYY")}</StyledTitle>
          </div>
          <div className="col-md-4 col-12 align-self-center">
            <button
              onClick={() => setbtnTab("kalender")}
              className={
                btnTab == "kalender" ? "buttonTabSelected" : "buttonTab"
              }
            >
              Kalender
            </button>
            <button
              onClick={() => setbtnTab("tabel")}
              className={btnTab == "tabel" ? "buttonTabSelected" : "buttonTab"}
            >
              Tabel
            </button>
          </div>
          <div className="col-md-6 col-12 text-end align-self-center">
            <button className="button" onClick={() => openModalJadwal()}>
              + Tambah Jadwal Baru
            </button>
          </div>
        </div>
        <div className="row">
          <BigCard className="col m-2 p-0">
            <Table
              columns={columns}
              dataSource={dokter}
              onChange={onChange}
              pagination={false}
            />
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
          <h5 className="pb-3 modalDoctorTitle">Jadwal Dokter</h5>

          <div
            className="p-3 my-4"
            style={{ border: "1px solid #ccc", borderRadius: "10px" }}
          >
            <div className="row py-2">
              <div className="col-lg-3 col-12 modalSubtitle align-self-center">
                Dokter Praktek
              </div>
              <div className="col-lg-9 col-12 modalSubtitleData align-self-center">
                <Select
                  placeholder="Nama Dokter"
                  width="100%"
                  onChange={(e) => setdokterSelected(e)}
                  value={dokterSelected}
                >
                  {dokter.map((item, i) => (
                    <Option key={i} value={item.name}>{item.name}</Option>
                  ))}
                </Select>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-lg-3 col-12 modalSubtitle align-self-center">
                Tanggal Praktek
              </div>
              <div className="col-lg-9 col-12 modalSubtitleData align-self-center">
                <DatePicker
                  className="datepickerDaily"
                  placeholder="Pilih Tanggal"
                  format="DD-MM-YY"
                  onChange={onChangeDate}
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-lg-3 col-12 modalSubtitle align-self-center">
                Jam Praktek
              </div>
              <div className="col-lg-5 col-12 modalSubtitleData align-self-center">
                <TimePicker.RangePicker />
                {/* <span className="tambahjam">+ Tambahkan jam praktek</span> */}
              </div>
              <div className="col-lg-4 col-12 modalSubtitleData align-self-center">
                <Select
                  placeholder="Setiap..."
                  width="100%"
                  onChange={(e) => setdokterSelected(e)}
                  value={dokterSelected}
                >
                  <Option value={1}>Setiap Hari Selasa</Option>
                  <Option value={2}>Tidak diulang</Option>
                  <Option value={3}>Setiap Hari</Option>
                  <Option value={4}>Senin sampai Jumat</Option>
                  <Option value={5}>Preferensi</Option>
                </Select>
              </div>
            </div>
          </div>
          <div className="text-end">
            <button className="button px-3 py-1">Simpan</button>
          </div>
        </div>
      </Modal>
      <Modal
        centered
        open={modalOpen2}
        footer={null}
        width={650}
        // onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen2(false)}
      >
        <div className="p-3">
          <h5 className="pb-3 modalDoctorTitle">Jadwal Dokter</h5>

          <div
            className="p-3 my-4"
            style={{ border: "1px solid #ccc", borderRadius: "10px" }}
          >
            <div className="row py-3">
              <div className="col-lg-4 col-12 modalSubtitle">
                Dokter Praktek
              </div>
              <div className="col-lg-8 col-12 modalSubtitleData">
                {namaDokter}
              </div>
            </div>
            <div className="row py-3">
              <div className="col-lg-4 col-12 modalSubtitle">
                Tanggal Praktek
              </div>
              <div className="col-lg-8 col-12 modalSubtitleData">
                {tanggalpraktek}
              </div>
            </div>
            <div className="row py-3">
              <div className="col-lg-4 col-12 modalSubtitle">Jam Praktek</div>
              <div className="col-lg-8 col-12 modalSubtitleData">
                {jampraktek}
              </div>
            </div>
          </div>
          <div className="text-end">
            <button className="buttonAlt py-1 px-3" onClick={showModal3}>
              Hapus Dari Daftar
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        centered
        open={modalOpen3}
        footer={null}
        width={350}
        closable={false}
        // onOk={handleModal3Ok}
        // onCancel={handleModal3Cancel}
      >
        <div className="p-3">
          <h5 className="pb-3 modalDoctorTitle">Hapus Jadwal Berulang</h5>
          <div className="">
            <Radio.Group onChange={onChangeHapus} value={hapusJadwal}>
              <Space direction="vertical">
                <Radio value={1}>Jadwal hari ini saja</Radio>
                <Radio value={2}>Semua Jadwal</Radio>
              </Space>
            </Radio.Group>
          </div>
          <div className="text-end">
            <ModalButtonCancel className="batalkan me-3" onClick={handleModal3Cancel}>
              Batalkan
            </ModalButtonCancel>
            <ModalButtonOk className="ok" onClick={handleModal3Ok}>
              Ok
            </ModalButtonOk>
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

const ModalButtonOk = styled.a`
  color: #09a53e;
  font-family: Poppins;
  font-size: var(--fs-16);
  font-style: normal;
  font-weight: 600;
`;

const ModalButtonCancel = styled.a`
  color: #262626;
  font-family: Poppins;
  font-size: var(--fs-16);
  font-style: normal;
  font-weight: 500;
`;

export default DoctorSchedule;
