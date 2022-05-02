import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.test.js', () => {
    test('getSaludo debe de retornar hola fernando!', () => {

        // 1. Inicializacion
        const nombre = 'Fernando';
    
        // 2. Estimulo
        const saludo = getSaludo(nombre);
    
        // 3. Observar el comportamiento
        expect(saludo).toBe('Hola ' + nombre +'!');
    });

    //getSaludo debe de retornar Hola Carlos! si no hay argumento nombre
    test('getSaludo debe de retornar Hola Carlos! si no hay argumento nombre!', () => {

        // 1. Inicializacion
        const nombre = 'Carlos';
    
        // 2. Estimulo
        const saludo = getSaludo();
    
        // 3. Observar el comportamiento
        expect(saludo).toBe('Hola ' + nombre +'!');
    });
});
