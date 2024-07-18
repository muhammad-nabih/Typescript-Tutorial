// __________________ START SECTION ONE __________________
console.log("_________ Section One __________");
console.log(" ".repeat(10));

function returnNumber(value: number): number {
  return value;
}
function returnString(value: string): string {
  return value;
}
function returnBoolean(value: boolean): boolean {
  return value;
}

console.log(returnNumber(20));
console.log(returnString("mohamed"));
console.log(returnBoolean(!true));

function returnType<T>(value: T): T {
  return value;
}
console.log(" ".repeat(20));
console.log(" ".repeat(20));
console.log(" ".repeat(20));

console.log(returnType<number>(3000));
console.log(returnType<string>("Type one"));
console.log(returnType<boolean>(!false));

console.log(returnType<number[]>([1, 2, 3, 4, 45]));

console.log(" ".repeat(10));
console.log("_________ End of Section One __________");
console.log(" ".repeat(10));
// __________________ END SECTION ONE __________________

// __________________ START SECTION TWO __________________
console.log("_________ Section TWO __________");
console.log(" ".repeat(10));

function returnTypeParameter<T>(value: T): T {
  return value;
}

console.log(returnTypeParameter<number>(3000));
console.log(returnTypeParameter<string>("Type one"));

const returnArrowSyntax = <T>(value: T): T => {
  return value;
};

console.log(returnArrowSyntax<number>(3000));
console.log(returnArrowSyntax<string>("Type one"));

function returnMultiType<T, S>(ValueOne: T, valueTwo: S) {
  return `First Value Is : ${ValueOne} Second Value Is : ${valueTwo}

  Type Of ValueOne Is ${typeof ValueOne}

  Type Of ValueTwo Is ${typeof valueTwo}
  `;
}

console.log("*".repeat(20));
console.log(returnMultiType<number, string>(2000, "Ahmed"));

console.log(" ".repeat(20));
console.log("_________ End of Section TWO __________");
console.log(" ".repeat(10));
// __________________ END SECTION TWO __________________

// __________________ START SECTION THREE __________________
console.log("_________ Section THREE __________");
console.log(" ".repeat(10));

class User<T> {
  constructor(public value: T) {}
  sayHello(msg: T): void {
    console.log("I 'm void function " + this.value);
  }
}

const userOne = new User<number | string>(20);
console.log(userOne.value);
userOne.sayHello("Hi Brother");

console.log(" ".repeat(20));
console.log("_________ End of Section THREE __________");
console.log(" ".repeat(10));
// __________________ END SECTION THREE __________________
// __________________ START SECTION FOUR __________________
console.log("_________ Section FOUR __________");
console.log(" ".repeat(10));

interface Book {
  itemsType: string;
  title: string;
  bookNumber: number;
}

interface Game extends Omit<Book, "bookNumber"> {
  price: number;
  isFree: boolean;
}

class Collection<T> {
  constructor(public data: T[] = []) { }

  addItem(item: T): void {
    this.data.push(item);
  }
}

const CollectionOne = new Collection<Book>();

CollectionOne.addItem({
  itemsType: "Book One",
  title: "The Atomic Habits",
  bookNumber: 200,
});

const CollectionTwo = new Collection<Game>();

CollectionTwo.addItem({
  itemsType: "GammingMobile",
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
