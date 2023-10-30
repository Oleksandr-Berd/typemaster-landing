import * as SC from "./HeaderStyled"

import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const Header: React.FC = () => {
  return (
    <SC.HeaderStyled>
      <Logo />
      <SC.LinkWrapper>
        <a
          href="https://portfolio-aleks-berd.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          pre-order now
        </a>
      </SC.LinkWrapper>
    </SC.HeaderStyled>
  );
};

export default Header;
