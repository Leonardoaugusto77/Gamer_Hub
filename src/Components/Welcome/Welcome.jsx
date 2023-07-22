import { Button } from "../../Styles/Button.style";
import { Title, Text } from "../../Styles/Text.style";
import { Wrapper } from "../../Styles/Wrapper";

export default function Welcome({ handleBackButton }) {
  return (
    <Wrapper direction="column">
      <Title
        size="50px"
        style={{
          marginBottom: "5px",
        }}
      >
        Welcome!!!!
      </Title>
      <Text
        style={{
          marginBottom: "5px",
        }}
        size="35px"
        align="center"
        width="80%"
      >
        This project is a training exercise focused on UX and React.js. The main
        objective of the project is to create a login screen.
      </Text>
      <Button marginT="20px" onClick={handleBackButton}>
        Back
      </Button>
    </Wrapper>
  );
}
