//object
const person = {
    id: 1,
    name: 'Faysal',
    age: 23
};
//json convert back and forth
const data = (JSON.stringify(person));
const dataParsed = JSON.parse(data);
//console.log(dataParsed.name);

//local Storage
//localStorage.setItem('userId' , 1234);
const userId = localStorage.getItem('userId');
// console.log(userId);

localStorage.setItem('person' ,JSON.stringify(person));
const storedPerson = localStorage.getItem('person');
const parsedPerson = JSON.parse(storedPerson);
console.log(storedPerson);
console.log(parsedPerson.name);

const keys = Object.keys(parsedPerson);
console.log(keys);

const values = Object.values(parsedPerson);
console.log(values);