import styled from "styled-components";

export const Title = styled.h1`
  font-family: Poppins;
  font-size: 35px;

  @media (max-width: 1024px) {
    width: 80vh;
    text-align: ${(props) => props.align};
    font-size: 25px;
  }
`;

export const TextForm = styled.p`
  text-align: ${(props) => props.align};
  width: ${(props) => props.width};
  font-size: 20px;
  margin-top: 10px;

  strong {
    text-decoration: underline;
  }

  @media (max-width: 1024px) {
    width: ${(props) => props.width};
    text-align: ${(props) => props.align};
    font-size: ${(props) => props.Size};
  }
`;
