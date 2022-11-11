import { fireEvent, render, screen } from '@testing-library/react'
import { GifExpertApp } from '../src/GifExpertApp'

describe('Pruebas en <GifExpertApp />', () => {
    test('debe de mostrar <GifExpertApp /> correctamente', () => {  
        render(<GifExpertApp />);
        // expect( wrapper ).toMatchSnapshot();
    })

    test('debe de mostrar una lista de categorias', () => {
        const categories = ['Arcane', 'One Piece'];
        
        render(<GifExpertApp />);

        // expect( wrapper.find('GifGrid').length ).toBe( categories.length );
        // const search = screen.getByRole('textbox', { name: 'txtSearch' });
        // const amount = screen.getByRole('spinbutton', { name: 'txtAmount' });
        // const form = screen.getByRole('form');
        // fireEvent.input( search, { target: { value: inputSearchValue} } );
        // fireEvent.input( amount, { target: { value: ''} } );
        // fireEvent.submit( form );
        // usar cualquiera de los dos
        // expect( onNewForm ).toHaveBeenCalledTimes(0);
        // expect( onNewForm ).not.toHaveBeenCalled();
        screen.debug();
    });
})