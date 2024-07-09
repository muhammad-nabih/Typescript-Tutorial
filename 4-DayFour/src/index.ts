// __________________START SECTION ONE ________________

// Void: is a function that returns nothing
// function loginVoid(msg: string) {
//   console.log(msg);
//   return;
// }
// console.log(loginVoid("hello World"));

// Never: is a function that never returns anything
// function loginNever(msg: string) {
//   while (true) {
//     console.log(msg);
//   }
//   return;
// }
// console.log(loginNever("Hello World"));

// __________________END SECTION ONE ________________

// __________________START SECTION TWO ________________
// Enums

// const KIDS = 15;
// const EASY = 9;
// const MEDIUM = 6;
// const HARD = 3;

// enum Level {
//   KIDS = 15,
//   EASY = 9,
//   MEDIUM = 6,
//   HARD = 3,
// }

// let lvl: string = "Easy";

// function logLevel(lvl: string) {
//   if (lvl === "Easy") {
//     console.log(`The Level Is ${lvl} And Number Of Second Is ${Level.EASY}`);
//   }
//   return;
// }
// console.log(logLevel(lvl));
// __________________END SECTION TWO ________________

// __________________START SECTION THREE ________________
// DATA TYPES -TYPE ASSERTIONS

// Selected Image type
// const myImage = <HTMLImageElement>document.getElementById("myImage");

//const data: any = "1000";

//console.log((data as string).repeat(3)); // output: 100010001000
//console.log((data as number).toFixed(2)); // Error:data.toFixed is not a function

//__________________END SECTION THREE ________________

//__________________ START SECTION FOUR ________________

type A = {
  one: string;
  two: number;
  three: boolean;
};

type B = A & {
  four: string;
};
type C = {
  five: number;
};
type mix = A & C;
function printType(btns: mix) {
  console.log(
    `|==| ${btns.one} |==| ${btns.two} |==| ${btns.three} |==| ${btns.five}|==| `
  );
}
printType({ one: "test", two: 20, three: true, five: 20 });

//__________________END SECTION FOUR ________________
