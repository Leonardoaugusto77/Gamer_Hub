import { Slider_Section, Wrapper } from "../../Styles/Wrapper";

export default function Slider({ GamesApi }) {
  const { src } = GamesApi[1];

  console.log(src);

  return (
    <Wrapper>
      <Slider_Section>
        <img src={src} />
      </Slider_Section>
    </Wrapper>
  );
}
