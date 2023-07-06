import React from "react";
import Head from "next/head";
import Navbar from "../../../../components/Navbar";
import FloatingWA from "../../../../components/FloatingWA";
import Footer from "../../../../components/footer";
import { serviceList } from "../../../../components/ServiceData";
import ArticleSlugContent from "../../../../components/ArticleSlugContent";
import ServiceSlugContent from "../../../../components/ServiceSlugContent";
import styled from "styled-components";
import { useRouter } from "next/router";
import moment from "moment";

function Slug() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <Head>
        <title>Layanan</title>
      </Head>
      <Navbar></Navbar>
      <StyledSection>
        <ServiceSlugContent
          data={serviceList.filter(
            (item) =>
              item.slug + moment(item.created).format("YYYYMMDD") === slug
          )}
        />
      </StyledSection>
      <FloatingWA></FloatingWA>
      <Footer></Footer>
    </>
  );
}
const StyledSection = styled.div`
  background: #f9fcff;
  padding-top: 10%;
`;
export default Slug;
