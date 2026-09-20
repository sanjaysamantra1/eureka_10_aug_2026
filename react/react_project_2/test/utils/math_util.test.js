import { describe, expect, test } from "vitest";
import { add, sumOfDigits } from "../../src/utils/math_util";

describe("Describe for Math Util", () => {  // Test suite = Group of tests
    test('Should test add method', () => {  // 1 test case
        expect(add(10, 20)).toBe(30);
        expect(add(10, -20)).toBe(-10);
        expect(add(-10, -20)).toBe(-30);
        expect(add(-10, 20)).toBe(10);
    })
    test('Should test add method', () => {  // 1 test case
        expect(sumOfDigits(125)).toBe(8);
    })
});