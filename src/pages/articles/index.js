import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../../../components/Navbar";
import FloatingWA from "../../../components/FloatingWA";
import Footer from "../../../components/footer";
import ArticlesPageContent from "../../../components/ArticlesPageContent";
import styled from "styled-components";
import AOS from "aos";
import { Input, Pagination } from "antd";
import { useQuery, gql, ApolloClient, InMemoryCache, useMutation } from '@apollo/client';
import { addApolloState, initializeApollo } from "../../../lib/apolloClient";
import BacaSelengkapnya from "../../../components/BacaSelengkapnya";
import moment from "moment";
import "moment/locale/id";
import { useRouter } from "next/router";
moment.locale("id");

const TOP = 8;
const QUERY_BLOG = gql`
query artikel($top: Int, $skip:Int){
  queryArtikelContentsWithTotal(top:$top, skip:$skip){
    total
    items{
    id
    data{
      judul{
        iv
      }
      slug{
        iv
      }
      photo{
        iv
      }
      date{
        iv
      }
      content{
        iv
      }
      creator{
        iv
      }
    }
    }
  }
}`

function Articles({data}) {
  const { Search } = Input;
  const [newsList, setNewsList] = useState([]);
  const [total, setTotal] = useState(0);
  const router = useRouter();
  const apolloClient = new ApolloClient({
    uri: 'https://cloud.squidex.io/api/content/artikel/graphql',
    cache: new InMemoryCache({
      dataIdFromObject: (o) => (o.id ? `${o.__typename}:${o.id}` : null),
    }),
  });

  useEffect(() => {
    data.items && setNewsList(data.items);
    data.total && setTotal(data.total);
  }, [data]);

  useEffect(() => {
    AOS.init();
  }, []);

  const loadNews = async (top, skip) => {
    // let orderby = '';
    // if (sort === 'asc') orderby += "data/date/iv asc";
    // if (sort === 'desc') orderby += "data/date/iv desc";

    const newsMore = await apolloClient.query({
      query: QUERY_BLOG,
      variables: {
        top,
        skip,
      },
    });
    
    return newsMore.data;
  };

  const handleLoadMore = async (value) => {
    // if (total <= newsArr.length) return;
    var x = Math.ceil(total / TOP);
    var i;
    for (i=0; i<x; i++){
      if(value.selected == i){
        const moreNews = await loadNews(TOP, i*TOP);
        setNewsList(moreNews.queryArtikelContentsWithTotal.items);
      }
    }
  };

  // const handlePagination = async (value) => {
  //   if (value * 16 - 1 > newsList.length) {
  //     setDataNews([...slice2(newsList, (value - 1) * 16, newsList.length)]);
  //   } else {
  //     setDataNews([...slice2(newsList, (value - 1) * 16, value * 16)]);
  //   }
  // };


  const onSearch = (value) => {
    const filteredData = data.items.filter((entry) =>
      entry.data.judul.iv.toLowerCase().includes(value)
    );
    setNewsList(filteredData);
  };

  return (
    <>
      <Head>
        <title>Artikel</title>
      </Head>
      <Navbar></Navbar>
      <StyledSection>
        <Wrapper>
          <StyledTitle>Artikel Kesehatan Terkini Untuk Anda</StyledTitle>
          <SearchWrapper className="py-2">
            <Search
              className="py-2"
              placeholder="Cari Artikel Disini"
              allowClear
              onSearch={onSearch}
            />
          </SearchWrapper>
          <div className="row" data-aos="fade-up">
            {newsList?.map((item, index) => (
              <div className="col-xl-3 col-lg-5 col-md-6 col-12 p-3" key={index} onClick={()=> router.push('/articles/' + item.data.slug.iv)}>
                {/* <Link href={item.link} style={{textDecoration:'none'}}> */}
                <>
                  <img src={item.data.photo.iv} width="100%"></img>
                  <CardWrapper className="p-3">
                    <CardTitleWrapper>
                      <CardTitle>{item.data.judul.iv}</CardTitle>
                    </CardTitleWrapper>
                    <CardBodyText>
                      {moment(item.data.date.iv).format("DD MMMM YYYY")}
                    </CardBodyText>
                    <CardBodyWrapper className="my-2">
                      <CardBodyText><div dangerouslySetInnerHTML={{__html: item.data.content.iv}}></div> </CardBodyText>
                    </CardBodyWrapper>
                    <BacaSelengkapnya link={'/articles/' + item.data.slug.iv}></BacaSelengkapnya>
                  </CardWrapper>
                </>
                {/* </Link> */}
              </div>
            ))}
          </div>
          <div className="col-12 text-center py-4">
            <Pagination
              // onChange={(value) => handlePagination(value)}
              onChange={(value)=> handleLoadMore(value)}
              defaultCurrent={1}
              total={newsList.length}
            />
          </div>
        </Wrapper>
      </StyledSection>
      <FloatingWA></FloatingWA>
      <Footer></Footer>
    </>
  );
}

const StyledSection = styled.section`
  background: #f9fcff;
  padding-top: 10%;
`;


const Wrapper = styled.div`
  padding: 0% 5%;

  @media(max-width:576px){
    padding: 30% 5%;
  }
`;


const SearchWrapper = styled.div`
  /* font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: var(--fs-16); */

  width: 65%;
  margin: 1% 0;
`;

const StyledTitle = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: var(--fs-32);
  color: #a5090c;
  
  margin-bottom: 2%;
`;

const CardWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 50px rgba(192, 192, 192, 0.3);
  border-radius: 0 0 10px 10px;
  height: 17rem;
`;

const CardTitleWrapper = styled.div`
  text-decoration: none;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const CardTitle = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: var(--fs-18);
  color: #262626;
`;

const CardBodyWrapper = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

const CardBodyText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: var(--fs-14);
  color: #8d8d8d;
`;

export default Articles;

export async function getServerSideProps(){
  const apolloClient = initializeApollo()
  
  let {data} = await apolloClient.query({
      query: QUERY_BLOG,
      variables: { top: TOP, skip: 0 },
  })

  if(data.queryArtikelContentsWithTotal.length < 0){
    return {
      notFound: true,
    }
  }

  return addApolloState(apolloClient, {
    props: {
      data:data.queryArtikelContentsWithTotal
    }
  })
}
