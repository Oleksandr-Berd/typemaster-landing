import * as SC from "./IntroStyled"

import OrderButton from "../../ui/OrderButton/OrderButton";

const Intro = () => {
    return (
      <SC.ContentWrapper>
        <SC.Title>typemaster keyboard</SC.Title>
        <SC.Content>
          Improve your productivity and gaming without breaking the bank.
          Upgrade to a high quality mechanical typing experience.
        </SC.Content>
        <SC.InsideCon>
            <OrderButton location="intro"/>
            <SC.Release>release on 5/27</SC.Release>
        </SC.InsideCon>
      </SC.ContentWrapper>
    );
}
 
export default Intro;