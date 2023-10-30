import styled from "@emotion/styled";
import { PropImage } from "../../utils/types";

export const ContentWrapper = styled.div<PropImage>`
  position: relative;

  padding-top: 268px;
  padding-bottom: 111px;
  padding-left: 24px;
  padding-right: 24px;

  text-align: center;

@media (min-width: 768px){
    padding-top: 392px;
    padding-bottom: 142px;
    padding-left: 40px;
    padding-right: 40px;

    text-align: left;
}

  &::before {
    position: absolute;
    top: 0;
    left: 0;

    content: url(${(props) => props.bgBefore});

    @media (min-width: 768px){
        transform: translateX(40px);
    }
  }

  &::after{
    position: absolute;
    top: 0;
    right: 0;

    transform: translateX(-24px);

    content: url(${props => props.bgAfter});
  }
`;

export const InsideWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`

export const Title = styled.h2`
  width: 255px;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;

  text-transform: uppercase;
  font-size: 32px;
  line-height: 1.13;

  @media (min-width: 768px){
    margin-bottom: 0;
    margin-right: 36px;
  }
`;

export const Content = styled.p`
  font-size: 16px;
  line-height: 1.63;

  @media (min-width: 768px){
    width: 398px;
  }
`;
