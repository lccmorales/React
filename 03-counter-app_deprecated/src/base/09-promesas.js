import { getHeroById } from './08-imp-exp';

export const getHeroByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroById(id);
            if (heroe)
                resolve( heroe );
            else
                reject('No se pudo encontrar el héroe'); 
        }, 1500);
    });
}