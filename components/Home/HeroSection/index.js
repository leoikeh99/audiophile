import * as HERO from "./styles";
import * as W from "../../../styles/widgets";
import { Button } from "../../../styles/widgets/Buttons";

export default function HeroSection() {
  return (
    <HERO.Cover>
      <W.Container>
        <HERO.Layout>
          <HERO.FirstSection data-aos="fade-right">
            <HERO.Title>NEW PRODUCT</HERO.Title>
            <HERO.Heading>XX99 Mark II HeadphoneS</HERO.Heading>
            <HERO.Desc>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </HERO.Desc>
            <Button color="orange">See Product</Button>
          </HERO.FirstSection>
        </HERO.Layout>
      </W.Container>
    </HERO.Cover>
  );
}
