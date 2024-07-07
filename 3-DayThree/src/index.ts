// __________________START SECTION ONE ________________
// OPTIONAL FUNCTION PARAMETER
function detailsStudents(name?: string, age?: number, salary: number = 23000) {
  return `${name} The Age is : ${age} And The Salary is : ${salary}`;
}
console.log(detailsStudents("Mohammed", 21));
// __________________END SECTION ONE ________________

// __________________START SECTION TWO ________________
//  FUNCTION Rest
function StudentsNumber(...number: number[]): number {
  console.log(number);
  let result = 0;
  number.forEach((number) => (result += number));
  return result;
}
console.log(StudentsNumber(20, 39, 40, 20, Number(true)));
// __________________END SECTION TWO  ________________

// __________________START SECTION THREE ________________
// Alias Type

// Simple Alias
type st = string;
let nameStudent: st = "welcome ";

// Advanced Alias
type Button = {
  up: string;
  down: string;
  left: string;
  right: string;
};
type Last = Button & {
  Bool: boolean;
};

function inheritanceFunc(btn: Last) {
  return `${btn.up} ${btn.down} ${btn.left} ${btn.right} ${btn.Bool}`;
}
console.log(
  inheritanceFunc({
    up: "up",
    down: "down",
    left: "left",
    right: "right",
    Bool: true,
  })
);

// __________________END SECTION THREE ________________

// __________________STAT SECTION FOUR ________________
// DATATYPE : TUPLE

let article: [number, string, boolean] = [10, "ali", true];
console.log(article); //[10, 'ali', true]

article = [20, "mohammed", false];
console.log(article); // [20, 'mohammed', false]
article.push(20);
console.log(article); // [20, 'mohammed', false, 20]

// But You Can't Do This
// article = [20, "kareem", true, 30];

// __________________________

let data: readonly [number, string, boolean] = [10, "ali", true];

// Now You Can't Do This
data.push(20);

// __________________END SECTION FOUR ________________
