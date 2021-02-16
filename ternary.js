const money = 500;
let food;
if (money > 100) {
    food = 'Biriyani';
}
else {
    food = 'Alur Vorta';
}

let food2 = money > 100 ? 'Biriyani' : 'Alur Vortan';

let active = true;
const cssClass = active ? 'Active' : 'Inactive';
//console.log(cssClass);

const x = active && 8;
const y = active || 8;
// console.log(x);
// console.log(y);

//String to number
const number = +'10';
//console.log(number);

//Number to string
const numText = 45 + '';
//console.log(numText);

//default parameter
function add(num1, num2 = 20) {
    return num1 + num2;
}
const result = add(5);
console.log(result);