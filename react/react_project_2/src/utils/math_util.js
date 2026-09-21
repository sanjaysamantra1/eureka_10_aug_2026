export function add(a, b) {
    return a + b;
}

export function sumOfDigits(number) {
    number = Math.abs(number);
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}

export function factorial(number) {
    if (number < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}

export function averageMarks(marks) {
    if (marks.length === 0) {
        return 0;
    }
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    return total / marks.length;
}

export let cars = ['Tata', 'Honda']

export function addNewCar(newCar) {
    cars.push(newCar);
}