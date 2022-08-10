import styled from "styled-components";
import { BreakpointProps } from ".";

export const ContainerWrap = styled.div<BreakpointProps>`
    width: 100%;
    
    > * {
        width: ${props => props.xs + '%'};
    }

    @media (min-width: 650px) {
        > * {
            width: ${props => props.sm + '%'};
        }
    }

    @media (min-width: 960px) {
        > * {
            width: ${props => props.md + '%'};
        }
    }

    @media (min-width: 1200px) {
        > * {
            width: ${props => props.lg + '%'};
        }
    }

    @media (min-width: 1400px) {
        > * {
            width: ${props => props.sm + '%'};
        }
    }

`;


ContainerWrap.defaultProps = {
    xs: 95,
    sm: 95,
    md: 85,
    lg: 80,
    xl: 80,
}