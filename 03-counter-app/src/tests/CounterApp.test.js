import React from 'react';
import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';

describe('Pruebas en CounterApp.js', () => {
    let wrapper = shallow(<CounterApp />);

    beforeEach( () => {
        wrapper = shallow(<CounterApp />);
    });

    test('debe de mostrar <CounterApp /> correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe de mostrar el valor por defecto de 100', () => {
        const wrapper = shallow(<CounterApp value={ 100 } />);
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('100');
    })

    test('debe de incrementar con el boton +1', () => {
        const btn0 = wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect ( counterText ).toBe('11');
    })

    test('debe de incrementar con el boton Reset', () => {
        const wrapper = shallow(<CounterApp value={ 10 } />);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect ( counterText ).toBe('10');
    })

    test('debe de decrementar con el boton -1', () => {
        const btn2 = wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect ( counterText ).toBe('9');
    })
})