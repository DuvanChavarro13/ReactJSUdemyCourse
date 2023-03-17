import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp/>', () => { 

    //La prueba del snapshot no es recomendable en etapa de desarrollo.

    // test('Debe de hacer match con el snapshot', () => { 

    //     const title =  'HOLA'
    //     const { container } =  render( <FirstApp title={title} /> );

    //     //Esta prueba se asegura de que el componente no vaya a cambiar al día de mañana -> Evalúa todo dentro del HTML
    //     expect( container ).toMatchSnapshot();
    //  });

     test('Debe de mostrar el título en un h1 ', () => { 

        const title =  'HOLA'
        const { container, getByText, getByTestId } =  render( <FirstApp title={title} /> );

        expect( getByText(title) ).toBeTruthy();

        //El container es un nodo del DOM, y el querySelector me permite saltar al DOM y buscar una etiqueta que sea un h1  
        // const h1 = container.querySelector('h1');
        // expect( h1.innerHTML ).toContain( title );

        
        expect( getByTestId('test-tltle').innerHTML ).toContain(title); 

      });

      test('Debe de mostrar el subtítulo enviado por props', () => { 
        
        const title =  'HOLA'
        const subTitle = 'Soy un subtítulo';
        const {  getByText, getAllByText } =  render( 
            <FirstApp 
                title={title} 
                subTitle={subTitle} 
            /> );

        //expect( getByText(subTitle) ).toBeTruthy(); //Se asegura que sea solo uno
        expect( getAllByText(subTitle).length ).toBe(2); //Se asegura que sean más de uno

       });
    
 });