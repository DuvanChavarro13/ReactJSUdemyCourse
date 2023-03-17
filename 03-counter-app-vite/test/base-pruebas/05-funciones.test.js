import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => { 
    test('getUser debe de retornar un objeto', () => { 

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        //Cuando son objetos
        expect( testUser ).toEqual( user );

     });

     test('getUsuario debe de retornar un objeto también', () => { 

        const name = 'Duvan';
        const user = getUsuarioActivo( name );
        expect( user ).toEqual( {
            uid: 'ABC567',
            username: name
        } );

      });
 });