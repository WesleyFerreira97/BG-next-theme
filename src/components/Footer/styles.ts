import styled from "styled-components";
import { typography } from "../../styles/typography";
import { theme } from "../../styles/theme";

export const FooterWrap = styled.div`
    min-height: 45vh;
    height: 100%;
    /* min-height: 300px; */
    background-color: #E2E2E2;
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    /* border-top: 12px solid #D4D4D4; */

    .footer__logo-bar {
        height: 80px;
        width: 100%;
        background-color: #D4D4D4;
        
        .title {
            font-family: 'Aquire',sans-serif;
            font-weight: 700;
            color: #333333;
            font-size: 2.5rem;
        }
    }
`;

export const FooterContainers = styled.div`
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem 0;

    .footer-container {
        flex-grow: 1;
        background-color: gray;
    }
    
    @media(min-width: ${theme.breakpoints.lg}) {
        flex-direction: row;
    }
`;

export const FooterCredits = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #D2D2D2;
    border-top: 1px solid #fff;
    
    .footer-credits__text {
        display: flex;
        justify-content: center;
        height: 100%;
        color: #828282;
        ${typography.TextSm}
    }
`;

