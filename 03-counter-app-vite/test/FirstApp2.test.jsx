import { getAllByText, render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp/>', () => { 

    const title = 'HOLA';
    const subtitle = 'Soy un subtítulo';

    test('Debe de hacer match con el snapshot', () => { 
        
        const { container } = render( 
            <FirstApp  
                title = {title}
            />
        ); 

        expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar el mensaje "HOLA"', () => { 

        render( <FirstApp  title = {title} />); 
        expect( screen.getByText(title) ).toBeTruthy();
        screen.debug(); //-> Para ver el objeto
    });

    test('Debe de mostrar el título en un h1', () => { 
        
        render( <FirstApp  title = {title} />); 
        expect( screen.getByRole('heading', {level: 1}).innerHTML ).toContain(title);
    });

    test('Debe de mostrar el subtitulo enviado por props', () => { 
        render( 
            <FirstApp  
                title = {title}
                subTitle = {subtitle}
            />
        );

        expect( screen.getAllByText(subtitle).length ).toBe(2);

    });


});