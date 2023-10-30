import * as SC from "./InfoStyled"

import bgMob1 from "../../assets/images/info_bg_mob1.jpg"
import bgMob2 from "../../assets/images/info_bg_mob2.jpg"

const Info:React.FC = () => {
    return (
      <SC.ContentWrapper bgAfter={bgMob2} bgBefore={bgMob1}>
        <div>
          <SC.Title>mechanical wireless keyboard</SC.Title>
          <SC.Content>
            The Typemaster keyboard boasts top-notch build and practical design.
            It offers a wide variety of switches and keycaps, along with
            reliable wireless connectivity.
          </SC.Content>
        </div>
      </SC.ContentWrapper>
    );
}
 
export default Info;