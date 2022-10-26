import styled from "styled-components";
import { typography } from "../../styles/typography";

export const NavbarCategoriesWrap = styled.div`
    height: 35px;
    display: none;
    justify-content: center;
    background-color: #D9D9D9;
    overflow: hidden;

    .navbar-categories__menu {
        height: 100%;
        display: flex;
        align-items: center;

        li {
            height: 100%;
            display: flex;
            align-items: center;
            padding: 0 .75rem;
            color: ${({ theme }) => theme.colors.neutralAlt};
            ${typography.TextSm}
            cursor: pointer;

            &:hover {
                background-color: ${({ theme }) => theme.colors.neutral};
                transition: .75s;
            }
        }
        
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        display: flex;
    }
`;

