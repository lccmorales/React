import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGridItem from '../components/GifGridItem';

describe('Pruebas en GifGridItem.js', () => {
    test('debe de mostrar <PrimeraApp /> correctamente', () => {
        const title = 'Gif';
        const url = ''
        const wrapper = shallow(<GifGridItem title={ title } url={ url } />);

        expect( wrapper ).toMatchSnapshot();
    })
})