import styled from "@emotion/styled";
import { PropImage } from "../../utils/types";

export const ContentWrapper =styled.div<PropImage>`
padding-left: 24px;
padding-right: 24px;
padding-bottom: 292px;

&::after{
display: inline-block;

    content: url(${props => props.bgAfter});

    margin-top: 64px;
}
`

export const Title = styled.h1`
margin-bottom: 32px;

text-transform: uppercase;

font-size: 48px;
`

export const Content = styled.p`
margin-bottom: 32px;

font-size: 16px;
line-height: 1.63;
`

export const InsideCon = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`

export const Release = styled.p`
  text-transform: uppercase;

  font-size: 16px;
  line-height: 1.63;
`;