import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";

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
  margin-bottom: 20px;
  background-color: #101727;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.35);
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #000000;
    font-weight: bold;
    background-color: #00d9ff;
  }

  @media (max-width: 1024px) {
    width: 70vh;
  }
`;

export const GoogleIcon = styled(FcGoogle)`
  width: 20px;
  height: 20px;
`;
