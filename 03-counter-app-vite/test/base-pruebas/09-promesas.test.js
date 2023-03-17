import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => { 

    test('getHeroeByIdAsync debe de retornar un héroe', ( done ) => { 
        const id = 1;
        getHeroeByIdAsync( id )
            .then( hero => {
                expect( hero ).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done(); //Nos ayuda a decirle a jest, que el código termine
            });
     });

     test('getHeroeByIdAsync debe de retornar un error si  héroe no existe', ( done ) => { 
        const id = 100;
        getHeroeByIdAsync( id )
            //Este .then no debería de suceder, porque se espera siempre el .catch
            .then( hero => {
                expect( hero ).toBeFalsy();
                done(); 
            })
            .catch( error => {
                // console.log(error)
                expect( error ).toBe( 'No se puedo encontrar el héroe '+id )
                done(); //Nos ayuda a decirle a jest, que el código termine
            });
     });
    
 });