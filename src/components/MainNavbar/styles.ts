import styled from "styled-components";

export const MainNavbarWrap = styled.nav`
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    padding: 1.25rem;
    
    &:after {
        content: '';
        position: absolute;
        top: 0;
        /* background-color: ${props => props.theme.colors.secondary}; */
        height: 100%;
        width: 100%;
        opacity: .2;
    }
    
    > * {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: .5rem;
        z-index: 10;
    }

    .navbar {

        &__menu, &__cart {
            height: 100%;
            display: flex;
            align-items: center;
            padding: 0 .5rem;
            color: ${props => props.theme.colors.neutral};
            font-size: 1.5rem;
        }

        &__brand {
            font-size: 2rem;
            font-family: 'Aquire';
            font-style: normal;
            font-weight: 700;
            color: ${props => props.theme.colors.neutral};
        }
    }
`;