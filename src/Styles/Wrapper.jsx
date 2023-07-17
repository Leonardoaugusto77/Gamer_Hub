import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
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
  margin-bottom: 20px;
`;

export const Form_container_input = styled.div`
  width: 475px;
`;

export const Slider_Section = styled(Wrapper)`
  width: 100%;
  flex-direction: column;
  align-items: center;

  img {
    width: 500px;
    height: 500px;
    filter: drop-shadow(7px 7px 7px rgba(0, 0, 0, 0.25));
    background-color: aliceblue;
  }
`;
