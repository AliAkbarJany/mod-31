
const max = Math.max(32, 56, 72, 90, 12);
console.log('max number::', max);


// const numbers = (23, 5, 78, 34)
// const maxNumber = Math.max(numbers);
// console.log('max number', maxNumber);

// const numbers22 = (23, 3, 45, 6, 1, 95);
const min = Math.min(23, 3, 45, 6, 1, 95)
// console.log('min number', min);



const numbers = (23, 5, 78, 34)
const maxNumber = Math.max(numbers);
// console.log('max number', maxNumber);

const numbers234 = (23, 233, 12, 7, 89, 2);
const minNumber = Math.min(numbers234);
// console.log(minNumber);



const arrayNumbers = Math.max([32, 56, 72, 100, 12]);
// console.log(max, arrayNumbers);
// console.log(arrayNumbers);

const numbersArray = [23, 6, 723, 45, 67];
const maxArray = Math.max(...numbersArray);
console.log(arrayNumbers, maxArray);
numbersArray.push(11);
console.log(numbersArray);

const numbers100 = numbersArray;
numbersArray.push(999);
console.log(numbers100);


const pushingArray = [11, 22, 33, 44, 55];

// const numbers200 = [pushingArray];
const numbers200 = [88888, ...pushingArray, 777777];
// const numbers200=[[11, 22, 33, 44, 55]]; and const numbers200 = [pushingArray]; both are same;;
pushingArray.push(66);
console.log(pushingArray);
console.log(numbers200);





