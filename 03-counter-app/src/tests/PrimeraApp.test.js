import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en PrimeraApp.js', () => {
    // test('debe de mostrar el mensaje "Hola Mundo"', () => {
    //     const saludo = 'Hola Mundo';
    //     // const root = createRoot(screen.getElementById('root'));
    //     const { getByText } = render( <PrimeraApp saludo={ saludo } /> );
    //     expect( getByText(saludo) ).toBeInTheDocument();
    // })

    test('debe de mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola Mundo';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect( wrapper ).toMatchSnapshot();
    })
})