// JSX: Código de Javascript y XML (HTML)

import React from 'react';
import ReactDOM from 'react-dom/client'; //Para renderizar la aplicación. 


//import App from './HelloWorldApp'; -> Le puedo colocar un nombre diferente a App, puesto que es todo lo que recibo de esa ruta que se exportó por defecto.
//import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';


import './styles.css'
//Todo en React comienza con un componente (functional component) -> Trabajar con componentes basados en funciones.


//Forma de renderizar el componente en el DOM. 
ReactDOM.createRoot( document.getElementById('root') ).render(
    //Se debe renderizar React, y se recomienda hacerlo en el modo estricto (StricMode)
    <React.StrictMode>
        {/* <HelloWorldApp/> */}
        {/* <FirstApp title='HOLA'/> */}
        <CounterApp value={20} />
    </React.StrictMode>
)