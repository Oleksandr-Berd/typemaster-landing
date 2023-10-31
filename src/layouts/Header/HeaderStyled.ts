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

@media (min-width: 768px){
    padding-top: 40px;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 122px;
}

@media (min-width: 1440px){
    padding-top: 55px;
    padding-bottom: 143px;
    padding-left: 165px;
    padding-right: 165px;
}
`

