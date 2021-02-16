//array destructuring
const numbers = [66 , 44 , 20 , 47];
// const x = numbers[0];
// const y = numbers[1];

// const [x,y] = [11,20];
const [x,y,z] = numbers;

function boxify(num1){
    return [num1 , num1 + 5];
}

console.log([x , y , z]);

const [box1 , box2] = boxify(8);
console.log(box1 , box2);

//object destructuring
const person = {name: 'Faysal' , age: 23};
const {name} = person;
console.log(name);

//create object shotcut
const one = 20;
const two = 40;
const obj = {one , two};
console.log(obj);

//new array using three dots
numbers.push(55);
const newNumbers = [...numbers , 100];
console.log(newNumbers);
console.log(numbers);