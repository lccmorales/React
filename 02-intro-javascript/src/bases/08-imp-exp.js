// import { heroes } from './data/heroes';
import heroes, { owners } from '../data/heroes';

// console.log( owners );

const getHeroById = (id) => heroes.find( ( heroe ) => heroe.id === id);

// console.log( getHeroById(2) );

const getHeroByOwner = (owner) => heroes.filter( ( heroe ) => heroe.owner === owner); 

// console.log( getHeroByOwner('DC') );

export {
    getHeroById as default,
    getHeroByOwner
};