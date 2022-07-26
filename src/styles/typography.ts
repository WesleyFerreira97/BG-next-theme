import { css } from "styled-components";
import { theme } from "./theme";

const mainFont = "'Aquire', sans-serif";
const secondaryFont = "'Poppins', sans-serif";

export const typography: any = {};

typography.TitleLg = css`
    font-family: ${mainFont}; 
    font-weight: 700;
    font-size: 3.5rem;
    line-height: 120%;

    @media (min-width: ${theme.breakpoints.md}) {
        font-size: 5rem;
    }

    @media (min-width: ${theme.breakpoints.lg}) {
        font-size: 6rem;
    }

    @media (min-width: ${theme.breakpoints.xl}) {
        font-size: 7rem;
    }
`;

typography.Title = css`
    font-family: ${mainFont};
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 145%;

    @media screen and (min-width: 768px) {
        font-size: 3rem;
    }
`;

typography.TitleSm = css`
    font-family: ${mainFont};
    font-weight: 700;
    font-size: 2rem;
    line-height: 120%;
`;

typography.TextLg = css`
    font-family: ${secondaryFont};
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 120%;
`;

typography.Text = css`
    font-family: ${secondaryFont};
    font-weight: 400;
    font-size: 1rem;
    line-height: 145%;
    letter-spacing: .01rem;
`;

typography.TextSm = css`
    font-family: ${secondaryFont};
    font-weight: 400;
    font-size: .8rem;
    line-height: 120%;
`;