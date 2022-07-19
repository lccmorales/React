import { getGifs } from '../../helpers/getGifs'

describe('Pruebas con getGifs Fetch', () => {
    test('debe de traer 2 elementos', async() => {
        const gifs = await getGifs('Arcane', 2);
        expect( gifs.length ).toBe( 2 );
    })
})