import { fireEvent, render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    const category = 'Arcane';
    const limitNumGifs = 5;

    test('debe de mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            loading: true,
            url: 'http://localhost/Vi.jpg'
        });

        render( <GifGrid category={ category } limitNumGifs={ limitNumGifs }/> );
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText(category) );
        // screen.debug();
    });

    test('debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {
        useFetchGifs.mockReturnValue({
            images: [
                {
                    id: '1',
                    title: 'Arcane Vi',
                    url: 'http://localhost/Vi.jpg'
                },{
                    id: '2',
                    title: 'Arcane Jinx',
                    url: 'http://localhost/Jinx.jpg'
                }
            ],
            loading: true,
            url: 'http://localhost/Vi.jpg'
        });
        render( <GifGrid category={ category } limitNumGifs={ limitNumGifs }/> );
        expect( screen.getAllByRole('img').length ).toBe(2);
    })
})