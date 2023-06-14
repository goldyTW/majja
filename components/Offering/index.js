import React, { useEffect } from "react";
import styled from "styled-components";
import ImgCarousel from "./ImageCarousel";
import Aos from "aos";

function Offering() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Wrapper id="offering">
      <AboutConfig>
        <PC>
          <div className="container-fluid" data-aos="fade up">
            <div className="row align-items-center">
              <div className="col-6">
                <ImgCarousel />
              </div>
              <div className="col-6">
                <StyledTitle>
                  MAJJA Klinik menawarkan layanan konsultasi dan pengobatan
                  lengkap untuk masalah{" "}
                  <span style={{ color: "#A5090C" }}>kesuburan.</span>
                </StyledTitle>
                <StyledText>
                  Dengan tim medis ahli di bidang Obstetri, Ginekologi, dan
                  Andrologi, MAJJA Klinik menggunakan teknologi mutakhir dan
                  metode efektif untuk memberikan diagnosis akurat dan
                  penanganan yang tepat.
                </StyledText>
                <ImgWrapper>
                  <img
                    src="/images/whymajja.png"
                    alt="why-majja"
                    width="100%"
                  />
                </ImgWrapper>
              </div>
            </div>
          </div>
        </PC>

        <MOBILE>
          <div className="container-fluid text-center">
            <div className="row align-items-center">
              <div className="col-12">
                <ImgCarousel />
              </div>
              <div className="col-12">
                <StyledTitle>
                  MAJJA Klinik menawarkan layanan konsultasi dan pengobatan
                  lengkap untuk masalah{" "}
                  <span style={{ color: "#A5090C" }}>kesuburan.</span>
                </StyledTitle>
                <StyledText>
                  Dengan tim medis ahli di bidang Obstetri, Ginekologi, dan
                  Andrologi, MAJJA Klinik menggunakan teknologi mutakhir dan
                  metode efektif untuk memberikan diagnosis akurat dan
                  penanganan yang tepat.
                </StyledText>
                <ImgWrapper>
                  <img
                    src="/images/whymajja.png"
                    alt="why-majja"
                    width="100%"
                  />
                </ImgWrapper>
              </div>
            </div>
          </div>
        </MOBILE>
      </AboutConfig>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */

  background: transparent;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const ImgWrapper = styled.div`
  margin: 0 5%;
`;

const AboutConfig = styled.div`
  font-family: "Poppins";
  padding: 5% 0 5% 5%;

  overflow: hidden;

  @media (max-width: 1121px) {
    padding: 5%;
  }
`;

const PC = styled.div`
  @media (max-width: 1120px) {
    display: none;
  }
`;

const MOBILE = styled.div`
  @media (min-width: 1121px) {
    display: none;
  }
`;

const StyledTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: var(--fs-32);
  line-height: 150%;
  color: #262626;

  margin-bottom: 5%;

  @media (max-width: 1121px) {
    font-size: var(--fs-32);
  }

  @media (max-width: 768px) {
    font-size: var(--fs-22);
  }

  @media (max-width: 468px) {
    font-size: var(--fs-28);
  }

  @media (max-width: 368px) {
    font-size: var(--fs-26);
  }
`;

const StyledText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: var(--fs-16);
  line-height: 182%;
  color: #8d8d8d;

  @media (max-width: 1121px) {
    font-size: var(--fs-16);
  }

  @media (max-width: 768px) {
    font-size: var(--fs-14);
  }

  @media (max-width: 468px) {
    font-size: var(--fs-14);
  }

  @media (max-width: 368px) {
    font-size: var(--fs-12);
  }
`;

const IMG = styled.img`
  width: 100%;

  @media (max-width: 1121px) {
    width: 50%;
    margin: 10% auto;
  }

  /* @media (max-width: 768px) {
    font-size: var(--fs-42);
  }

  @media (max-width: 468px) {
    font-size: var(--fs-32);
  }

  @media (max-width: 368px) {
    font-size: var(--fs-28);
  } */
`;

export default Offering;
