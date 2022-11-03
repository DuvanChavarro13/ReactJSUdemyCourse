

// DESESTRUCTURACIÓN DE ARREGLOS 

const personajes = ['Goku', 'Vegeta', 'Trunks'];
// console.log( personajes[0]);
// console.log( personajes[1]);
// console.log( personajes[2]);

const [ , , p1 ] = personajes;
console.log( p1 );

const retornaArreglo = () => {
    return [ 'ABC', 123 ]
}

const [ letras, numeros] = retornaArreglo();
console.log( letras );


//Tarea 
//1. El primer valor del arr se llamara nombre 
//2. Se llamará setNombre

const arr = ( valor ) =>{
    return [ valor, ()=>{ console.log('Hola mundo'); }]
}

const [nombre, setNombre] = arr( 'Goku' );

console.log( nombre );
setNombre();