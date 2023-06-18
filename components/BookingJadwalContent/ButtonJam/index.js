import React, { useRef } from "react";
import styled from "styled-components";
import moment from "moment";

function ButtonJam({ text, disabled }) {
  return (
    <Wrapper>
        <StyledButton disabled={disabled}>{moment(text,'HH').format('HH:mm')}</StyledButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 5% 0 0 0;
`;

const StyledButton = styled.button`
  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; */
  padding: 0.8rem 4rem;

  background: #ffffff;
  border: 0.2rem solid #e0e0e0;
  border-radius: 1rem;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: var(--fs-14);

  :focus{
    color: #ffffff;
    background: #DF3034;
  }
`;
export default ButtonJam;
