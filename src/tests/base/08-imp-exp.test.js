import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en 08-imp-exp.test.js', () => {
    test('getHeroeById debe de retornar un heroe', () => {

        // 1. Inicializacion
        const id = 1;
    
        // 2. Estimulo
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(h => h.id === id);
        
        // 3. Observar el comportamiento
        expect(heroe).toBe(heroeData);
    });

    test('getHeroeById debe de retornar undefined si heroe no existe', () => {

        // 1. Inicializacion
        const id = 10;
    
        // 2. Estimulo
        const heroe = getHeroeById(id);
        
        // 3. Observar el comportamiento
        expect(heroe).toBe(undefined);
    });

    // debe retornar un arreglo con los heroes de DC
    // owner
    // toEqual al array filtrado
    test('getHeroeById debe retornar un arreglo con los heroes de DC', () => {

        // 1. Inicializacion
        const owner = 'DC';
    
        // 2. Estimulo
        const heroes = getHeroesByOwner(owner);
        const heroesData =  heroes.filter( (heroe) => heroe.owner === owner );
        
        // 3. Observar el comportamiento
        expect(heroes).toEqual([
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            },
        ]);

        expect(heroes).toEqual(heroesData);
    });

    // debe retornar un array con los heroes de Marvel
    // length = 2 // toBe
    test('getHeroeById debe retornar un array con los heroes de Marvel', () => {

        // 1. Inicializacion
        const owner = 'Marvel';
    
        // 2. Estimulo
        const heroes = getHeroesByOwner(owner);
        
        // 3. Observar el comportamiento
        expect(heroes.length).toBe(2);
    });

});
