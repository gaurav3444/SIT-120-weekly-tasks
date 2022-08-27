//return the character at the specified index
let text = "HELLO WORLD";
console.log(text[1]);
console.log(text.length); // for checking length of string

//assigning string value to a variable
let Print_Message = "Gaurav ";
console.log(Print_Message);

//performing calculation
let a = 34; let b = 28; const c = 3;
sum = a + b + c;
console.log(sum);

//checking the data-type 
let First_Name = "Gaurav"; let Age = 19;
console.log(typeof First_Name);
console.log(typeof Age);

//converting to lowercase and uppercase
let ab = "ab"; let bc = "BC";
console.log(ab.toUpperCase());
console.log(bc.toLowerCase());

// String concat
let sentence = "Hello" + " " + "Gaurav!";
sentence = "Hello".concat(" ", "Gaurav!");
console.log(sentence);

//comparing strings
let xy = 7; let wz = 20;
if (xy > wz)
{
    console.log(xy + " is greater than " + wz);
}
else if(xy < wz)
{
    console.log(xy + " is greater than " + wz);
}
else
{
    console.log(wz + " is eqault to " + xy);
}