
// OBJETOS LITERALES

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55542325,
        lat: 14.44343,
        lon: 34.556434
    }
}

//console.log( persona );

const persona2 = { ...persona }; //Creando un clon del primer objeto
persona2.nombre = 'Peter';

console.log( persona );
console.log( persona2 );