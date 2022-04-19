import getHeroById, { getHeroByOwner } from './bases/08-imp-exp';

/* const promesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroById(2);
        resolve( heroe );
        // reject('No se pudo encontrar el héroe');
    }, 2000);
});

promesa.then( ( heroe ) => {
    console.log(heroe);
}).catch(err => console.warn(err)); */

const getHeroByIdAsynd = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroById(id);
            // console.log(heroe)
            if (heroe)
                resolve( heroe );
            else
                reject('No se pudo encontrar el héroe');
                
        }, 2000);
    });
};

getHeroByIdAsynd(1)
    .then( console.log )
    .catch( console.warn );