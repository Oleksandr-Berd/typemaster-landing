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

  @media (min-width: 768px) {
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 26px;
    padding-right: 26px;
  }

  & > a {
    text-transform: uppercase;

    font-size: 16px;
    line-height: 1.63;
    font-weight: bold;
    color: ${(props) => (props.location === "header" ? "#162542" : "#fff")};

    transition: color 0.3s ease-in-out;
  }

  @media (min-width: 1440px) {
    transition: background-color 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      background-color: ${(props) =>
        props.location === "header" ? "#151515" : "#FF9B62"};
      transition: background-color 0.3s ease-in-out;

      & > a {
        color: #fff;
        transition: color 0.3s ease-in-out;
      }
    }
  }
`;
