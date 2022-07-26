import styled from 'styled-components'
import { typography } from '../../styles/typography';

export const TitleWrap = styled.h3`
    ${typography.TitleSm}
    margin: 1rem auto;
`;

export const SubTitleWrap = styled.span`
    ${typography.TextLg}
    color: ${({ theme }) => theme.colors.neutralAlt};
`;

export const ParagraphWrap = styled.p`
    ${typography.Text}
    color: ${({ theme }) => theme.colors.neutralAlt};
`;

export const WidgetHeaderWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    margin: 1.5rem auto;
`;

