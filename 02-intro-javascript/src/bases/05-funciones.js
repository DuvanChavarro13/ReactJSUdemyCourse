
// FUNCIONES en JS

const  saludar = ( nombre = '' ) => {
    return `Hola, ${nombre} `;
}

const  saludar2 = ( nombre = '' ) => `Hola, ${nombre} `;

console.log( saludar( 'Duvan' ) );
console.log( saludar2( 'Felipe' ) );


const getUser = () => (
    {
        uid: 'ABC123',
        username: 'ElPapi'
    }
);


console.log( getUser() );