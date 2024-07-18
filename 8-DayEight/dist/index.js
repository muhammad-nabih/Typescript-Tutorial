"use strict";
// __________________ START SECTION ONE __________________
console.log("_________ Section One __________");
console.log(" ".repeat(10));
function returnNumber(value) {
    return value;
}
function returnString(value) {
    return value;
}
function returnBoolean(value) {
    return value;
}
console.log(returnNumber(20));
console.log(returnString("mohamed"));
console.log(returnBoolean(!true));
function returnType(value) {
    return value;
}
console.log(" ".repeat(20));
console.log(" ".repeat(20));
console.log(" ".repeat(20));
console.log(returnType(3000));
console.log(returnType("Type one"));
console.log(returnType(!false));
console.log(returnType([1, 2, 3, 4, 45]));
console.log(" ".repeat(10));
console.log("_________ End of Section One __________");
console.log(" ".repeat(10));
// __________________ END SECTION ONE __________________
// __________________ START SECTION TWO __________________
console.log("_________ Section TWO __________");
console.log(" ".repeat(10));
function returnTypeParameter(value) {
    return value;
}
console.log(returnTypeParameter(3000));
console.log(returnTypeParameter("Type one"));
const returnArrowSyntax = (value) => {
    return value;
};
console.log(returnArrowSyntax(3000));
console.log(returnArrowSyntax("Type one"));
function returnMultiType(ValueOne, valueTwo) {
    return `First Value Is : ${ValueOne} Second Value Is : ${valueTwo}

  Type Of ValueOne Is ${typeof ValueOne}

  Type Of ValueTwo Is ${typeof valueTwo}
  `;
}
console.log("*".repeat(20));
console.log(returnMultiType(2000, "Ahmed"));
console.log(" ".repeat(20));
console.log("_________ End of Section TWO __________");
console.log(" ".repeat(10));
// __________________ END SECTION TWO __________________
// __________________ START SECTION THREE __________________
console.log("_________ Section THREE __________");
console.log(" ".repeat(10));
class User {
    constructor(value) {
        this.value = value;
    }
    sayHello(msg) {
        console.log("I 'm void function " + this.value);
    }
}
const userOne = new User(20);
console.log(userOne.value);
userOne.sayHello("Hi Brother");
console.log(" ".repeat(20));
console.log("_________ End of Section THREE __________");
console.log(" ".repeat(10));
// __________________ END SECTION THREE __________________
// __________________ START SECTION FOUR __________________
console.log("_________ Section FOUR __________");
console.log(" ".repeat(10));
class Collection {
    constructor(data) {
        this.data = data;
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
}
const CollectionOne = new Collection();
CollectionOne.addItem({
    itemsType: "Book One ",
    title: "The Atomic Habits",
    bookNumber: 200,
});
const CollectionTwo = new Collection();
CollectionTwo.addItem({
    itemsType: "GammingMobile ",
    title: "FreeFire",
    price: 300,
    isFree: true,
});
console.log(CollectionOne);
console.log("------CollectionTwo------");
console.log(CollectionTwo);
console.log(" ".repeat(20));
console.log("_________ End of Section FOUR __________");
console.log(" ".repeat(10));
// __________________ END SECTION FOUR __________________
