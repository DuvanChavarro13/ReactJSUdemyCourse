


// DESDECTRUCTURACIÓN 

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    clave: 'Ironman'
}

//const { nombre, edad, clave} = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const retornarPersona = ( {nombre, apellido, edad, clave, rango = 'Capitan'} ) => {
    //console.log( nombre, apellido,  edad, clave, rango );
    return {
        nombreClave: clave, 
        anios: edad,
        latlng: {
            lat: 14.64545,
            lng: -12.4566
        }
    }
}

//retornaPersona( persona );
//console.log('Este es el segundo console log:', nombre, edad, clave);

const { nombreClave, anios, latlng:{ lat, lng} } = retornarPersona( persona );
//const { lat, lng } = latlng

console.log( nombreClave, anios );
console.log( lat, lng );
