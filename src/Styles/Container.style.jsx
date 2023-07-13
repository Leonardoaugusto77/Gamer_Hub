import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Form_Container = styled(Container)`
  flex-direction: column;
  width: 35%;
  margin: 0 auto;
`;

export const Form_inputs_container = styled(Form_Container)`
  outline: none;
  height: 15px;
`;
