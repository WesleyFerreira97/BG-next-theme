import styled from "styled-components";
import { typography } from "../../styles/typography";
import { theme } from "../../styles/theme";

export const FooterWrap = styled.div`
    min-height: 45vh;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 25rem;
    background-color: #E2E2E2;
    /* border-top: 12px solid #D4D4D4; */

    .footer__logo-bar {
        height: 80px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-top: 15px solid #D4D4D4;
        border-bottom: 1px solid #D4D4D4;
        padding-top: 1.25rem;
        padding-bottom: .75rem;

        .footer__logo-wrap {
            display: flex;
            justify-content: center;
            padding: 0 2rem;
        }
        
        .title {
            font-family: 'Aquire',sans-serif;
            font-weight: 700;
            color: #333333;
            font-size: 2.5rem;
        }
    }

    @media(min-width: ${theme.breakpoints.lg}) {
        .footer__logo-wrap {
            justify-content: flex-start !important;
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
        padding: 0 2rem;
    }

    .container-1 {
        max-width: 450px;

        .info {
            
                        &__item {
                            display: flex;
                            align-items: center;
                            margin: 1.25rem 0;
                        }
        
            &__text {
                ${typography.TextSm}
                line-height: 165%;
                color: ${theme.colors.neutralAlt};
            }

            &__icon {
                padding-right: 1rem;
                color: ${theme.colors.neutralAlt};
            }
    	}
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
    justify-content: center;
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