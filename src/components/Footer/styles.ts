import styled from "styled-components";
import { typography } from "../../styles/typography";

export const FooterWrap = styled.div`
    height: 45vh;
    background-color: #E2E2E2;
    display: flex;
    margin-top: 5rem;
`;

export const FooterCredits = styled.div`
    width: 100%;
    background-color: #D2D2D2;
    align-self: flex-end;
    display: flex;
    align-items: center;
    color: #828282;
    height: 50px;
    ${typography.TextSm}
`;