import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const Button = styled.button`
  display: flex;
  width: 100%;
  gap: 8px;
  height: 45px;
  font-size: 15px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 3px;
  width: 470px;
  margin-top: ${(props) => props.marginT};
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.35);
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #000000;
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.secudary};
  }

  @media (max-width: 1024px) {
    width: 70vh;
  }

  @media (max-width: 768px) {
    font-size: 25px;
    width: 100vh;
    text-align: center;
  }

  @media (max-width: 425px) {
    width: 55vh;
  }

  @media (max-width: 375px) {
    width: 50vh;
  }
  @media (max-width: 320px) {
    width: 40vh;
    font-size: 15px;
  }
`;

export const GoogleIcon = styled(FcGoogle)`
  width: 20px;
  height: 20px;
`;

export const ArrowR = styled(FiChevronRight)`
  color: #ffffff;
  cursor: pointer;
  border: 5px solid #ffffff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;
export const ArrowL = styled(FiChevronLeft)`
  color: #ffffff;
  cursor: pointer;
  border: 5px solid #ffffff;
  border-radius: 50%;
  width: 40px;
  height: 40px;

  margin-right: 15px;
`;
