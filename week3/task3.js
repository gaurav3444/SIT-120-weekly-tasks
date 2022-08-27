let now = new Date(Date.now());
console.log("the current time is ");
console.log(now.toDateString());

console.log("the day is " + now.getDay());
console.log("the date is " + now.getDate());
console.log("the Month is " + now.getMonth());
console.log("the year is " + now.getFullYear());

now.setFullYear(2002);
console.log(now.getFullYear());
now.setDate(16);
console.log(now.getDate());
now.setMonth(10);
console.log(now.getMonth());

let birthday = new Date('16 October 2002 ');
console.log(birthday.toDateString());

let newDate = new Date("2024-10-9");
console.log(newDate);

let new_date = new Date();
setTimeout(() => {
    new_date = Date.now();
    console.log(new_date);
}),10000

