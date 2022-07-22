import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await.js', () => {
    test('getImagen debe de retornar que no se encontro la imagen', async() => {
        const url = await getImagen();
        console.log(url);
        expect( url ).toBe('No se encontro la imagen');
    })
})