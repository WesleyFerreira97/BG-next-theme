import styled from "styled-components";
import { typography } from "../../styles/typography";

export const FooterWrap = styled.div`
    height: 45vh;
    /* height: 100%;
    min-height: 300px; */
    background-color: #E2E2E2;
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
`;

export const FooterContainers = styled.div`
    background-color: gray;
    height: 100%;
    display: flex;

    .footer-container {
        flex-grow: 1;
        background-color: aliceblue;
    }
`;

export const FooterCredits = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #D2D2D2;
    
    .footer-credits__text {
        display: flex;
        justify-content: center;
        height: 100%;
        color: #828282;
        ${typography.TextSm}
    }
`;

