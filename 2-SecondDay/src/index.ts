//_______________ Start Section One _______________

// Type Annotations
let typeAnnotations: string | number | boolean = "Ali";
typeAnnotations = true;
typeAnnotations = 20;

// Error : type number is not assignable to type string should delete the number from array because we selected string array
// let array: string[] = ["a", "b", "c", "d", "e", "f", 20];
let array = ["a", "b", "c", "d", "e", "f", 20];

// let array = ["a", "b", "c", "d", "e", "f", 20];

console.log(typeof array); //output: object;

for (let index = 0; index < array.length; index++) {
  const element = array[index];

  //output : string and number
  console.log(element);

  //output repeat doesn't exist type on  string and number
  // console.log(element.repeat(2));
}
// _______________ End Section One _______________

// _______________ Start Section 2 _______________

let arrayNumber: number[] = [1, 2, 3, 4, 5];
let arrayString: string[] = ["a", "b", "c", "d", "e", "f"];
let arrayBoolean: boolean[] = [true, false, true];
let mixedNumberAndStringArray: (string | number)[] = [
  ...arrayNumber,
  ...arrayString,
];
let nestedMixedNumberAndStringArray: (string | number | string[])[] = [
  ["a", "b", "c", "d", "e"],
  1,
  2,
  3,
  4,
  "a",
  "bc",
  ["a", "b", "c"],
];
console.log(nestedMixedNumberAndStringArray);
// _______________ End Section 2 _______________

// _______________ Start Section 3 _______________
// Type Annotations With Function
let score =90

function annotation(name: string, age: number, salary: number): string {
  if (name === "Mohammed") {
    return "22 is my age";
  }
  return `Name: ${name}, Age: ${age}, Salary: ${salary}`;
}
console.log(annotation("Mohammed", 21, 20000));

// _______________ End Section 3 _______________
