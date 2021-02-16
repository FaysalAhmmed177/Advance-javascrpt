const numbers = [1,2,3,4,5,6,7,8,9];
const friends = ['Rafiq', 'Jabber', 'Barkat', 'salam'];

const products = [
    {id: 1, name:'laptop', price: 500},
    {id: 2, name:'phone', price: 100},
    {id: 3, name:'watch', price: 20},
    {id: 4, name:'tablet', price: 80},
]
//map
const names = products.map(product => product.name);
const prices = products.map(product => product.price *2);
const prices2 = products.map(pd => {
   return pd.price;
})
//console.log(prices2);
// console.log(names);
 console.log(prices);

//forEach
//products.forEach(product => console.log(product.name))


//filter
const cheaper = products.filter(product => product.price < 100);
//console.log(cheaper);

//remove an item using filter
const remaining = products.filter(pd => pd.id !=3);
//console.log(remaining);

//find
const hasWatch = products.find(pd => pd.name === 'watch');
console.log(hasWatch);