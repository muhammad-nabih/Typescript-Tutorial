"use strict";
let typeAnnotations = "Ali";
typeAnnotations = true;
typeAnnotations = 20;
let array = ["a", "b", "c", "d", "e", "f", 20];
console.log(typeof array);
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}
let arrayNumber = [1, 2, 3, 4, 5];
let arrayString = ["a", "b", "c", "d", "e", "f"];
let arrayBoolean = [true, false, true];
let mixedNumberAndStringArray = [
    ...arrayNumber,
    ...arrayString,
];
let nestedMixedNumberAndStringArray = [
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
let score = 90;
function annotation(name, age, salary) {
    if (name === "Mohammed") {
        return "22 is my age";
    }
    return `Name: ${name}, Age: ${age}, Salary: ${salary}`;
}
console.log(annotation("Mohammed", 21, 20000));
//# sourceMappingURL=index.js.map