import React, { useState } from "react";
import styled from "styled-components";
import { Table, Tag, Select } from "antd";
import { dokter } from "../../../DokterData";
import moment from "moment";
import "moment/locale/id";
moment.locale("id");

const columns = [
  {
    title: "Nama Dokter",
    dataIndex: "name",
    defaultSortOrder: "ascend",
    sorter: (a, b) => a.name.localeCompare(b.name),
    width: 500,
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
    render: (text, record) => {
      const statusLabels = {
        1: "Prakter Rutin",
        2: "Dengan Janji",
      };

      return (
        <Select
          defaultValue={text.toString()}
          onChange={(value) => handleStatusChange(value, record)}
          status={text == 1 ? "success" : ""}
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

const handleStatusChange = (value, record) => {
  console.log(`Status changed to ${value} for record:`, record);
};

function DoctorList() {
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <Wrapper className="container-fluid">
      <StyledTitle>Daftar Dokter</StyledTitle>
      <div className="row">
        <BigCard className="col m-2">
          {/* <StyledTitle>Jadwal Booking Konsultasi</StyledTitle> */}
          <div>
            <Table
              columns={columns}
              dataSource={dokter}
              onChange={onChange}
              pagination={false}
            />
          </div>
        </BigCard>
      </div>
    </Wrapper>
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
