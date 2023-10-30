import styled from "@emotion/styled";

export const HeaderStyled = styled.header`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

padding-top: 23px;
padding-bottom: 64px;
padding-left: 24px;
padding-right: 24px;
`

export const LinkWrapper = styled.div`
  padding-top: 11px;
  padding-bottom: 11px;
  padding-left: 15px;
  padding-right: 16px;

  background-color: #e8eff2;

  border-radius: 8px;

  & > a{
    text-transform: uppercase;

    font-size: 16px;
    line-height: 1.63;
    font-weight: bold;
  }
`;