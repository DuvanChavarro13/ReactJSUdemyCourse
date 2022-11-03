

// TEMPLATE STRINGS 

const nombre = 'Duvan';
const apellido = 'Chavarro'
const nombreCompleto = `${ nombre } ${ apellido }`;

console.log( `Mi nombre es ${nombreCompleto} y tengo ${20+2} años`);

function getSaludo( nombre = '' ) {
    return `Hola ${ nombre }`;
}

console.log( `Este es un texto: ${ getSaludo(nombreCompleto) }` );