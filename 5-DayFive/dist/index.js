"use strict";
// __________________ START SECTION ONE __________________
console.log("_________ Section One __________");
console.log(" ".repeat(10));
// Define a student data object using a type
const studentData = {
    id: 1,
    name: "ahmed",
    age: 22,
};
console.log(typeof studentData); // Output: object
console.log(typeof studentData.age); // Output: number
console.log(typeof studentData.id); // Output: number
console.log(typeof studentData["name"]); // Output: string
console.log(" ".repeat(10));
console.log("_________ End of Section One __________");
console.log(" ".repeat(10));
// __________________ END SECTION ONE __________________
// __________________ START SECTION TWO __________________
console.log("_________ Section Two __________");
console.log(" ".repeat(10));
// Create a user object that conforms to the User interface
const user = {
    id: 1,
    name: "ahmed",
    age: 22,
    hire: true,
};
console.log(user);
console.log(" ".repeat(10));
console.log("_________ End of Section Two __________");
console.log(" ".repeat(10));
// __________________ END SECTION TWO __________________
// __________________ START SECTION THREE __________________
console.log("_________ Section Three __________");
console.log(" ".repeat(10));
// Create a person object that conforms to the Person interface
const person = {
    name: "Ahmed",
    age: 22,
    salary: 23000,
    isMarried: true,
    getMassage() {
        return `Hello, I'm ${this.name}. My age is ${this.age}.`;
    },
    getAge(age) {
        return age;
    },
    sayWelcome(msgWelcome) {
        return msgWelcome;
    },
};
console.log(person.getMassage()); // Output: Hello, I'm Ahmed. My age is 22.
console.log(person.getAge(22)); // Output: 22
console.log(person.sayWelcome("Welcome Brother <3")); // Output: Welcome Brother <3
console.log(" ".repeat(10));
console.log("_________ End of Section Three __________");
console.log(" ".repeat(10));
// __________________ END SECTION THREE __________________
// __________________ START SECTION FOUR __________________
console.log("_________ Section Four __________");
console.log(" ".repeat(10));
// Create a user settings object that conforms to the Settings interface
let userSettings = {
    theme: true,
    // font: "Arial",
    // sidebar: true,
    // external: true,
};
console.log(userSettings);
console.log(" ".repeat(10));
console.log("_________ End of Section Four __________");
console.log(" ".repeat(10));
// __________________ END SECTION FOUR __________________
// __________________ START SECTION FIVE __________________
console.log("_________ Section Five __________");
console.log(" ".repeat(10));
// Create a super admin object that conforms to the SuperAdmin interface
const superAdmin = {
    name: "Ahmed",
    age: 22,
    edit: true,
    delete: true,
    protect: true,
    start: true,
};
console.log(superAdmin);
console.log(" ".repeat(10));
console.log("_________ End of Section Five __________");
console.log(" ".repeat(10));
// __________________ END SECTION FIVE __________________
