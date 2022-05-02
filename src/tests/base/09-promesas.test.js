import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas con promesas', () => {
    test('getHeroeByIdAsync debe de retornar un heroe async', ( done ) => {

        // 1. Inicializacion
        const id = 1;

        const heroe = getHeroeByIdAsync(id)
            .then (heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            });

    });

    test('debe de retornar un error si el heroe por id no existe', ( done ) => {

        // 1. Inicializacion
        const id = 10;

        const heroe = getHeroeByIdAsync(id)
            .catch (error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });

    });
    

});
