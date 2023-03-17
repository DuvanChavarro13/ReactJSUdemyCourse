import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/base-pruebas/data/heroes";

describe('Pruebas en 08-imp-exp', () => { 
    
    test('getHeroeById debe retornar un héroe por ID', () => { 
        
        const id = 1;
        const hero = getHeroeById( id );
        console.log(hero);
        
        expect( hero ).toEqual( {id: 1, name: 'Batman', owner: 'DC'} )
    });

    test('getHeroeById debe retornar undefined si no existe el ID', () => { 
        
        const id = 100;
        const hero = getHeroeById( id );
        console.log(hero);
        
        expect( hero ).toBeFalsy(); //Que tenga un valor nulo o negativo
    });


    test('getHeroeByOwner, debe retornar los héroes de DC', ()=>{
        const owner = 'DC';
        const hero = getHeroesByOwner( owner );
        console.log( hero );

        expect( hero.length ).toBe(3); 
        expect( hero ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]);
        expect( hero ).toEqual( heroes.filter( e => e.owner === owner) );
    });

    test('getHeroeByOwner, debe retornar los héroes de DC', ()=>{
        const owner = 'Marvel';
        const hero = getHeroesByOwner( owner );
        console.log( hero );

        expect( hero.length ).toBe(2); 
        expect( hero ).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ]);
        expect( hero ).toEqual( heroes.filter( e => e.owner === owner) );
    });

 })