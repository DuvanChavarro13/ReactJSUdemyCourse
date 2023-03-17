import { render } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";


describe(' Pruebas en el CounterApp', () => { 
    
    const initialValue = 10;

    test('Debe hacer match con el snapshot', () => { 
        const { container } = render( <CounterApp value={initialValue}/> );
        expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar el valor inicial de 100 en CounterApp', () => { second })
 });