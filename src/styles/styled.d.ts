import 'styled-components';
import { theme } from './theme'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: typeof theme.colors,
        spacing: typeof theme.spacing;
        breakpoints: typeof theme.breakpoints,
    }
}