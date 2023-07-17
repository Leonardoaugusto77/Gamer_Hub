import { useState } from "react";
import Welcome from "../Welcome";
import { Input } from "../../Styles/Inputs.style";
import { Form_container_input } from "../../Styles/Wrapper";
import { TextForm, Title } from "../../Styles/Text.style";
import {
  Wrapper,
  Form_Container,
  Titles_Form_container,
} from "../../Styles/Wrapper";
import { Button } from "../../Styles/Button.style";
export default function Form({ GameHubAPI }) {
  const [isWelcomeVisible, setWelcomeVisible] = useState(false);

  return (
    <Wrapper>
      {isWelcomeVisible ? (
        <Welcome />
      ) : (
        <Form_Container>
          <Titles_Form_container>
            <Title>Create an account</Title>
            <TextForm Size={18}>
              and get access to the latest releases with unique discounts
            </TextForm>
          </Titles_Form_container>
          <Form_container_input>
            <Input type="text" placeholder="Nome"></Input>
            <Input type="text" placeholder="Email"></Input>
            <Input type="password" placeholder="Password"></Input>
          </Form_container_input>
          <Button>Create account</Button>
          <Button>Sign up with Google</Button>
          <TextForm Size={16}>
            Already have an account? <strong>Log in</strong>
          </TextForm>
        </Form_Container>
      )}
    </Wrapper>
  );
}
