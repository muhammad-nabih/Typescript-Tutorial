"use strict";
// __________________START SECTION ONE ________________
// OPTIONAL FUNCTION PARAMETER
function detailsStudents(name, age, salary = 23000) {
    return `${name} The Age is : ${age} And The Salary is : ${salary}`;
}
console.log(detailsStudents("Mohammed", 21));
// __________________END SECTION ONE ________________
// __________________START SECTION TWO ________________
//  FUNCTION Rest
function StudentsNumber(...number) {
    console.log(number);
    let result = 0;
    number.forEach((number) => (result += number));
    return result;
}
console.log(StudentsNumber(20, 39, 40, 20, Number(true)));
let nameStudent = "welcome ";
function inheritanceFunc(btn) {
    return `${btn.up} ${btn.down} ${btn.left} ${btn.right} ${btn.Bool}`;
}
console.log(inheritanceFunc({
    up: "up",
    down: "down",
    left: "left",
    right: "right",
    Bool: true,
}));
// __________________END SECTION THREE ________________
// __________________STAT SECTION FOUR ________________
// DATATYPE : TUPLE
let article = [10, "ali", true];
console.log(article); //[10, 'ali', true]
article = [20, "mohammed", false];
console.log(article); // [20, 'mohammed', false]
article.push(20);
console.log(article); // [20, 'mohammed', false, 20]
// But You Can't Do This
// article = [20, "kareem", true, 30];
// __________________________
let data = [10, "ali", true];
// Now You Can't Do This
data.push(20);
// __________________END SECTION FOUR ________________
