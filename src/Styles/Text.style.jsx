import styled from "styled-components";

export const Title = styled.h1`
  font-family: Poppins;
  font-size: ${(props) => props.size};

  @media (max-width: 1024px) {
    text-align: ${(props) => props.align};
    font-size: 25px;
  }
`;

export const Text = styled.p`
  margin-top: 10px;
  text-align: ${(props) => props.align};
  width: ${(props) => props.width};
  font-size: ${(props) => props.size};

  strong {
    margin-left: 5px;
    text-decoration: underline;
  }

  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;
