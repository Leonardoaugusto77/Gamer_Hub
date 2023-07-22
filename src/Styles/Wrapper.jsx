import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => props.direction};
  /* background-color: ${({ theme }) => theme.colors.primary}; */
`;

export const Form_Container = styled(Wrapper)`
  flex-direction: column;
  width: 35%;
  margin: 0 auto;
`;

export const Form_inputs_container = styled(Form_Container)`
  outline: none;
  height: 15px;
`;

export const Titles_Form_container = styled.div`
  width: 475px;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    width: 70vh;
  }
`;

export const Form_container_input = styled.div`
  margin-bottom: 15px;
`;

export const Slider_Section = styled(Wrapper)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: end;

  img {
    width: 500px;
    height: 500px;
    margin-right: 135px;
    filter: drop-shadow(7px 7px 7px rgba(0, 0, 0, 0.25));
    background-color: aliceblue;

    @media (max-width: 1024px) {
      width: 400px;
      height: 400px;
      margin-right: 25px;
      margin-left: 25px;
    }
  }
`;

export const Arrows_container = styled(Wrapper)`
  position: absolute;
  width: 75vh;
  top: 115px;

  @media (max-width: 1024px) {
    width: 35vh;
    top: 65px;
  }
`;

export const Info_Game_Slider = styled.div`
  width: 100%;
  margin-top: 10px;
  position: absolute;
  top: 380px;
  width: 50%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const Title_Game = styled.div`
  position: absolute;
  width: 60%;
  right: 205px;
  bottom: -110px;
  color: #ffffff;
  font-size: 20px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;

  @media (max-width: 1010px) {
    right: 100px;
    bottom: -40px;
  }

  @media (max-width: 1024px) {
    right: 90px;
    bottom: -65px;
  }
`;
