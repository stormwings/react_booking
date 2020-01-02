import { sumar, multiplicar, restar, dividir, numbers } from './../maths';

describe('Calculos matematicos', () =>{
    test('Prueba de sumas', ()=> {
        expect(sumar(1,2)).toBe(3);
    });
    test('Multiplicar ', () => {
        expect(multiplicar(2,2)).toBe(4);
    });
    test('Prueba de restas', ()=> {
        expect(restar(2,1)).toBe(1);
    });
    test('Multiplicar ', () => {
        expect(dividir(4,2)).toBe(2);
    });
});

describe('Comparacion de numeros', () => {
    test('Mayor que',  () => {
        expect(numbers(2,10)).toBeGreaterThan(9);
    });
    test('Mayor que o igual', () =>{
        expect(numbers(20,10)).toBeGreaterThanOrEqual(30);
    });
    test('Menor que', () => {
        expect(numbers(0,0)).toBeLessThan(1);
    });
    test('Menor que o igual', () => {
        expect(numbers(1,1)).toBeLessThanOrEqual(2);
    });
    test('Numeros flotantes', () => {
        expect(numbers(0.2,0.2)).toBeCloseTo(0.4);
    });
});