import { render, screen } from '@testing-library/react';
import { GifGridItem } from '../../src/components';

describe('Pruebas en <GifGridItem />', () => {
    const title = 'Saitama';
    const url = 'http://one-punch.com/saitama.jpg';
    test('debe de hacer match con el snapshot', () => {
        const { container } = render(<GifGridItem title={ title } url={ url } />);
        expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifGridItem title={ title } url={ url } />);
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    });

    test('debe de mostrar el titulo del componente', () => {
        render(<GifGridItem title={ title } url={ url } />);
        expect( screen.getByText( title ) ).toBeTruthy();
    });
})
