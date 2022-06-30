import heroes, { owners } from '../data/heroes';

export const getHeroById = (id) => heroes.find( ( heroe ) => heroe.id === id);
export const getHeroByOwner = (owner) => heroes.filter( ( heroe ) => heroe.owner === owner);