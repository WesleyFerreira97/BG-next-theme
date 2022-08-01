import { CardCategory } from '.'
import { render, screen } from '@testing-library/react';
import { renderWithTheme } from '../../../utils/tests/helpers';

test('jus test', () => {
    const { getByText } = renderWithTheme(
        <CardCategory />
    )

    expect(getByText('O Subtitulo')).toBeInTheDocument()
})

