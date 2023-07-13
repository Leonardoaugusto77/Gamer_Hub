import { useState } from "react";
import Welcome from "../Welcome";
import {
  Container,
  Form_Container,
  Titles_Form,
} from "../../Styles/Container.style";

export default function Form() {
  const [isWelcomeVisible, setWelcomeVisible] = useState(false);

  return (
    <Container>
      {isWelcomeVisible ? (
        <Welcome />
      ) : (
        <Form_Container>
          <Titles_Form>
            <h1>Create an account</h1>
            <TextForm>
              and get access to the latest releases with unique discounts
            </TextForm>
          </Titles_Form>
        </Form_Container>
      )}
    </Container>
  );
}
