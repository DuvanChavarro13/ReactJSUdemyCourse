

// ARREGLOS 
//-> Es una colección de información que se encuentra en una misma variable

//const arreglo = new Array( 100 ); //Llaves cuadradas

const arreglo = [ 1,2,3,4 ]; //Llaves cuadradas
//arreglo.push(1); // -> No utilizar el push en los arreglos 
//arreglo.push(2); // -> No utilizar el push en los arreglos
//arreglo.push(3); // -> No utilizar el push en los arreglos

let arreglo2 = [ ...arreglo, 5 ]; // Objeto literal, para extraer información de otra cosa

const arreglo3 = arreglo2.map( function( num ) {
    return num * 2;
});

console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );

