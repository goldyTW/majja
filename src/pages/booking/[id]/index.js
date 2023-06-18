import Head from "next/head";
import React from "react";
import Footer from "../../../../components/footer";
import Navbar from "../../../../components/Navbar";
import FloatingWA from "../../../../components/FloatingWA";
import BookingJadwalContent from "../../../../components/BookingJadwalContent";

const dokter = [
  {
      id:1,
      name:'Dr.RM Denny Dhanardono, MPH&TM, Sp.OG-KFER',
      position:'Spesialis Obstetri dan Ginekologi',
      image:'images/dr_denny.png',
      xp:20,
      jadwal:[
        {
          hari:'Senin',
          jam:'10.00-12.00'
        },
        {
          hari:'Selasa',
          jam:''
        },
        {
          hari:'Rabu',
          jam:''
        },
        {
          hari:'Kamis',
          jam:'10.00-12.00'
        },
        {
          hari:'Jumat',
          jam:''
        },
        {
          hari:'Sabtu',
          jam:''
        },
      ]
  },
  {
      id:2,
      name:'Dr. Harianto Wijaya, SpOG-KFER',
      position:'Spesialis Obstetri dan Ginekologi',
      image:'images/dr_harianto.png',
      xp:18,
      jadwal:[
        {
          hari:'Senin',
          jam:'',
        },
        {
          hari:'Selasa',
          jam:'08.00-10.00',
          jam2:'17.00-20.00'
        },
        {
          hari:'Rabu',
          jam:'08.00-10.00',
          jam2:'17.00-21.00'
        },
        {
          hari:'Kamis',
          jam:'08.00-10.00',
          jam2:'17.00-21.00'
        },
        {
          hari:'Jumat',
          jam:'08.00-10.00',
          jam2:'17.00-21.00'
        },
        {
          hari:'Sabtu',
          jam:'10.00-15.00'
        },
      ]
  },
  {
      id:3,
      name:'Dr. Cindy Rani, SpOG-KFER',
      position:'Spesialis Obstetri dan Ginekologi',
      image:'images/dr_cindy.png',
      xp:15,
      jadwal:[
        {
          hari:'Senin',
          jam:'08.00-10.00',
          jam2:'17.00-21.00'
        },
        {
          hari:'Selasa',
          jam:'08.00-10.00',
          jam2:'17.00-21.00'
        },
        {
          hari:'Rabu',
          jam:'08.00-10.00',
          jam2:'17.00-21.00'
        },
        {
          hari:'Kamis',
          jam:'08.00-10.00',
          jam2:'17.00-21.00'
        },
        {
          hari:'Jumat',
          jam:'08.00-10.00',
          jam2:'17.00-21.00'
        },
        {
          hari:'Sabtu',
          jam:'Dengan Perjanjian'
        },
      ]
  },
  {
      id:4,
      name:'Dr. Edward D. Suwito,Sp.OG,MARS',
      position:'Spesialis Obstetri dan Ginekologi',
      image:'images/dr_edward.png',
      xp:10,
      jadwal:[
        {
          hari:'Senin',
          jam:'',
        },
        {
          hari:'Selasa',
          jam:'',
        },
        {
          hari:'Rabu',
          jam:'',
        },
        {
          hari:'Kamis',
          jam:'',
        },
        {
          hari:'Jumat',
          jam:'',
        },
        {
          hari:'Sabtu',
          jam:'10.00-15.00'
        },
      ]
  },
  {
      id:5,
      name:'Dr. Juliana, SpA',
      position:'Spesialis Anak',
      image:'images/dr_juliana.png',
      xp:7,
      jadwal:[
        {
          hari:'Senin',
          jam:'08.00-10.00'
        },
        {
          hari:'Selasa',
          jam:''
        },
        {
          hari:'Rabu',
          jam:'08.00-10.00'
        },
        {
          hari:'Kamis',
          jam:''
        },
        {
          hari:'Jumat',
          jam:''
        },
        {
          hari:'Sabtu',
          jam:''
        },
      ]
  },
  {
      id:6,
      name:'Dr. Lioe Ivana, Sp.A',
      position:'Spesialis Anak',
      image:'images/dr_lioe.png',
      xp:14,
      jadwal:[
        {
          hari:'Senin',
          jam:'17.00-20.00'
        },
        {
          hari:'Selasa',
          jam:'17.00-20.00'
        },
        {
          hari:'Rabu',
          jam:'17.00-20.00'
        },
        {
          hari:'Kamis',
          jam:'17.00-20.00'
        },
        {
          hari:'Jumat',
          jam:'17.00-20.00'
        },
        {
          hari:'Sabtu',
          jam:''
        },
      ]
  },
  {
      id:7,
      name:'Dr. Hendarto Natadidjaja, MARS, Sp.PD',
      position:'Spesialis Penyakit Dalam',
      image:'images/dr_hendarto.png',
      xp:17,
      jadwal:[ 
        {
          hari:'Senin',
          jam:'Dengan Perjanjian'
        },
        {
          hari:'Selasa',
          jam:'Dengan Perjanjian'
        },
        {
          hari:'Rabu',
          jam:'Dengan Perjanjian'
        },
        {
          hari:'Kamis',
          jam:'Dengan Perjanjian'
        },
        {
          hari:'Jumat',
          jam:'Dengan Perjanjian'
        },
        {
          hari:'Sabtu',
          jam:'Dengan Perjanjian'
        },
      ]
  },
  {
    id:8,
    name:'Dr. Stephanie Dewi, Sp.PD., BmedSc',
    position:'Spesialis Penyakit Dalam',
    image:'images/dr_stephanie.png',
    xp:9,
    jadwal:[ 
      {
        hari:'Senin',
        jam:'08.00-10.00'
      },
      {
        hari:'Selasa',
        jam:''
      },
      {
        hari:'Rabu',
        jam:''
      },
      {
        hari:'Kamis',
        jam:''
      },
      {
        hari:'Jumat',
        jam:''
      },
      {
        hari:'Sabtu',
        jam:''
      },
    ]
  },
  {
    id:9,
    name:'Dr. Antin Tri Laksmi, Sp.An-K',
    position:'Spesialis Anestesi Konsultan Intensive Care',
    image:'images/dr_antin.png',
    xp:12,
    jadwal:[ 
      {
        hari:'Senin',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Selasa',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Rabu',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Kamis',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Jumat',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Sabtu',
        jam:'Dengan Perjanjian'
      },
    ]
  },
  {
    id:10,
    name:'Dr. Lineke Guntara, Sp.GK',
    position:'Spesialis Gizi',
    image:'images/dr_lineke.png',
    xp:8,
    jadwal:[ 
      {
        hari:'Senin',
        jam:''
      },
      {
        hari:'Selasa',
        jam:''
      },
      {
        hari:'Rabu',
        jam:''
      },
      {
        hari:'Kamis',
        jam:''
      },
      {
        hari:'Jumat',
        jam:''
      },
      {
        hari:'Sabtu',
        jam:'09.00-15.00'
      },
    ]
  },
  {
    id:11,
    name:'Nadia Merlin S.Psi, M.Sc',
    position:'Psikolog',
    image:'images/dr_nadia.png',
    xp:6,
    jadwal:[ 
      {
        hari:'Senin',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Selasa',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Rabu',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Kamis',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Jumat',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Sabtu',
        jam:'Dengan Perjanjian'
      },
    ]
  },
  {
    id:12,
    name:'Dr. Lalan Melia, DIPL. CIDESCO',
    position:'Dokter Umum',
    image:'images/dr_lalan.png',
    xp:5,
    jadwal:[ 
      {
        hari:'Senin',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Selasa',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Rabu',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Kamis',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Jumat',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Sabtu',
        jam:'Dengan Perjanjian'
      },
    ]
  },
  {
    id:13,
    name:'Dr. Raymond Andhika',
    position:'Dokter Umum',
    image:'images/dr_raymond.png',
    xp:8,
    jadwal:[ 
      {
        hari:'Senin',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Selasa',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Rabu',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Kamis',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Jumat',
        jam:'Dengan Perjanjian'
      },
      {
        hari:'Sabtu',
        jam:'Dengan Perjanjian'
      },
    ]
  },
]

function Booking() {
  return (
    <>
      <Head>
        <title>Booking Jadwal</title>
      </Head>
      <Navbar></Navbar>
      <BookingJadwalContent dokter={dokter}/>
      <FloatingWA></FloatingWA>
      <Footer></Footer>
    </>
  );
}

export default Booking;
