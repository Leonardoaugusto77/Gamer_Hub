import styled from "styled-components";

export const Input = styled.input`
  width: 475px;
  font-size: 17px;
  border: none;
  border-bottom: 1px solid;
  margin-top: 4px;
  outline: none;
  margin-bottom: 20px;
  font-family: Poppins;

  @media (max-width: 1024px) {
    width: 70vh;
  }

  @media (max-width: 768px) {
    width: 100vh;
  }

  @media (max-width: 425px) {
    width: 55vh;
  }

  @media (max-width: 375px) {
    width: 50vh;
  }

  @media (max-width: 320px) {
    width: 40vh;
  }
`;
