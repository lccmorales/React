import { getHeroById, getHeroByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp.js', () => {
    test('getHeroeByID debe de retornar un héroe por ID', () => {
        const id = 1;
        const hero = getHeroById( id );

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC'});
    });

    test('getHeroeByID debe de retornar undefined si no existe ID', () => {
        const id = 10;
        const hero = getHeroById( id );

        expect( hero ).toBeFalsy();
    });

    // Tarea
    // getHeroeByOwner
    // Length === 3
    // toEqual al arreglo filtrado
    test('getHeroeByOwner debe de retornar un arreglo con los héroes de DC e indicar que tiene 3 héroes', () => {
        const owner = 'DC';
        const heroes = getHeroByOwner( owner );

        expect( heroes ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);

        // Manera correcta
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner));
        expect( heroes.length ).toBe( 3 );
    });
    
    test('getHeroeByOwner debe de retornar un arreglo con los héroes de Marvel e indicar que tiene 2 héroes', () => {
        const owner = 'Marvel';
        const heroes = getHeroByOwner( owner );

        expect( heroes ).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ]);

        // Manera correcta
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner));
        expect( heroes.length ).toBe( 2 );
    });

    // Debe de retornar un arreglo con los héroes de Marvel
    // Length === 2

});