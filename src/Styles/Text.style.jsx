import styled from "styled-components";

export const Title = styled.h1`
  font-family: Poppins;
  font-size: 35px;
`;

export const TextForm = styled.p`
  font-size: ${(props) => props.Size};
  margin-top: 10px;

  strong {
    text-decoration: underline;
  }
`;
