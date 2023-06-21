import React from "react";
import Head from "next/head";
import Navbar from "../../../components/Navbar";
import FloatingWA from "../../../components/FloatingWA";
import Footer from "../../../components/footer";
import ArticlesPageContent from "../../../components/ArticlesPageContent";
import styled from "styled-components";

function Articles() {
  return (
    <>
      <Head>
        <title>Artikel</title>
      </Head>
      <Navbar></Navbar>
      <StyledSection>
        <ArticlesPageContent />
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

export default Articles;
