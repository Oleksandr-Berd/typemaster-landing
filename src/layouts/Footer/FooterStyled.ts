import styled from "@emotion/styled";

export const FooterStyled = styled.footer`
  text-align: center;

  padding-bottom: 50px;

  & > p {
    font-size: 16px;
    line-height: 1.63;

    & > span {
        font-weight: bold;
    }
  }

  @media (min-width: 768px){
    padding-bottom: 43px;
  }
`;
