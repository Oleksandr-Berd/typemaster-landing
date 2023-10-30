import * as SC from "./HeaderStyled"

import { ReactComponent as Logo } from "../../assets/images/logo.svg";

import OrderButton from "../../ui/OrderButton/OrderButton";

const Header: React.FC = () => {
  return (
    <SC.HeaderStyled>
      <Logo />
      <OrderButton location="header"/>
    </SC.HeaderStyled>
  );
};

export default Header;
