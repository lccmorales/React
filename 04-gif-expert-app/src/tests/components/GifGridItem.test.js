import React from 'react';
// import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en GifGridItem.js', () => {
    test('debe de mostrar <GifGridItem /> correctamente', () => {
        const id = 'PM7EBVwNHRuXYKIsJf';
        const img = {
            id: id,
            title: 'Dance Jinx GIF LOL',
            url: 'https://media0.giphy.com/media/PM7EBVwNHRuXYKIsJf/giphy-downsized-medium.gif?cid=96007aa4ac1qtu0yql3o5v70s2q3y3v7g3erl7sdkx2qbts0&rid=giphy-downsized-medium.gif&ct=g'
        };
        const wrapper =  shallow(<GifGridItem />);
        expect( wrapper ).toMatchSnapshot();
    })
})