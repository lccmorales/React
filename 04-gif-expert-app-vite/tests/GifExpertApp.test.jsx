import { render, screen } from '@testing-library/react'
import { GifExpertApp } from '../src/GifExpertApp'

describe('Pruebas en <GifExpertApp />', () => {
    test('debe de mostrar <GifExpertApp /> correctamente', () => {  
        const { container } = render(<GifExpertApp />);
        expect( container ).toMatchSnapshot();
    })

    test('debe de mostrar una lista de categorias', () => {
        const categories = ['Arcane', 'One Piece'];
        
        render(<GifExpertApp defaultCategories={ categories } />);
        expect( screen.getAllByRole('heading', { name: 'titulo' }).length ).toBe( categories.length );
        screen.debug();
    });
});