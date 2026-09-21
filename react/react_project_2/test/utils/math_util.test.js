import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, test } from "vitest";
import { add, addNewCar, averageMarks, cars, factorial, sumOfDigits } from "../../src/utils/math_util";

describe("Describe for Math Util", () => {  // Test suite = Group of tests
    beforeAll(() => {
        console.log('Before All...')
    })
    beforeEach(() => {
        console.log('Before Each...')
    })
    afterEach(() => {
        console.log('After Each...')
    })
    afterAll(() => {
        console.log('After All...')
    })

    test('Should test add method', () => {  // 1 test case
        console.log('It-1...')
        expect(add(10, 20)).toBe(30);
        expect(add(10, -20)).toBe(-10);
        expect(add(-10, -20)).toBe(-30);
        expect(add(-10, 20)).toBe(10);
    })
    test('Should test add method', () => {  // 1 test case
        console.log('It-2...')
        expect(sumOfDigits(125)).toBe(8);
    })
    test('Should test factorial method', () => {
        console.log('It-3...')
        expect(factorial(5)).toBe(120);
        expect(factorial(4)).toBe(24);
    })
    test('Should test factorial method', () => {
        console.log('It-4...')
        expect(averageMarks([10, 20, 30])).toBe(20);
        expect(averageMarks([])).toBe(0);
    })
    test('Should test addNewCar method', () => {
        expect(cars).toBeDefined();
        expect(cars.length).toBe(2);
        expect(cars).toContain('Tata');
        expect(cars).toContain('Honda');
        expect(cars).not.toContain('Maruti');
        expect(cars).not.toContain('Toyota');
        addNewCar('Maruti');
        expect(cars).toBeDefined();
        expect(cars.length).not.toBe(2);
        expect(cars.length).toBe(3);
        expect(cars).toContain('Tata');
        expect(cars).toContain('Honda');
        expect(cars).toContain('Maruti');
        expect(cars).not.toContain('Toyota');
    })
});