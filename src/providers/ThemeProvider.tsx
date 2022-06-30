import React, { ReactNode } from 'react'
import { ThemeProvider as Provider } from 'styled-components';
import { theme } from '../styles/theme';

type ThemeProviderProps = {
    children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
    return (
        <Provider theme={theme}>
            {children}
        </Provider>
    )
}
