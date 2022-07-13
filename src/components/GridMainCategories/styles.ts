import styled from 'styled-components';

export const GridWrap = styled.div`
    display: flex;
    justify-content: center;

    > * {
        background-color: ${props => props.theme.colors.primary};;
    }
`;
