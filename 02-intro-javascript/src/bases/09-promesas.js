import { getHeroeById, getHeroesByOwner } from "./bases/08-imp-exp";

//Las promesas trabajan en base a callbacks 
/*
const promesa = new Promise( (resolve, reject)=> {
    setTimeout( ()=> {
        const hero = getHeroeById( 2 );
        resolve( hero ); //El revolve lo manda al then
        //reject( hero );
    }, 2000);
});

promesa.then( ( heore )=>{
    console.log( 'Heroe', heore );
})
.catch( err => console.warn(err));
*/

const getHeroeByIdAsync = ( id ) => {
    return new Promise( (resolve, reject)=> {
        setTimeout( ()=> {
            const hero = getHeroeById( id );
            if ( hero ){
                resolve( hero ); //El revolve lo manda al then
            } else {
                reject( 'No se encontró el héroe' );
            }
        }, 2000);
    });
}

getHeroeByIdAsync(6)
    .then( h => console.log('Heore', h))
        .catch( err => console.warn( err ));





