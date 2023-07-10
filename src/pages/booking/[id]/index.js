import Head from "next/head";
import React from "react";
import Footer from "../../../../components/footer";
import Navbar from "../../../../components/Navbar";
import FloatingWA from "../../../../components/FloatingWA";
import BookingJadwalContent from "../../../../components/BookingJadwalContent";
import { dokter } from "../../../../components/DokterData";

function Booking({id}) {
  return (
    <>
      <Head>
        <title>Booking Jadwal</title>
      </Head>
      <Navbar></Navbar>
      <BookingJadwalContent dokter={dokter} id={id} />
      <FloatingWA></FloatingWA>
      <Footer></Footer>
    </>
  );
}

export default Booking;

export async function getServerSideProps({ req, params }) {
  const { id } = params;

  return {
    props: {
      id: id,
    },
  };
}
