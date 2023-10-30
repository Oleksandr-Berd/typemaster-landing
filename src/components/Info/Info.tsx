import { useMediaQuery } from "usehooks-ts";

import * as SC from "./InfoStyled";

import bgMob1 from "../../assets/images/info_bg_mob1.jpg";
import bgMob2 from "../../assets/images/info_bg_mob2.jpg";
import bgTab1 from "../../assets/images/info_bg_tab1.jpg"
import bgTab2 from "../../assets/images/info_bg_tab2.jpg";


const Info: React.FC = () => {
  const isTablet = useMediaQuery("(min-width:768px) and (max-width:1439px)");

  return (
    <SC.ContentWrapper
      bgAfter={isTablet ? bgTab2 : bgMob2}
      bgBefore={isTablet ? bgTab1 : bgMob1}
    >
      <SC.InsideWrapper>
        <SC.Title>mechanical wireless keyboard</SC.Title>
        <SC.Content>
          The Typemaster keyboard boasts top-notch build and practical design.
          It offers a wide variety of switches and keycaps, along with reliable
          wireless connectivity.
        </SC.Content>
      </SC.InsideWrapper>
    </SC.ContentWrapper>
  );
};

export default Info;
