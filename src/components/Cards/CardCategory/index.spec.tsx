import { CardCategory } from '.'
import { render, screen } from '@testing-library/react';
import { theme } from '../../../styles/theme';

import ThemeProvider from '../../../providers/ThemeProvider';

test('jus test', () => {
    const { getByText } = render(
        <ThemeProvider>
            <CardCategory />
        </ThemeProvider>
    )

    expect(getByText('O Subtitulo')).toBeInTheDocument()
})

