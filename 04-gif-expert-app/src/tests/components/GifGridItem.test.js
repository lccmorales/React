import React from 'react';
// import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en GifGridItem.js', () => {
    // Variables Globales
    const id = 'PM7EBVwNHRuXYKIsJf';
    const title = 'Dance Jinx GIF LOL';
    const url = 'https://media0.giphy.com/media/PM7EBVwNHRuXYKIsJf/giphy-downsized-medium.gif?cid=96007aa4ac1qtu0yql3o5v70s2q3y3v7g3erl7sdkx2qbts0&rid=giphy-downsized-medium.gif&ct=g';
    const wrapper =  shallow(<GifGridItem title={ title } url={ url }/>);

    test('debe de mostrar <GifGridItem /> correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe de tener un párrafo con el title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    })|

    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    })

    test('debe de tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect( className.includes('animate__swing')).toBe( true );
    })
})