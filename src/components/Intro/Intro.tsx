import { useMediaQuery } from "usehooks-ts";

import * as SC from "./IntroStyled";

import OrderButton from "../../ui/OrderButton/OrderButton";

import introBgMob from "../../assets/images/intro_bg_mob.jpg";
import introBgTab from "../../assets/images/intro_bg_tab.jpg";

const Intro = () => {
  const isTablet = useMediaQuery("(min-width:768px) and (max-width:1439px)");

  return (
    <SC.ContentWrapper bgAfter={isTablet ? introBgTab : introBgMob}>
      <div>
        <SC.Title>typemaster keyboard</SC.Title>
        <SC.Content>
          Improve your productivity and gaming without breaking the bank.
          Upgrade to a high quality mechanical typing experience.
        </SC.Content>
        <SC.InsideCon>
          <OrderButton location="intro" />
          <SC.Release>release on 5/27</SC.Release>
        </SC.InsideCon>
      </div>
    </SC.ContentWrapper>
  );
};

export default Intro;
