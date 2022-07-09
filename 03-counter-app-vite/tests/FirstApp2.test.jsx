import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en FirstApp2.jsx', () => {
    const title = 'Hola Mundo';
    const subTitle = 'Soy un subtitulo';

    test('debe de hacer match con el snapshot', () => {
        const { container } = render( <FirstApp title={ title }/> );
        expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar el título "Hola Mundo"', () => {
        render( <FirstApp title={ title }/> );
        expect( screen.getByText(title) ).toBeTruthy();
    });

    test('debe de mostrar el título en un h1', () => {
        render( <FirstApp title={ title }/> );
        expect( screen.getByRole('heading', { level: 1 } ).innerHTML ).toContain( title );
    });

    test('debe de mostrar el subtítulo enviado por props', () => {
        render(
            <FirstApp
                title={ title }
                subTitle={ subTitle }
            />
        );
        expect( screen.getAllByText(subTitle).length ).toBe( 2 );
    });
});