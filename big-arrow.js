const multiply = (num1, num2, num3) => num1 * num2 * num3;
const totalMultiply = multiply(12, 4, 2);
console.log(totalMultiply);


const number = (num1) => num1 * 4;
const result = number(100);
console.log(result);


const number1 = () => 600 * 4;
const result1 = number1();
console.log(result1)

// empty parameter==
const emptyName = () => 'rafsan jany';
const name = emptyName();
console.log(name);

const doMath = (x, y) => {
    const sum = x + y;
    const sub = x - y;
    const multiply = x * y;
    // return sub;
    return multiply;
}

const outcome = doMath(20, 5);
console.log(outcome);

const y = x => x * x;
const z = y(5);
console.log(z)