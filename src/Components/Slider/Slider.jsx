import { ArrowL, ArrowR } from "../../Styles/Button.style";
import {
  Arrows_container,
  Slider_Section,
  Wrapper,
  Info_Game_Slider,
  Title_Game,
} from "../../Styles/Wrapper";
import { Text, Title } from "../../Styles/Text.style";
import { useEffect, useState } from "react";

export default function Slider({ GamesApi }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = (currentImageIndex + 1) % GamesApi.length;
    setCurrentImageIndex(nextIndex);
  };

  const handlePrevious = () => {
    const PreviousIndex =
      (currentImageIndex - 1 + GamesApi.length) % GamesApi.length;
    setCurrentImageIndex(PreviousIndex);
  };

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    let intervalId;
    if (!isMobile) {
      intervalId = setInterval(() => {
        const nextIndex = (currentImageIndex + 1) % GamesApi.length;
        setCurrentImageIndex(nextIndex);
      }, 5000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [currentImageIndex, GamesApi]);

  return (
    <Slider_Section>
      <img
        src={GamesApi[currentImageIndex].src}
        alt="Não foi possivel carregar essa pagina"
      />

      <Info_Game_Slider>
        <Title_Game>
          <Title size="35px">{GamesApi[currentImageIndex].name}</Title>
          <Text size="20px">{GamesApi[currentImageIndex].year}</Text>
        </Title_Game>

        <Arrows_container>
          <ArrowL onClick={handlePrevious} />
          <ArrowR onClick={handleNext} />
        </Arrows_container>
      </Info_Game_Slider>
    </Slider_Section>
  );
}
