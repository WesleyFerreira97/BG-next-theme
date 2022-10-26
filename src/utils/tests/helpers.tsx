import React from "react";
import { render, RenderResult } from "@testing-library/react";

import ThemeProvider from "../../providers/ThemeProvider";

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
    render(<ThemeProvider>{children}</ThemeProvider>);