// function declaration==
function add(num1, num2) {
    // const total = num1 + num2;
    return num1 + num2;
}
const sum1 = add(10, 26);
console.log('function declaration::', sum1);

// function expression===
const add2 = function add2(num1, num2) {
    return num1 + num2;
}
const sum2 = add2(20, 35);
console.log('function expression::', sum2);

// function anonymous===
const add3 = function (num1, num2) {
    return num1 + num2;
}
const sum3 = add3(25, 35);
console.log('function anonymous::', sum3);

// function arrow===
const add4 = (num1, num2) => num1 + num2;
const sum4 = add4(70, 60);
console.log('function arrow::', sum4);