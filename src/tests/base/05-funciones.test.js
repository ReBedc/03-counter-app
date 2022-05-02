import { getUser, getUsuarioActivo } from "../../base/05-funciones";


describe('Pruebas en 05-funciones.test.js', () => {

    test('getUser debe de retornar un objeto', () => {

        // 1. Inicializacion
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
    
        // 2. Estimulo
        const user = getUser();
        console.log(user);
        // 3. Observar el comportamiento
        expect(user).toEqual(userTest); // compara las propiedades y los valores
    });

    // getUsuarioActivo debe retornar un objeto
    test('getUsuarioActivo debe de retornar un objeto', () => {

        // 1. Inicializacion
        const nombre = 'Juan';
    
        // 2. Estimulo
        const user = getUsuarioActivo(nombre);
        console.log(user);
        // 3. Observar el comportamiento
        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        });
    });
 
});