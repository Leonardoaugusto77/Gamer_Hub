import { useState } from "react";
import { GoogleIcon } from "../../Styles/Button.style";
import Welcome from "../Welcome";
import { Input } from "../../Styles/Inputs.style";
import { Form_container_input } from "../../Styles/Wrapper";
import { Text, Title } from "../../Styles/Text.style";
import {
  Wrapper,
  Form_Container,
  Titles_Form_container,
} from "../../Styles/Wrapper";
import { Button } from "../../Styles/Button.style";
export default function Form({ toggleSlider }) {
  const [isWelcomeVisible, setWelcomeVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleButtonClick = () => {
    if (name === "" || email === "" || password === "") {
      return window.alert(
        "Os Campos foram preenchidos incorretamente, verifique e tente novamente!"
      );
    }

    setWelcomeVisible(true);
    toggleSlider();
  };

  const handleBackButton = () => {
    setWelcomeVisible(false);
    toggleSlider();
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const StyleLog = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8",
  };

  return (
    <Wrapper>
      {isWelcomeVisible ? (
        <Welcome handleBackButton={handleBackButton} />
      ) : (
        <Form_Container>
          <Titles_Form_container>
            <Title size="35px">Create an account</Title>
            <Text size="18px" align="left" width="80vh">
              and get access to the latest releases with unique discounts
            </Text>
          </Titles_Form_container>
          <Form_container_input>
            <Input
              type="text"
              placeholder="Nome"
              onChange={handleNameChange}
            ></Input>
            <Input
              type="text"
              placeholder="Email"
              onChange={handleEmailChange}
            ></Input>
            <Input
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
            ></Input>
          </Form_container_input>
          <Button onClick={handleButtonClick}>Create account</Button>
          <Button>
            <GoogleIcon />
            Sign up with Google
          </Button>
          <Text style={StyleLog} size="18px" align="left" width="300px">
            Already have an account? <strong>Log in</strong>
          </Text>
        </Form_Container>
      )}
    </Wrapper>
  );
}
