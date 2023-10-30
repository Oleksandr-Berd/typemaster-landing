import styled from "@emotion/styled";
import { PropImage } from "../../utils/types";

export const ContentWrapper = styled.div<PropImage>`
  position: relative;

  padding-top: 268px;
  padding-bottom: 111px;
  padding-left: 24px;
  padding-right: 24px;

  text-align: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;

    content: url(${(props) => props.bgBefore});
  }

  &::after{
    position: absolute;
    top: 0;
    right: 0;

    transform: translateX(-24px);

    content: url(${props => props.bgAfter});
  }
`;

export const Title = styled.h2`
  width: 255px;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;

  text-transform: uppercase;
  font-size: 32px;
  line-height: 1.13;
`;

export const Content = styled.p`
  font-size: 16px;
  line-height: 1.63;
`;
