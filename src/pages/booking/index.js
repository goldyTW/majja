import Head from "next/head";
import React from "react";
import Footer from "../../../components/footer";
import Navbar from "../../../components/Navbar";
import FloatingWA from "../../../components/FloatingWA";
import BookingJadwalContent from "../../../components/BookingJadwalContent";

function Booking() {
  return (
    <>
      <Head>
        <title>Booking Jadwal</title>
      </Head>
      <Navbar></Navbar>
      <BookingJadwalContent />
      <FloatingWA></FloatingWA>
      <Footer></Footer>
    </>
  );
}

export default Booking;
