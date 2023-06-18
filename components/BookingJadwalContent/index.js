import React from "react";
import styled from "styled-components";
import ChooseBooking from "./ChooseBooking";
import DetailBooking from "./DetailBooking";
import { Card } from "antd";

function BookingJadwalContent() {
  return (
    <Wrapper id="findUs">
      <StyledSectionTitle>Booking Jadwal</StyledSectionTitle>
      <Config>
        <PC>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-9">
                <Card
                  // title={<p>&nbsp;</p>}
                  // headStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.0)', border: 0 }}
                  style={{
                    width: "100%",
                    height: "32rem",
                    backgroundColor: "white", 
                    borderRadius: "1.5rem", 
                  }}
                >
                  <ChooseBooking />
                </Card>
              </div>
              <div className="col-3">
                <DetailBooking />
              </div>
            </div>
          </div>
        </PC>

        <MOBILE></MOBILE>
      </Config>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */

  background: #EDF6FF;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  padding-top: 7.5%;
`;

const Config = styled.div`
  font-family: "Poppins";
  padding: 2% 0 10% 5%;

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

const StyledSectionTitle = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: var(--fs-32);
  color: #a5090c;

  padding: 0 0 0 5%;
`;

export default BookingJadwalContent;
