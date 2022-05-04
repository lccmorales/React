import { getHeroById, getHeroByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en 08-imp-exp.js', () => { 
    test('debe de retornar un héroe por id', () => {
        const id = 1;
        const heroe = getHeroById( id );
        const heroeData = heroes.find( h => h.id === id );
        expect( heroe ).toEqual( heroeData );
    })

    test('debe de retornar undefined si héroe no existe', () => {
        const id = 10;
        const heroe = getHeroById( id );
        expect( heroe ).toBe( undefined );
    })

    test('debe de retornar un arreglo con los hérroes de DC', () => { 
        const owner = 'DC';
        const heroes = getHeroByOwner( owner );
        const heroesData = heroes.filter( h => h.owner === owner);
        expect( heroes ).toEqual( heroesData );
    })

    test('debe de retornar un arreglo con los héroes de Marvel y debe de ser igual a 2', () => { 
        const owner = 'Marvel';
        const heroes = getHeroByOwner( owner );
        expect( heroes.length ).toBe( 2 );
    })
})