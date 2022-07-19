import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas en GifExpertApp.js', () => {
    // Variables Globales
    // const category = 'Arcane';
    // const limitNumGifs = 2;
    
    test('debe de mostrar <GifExpertApp /> correctamente', () => {  
        const wrapper = shallow(<GifExpertApp/>);
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe de mostrar una lista de categorias', () => {
        const categories = ['Arcane', 'One Piece'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories }/>);
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    })
});