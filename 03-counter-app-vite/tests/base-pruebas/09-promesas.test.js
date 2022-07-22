import { getHeroByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas-js', () => {
    test('getHeroeByIdAsyng debe de retornar un héroe', ( done ) => {
        const id = 1;
        getHeroByIdAsync( id )
            .then( hero => {
                expect( hero ).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done();
            });
    });

    test('getHeroeByIdAsyng debe de retornar un error si héroe no existe', ( done ) => {
        const id = 10;
        getHeroByIdAsync( id )
        .then( hero => {
            expect( hero ).toBeFalsy();
            done();
        })
        .catch( error => {
            console.log( error );
            expect( error ).toBe(`No se pudo encontrar el héroe ${ id }`);
            done();
        });
    });
});