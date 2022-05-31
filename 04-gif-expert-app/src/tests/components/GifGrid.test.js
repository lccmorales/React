import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en GifGrid.js', () => {
    // Variables Globales
    const category = 'Arcane';
    const limitNumGifs = 2;
    
    test('debe de mostrar <GifGrid /> correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={ category } limitNumGifs={ limitNumGifs }/>);
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {
        const gifs = [{
            id: 'PM7EBVwNHRuXYKIsJf',
            title: 'Dance Jinx GIF LOL',
            url: 'https://media0.giphy.com/media/PM7EBVwNHRuXYKIsJf/giphy-downsized-medium.gif?cid=96007aa4ac1qtu0yql3o5v70s2q3y3v7g3erl7sdkx2qbts0&rid=giphy-downsized-medium.gif&ct=g'
        }]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={ category } limitNumGifs={ limitNumGifs }/>);
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
        
    })
});