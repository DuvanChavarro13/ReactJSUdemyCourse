
//import { heroes } from './data/heroes' -> Solo si lo exporto como un objeto
import heroes, {owners} from '../data/heroes';

//console.log( owners );

const getHeroeById = ( id ) => {
    return heroes.find( ( heroe ) => heroe.id === id );
}
//console.log( getHeroeById(3) );



const getHeroesByOwner = ( owner ) => {
    return heroes.filter( ( o ) => o.owner === owner );
}
//console.log( getHeroesByOwner( 'Marvel' ) );

export {
    getHeroeById,
    getHeroesByOwner
}



