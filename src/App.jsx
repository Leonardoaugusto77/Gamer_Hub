import { useState } from "react";

import GamesApi from "./GamesApi.json";
import Slider from "./Components/Slider/Slider";
import { Wrapper } from "./Styles/Wrapper";
import Form from "./Components/Form/Form";

export default function App() {
  const [isSliderVisible, setSliderVisibla] = useState(true);

  const toggleSlider = () => {
    setSliderVisibla(!isSliderVisible);
  };

  return (
    <>
      <Wrapper display="flex">
        <Form toggleSlider={toggleSlider} />
        {isSliderVisible && <Slider GamesApi={GamesApi} />}
      </Wrapper>
    </>
  );
}
