import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Footer from '../../components/footer';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import VideoSection from '../../components/video-section';
import Testimonies from '../../components/Testimonies';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
       <title>Majja</title>
       <meta name="description" content="majja" />
       <meta property="og:title" content="Majja" />
       <meta property="og:description" content="majja" />
       <meta property="og:image" content="/images/LogoRounded.png" />
       <meta property="og:url" content="https://majja.com" />
     </Head>
     <Navbar></Navbar>
     <Hero></Hero>
     <Testimonies></Testimonies>
     <VideoSection></VideoSection>
     <Footer></Footer>
   </>
  )
}
