import { useState } from "react";
import Form from "./Components/Form";
import Slider from "./Components/Slider";
import { Container } from "./Styles/Container.style";

export default function App() {
  const [isSliderVisible, setSliderVisibla] = useState(true);

  const toggleSlider = () => {
    setSliderVisibla(!isSliderVisible);
  };

  return (
    <>
      <Container>
        <Form toggleSlider={toggleSlider} />
        {isSliderVisible && <Slider GameHubAPI="" />}
      </Container>
    </>
  );
}
