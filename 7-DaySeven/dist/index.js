"use strict";
// __________________ START SECTION ONE __________________
console.log("_________ Section One __________");
console.log(" ".repeat(10));
class User {
    constructor(theme, font) {
        this.theme = theme;
        this.font = font;
    }
    save() {
        console.log("__________ Saved __________");
    }
    update() {
        console.log("__________ Updating __________");
    }
}
const userOne = new User(true, "Poppins");
console.log(userOne.theme);
console.log(userOne.font);
userOne.save();
userOne.update();
class FileSettingsHome {
    constructor(theme, __font) {
        this.theme = theme;
        this.__font = __font;
    }
    save() {
        console.log(`SettingsHome saved to file`);
    }
}
class DatabaseSettingsHome {
    constructor(theme, __font) {
        this.theme = theme;
        this.__font = __font;
    }
    save() {
        console.log(`SettingsHome saved to database`);
    }
}
// استخدام الفئة المناسبة بناءً على الحالة
let settingsHome;
let useDatabase = true;
if (useDatabase) {
    settingsHome = new DatabaseSettingsHome(true, "Arial");
}
else {
    settingsHome = new FileSettingsHome(true, "Arial");
}
settingsHome.save();
console.log(" ".repeat(10));
console.log("_________ End of Section One __________");
console.log(" ".repeat(10));
// __________________ END SECTION ONE __________________
// __________________ START SECTION TWO ________________
console.log(" ".repeat(10));
console.log("_________ End of Section One __________");
console.log(" ".repeat(10));
/*
  Class
  - Abstract Classes And Members
  - We Cannot Create An Instance Of An Abstract Class
*/
class Food {
    constructor(title) {
        this.title = title;
    }
}
class Pizza extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    getCookingTime() {
        console.log("cooking Time For Pizza is 30 min");
    }
}
class Burger extends Food {
    constructor(title, price) {
        super(title);
    }
    getCookingTime() {
        console.log("cooking Time For Burger is 1:30 Hours");
    }
}
let pizzaOne = new Pizza("Awesome Pizza", 100);
console.log(pizzaOne.title);
console.log(pizzaOne.price);
pizzaOne.getCookingTime();
console.log(" ".repeat(10));
console.log("_________ End of Section One __________");
console.log(" ".repeat(10));
// __________________ END SECTION TWO __________________
// __________________ START SECTION THREE __________________
console.log(" ".repeat(10));
console.log("_________ End of Section One __________");
console.log(" ".repeat(10));
/*
  Class
  - Polymorphism & Method Override

  - Polymorphism
  --- Classes Have The Same Methods But Different Implementations

  - Method Override
  --- Allowing Child Class To Provide Implementation Of A Method In Parent Class
  --- A Method In Child Class Must Have Same Name As Parent Class

  --- noImplicitOverride
*/
class Player {
    constructor(name) {
        this.name = name;
    }
    attack() {
        console.log("Attacking Now ...");
    }
}
class Amazon extends Player {
    constructor(name, spears) {
        super(name);
        this.spears = spears;
    }
    attack() {
        console.log("Attacking with spears ...");
    }
}
class Barbarian extends Player {
    constructor(name, axeDurability) {
        super(name);
        this.axeDurability = axeDurability;
    }
    attack() {
        console.log("Attacking with axe ...");
    }
}
const playerAmazon = new Amazon("Amazon", 200);
playerAmazon.attack();
console.log("-_".repeat(10));
const playerBarbarian = new Barbarian("Barbarian", 100);
playerBarbarian.attack();
console.log(" ".repeat(10));
console.log("_________ End of Section One __________");
console.log(" ".repeat(10));
// __________________ END SECTION THREE __________________
