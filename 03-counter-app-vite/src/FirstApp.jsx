import PropTypes from 'prop-types'; //-> OJO con la escritura

//import { Fragment } from 'react'; -> Esto ya no se importa, ni se declara el return

//Objeto -> Este no se puede mandar en el return de la función dentro del html, a no se que lo mande como Json, o haga una instancia de uno de sus elementos.

/*
const newMessage = { 
    message: 'Hola mundo',
    title: 'Duvan'
} 
*/

//Es recomendable que las funciones se escriban por fuera de los functional components.
const getResult = () => {
    return 4 + 4;
}

export const FirstApp = ( {title, subTitle, name} ) => { // -> Desestructuro de las props

    //console.log(props) -> Es un objeto

    /* Esto es para marcar un error si el proptype 'title' no existe, pero hay una mejor forma de hacer esto.
    if ( !title ){
        throw new Error('El titulo no existe')
    } 
    */

    return (
        //Esto "<>" es un sinonimo de un fragmento, es decir, un encapsulador (agrupador) para enviar un grupo de elementos html
        <>
            <h1 data-testid="test-tltle"> {title} </h1>
            {/* <h1> { getResult() } </h1> */}
            {/* <code> { JSON.stringify( newMessage  ) } </code> */}
            <p> {subTitle} </p>
            <p> {subTitle} </p>
            <p> {name} </p>
        </>
    );
}

// Propiedades de los properties
FirstApp.propTypes = {
    title: PropTypes.string.isRequired, //-> Propiedades del properties 'title', que devuelve un string y que sea obligatorio.
    subTitle: PropTypes.string,
}

//Declarar Properties por defecto 
FirstApp.defaultProps = { 
    // title: 'No hay título',
    subTitle: 'No hay subtítulo',
    name: 'Duvan Chavarro'
}