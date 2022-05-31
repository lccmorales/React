import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddForm } from '../../components/AddForm';

describe('Pruebas en <AddForm />', () => {
    const setCategories = jest.fn();
    const setLimitNumGifs = jest.fn();
    let wrapper = shallow( <AddForm setCategories={ setCategories } setLimitNumGifs={ setLimitNumGifs } />);

    beforeEach(() => {
        // jest.clearAllMocks();
        // wrapper = shallow( <AddForm setCategories={ setCategories } setLimitNumGifs={ setLimitNumGifs } />);
    });

    test('debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto de Categorias', () => {
        const inputCategorias = wrapper.find('input').at(0);
        const value = 'Hola Mundo';
        inputCategorias.simulate('change', { target: { value }});
        expect( wrapper.find('p').at(0).text().trim() ).toBe( value );
    })

    test('debe de cambiar la caja de texto de Cantidad de Gifs a mostrar', () => {
        const inputLimit = wrapper.find('input').at(1);
        const value = '4';
        inputLimit.simulate('change', { target: { value: value }});
        expect( wrapper.find('p').at(1).text().trim() ).toBe( value );
    })

    // test('NO debe de postear la información con submit', () => {
    //     wrapper.find('form').simulate('submit', { preventDefault(){} });
    //     expect( setCategories ).not.toHaveBeenCalled();
    // })

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Hola Mundo';
        // 1. simular el inputChange
        wrapper.find('.search').simulate('change', { target: { value }});
        // 2. simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        // 3. setCategories se debe de haber llamado
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function));
        // 4. el valor del input debe de estar ''
        expect( wrapper.find('input').at(0).prop('value') ).toBe('');
    })
})