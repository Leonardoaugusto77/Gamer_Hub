import styled from "styled-components";

export const Title = styled.h1`
  font-family: Poppins;
  font-size: ${(props) => props.size};

  @media (max-width: 1024px) {
    text-align: ${(props) => props.align};
    font-size: 30px;
  }

  @media (max-width: 768px) {
    font-size: 55px;
    width: 100%;
    text-align: center;
  }

  @media (max-width: 425px) {
    font-size: 40px;
    width: 50vh;
    text-align: center;
  }

  @media (max-width: 375px) {
    width: 100%;
    font-size: 35px;
  }

  @media (max-width: 320px) {
    width: 40vh;
    font-size: 34px;
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

  @media (max-width: 768px) {
    font-size: 25px;
    width: 100vh;
    text-align: center;
  }

  @media (max-width: 425px) {
    width: 55vh;
    font-size: 20px;
    text-align: center;
  }

  @media (max-width: 375px) {
    width: 50vh;
    font-size: 15px;
    font-weight: 700;
  }

  @media (max-width: 320px) {
    width: 40vh;
    width: 40vh;
    font-size: 15px;
    font-weight: 700;
  }
`;
