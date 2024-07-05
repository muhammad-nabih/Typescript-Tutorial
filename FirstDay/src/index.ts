let personName: string = "Mohammad";
let age: number = 21;
let isMarried: boolean = false;
let randomData: any = 20;

// \===========\
console.log(randomData); //output:20;
randomData = personName;
console.log(randomData); //output:Mohammad
// \===========\

let data; //type is any
// ^ Error:  string is not assignable to type number
// age ='ali';

console.log(personName, age, isMarried, randomData, data);

//You can see The Error Like parameter 'a' implicitly having an 'any' type
// so you should customize data type like number
function sum(a, b) {
  return a + b;
}
console.log(sum(10, "20")); //output:1020

function sumNumber(a: number, b: number) {
  return a + b;
}
console.log(sumNumber(10, 20)); //output : 30
// you can see The Error Like parameter 'b' is string but should be number
console.log(sumNumber(10, "20")); //output : 1020
