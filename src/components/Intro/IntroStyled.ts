import styled from "@emotion/styled";
import { PropImage } from "../../utils/types";

export const ContentWrapper = styled.div<PropImage>`
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 24px;

  @media (min-width: 768px) {
    position: relative;

    width: 339px;

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    padding-bottom: 100px;
  }

  &::after {
    display: inline-block;

    content: url(${(props) => props.bgAfter});

    margin-top: 64px;

    @media (min-width: 768px) {
      position: absolute;
      top: 0;
      right: 0;

      transform: translateX(381px) translateY(-115px);
    }
  }
`;

export const Title = styled.h1`
  margin-bottom: 32px;

  text-transform: uppercase;

  font-size: 48px;
`;

export const Content = styled.p`
  margin-bottom: 32px;

  font-size: 16px;
  line-height: 1.63;
`;

export const InsideCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Release = styled.p`
  text-transform: uppercase;

  font-size: 16px;
  line-height: 1.63;
`;
