import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/router";
// onClick={()=>window.open(link, '_blank')}
const HeaderWrapper = styled.header`
  background: transparent;
  padding: 1.5rem;
  padding-left: 3rem;
  padding-right: 3rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Menu = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: center;
  flex-grow: 1;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: var(--fs-14);
  // line-height: 200%;

  li {
    margin-left: 2.5rem;
    cursor: pointer;

    a {
      text-decoration: none;
      color: #9c9c9c;
      position: relative;

      &:hover {
        color: #666666;
      }

      &.active {
        color: #df3034;
        &::after {
          content: "";
          position: absolute;
          width: 0.4rem;
          height: 0.4rem;
          background-color: #df3034;
          border-radius: 50%;
          bottom: -1rem;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
          opacity: 1;
        }
      }
    }
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.isMenuOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    background: #f5f5f5;
    padding: 20px;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 999;

    li {
      margin: 10px 0;
    }
  }
`;

const LoginButton = styled.button`
  /* background: #df3034; */
  margin-bottom:15px;
  border: 0.2rem solid #df3034;
  // padding: 0.65rem 1.3rem;
  // border-radius: 0.5rem;
  cursor: pointer;
  color: #ffffff;

  // background-image: -webkit-linear-gradient(
  //   30deg,
  //   #df3034 50%,
  //   transparent 50%
  // );
  // background-image: linear-gradient(30deg, #df3034 50%, white 50%);
  // background-size: 31.25rem;
  // background-repeat: no-repeat;
  // background-position: 0%;
  // -webkit-transition: background 300ms ease-in-out;
  background-color: #df3034;
  // transition: background 300ms ease-in-out;
  transition: 0.5s ease-in-out;
  border-radius: 8px;
  padding: 8px 16px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    // background-position: 100%;
    color: white;
    // transform: scaleX(1.05);
    border: 0.2rem solid #A5090C;
    background-color: #A5090C;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const LoginButtonMobile = styled.button`
  background: #df3034;
  border-radius: 8px;
  padding: 8px 16px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background: #a5090c;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const BurgerIcon = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <>
      <HeaderWrapper
        style={{
          backgroundColor: "rgba(250, 250, 250, 0.8)",
          backdropFilter: "blur(5px)",
          boxShadow: router.pathname != "/" ? " 0px 0px 2rem rgba(192, 192, 192, 0.25)" : "",
          transition: "background 300ms ease-out 0s",
        }}
      >
        <Nav>
          <Logo>
            <Link href="/">
              <img src="/images/Logo.svg" />
            </Link>
          </Logo>
          <Menu isMenuOpen={isMenuOpen}>
            <li>
              <Link href="/" className={router.pathname == "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/tentang"
                className={router.pathname == "/tentang" ? "active" : ""}
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                href="/doctor"
                className={router.pathname == "/doctor" ? "active" : ""}
              >
                Dokter
              </Link>
            </li>
            <li>
              <Link
                href="/layanan"
                className={router.pathname == "/layanan" ? "active" : ""}
              >
                Layanan
              </Link>
            </li>
            <li>
              <Link
                href="/artikel"
                className={router.pathname == "/artikel" ? "active" : ""}
              >
                Artikel
              </Link>
            </li>
            <li>
              <Link
                href="/hubungiKami"
                className={router.pathname == "/hubungiKami" ? "active" : ""}
              >
                Hubungi Kami
              </Link>
            </li>
            <li>
              <Link href="/booking">
                <LoginButtonMobile>Booking Jadwal</LoginButtonMobile>
              </Link>
            </li>
          </Menu>
          <Link href="/doctor">
            <LoginButton>Booking Jadwal</LoginButton>
          </Link>
          <BurgerIcon onClick={toggleMenu}>
            {isMenuOpen ? (
              <Icon
                icon="ic:round-close"
                className=""
                style={{ cursor: "pointer", fontSize: "24px" }}
              />
            ) : (
              <Icon
                icon="ic:round-menu"
                className=""
                style={{ cursor: "pointer", fontSize: "24px" }}
              />
            )}
          </BurgerIcon>
        </Nav>
      </HeaderWrapper>
    </>
  );
};

export default Header;
