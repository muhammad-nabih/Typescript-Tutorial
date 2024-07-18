// __________________ START SECTION ONE __________________
console.log("_________ Section One __________");
console.log(" ".repeat(10));

// class implements interface
interface Settings {
  theme: boolean;
  font?: string;
  save(): void;
}

class User implements Settings {
  font: string;
  theme: boolean;
  constructor(theme: boolean, font: string) {
    this.theme = theme;
    this.font = font;
  }
  save(): void {
    console.log("__________ Saved __________");
  }
  update(): void {
    console.log("__________ Updating __________");
  }
}

const userOne = new User(true, "Poppins");
console.log(userOne.theme);
console.log(userOne.font);
userOne.save();
userOne.update();

// استخدام الواجهات (Interfaces) وتنفيذها عبر الفئات (Classes) في TypeScript يوفر العديد من الفوائد العملية في المشاريع. هنا بعض النقاط التي توضح الفوائد العملية لهذه الطريقة:

// 1. **تحقيق التعاقد والاتساق (Contract and Consistency):**
//    - الواجهة تحدد مجموعة من الخصائص والأساليب التي يجب على أي فئة (Class) تنفذ هذه الواجهة أن تتبعها. هذا يوفر عقداً بين أجزاء مختلفة من الكود، مما يضمن أن الفئات التي تنفذ نفس الواجهة تتصرف بطريقة متسقة.

// 2. **التوسعة والصيانة (Extensibility and Maintainability):**
//    - عندما تحتاج إلى إضافة ميزات جديدة أو تغيير السلوك في تطبيقك، يمكن أن تساعدك الواجهات على القيام بذلك بدون كسر الكود الحالي. يمكنك إنشاء فئات جديدة تنفذ الواجهة نفسها دون الحاجة إلى تعديل الفئات الموجودة.

// 3. **قابلية إعادة الاستخدام (Reus1ability):**
//    - بفضل التعاقد المحدد بواسطة الواجهة، يمكنك إعادة استخدام الفئات في سياقات مختلفة. يمكنك استبدال الفئة المستخدمة في جزء من الكود بفئة أخرى تنفذ نفس الواجهة بسهولة.

// 4. **الفصل بين التصميم والتنفيذ (Separation of Concerns):**
//    - الواجهة تعبر عن الشكل العام (التصميم) بينما الفئة توفر التنفيذ الفعلي. هذا الفصل يساعد في جعل الكود أكثر تنظيماً ويسهل الفهم والتطوير.

// 5. **التعاون بين الفرق (Team Collaboration):**
//    - في المشاريع الكبيرة، يمكن أن يعمل أعضاء الفريق المختلفون على أجزاء مختلفة من الكود في نفس الوقت. الواجهات توفر مواصفات واضحة للأجزاء المختلفة، مما يسهل التعاون ويقلل من التعارضات.

//  ANCHOR  WORK EXMAPLE :

// افترض أنك تعمل على تطبيق يتعامل مع إعدادات المستخدم، وتريد أن تكون لديك القدرة على تغيير طريقة حفظ الإعدادات (مثل الحفظ في قاعدة بيانات بدلاً من الحفظ في ملف محلي). باستخدام الواجهات، يمكنك تحقيق ذلك بسهولة:

interface SettingsHome {
  theme: boolean;
  __font: string;
  save(): void;
}

class FileSettingsHome implements SettingsHome {
  constructor(public theme: boolean, public __font: string) {}
  save(): void {
    console.log(`SettingsHome saved to file`);
  }
}

class DatabaseSettingsHome implements SettingsHome {
  constructor(public theme: boolean, public __font: string) {}
  save(): void {
    console.log(`SettingsHome saved to database`);
  }
}

// استخدام الفئة المناسبة بناءً على الحالة
let settingsHome: SettingsHome;
let useDatabase: boolean = true;
if (useDatabase) {
  settingsHome = new DatabaseSettingsHome(true, "Arial");
} else {
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

abstract class Food {
  constructor(public title: string) {}
  abstract getCookingTime(): void;
}

class Pizza extends Food {
  constructor(title: string, public price: number) {
    super(title);
  }
  getCookingTime(): void {
    console.log("cooking Time For Pizza is 30 min");
  }
}
class Burger extends Food {
  constructor(title: string, price: number) {
    super(title);
  }
  getCookingTime(): void {
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
  constructor(public name: string) {}
  attack(): void {
    console.log("Attacking Now ...");
  }
}

class Amazon extends Player {
  constructor(name: string, public spears: number) {
    super(name);
  }
  override attack(): void {
    console.log("Attacking with spears ...");
  }
}
 
class Barbarian extends Player {
  constructor(name: string, public axeDurability: number) {
    super(name);
  }
  override attack(): void {
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

