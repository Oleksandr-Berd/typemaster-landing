import styled from "@emotion/styled";

export const CommonWrapper = styled.ul`
  padding-bottom: 96px;
  padding-left: 24px;
  padding-right: 24px;

  text-align: center;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 64px;
  }

  & > img {
    margin-bottom: 48px;
  }

  & > h3 {
width: 200px;

margin-left: auto;
margin-right: auto;
    margin-bottom: 24px;

    text-transform: uppercase;

    font-size: 24px;
    line-height: 1.17;
  }
`;
