import { useState } from "react";
import Form from "./Components/Form";
import Slider from "./Components/Slider";
import { Wrapper } from "./Styles/Wrapper";

export default function App() {
  const [isSliderVisible, setSliderVisibla] = useState(true);

  const toggleSlider = () => {
    setSliderVisibla(!isSliderVisible);
  };

  return (
    <>
      <Wrapper>
        <Form toggleSlider={toggleSlider} />
        {isSliderVisible && <Slider GameHubAPI="" />}
      </Wrapper>
    </>
  );
}
