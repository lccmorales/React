import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones.js', () => {
    test('getUser debe de retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'Prueba'
        }
        const user = getUser( testUser );

        expect( testUser ).toEqual( user );
    });

    test('getUsuarioActivo debe de retornar un objeto', () => {
        const name = 'Jesus';
        const user = getUsuarioActivo( name );

        expect( user ).toEqual( {
            uid: 'ABC567',
            username: name
        } );
    });
})