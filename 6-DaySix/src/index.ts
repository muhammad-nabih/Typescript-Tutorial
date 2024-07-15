// // __________________ START SECTION ONE __________________
// console.log("_________ Section One __________");
// console.log(" ".repeat(10));

// //In TypeScript, both `type` and `interface` are used to define custom types. However, they have some differences in terms of functionality and use cases. Here’s a detailed explanation with examples:

// // ### `interface`

// /*
// 1.  Declaration Merging : Interfaces can be merged, allowing for the addition of properties and methods.
// */

// interface Person {
//   name: string;
// }

// interface Person {
//   age: number;
// }

// const person: Person = {
//   name: "John",
//   age: 30,
// };

// // 2.  Extending : Interfaces can extend other interfaces.

// interface AnimalInterFace {
//   species: string;
// }

// interface DogInterFace extends AnimalInterFace {
//   breed: string;
// }

// const dog: DogInterFace = {
//   species: "Canine",
//   breed: "Labrador",
// };

// // 3.  Implements : Classes can implement interfaces.

// interface Printable {
//   print(): void;
// }

// class DocumentInterFace implements Printable {
//   print() {
//     console.log("Printing documentInterFace...");
//   }
// }

// // ### `type`

// // 1.  Type Aliases : `type` is used to create type aliases.

// type ID = string | number;

// let userId: ID = 123;
// userId = "abc123";

// // 2.  Union and Intersection Types : `type` can define union and intersection types.

// type AnimalType = {
//   species: string;
// };

// type DogType = AnimalType & {
//   breed: string;
// };

// const myDogType: DogType = {
//   species: "Canine",
//   breed: "Labrador",
// };

// // 3.  Tuple and Function Types : `type` can be used for tuples and function types.

// type TupleType = [string, number];

// let tuple: TupleType = ["Hello", 42];

// type Callback = (data: string) => void;

// const myCallback: Callback = (data) => {
//   console.log(data);
// };

// // ### Differences

// // 1.  Declaration Merging : Interfaces support declaration merging, whereas types do not.

// interface A {
//   x: number;
// }

// interface A {
//   y: number;
// }

// const obj: A = {
//   x: 1,
//   y: 2,
// };

// //  This is not possible with type:
// //  type B = { x: number; }
// //  type B = { y: number; } // Error

// // 2.  Extending : Interfaces can extend other interfaces or types, but types can only extend other types using intersections.

// interface AnimalInterFaceDifference {
//   species: string;
// }

// interface DogInterFaceDifference extends AnimalInterFaceDifference {
//   breed: string;
// }

// // Type extending type
// type Animal = {
//   species: string;
// };

// type Dog = Animal & {
//   breed: string;
// };

// // 3.  Implements : Classes can implement interfaces but cannot implement types directly. However, types can still define the shape of objects used with classes.

// interface Printable {
//   print(): void;
// }

// class DocumentInterFaceDiff implements Printable {
//   print() {
//     console.log("Printing document...");
//   }
// }

// // Type example
// type PrintableType = {
//   print(): void;
// };

// class AnotherDocument implements PrintableType {
//   print() {
//     console.log("Printing another document...");
//   }
// }

// /*
//  ### When to Use

//  - Use `interface` when you need to define a new type that might be extended or implemented in the future. It’s also preferable for defining shapes of objects in a more readable and structured manner.
//  - Use `type` for more complex type definitions like unions, intersections, tuples, or function types.

//  In summary, while both `interface` and `type` can be used to define the structure of an object, `interface` is more powerful in terms of declaration merging and extension capabilities, whereas `type` is more flexible for defining complex types and aliases.
// */

// console.log(" ".repeat(10));
// console.log("_________ End of Section One __________");
// console.log(" ".repeat(10));
// // __________________ END SECTION ONE __________________

// // __________________ START SECTION TWO __________________
// console.log("_________ Section Two __________");
// console.log(" ".repeat(10));

// //Type Annotations With Class
// class Car {
//   brand: string;
//   model: number;
//   msg: () => string;
//   constructor(brand: string, model: number) {
//     this.brand = brand;
//     this.model = model;
//     this.msg = function () {
//       return "Hello World";
//     };
//   }

//   sayModelAndBrand(): string {
//     return `The Brand Is ${this.brand} And The Model Is ${this.model}`;
//   }
// }

// class BigCar extends Car {
//   size: number;
//   constructor(size: number, brand: string, model: number) {
//     super(brand, model);
//     this.size = size;
//   }
//   sayModelAndBrand(): string {
//     return `The Brand Is ${this.brand} And The Model Is ${
//       this.model
//     } And The Size Is ${this.size} ${this.msg()}`;
//   }
// }

// let car1 = new Car("BMW", 2022);
// let bigCar = new BigCar(300, "BMW", 2022);
// console.log(car1.sayModelAndBrand());
// console.log(bigCar.sayModelAndBrand());

// console.log(" ".repeat(10));
// console.log("_________ End of Section Two __________");
// console.log(" ".repeat(10));
// // __________________ END SECTION TWO __________________

// // __________________ START SECTION THREE __________________
// console.log("_________ Section Three __________");
// console.log(" ".repeat(10));

// // Class Access Modifiers And Parameters
// /*
// في TypeScript، يتم استخدام محددات الوصول (access modifiers) للتحكم في مستوى الوصول إلى الخصائص والطرق داخل الكلاسات. هناك ثلاثة محددات وصول رئيسية:

// 1. **Public (عام)**:
//    - يمكن الوصول إلى الخصائص والطرق المعلنة كمحددة بالوصول العام من أي مكان.
//    - إذا لم يتم تحديد محدد وصول، فإن الخصائص والطرق تكون عامة بشكل افتراضي.

// 2. **Private (خاص)**:
//    - يمكن الوصول إلى الخصائص والطرق المعلنة كمحددة بالوصول الخاص فقط داخل نفس الكلاس.
//    - لا يمكن الوصول إليها من خارج الكلاس أو من كلاس فرعي.

// 3. **Protected (محمي)**:
//    - يمكن الوصول إلى الخصائص والطرق المعلنة كمحددة بالوصول المحمي داخل نفس الكلاس والكلاسات الفرعية (المشتقة).

// ### مثال على استخدام محددات الوصول:
// */
// class Person {
//   public name: string;        // يمكن الوصول إليها من أي مكان
//   private age: number;        // يمكن الوصول إليها فقط داخل الكلاس Person
//   protected address: string;  // يمكن الوصول إليها داخل الكلاس Person والكلاسات الفرعية

//   constructor(name: string, age: number, address: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }

//   public greet() {
//     console.log(`Hello, my name is ${this.name}.`);
//   }

//   private getAge() {
//     return this.age;
//   }

//   protected getAddress() {
//     return this.address;
//   }
// }

// class Employee extends Person {
//   private jobTitle: string;

//   constructor(name: string, age: number, address: string, jobTitle: string) {
//     super(name, age, address);
//     this.jobTitle = jobTitle;
//   }

//   public introduce() {
//     console.log(`Hello, my name is ${this.name} and I am a ${this.jobTitle}.`);
//     // يمكن الوصول إلى address لأنها محمية ويمكن الوصول إليها في كلاس فرعي
//     console.log(`I live at ${this.getAddress()}.`);
//   }
// }

// const thePerson = new Person("John", 30, "123 Main St");
// console.log(thePerson.name); // يمكن الوصول إليها لأنها عامة
// thePerson.greet();

// // لن يتمكن من الوصول إلى age لأنها خاصة
// // console.log(person.age); // Error
// // console.log(person.getAge()); // Error

// const employee = new Employee("Jane", 25, "456 Elm St", "Engineer");
// employee.introduce();

// /*
// ### Parameters Property (خاصية الوسائط)
// خاصية الوسائط في TypeScript هي طريقة مختصرة لتعريف الخصائص مباشرة من الوسائط المقدمة في دالة المنشئ (constructor). يمكن تحديد محدد الوصول مباشرة في الوسيطات لتعريف الخصائص وإسناد القيم إليها.

// ### مثال على استخدام خاصية الوسائط:
//  */
// class Car {
//   // يتم تعريف الخصائص وإسناد القيم مباشرة من الوسائط
//   constructor(public brand: string, private model: number) {}

//   public getCarInfo(): string {
//     return `The Brand Is ${this.brand} And The Model Is ${this.model}`;
//   }
// }

// const car = new Car("Toyota", 2022);
// console.log(car.brand); // يمكن الوصول إليها لأنها عامة
// console.log(car.getCarInfo());

// // لن يتمكن من الوصول إلى model لأنها خاصة
// // console.log(car.model); // Error

// /*
// في هذا المثال، يتم تعريف الخصائص `brand` و `model` مباشرة في الوسائط باستخدام محددات الوصول `public` و `private`، مما يوفر كتابة إضافية داخل الكلاس.

// بهذه الطريقة، تكون الشفرة أكثر اختصاراً ووضوحاً، ويتم التعامل مع الخصائص ومحددات الوصول بسهولة داخل الكلاس.
// */
// console.log(" ".repeat(10));
// console.log("_________ End of Section Three __________");
// console.log(" ".repeat(10));
// // __________________ END SECTION THREE __________________

// __________________ START SECTION FOUR __________________
console.log("_________ Section Four __________");
console.log(" ".repeat(10));

// getter and setter

// في TypeScript، يمكن استخدام `getter` و `setter` للوصول إلى الخصائص والتحكم فيها بطريقة أكثر دقة وتنظيمًا. توفر هذه الدوال واجهة للتعامل مع الخصائص بشكل غير مباشر، مما يسمح بتنفيذ منطق إضافي عند قراءة أو تعيين القيم.

// ### `getter` و `setter` في TypeScript

// #### `getter`
// دالة `getter` تُستخدم للحصول على قيمة خاصية ما. تُعرف باستخدام الكلمة المفتاحية `get`.

// #### `setter`
// دالة `setter` تُستخدم لتعيين قيمة خاصية ما. تُعرف باستخدام الكلمة المفتاحية `set`.

// ### مثال على `getter` و `setter`:

// class Person {
//   private _name: string;

//   constructor(name: string) {
//     this._name = name;
//   }

//   // getter للحصول على قيمة _name
//   get name(): string {
//     return this._name;
//   }

//   // setter لتعيين قيمة _name
//   set name(newName: string) {
//     if (newName.length > 0) {
//       this._name = newName;
//     } else {
//       console.error("Name cannot be empty.");
//     }
//   }
// }

// const person = new Person("John");
// console.log(person.name); // استخدام getter للحصول على القيمة: John
// person.name = "Jane"; // استخدام setter لتعيين قيمة جديدة
// console.log(person.name); // القيمة الجديدة بعد تعيينها: Jane
// person.name = ""; // محاولة تعيين قيمة فارغة، ستنتج رسالة خطأ

// // ### الخلل في JavaScript والـ `getter` و `setter`

// // في JavaScript، يمكن استخدام دوال عادية للوصول إلى وتعيين قيم الخصائص بدلاً من استخدام دوال `getter` و `setter` المضمنة. هذا يمكن أن يسبب مشاكل إذا لم يتم استخدامه بشكل صحيح، حيث يمكن تجاوز الخصائص الخاصة بسهولة.

// class Person {
//   constructor(name) {
//     this._name = name;
//   }

//   getName() {
//     return this._name;
//   }

//   setName(newName) {
//     if (newName.length > 0) {
//       this._name = newName;
//     } else {
//       console.error("Name cannot be empty.");
//     }
//   }
// }

// const person = new Person("John");
// console.log(person.getName()); // الحصول على القيمة: John
// person.setName("Jane"); // تعيين قيمة جديدة
// console.log(person.getName()); // القيمة الجديدة بعد تعيينها: Jane
// person.setName(""); // محاولة تعيين قيمة فارغة، ستنتج رسالة خطأ

// // في المثال أعلاه، يتم استخدام دوال عادية `getName` و `setName` بدلاً من `getter` و `setter`. يمكن استدعاء هذه الدوال مثل أي دالة أخرى، مما يجعل الشفرة أقل وضوحًا وتنظيمًا.

// // ### استخدام `_` في الخصائص

// // عادةً ما يتم استخدام `_` في بداية اسم الخاصية للإشارة إلى أن هذه الخاصية خاصة ولا يجب الوصول إليها مباشرةً من خارج الكلاس. هذا يعتبر مجرد تقليد ولا يوجد شيء في JavaScript أو TypeScript يمنع الوصول إلى هذه الخصائص بشكل مباشر.

// // #### مثال:

// class Person {
//   private _name: string;

//   constructor(name: string) {
//     this._name = name;
//   }

//   get name(): string {
//     return this._name;
//   }

//   set name(newName: string) {
//     if (newName.length > 0) {
//       this._name = newName;
//     } else {
//       console.error("Name cannot be empty.");
//     }
//   }
// }

// const person = new Person("John");
// console.log(person.name); // استخدام getter للحصول على القيمة: John
// person.name = "Jane"; // استخدام setter لتعيين قيمة جديدة
// console.log(person.name); // القيمة الجديدة بعد تعيينها: Jane

// // في هذا المثال، `_name` هي خاصية خاصة يتم الوصول إليها وتعيينها باستخدام `getter` و `setter`، مما يحافظ على سلامة البيانات ويمكّننا من تنفيذ منطق إضافي عند القراءة أو الكتابة.

// console.log(" ".repeat(10));
// console.log("_________ End of Section Four __________");
// console.log(" ".repeat(10));
// // __________________ END SECTION FOUR __________________

// __________________ START SECTION FIVE __________________
console.log("_________ Section Five __________");
console.log(" ".repeat(10));

// Class Static Members


// في TypeScript، الأعضاء الثابتة (static members) هي خصائص وطرق تُعلن باستخدام الكلمة المفتاحية `static`. تختلف الأعضاء الثابتة عن الأعضاء العادية في الكلاس بأنها ترتبط بالكلاس نفسه وليس بأي كائن يتم إنشاؤه من الكلاس. يمكن الوصول إلى الأعضاء الثابتة مباشرة عبر اسم الكلاس دون الحاجة إلى إنشاء كائن منه.

// ### لماذا نستخدم الأعضاء الثابتة؟

// 1. **التخزين المشترك للبيانات**: يمكن استخدام الأعضاء الثابتة لتخزين البيانات المشتركة بين جميع الكائنات من الكلاس.
// 2. **طرق الأدوات**: يمكن استخدام الطرق الثابتة لإنشاء دوال مساعدة يمكن استدعاؤها دون الحاجة إلى إنشاء كائن.
// 3. **ثبات القيم**: يمكن استخدامها لتعريف القيم الثابتة التي لا تتغير وتكون مرتبطة بالكلاس نفسه.

// ### مثال على استخدام الأعضاء الثابتة:

// #### تعريف واستخدام الأعضاء الثابتة:

class MathUtil {
  // خاصية ثابتة
  static PI: number = 3.14;

  // طريقة ثابتة
  static circleArea(radius: number): number {
    return MathUtil.PI * radius * radius;
  }
}

console.log(MathUtil.PI); // الوصول إلى الخاصية الثابتة: 3.14
console.log(MathUtil.circleArea(5)); // استدعاء الطريقة الثابتة: 78.5

// ### مميزات الأعضاء الثابتة:

// 1. **الوصول المباشر**: يمكن الوصول إلى الأعضاء الثابتة مباشرة عبر اسم الكلاس دون الحاجة إلى إنشاء كائن منه.
// 2. **المشاركة**: الأعضاء الثابتة مشتركة بين جميع الكائنات من الكلاس.
// 3. **التنظيم**: يمكن استخدام الأعضاء الثابتة لتنظيم دوال الأدوات والقيم الثابتة داخل الكلاس.

// ### مثال آخر مع استخدام الخصائص الثابتة:
// typescript
class Counter {
  // خاصية ثابتة لتتبع عدد الكائنات
  static count: number = 0;

  constructor() {
    Counter.count++;
  }

  // طريقة ثابتة للحصول على القيمة الحالية للعداد
  static getCount(): number {
    return Counter.count;
  }
}

const counter1 = new Counter();
const counter2 = new Counter();
console.log(Counter.getCount()); // الوصول إلى الخاصية الثابتة عبر الطريقة الثابتة: 2

/*
### خلاصة:
الأعضاء الثابتة في TypeScript مفيدة لتخزين البيانات المشتركة، وإنشاء طرق الأدوات، وتعريف القيم الثابتة التي ترتبط بالكلاس نفسه بدلاً من الكائنات. يمكن الوصول إليها مباشرة عبر اسم الكلاس، مما يوفر وسيلة فعالة ومنظمة للوصول إلى البيانات والدوال المرتبطة بالكلاس.
*/


//  some comments

// أنت تستخدم الأعضاء الثابتة بشكل صحيح، ولكن هناك بعض الأخطاء الطفيفة التي تحتاج إلى إصلاحها:

// 1. دالة `getCount()` تعيد قيمة ولكنها لا تحتاج إلى استدعاء `console.log` عند استدعائها.
// 2. لا يمكن استخدام `console.log` مباشرة على الدالة الثابتة `getCount` لأنها تعيد `void`.
// 3. هناك خطأ في استدعاء setter `newCreated`، حيث أن setter يتم استدعاؤه كخاصية وليس كدالة.

// إليك الشفرة المصححة:


class User {
  private static _created: number = 0;

  // طريقة ثابتة لعرض عدد المستخدمين
  static getCount(): number {
    return this._created;
  }

  constructor(public user: string) {
    User._created++;
  }

  // getter للحصول على عدد المستخدمين
  get howManyUser() {
    return User._created;
  }

  // setter لتعيين قيمة جديدة لعدد المستخدمين
  set newCreated(newCreated: number) {
    User._created = newCreated;
  }
}

let userOne = new User("Ahmed");
let userTwo = new User("Ahmed");
let userThree = new User("Ahmed");

console.log(User.getCount()); // Output: 3

userOne.newCreated = 20; // تعيين قيمة جديدة لعدد المستخدمين

console.log(User.getCount()); // Output: 20


// ### توضيح الأمور:

// 1. **`static`**: الكلمة المفتاحية `static` تُستخدم لتعريف الخصائص والطرق الثابتة التي تنتمي إلى الكلاس نفسه بدلاً من أي كائن يتم إنشاؤه من الكلاس.
// 2. **`_created`**: خاصية ثابتة خاصة تُستخدم لتتبع عدد الكائنات التي تم إنشاؤها من الكلاس `User`.
// 3. **`getCount()`**: طريقة ثابتة لإعادة عدد الكائنات التي تم إنشاؤها.
// 4. **`howManyUser`**: `getter` للحصول على قيمة `_created`.
// 5. **`newCreated`**: `setter` لتعيين قيمة جديدة لـ `_created`.

// ### النقاط الأساسية:
// - `getter` يتم استدعاؤه كخاصية بدون أقواس.
// - `setter` يتم استدعاؤه كخاصية ويتم تعيين القيمة مباشرة.
// - الطرق الثابتة يتم استدعاؤها باستخدام اسم الكلاس مباشرةً.

// بهذه التعديلات، يجب أن تعمل الشفرة بشكل صحيح وتكون أكثر وضوحًا وتنظيمًا.
console.log(" ".repeat(10));
console.log("_________ End of Section Five __________");
console.log(" ".repeat(10));
// __________________ END SECTION FIVE __________________
