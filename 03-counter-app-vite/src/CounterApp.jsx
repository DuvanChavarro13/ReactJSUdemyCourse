import { useState } from 'react'; 'react'; //->Importación de hooks
import PropTypes from 'prop-types'; //-> Importacion para colocar tipos a los props
export const CounterApp = ( { value } ) =>{
    
    /*Para usar un hook, se crea con la palabra reservada const, 
    para que no se mute el valor, pero si quiero cambiar el valor, 
    se usa el segundo argumento con la función set.
    El estado 'value', será el prop que se manda desde la clase Padre
    y es el mismo valor que se le asigna al counter. Para cambiarlo,
    se una el segundo argumento, que es setCounter. 
    Al llamarlo en la función handleAdd, se usa el setCounter, pero
    como este hace referencia a 'counter', no necesito volverlo a llamar
    en los argumentos de la función setCounter, sino que se hace un
    callback, y luego hago lo que quiero hacer, en este caso, incrementar
    el valor en 1.
    NOTA: Cuando cambio el estado, todo el componente se vuelve a ejecutar
    */
    const [ counter, setCounter ] = useState( value ); //-> El valor inicial del estado

    const handleAdd = ( ) => {
        //console.log( event );
        setCounter( (c)=> c+1 );
    }
    const handleSubstract = ( ) => setCounter( (c)=> c-1 );
    const handleReset = ( ) => setCounter( (c)=> value );

    return (
        <>
            <h1> CounterApp </h1>
            <h2> { counter  } </h2>

            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleSubstract }> -1 </button>
            <button onClick={ handleReset }> Reset </button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 1
}
