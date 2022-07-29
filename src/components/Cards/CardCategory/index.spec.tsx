import { CardCategory } from '.'
import { render, screen } from '@testing-library/react';

test('jus test', () => {
    const { getByText } = render(<CardCategory />)

    expect(getByText('O Subtitulo')).toBeInTheDocument()
})

