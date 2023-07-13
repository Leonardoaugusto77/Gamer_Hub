import { useState } from "react";
import Welcome from "../Welcome";
import {
  Container,
  Form_Container,
  Titles_Form,
} from "../../Styles/Container.style";

import { TextForm, Title } from "../../Styles/Text.style";

export default function Form({ GameHubAPI }) {
  const [isWelcomeVisible, setWelcomeVisible] = useState(false);

  return (
    <Container>
      {isWelcomeVisible ? (
        <Welcome />
      ) : (
        <Form_Container>
          <Titles_Form>
            <Title>Create an account</Title>
            <TextForm>
              and get access to the latest releases with unique discounts
            </TextForm>
          </Titles_Form>
        </Form_Container>
      )}
    </Container>
  );
}
