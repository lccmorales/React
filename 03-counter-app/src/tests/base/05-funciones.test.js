import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo2 } from '../../base/05-funciones';

describe('Pruebas en 05-funciones.js', () => {
    test('getUser debe de retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'CSWEB'
        };
        const user = getUser();
        expect ( user ).toEqual( userTest);
    })

    // getUsuarioActivo debe de retornar un objeto
    test('getUsuarioActivo debe de retornar un objeto', () => {
        const nombre = 'Jesús';
        const userActivo = getUsuarioActivo2( nombre );
        expect( userActivo ).toEqual({
            uid: 'ABC569',
            username: nombre
        });
    })
})