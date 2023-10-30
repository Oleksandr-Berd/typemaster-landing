import styled from "@emotion/styled";
import { PropStyle } from "../../utils/types";



export const LinkWrapper = styled.div<PropStyle>`
  padding-top: 11px;
  padding-bottom: 11px;
  padding-left: 15px;
  padding-right: 16px;

  background-color: ${(props) =>
    props.location === "header" ? "#e8eff2" : "#F16718"};

  border-radius: 8px;

  & > a {
    text-transform: uppercase;

    font-size: 16px;
    line-height: 1.63;
    font-weight: bold;
    color: ${props => props.location === "header" ? "#162542" : "#fff"}
  }
`;