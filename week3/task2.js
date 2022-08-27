// typecasting tostring method
let number_1 = 16;
console.log(typeof number_1.toString());

// string array
let names = ['gaurav', 'shiva', 'ray', 'dev'];
console.log(names);

// find method
console.log(names.find((Name) => Name == 'gaurav') );

// find index method
console.log(names.findIndex((Name) => Name == 'gaurav'));

// push method: adds an elemnet to the end of the array
console.log(names.push('sir robin'));
console.log(names);

// pop method: removes the last element
console.log(names.pop());
console.log(names);

// we can use sort method to sort the array
let numbers = [7,8,2,5,1];
console.log(numbers.sort());

// slice method: slice is to cut out a part of the array
console.log(names.slice(1,3));

// we can use foreach to iterate through the loop
names.forEach((Name) => console.log(Name));

// accessing arrays
console.log(`i like ${names[0]}`);