import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr.js', () => {
    test('debe de retornar un string y un número', () => {
        const [ letters, numbers ] = retornaArreglo();
        // Validar valor
        expect( letters ).toBe( 'ABC' );
        expect( numbers ).toBe( 123 );
        // Validar tipo
        expect (typeof letters).toBe('string');
        expect (typeof numbers).toBe('number');
        // Validar que se obtenga cualquier String
        expect( letters ).toEqual( expect.any(String) );

    });
});