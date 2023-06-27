import React, { useState } from "react";
import styled from "styled-components";
import { Table, Tag, Select } from "antd";
import { dataSource } from "../../DashboardData";
import moment from "moment";
import "moment/locale/id";
moment.locale("id");

const { Option } = Select;

const columns = [
  {
    title: "Nama Pasien",
    dataIndex: "name",
    defaultSortOrder: "ascend",
    sorter: (a, b) => a.name.localeCompare(b.name),
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

const handleStatusChange = (value, record) => {
  console.log(`Status changed to ${value} for record:`, record);
};

function Dashboard() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <Wrapper className="container-fluid">
      <StyledTitle>Dashboard</StyledTitle>
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
