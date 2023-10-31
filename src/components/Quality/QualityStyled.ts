import styled from "@emotion/styled";

export const CommonWrapper = styled.ul`
  padding-bottom: 96px;
  padding-left: 24px;
  padding-right: 24px;

  text-align: center;
  padding-bottom: 142px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 72px;
    column-gap: 11px;

    padding-left: 39px;
    padding-right: 98px;

    text-align: left;
  }

  @media (min-width: 1440px){
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    padding-left: 165px;
    padding-right: 165px;
    padding-bottom: 128px;
  }
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 64px;

    @media (min-width: 758px) {
      margin-bottom: 0;
    }

    @media (min-width: 1440px){
        margin-right: 30px;
    }
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

    @media (min-width: 768px) {
      margin-left: 0;
      margin-right: 0;
    }
  }

  & > p {
    font-size: 16;
    line-height: 1.63;

    @media (min-width: 768px){
        width: 281px;
    }

    @media (min-width: 1440px){
        width: 255px;
    }
  }
`;
