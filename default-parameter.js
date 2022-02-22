function add(num1, num2 = 20) {
    console.log(num1, num2);
    // num2 = num2 || 5;
    /* if (num2 == undefined) {
        num2 = 5;
    } */
    const total = num1 + num2;
    return total;
}
const result = add(15);
console.log(result);


function name(first, second = "talukder") {
    const fullName = first + " " + second;
    return fullName
}
const finalName = name("rafsan")
console.log(finalName);