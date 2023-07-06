import React, { useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import { Icon } from "@iconify/react";
import { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import DashboardSection from "../../../components/AdminPage/Dashboard";
import DoctorList from "../../../components/AdminPage/Dashboard/DoctorList";

const { Header, Content, Footer, Sider } = Layout;

const getKeyDisplayName = (key) => {
  switch (key) {
    case "1":
      return "Dashboard";
    case "2":
      return "Appointments";
    case "3":
      return "Patient List";
    case "4":
      return "Doctor List";
    case "5":
      return "Articles";
    case "6":
      return "Settings";
    default:
      return "Unknown";
  }
};

function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState(1);

  const handleMenuSelect = ({ key }) => {
    setSelectedKey(key);
  };

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const items = [
    getItem(
      "Dashboard",
      "1",
      <Icon
        icon="ant-design:home-filled"
        className="me-2"
        style={{
          cursor: "pointer",
          fontSize: "18px",
          color: "#8D8D8D",
        }}
      />
    ),
    getItem(
      "Appointments",
      "2",
      <Icon
        icon="ion:calendar"
        className="me-2"
        style={{
          cursor: "pointer",
          fontSize: "18px",
          color: "#8D8D8D",
        }}
      />
    ),
    getItem(
      "Patient List",
      "3",
      <Icon
        icon="fluent:text-bullet-list-square-person-20-filled"
        className="me-2"
        style={{
          cursor: "pointer",
          fontSize: "18px",
          color: "#8D8D8D",
        }}
      />
    ),
    getItem(
      "Doctor List",
      "4",
      <Icon
        icon="fa6-solid:user-doctor"
        className="me-2"
        style={{
          cursor: "pointer",
          fontSize: "18px",
          color: "#8D8D8D",
        }}
      />
    ),
    getItem(
      "Articles",
      "5",
      <Icon
        icon="ant-design:home-filled"
        className="me-2"
        style={{
          cursor: "pointer",
          fontSize: "18px",
          color: "#8D8D8D",
        }}
      />
    ),
    getItem(
      "Settings",
      "6",
      <Icon
        icon="ant-design:setting-filled"
        className="me-2"
        style={{
          cursor: "pointer",
          fontSize: "18px",
          color: "#8D8D8D",
        }}
      />
    ),
  ];
  return (
    <>
      <Head>
        <title>{getKeyDisplayName(selectedKey.toString())}</title>
      </Head>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          // collapsible
          // collapsed={collapsed}
          // onCollapse={(value) => setCollapsed(value)}
          theme="light"
        >
          <Logo>
            <img src="/images/Logo.svg" />
          </Logo>
          <Menu
            theme="light"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
            onSelect={handleMenuSelect}
          />
        </Sider>
        <Layout>
          {/* <Header
            style={{
              padding: 0,
              background: "#FFFFFF",
            }}
          /> */}
          <Content
            style={{
              margin: "3rem 3rem",
            }}
          >
            {selectedKey == 1 ? (
              <DashboardSection />
            ) : selectedKey == 2 ? (
              <>
                <h1>Appointments</h1>
                <div
                  style={{
                    padding: 24,
                    minHeight: 360,
                    background: "#FFFFFF",
                  }}
                >
                  Jadwal Appointments
                </div>
              </>
            ) : selectedKey == 3 ? (
              <>
                <h1>Patient List</h1>
                <div
                  style={{
                    padding: 24,
                    minHeight: 360,
                    background: "#FFFFFF",
                  }}
                >
                  Patient List
                </div>
              </>
            ) : selectedKey == 4 ? (
              <DoctorList />
            ) : selectedKey == 5 ? (
              <>
                <h1>Articles</h1>
                <div
                  style={{
                    padding: 24,
                    minHeight: 360,
                    background: "#FFFFFF",
                  }}
                >
                  Articles
                </div>
              </>
            ) : selectedKey == 6 ? (
              <>
                <h1>Settings</h1>
                <div
                  style={{
                    padding: 24,
                    minHeight: 360,
                    background: "#FFFFFF",
                  }}
                >
                  Settings
                </div>
              </>
            ) : (
              <></>
            )}
          </Content>
          {/* <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©2023 Created by Ant UED
          </Footer> */}
        </Layout>
      </Layout>
    </>
  );
}

const Logo = styled.div`
  padding: 1.5rem;
`;

export default Dashboard;
