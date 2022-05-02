import { retornaArreglo } from "../../base/07-deses-arr";

describe('Pruebas en desestructuracion', () => {
    test('debe de retornar un string y un numero', () => {


        const [letras, numeros] = retornaArreglo();

        //expect(arr).toEqual(['ABC', 123]);
        expect(letras).toEqual('ABC');
        expect(typeof letras).toEqual('string');

        expect(numeros).toEqual(123);
        expect(typeof numeros).toEqual('number');
    })
});
