import Link from 'next/link'
import React, { useEffect } from 'react'
import AOS from 'aos';
import BacaSelengkapnya from '../BacaSelengkapnya';
import ButtonAlt from '../ButtonAlt';

const newsList = [
    {
        title:'Tips Menjaga Kesehatan Ibu Hamil dan Janin dalam',
        text:'Kondisi tubuh seorang ibu sangat penting untuk dijaga, terutama pada masa kehamilan. Oleh sebab itu saya',
        link: '/',
        image:'/images/article1.png'
    },
    {
        title:'Tips Merawat Kesehatan Organ Intim Wanita',
        text:'Mulai dari berperan dalam menstruasi, seks, kehamilan, dan persalinan, vagina merupakan sa...',
        link: '/',
        image:'/images/article2.png'
    },
    {
        title:'Cara Mengetahui Siklus Haid Berjalan Normal ata...',
        text:'Siklus menstruasi merupakan serangkaian perubahan yang dialami tubuh wanita setiap bula...',
        link: '/',
        image:'/images/article3.png'
    },
    {
        title:'Apa Perbedaan USG 2D, 3D, dan 4D?',
        text:'Ibu yang sedang mengandung pasti ingin mengetahui perkembangan janin dari waktu k...',
        link: '/',
        image:'/images/article4.png'
    }
];

function ArticleGridHome() {
    useEffect(() => {
        AOS.init();
      }, []);

  return (
    <div className="container my-5" id='artikel'>
        <h1 className='ArticleTitleHome'>Artikel Kesehatan</h1>
        <div className="row justify-content-center" data-aos="fade-up">
        {
            newsList.map((item, index)=>(     
            <div className="col-xl-3 col-lg-5 col-md-6 col-12 p-3" key={index}>
                {/* <Link href={item.link} style={{textDecoration:'none'}}> */}
                <>
                <img src={item.image} width="100%"></img>  
                <div className="cardArticle p-3">
                    <a className="cardArticleTitle">{item.title}</a>
                    <div className="cardArticleText my-2">
                        <p>{item.text}</p>
                    </div>
                    <BacaSelengkapnya link={item.link}></BacaSelengkapnya>
                </div>
                </>
                {/* </Link> */}
            </div>
            ))
        }
        </div>
        <div className="row justify-content-center my-4">
            <div className='col-12 text-center'>
            <ButtonAlt link="/" text="Lihat Lebih Banyak Artikel"></ButtonAlt>
            </div>
        </div>
    </div>
  )
}

export default ArticleGridHome