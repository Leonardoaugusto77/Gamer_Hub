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

export const Titles_Form = styled.div`
  width: 475px;
  margin-bottom: 20px;
`;
