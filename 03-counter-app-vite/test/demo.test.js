
describe('Pruebas en <DemoComponent/>', () => {
    test('Esta prueba no debe de fallar', ()=>{
        //1. Inicialización
        const message1 = 'Hola mundo';
        //2. Estímulo -> lo que se aplica al sujeto de pruebas
        const message2 = message1.trim(); //-> Limpiar los espacios a ambos lados
        //3. Obervar el comportamineto... esperado
        expect( message1 ).toBe( message2 );

    });
});



