# 9. Siniflər (Classes)

Fəsil 6-da biz JavaScript-də **obyektləri** öyrəndik — yəni, unikal xüsusiyyətlərə malik quruluşları. Amma çox vaxt eyni xüsusiyyətlərə və metodlara sahib obyektlər qrupu yaratmaq lazım gəlir. Belə hallarda **siniflər (classes)** istifadə olunur. Siniflər kodunuzu daha səliqəli, oxunaqlı və təkrar istifadəyə yararlı edir.

---

### Meyvə sinfi

Tutaq ki, meyvələri təsvir edən `Fruit` adlı bir sinifimiz var. Hər meyvənin öz rəngi və çəkisi var. Həmçinin, meyvəni təsvir edən və onun dadını bildirən metodları da mövcuddur.

```javascript
class Fruit {
  constructor(color, weight) {
    this.color = color; // Rəng (state)
    this.weight = weight; // Çəki (state)
  }

  describe() {
    return `Bu ${this.color} rəngdə, 
    ${this.weight} qram ağırlığında bir meyvədir.`;
  }

  taste() {
    return "Meyvənin dadı var!";
  }
}

let apple = new Fruit("qırmızı", 150);
let banana = new Fruit("sarı", 120);

console.log(apple.describe());
// Bu qırmızı rəngdə, 150 qram ağırlığında bir meyvədir.

console.log(banana.taste());
// Meyvənin dadı var!
```

---

### Siniflər və Prototiplər

JavaScript-də siniflər **prototip-əsaslı irsiyyət (prototype-based inheritance)** mexanizmi ilə işləyir. Bu o deməkdir ki:

- Sinifdən yaradılan bütün instansiyalar (obyektlər) eyni prototipdən metodları miras alırlar.
- Beləliklə, onlar eyni sinifə aid sayılır.
- Prototip və konstruktor funksiyası vasitəsilə bu mexanizm həyata keçirilir.

JavaScript əvvəlcə sinifləri sintaksis olaraq dəstəkləmirdi, amma **ES6**-da (ECMAScript 2015) sinifləri yaratmaq üçün yeni və daha oxunaqlı `class` açar sözü əlavə olundu.

---

## 9.1 Siniflər (Classes) və Prototiplər (Prototypes)

JavaScript-də sinif eyni **prototip obyektindən (prototype object)** xüsusiyyətləri  miras alan obyektlər qrupudur. Yəni, prototip obyekti sinfin  əsasını təşkil edir.

`Object.create()` funksiyası müəyyən bir prototip obyektindən miras alan yeni obyekt yaradır. Beləcə, biz `Object.create()`-dən istifadə edərək prototipə əsaslanan sinif yarada bilərik.

---

#### Sadə nümunə: İnsan (Person) sinfi

```javascript
function Person(name, age) {
  let obj = Object.create(Person.methods);
  obj.name = name;
  obj.age = age;
  return obj;
}

Person.methods = {
  greet() {
    return `Salam, mənim adım ${this.name} və mən ${this.age} yaşındayam.`;
  },
};

let p = Person("Rəşad", 20);
console.log(p.greet());
// Salam, mənim adım Rəşad və mən 20 yaşındayam.
```

> Burada `Person` fabrikat funksiyası yeni insan obyekti yaradır. Metodlar `Person.methods` prototipində saxlanılır.

---

#### Bank Hesabı (BankAccount)

```javascript
function BankAccount(owner, balance = 0) {
  let account = Object.create(BankAccount.methods);
  account.owner = owner;
  account.balance = balance;
  return account;
}

BankAccount.methods = {
  deposit(amount) {
    this.balance += amount;
    return `Hesaba ${amount} əlavə olundu. Yeni balans: ${this.balance}`;
  },
  withdraw(amount) {
    if (amount > this.balance) return "Kifayət qədər vəsait yoxdur!";
    this.balance -= amount;
    return `Hesabdan ${amount} çıxarıldı. Yeni balans: ${this.balance}`;
  },
  info() {
    return `${this.owner} sahibinin balansı: ${this.balance}`;
  },
};

let acc = BankAccount("Ayan", 1000);
console.log(acc.deposit(500));
// Hesaba 500 əlavə olundu. Yeni balans: 1500
console.log(acc.withdraw(2000));
// Kifayət qədər vəsait yoxdur!
console.log(acc.info());
// Ayan sahibinin balansı: 1500
```

---

## 9.2 Konstruktorlar və Klassik Sinif Yaratma

JavaScript-də obyekt yaratmağın klassik yolu **konstruktor funksiyası** ilə `new` açar sözündən istifadə etməkdir.

#### Sıfırdan obyekt yaratmaq:

```js
let obj = new Constructor(...args);
```

---

#### Nümunə 1: Sadə sinif (`Car`)

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Car.prototype.info = function () {
  return `${this.year} ${this.make} ${this.model}`;
};

let car = new Car("Toyota", "Camry", 2010);
console.log(car.info()); // 2010 Toyota Camry
```

---

### 9.2.1 `instanceof` və Sinif Kimliyi

----

#### 🔎 `instanceof` necə işləyir?

`instanceof` operatoru belə işləyir:

```js
obj instanceof Constructor
```

➡️ Bu zaman JS belə yoxlayır: `Constructor.prototype` obyektin `__proto__` zəncirində varmı?

Başqa sözlə, bu addımları edir:

1. `obj.__proto__` götürür.
2. Əgər `Constructor.prototype`-ə bərabərdirsə → ✅ `true`.
3. Əgər bərabər deyilsə, `obj.__proto__.__proto__`-ya keçir.
4. Zəncirin sonuna (null-a) qədər davam edir.

---

### Misal:

```js
class Car {}
let car = new Car();

console.log(car instanceof Car); // true
console.log(car instanceof Object); 
// true (çünki Object.prototype də zəncirdə var)
console.log(car instanceof Array); // false
```

---

#### Maraqlı məqam: Paylaşılan prototip

Bu nümunəndə:

```js
function Strange() {}
Strange.prototype = Car.prototype;

let weird = new Strange();
console.log(weird instanceof Car); // true
```

Burada `Strange.prototype` ilə `Car.prototype` **eyni obyekt**-dir. Ona görə `instanceof` deyir ki, bu `Car`-ın nümunəsidir. Halbuki, `Car` konstruktoru ilə yaradılmayıb.

➡️ Yəni `instanceof` həmişə “konstruktorla yaradılıb” yox, “prototip zənciri uyğun gəlir” prinsipinə baxır.

---

#### Alternativ: `isPrototypeOf()`

Əgər sadəcə prototipi yoxlamaq istəyirsənsə (konstruktordan asılı olmayaraq), onda:

```js
Car.prototype.isPrototypeOf(car); // true
```

Bu sadəcə yoxlayır ki, `Car.prototype` həmin obyektin zəncirindədir, yoxsa yox.

---

#### Nəticə

* `instanceof` → konstruktor adı ilə obyektin sinfini yoxlamaq üçün istifadə olunur, amma tam “etibarlı” kimlik yoxlaması deyil.
* `isPrototypeOf` → prototip zəncirində konkret prototipin olub-olmadığını yoxlayır.

---

### 9.2.2 `constructor` Xüsusiyyəti

JavaScript-də hər bir funksiya avtomatik olaraq bir `prototype` obyektinə sahib olur. Bu obyektin içindəki **`constructor` properti** həmin funksiyanın özünü göstərir:

```js
function A() {}
console.log(A.prototype.constructor === A); // true
```

Bunun sayəsində obyektlərdən onları yaradan funksiyanı tapmaq mümkündür:

```js
let o = new A();
console.log(o.constructor === A); // true
```

---

#### Problem: `constructor` niyə itir?

Əgər biz `prototype`-u **tamamilə başqa bir obyektlə əvəz etsək**, əvvəlki `constructor` properti də itir. Çünki yeni təyin etdiyimiz obyekt sadəcə `Object`-dən gəlir:

```js
function Range(from, to) {
  this.from = from;
  this.to = to;
}

// Burada constructor silinir:
Range.prototype = {
  includes(x) {
    return this.from <= x && x <= this.to;
  },
};

console.log(new Range(1, 3).constructor === Range); // false
console.log(new Range(1, 3).constructor === Object); // true
```

➡️ Göründüyü kimi, artıq `constructor` `Range`-i yox, `Object`-i göstərir.

---

#### Həll: `constructor`-u əllə bərpa et

Əgər biz `prototype`-u yenidən yazırıqsa, onda `constructor` properti-ni özümüz əlavə etməliyik:

```js
Range.prototype = {
  constructor: Range, // bərpa edildi
  includes(x) {
    return this.from <= x && x <= this.to;
  },
};
```

---

#### Alternativ Yanaşma (Constructor-u qorumaq)

Əgər `prototype`-u tamamilə əvəz etməsək, sadəcə genişləndirərək method əlavə etsək, `constructor` heç vaxt itməz:

```js
Range.prototype.includes = function (x) {
  return this.from <= x && x <= this.to;
};
Range.prototype.toString = function () {
  return `(${this.from}...${this.to})`;
};
```

---

🔑 **Qaydalar yadında qalsın:**

* `prototype = { ... }` → köhnə obyekt tamamilə əvəz olunur, `constructor` itir.
* `prototype.something = ...` → köhnə obyekt qalır, `constructor` qorunur.

---

## 9.3 `class` Açar Sözü ilə Sinif Yaratmaq

JavaScript-də sinif anlayışı əvvəldən olsa da, ES6 ilə birlikdə bu anlayış üçün ayrıca `class` sintaksisi təqdim olundu. Bu sintaksis funksional cəhətdən əvvəlki `constructor` və `prototype` üsulu ilə eynidir, sadəcə daha oxunaqlı və strukturlaşdırılmış formadadır.

---

#### Sinifin Təyini və İstifadəsi

```js
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  info() {
    return `${this.year} ${this.make} ${this.model}`;
  }

  age(currentYear) {
    return currentYear - this.year;
  }
}

let myCar = new Car("Toyota", "Camry", 2010);
console.log(myCar.info()); // 2010 Toyota Camry
console.log(myCar.age(2025)); // 15
```

---

#### Əsas Xüsusiyyətlər

- `class` ilə sinif təyin edirik.
- `constructor` metodu yeni obyekt yaradılarkən çağırılır və `this`-ə dəyərlər mənimsədilir.
- Funksiya açar sözü (`function`) yazılmır.

---

#### Alt Sinif Yaratmaq (`extends` və `super`)

```js
class Square extends Car {
  constructor(length) {
    super("Square", "Model", 2020);
    // Yuxarı sinifin konstruktorunu çağırırıq
    this.area = length * length;
  }
}

let sq = new Square(4);
console.log(sq.area); // 16
```

- `extends` vasitəsilə başqa sinifdən miras alırıq.
- `super()` yuxarı sinfin `constructor` metodunu çağırır.

---

#### Sinif İfadəsi (Class Expression)

Siniflər birbaşa dəyişən kimi də təyin oluna bilər:

```js
let Rectangle = class {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }

  area() {
    return this.w * this.h;
  }
};

let r = new Rectangle(4, 5);
console.log(r.area()); // 20
```

---

### 9.3.1 Statik Metodlar (`static`)

`static` ilə yazılan metodlar **obyektlərə (instansiyalara) yox**, birbaşa **sinfin özünə** aiddir.


#### Sadə Nümunə: `add` adlı statik metod

```js
class MathHelper {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathHelper.add(2, 3)); // 5
```

---

#### Statik metodun instansiyada işləməməsi

```js
let helper = new MathHelper();
helper.add(2, 3); // ❌ Xəta: add instansiyada yoxdur
```

---

### Nə üçün istifadə olunur?

Statik metodlar adətən:

* String-dən obyekt yaratmaq (`parse`, `fromJSON` və s.),
* Müqayisə (`compare`, `equals`),
* Yardımçı hesablamalar və ya utilitilər (`isValid`, `random`, və s.) üçün yazılır.

➡️ Yəni **obyektə aid olmayan**, amma siniflə bağlı məntiqi əməliyyatlar üçün statik metodlardan istifadə edilir.

---

### 9.3.2 Getter və Setter metodları

Sinifdə `get` və `set` açar sözləri ilə **xüsusi oxuma və yazma metodları** təyin edilə bilər.
Onlar **xüsusiyyət kimi** istifadə olunur (`obj.name`), **funksiya çağırışı kimi** yox (`obj.name()` deyil).

---

#### Sadə Nümunə: `User` sinfi

```js
class User {
  constructor(name) {
    this._name = name; // daxili saxlanma üçün "_name"
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(value) {
    if (value.length < 2) throw new Error("Ad çox qısadır");
    this._name = value;
  }
}

let u = new User("Ali");
console.log(u.name); // ALI (getter çağırıldı)

u.name = "Mehdi";    // setter çağırıldı
console.log(u.name); // MEHDI
```

---

### Digər Metod Formaları

#### 1. **Generator metodlar (`*`)**

Generator metodlar `yield` ilə birdən çox dəyər qaytara bilir.
Adətən `for..of` ilə işlədilir.

```js
class Counter {
  constructor(limit) {
    this.limit = limit;
  }

  *[Symbol.iterator]() {
    for (let i = 1; i <= this.limit; i++) {
      yield i;
    }
  }
}

let c = new Counter(3);
console.log([...c]); // [1, 2, 3]
```

---

#### 2. **Hesablanmış metod adları (Computed Method Names)**

Metodun adını dəyişən və ya ifadə ilə verə bilərik:

```js
let methodName = "sayHello";

class Greeter {
  [methodName]() {
    return "Salam!";
  }
}

let g = new Greeter();
console.log(g.sayHello()); // Salam!
```

---

### 9.3.3 Public, Private və Statik Sahələr

JavaScript-də sinif içində `field` (xüsusiyyət) təyin etmək üçün əvvəllər yalnız konstruktor istifadə olunurdu. Yeni sintaksis isə bu sahələri sinifin daxilində birbaşa yazmağa imkan verir.

---

#### Public (İctimai) sahələr

Public sahə sinif obyektinə məxsus olur və `constructor` xaricində təyin edilir:

```js
class Counter {
  count = 0;

  increase() {
    this.count++;
  }
}

const c = new Counter();
c.increase();
console.log(c.count); // 1
```

#### Private (Şəxsi) sahələr

Private sahələr `#` işarəsi ilə başlayır və sinifdən kənarda istifadə oluna bilməz:

```js
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(100);
console.log(acc.getBalance()); // 100
console.log(acc.#balance); // ❌ SyntaxError
```

#### Statik sahələr

Statik sahələr sinifin özünə aiddir, instansiyalara deyil:

```js
class MathUtil {
  static PI = 3.14;

  static square(x) {
    return x * x;
  }
}

console.log(MathUtil.PI); // 3.14
console.log(MathUtil.square(4)); // 16
```

---

#### Nümunə: `BankAccount` sinfi

```js
class BankAccount {
  // ✅ Public sahə
  owner;

  // 🔒 Private sahə
  #balance = 0;

  // 🏦 Static sahə (ümumi bank adı)
  static bankName = "Milli Bank";

  constructor(owner, initialBalance = 0) {
    this.owner = owner;
    this.#balance = initialBalance;
  }

  // Public metod
  deposit(amount) {
    if (amount <= 0) throw new Error("Məbləğ düzgün deyil");
    this.#balance += amount;
  }

  // Getter (oxumaq üçün)
  get balance() {
    return this.#balance;
  }

  // Static metod (sinifin özünə aid)
  static info() {
    return `Bank adı: ${BankAccount.bankName}`;
  }
}
```

---

#### İstifadə nümunəsi

```js
let acc = new BankAccount("Ali", 100);

console.log(acc.owner);     // Ali (public sahə)
console.log(acc.balance);   // 100 (getter vasitəsilə oxunur)

acc.deposit(50);
console.log(acc.balance);   // 150

// Private sahəyə birbaşa giriş mümkün deyil:
console.log(acc.#balance);  // ❌ SyntaxError

// Static sahə və metod obyekt üzərindən yox, sinif üzərindən çağırılır:
console.log(BankAccount.bankName);  // Milli Bank
console.log(BankAccount.info());    // Bank adı: Milli Bank
```

---


#### Nümunə: Complex Sinfi

Aşağıda **kompleks ədədləri** təmsil edən sinif nümunəsi verilib. Bu sinifdə həm public sahələr, həm instansiya metodları, həm də statik metodlar istifadə olunub.

```js
class Complex {
  constructor(real, imag) {
    this.real = real;
    this.imag = imag;
  }

  add(other) {
    return new Complex(this.real + other.real, this.imag + other.imag);
  }

  multiply(other) {
    const r = this.real * other.real - this.imag * other.imag;
    const i = this.real * other.imag + this.imag * other.real;
    return new Complex(r, i);
  }

  get magnitude() {
    return Math.sqrt(this.real ** 2 + this.imag ** 2);
  }

  toString() {
    return `${this.real} + ${this.imag}i`;
  }

  equals(other) {
    return (
      other instanceof Complex &&
      this.real === other.real &&
      this.imag === other.imag
    );
  }

  static ZERO = new Complex(0, 0);
  static ONE = new Complex(1, 0);
  static I = new Complex(0, 1);
}
```

İstifadə nümunəsi:

```js
const x = new Complex(2, 3);
const y = new Complex(1, -1);

const sum = x.add(y);
console.log(sum.toString()); // 3 + 2i

const prod = x.multiply(y);
console.log(prod.toString()); // 5 + 1i

console.log(Complex.ZERO.toString()); // 0 + 0i
```

---

## 9.4 Mövcud Siniflərə Metodlar Əlavə Etmək

JavaScript prototip-əsaslıdır, buna görə obyektlər yaradıldıqdan sonra belə onların prototiplərinə **yeni metodlar əlavə etmək** mümkündür.

---

#### Sadə nümunə: `String` tipinə metod əlavə etmək

```js
// Yeni metod əlavə edirik: stringi tərs çevirir
if (!String.prototype.reverse) {
  String.prototype.reverse = function () {
    return this.split("").reverse().join("");
  };
}

console.log("Salam".reverse()); // malaS
```

---

#### Sadə nümunə: `Array` tipinə metod əlavə etmək

```js
// Yeni metod əlavə edirik: array-dəki bütün elementləri ikiqat edir
if (!Array.prototype.double) {
  Array.prototype.double = function () {
    return this.map(x => x * 2);
  };
}

console.log([1, 2, 3].double()); // [2, 4, 6]
```

---

#### Sadə nümunə: `Number` tipinə metod əlavə etmək

```js
// Yeni metod əlavə edirik: n dəfə callback çağırır
Number.prototype.times = function (callback) {
  for (let i = 0; i < this.valueOf(); i++) {
    callback(i);
  }
};

(3).times(i => console.log(`Salam ${i + 1}`));
// Salam 1
// Salam 2
// Salam 3
```

---

* Daxili tiplərin prototiplərinə dəyişiklik etmək **ümumiyyətlə tövsiyə edilmir**.
* Xüsusilə `Object.prototype`-a müdaxilə **risklidir**, çünki bütün obyektlər üçün dəyişir və gələcəkdə konflikt yarada bilər.

---


## 9.5 Alt-siniflər (Subclasses)

Bir sinif (B) başqa sinfi (A) genişləndirərək alt-sinif ola bilər. B, A-nın metodlarını miras alır, həmçinin öz metodlarını əlavə edib A-nın metodlarını əvəz edə bilər.

---

### 9.5.1 Alt-siniflər (Subclasses) və Prototiplər (Prototypes) 🔗

Tutaq ki, `Animal` adlı sinifimiz var və biz onun alt-sinfi `Dog` yaratmaq istəyirik. `Dog` həm `Animal`-ın metodlarını miras alacaq, həm də özünə xas metodu olacaq.

```javascript
// Üst-sinif: Animal
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  return `${this.name} səslənir.`;
};

// Alt-sinif: Dog
function Dog(name, breed) {
  Animal.call(this, name); // Animal konstruktorunu çağırırıq
  this.breed = breed;
}

// Dog prototipini Animal prototipindən miras aldırırıq
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Dog öz speak metodunu təyin edir (üst-sinifin metodunu əvəz edir)
Dog.prototype.speak = function () {
  return `${this.name} (${this.breed}) havlayır.`;
};

// İstifadə nümunəsi
let myDog = new Dog("Çakır", "Kangal");
console.log(myDog.speak()); // Çakır (Kangal) havlayır.
```
---

### 9.5.2 `extends` və `super` ilə Alt-siniflər (Subclasses)

ES6-dan başlayaraq `extends` ilə sinifdən alt-sinif yaratmaq çox asandır. Alt-sinif həm öz metod və sahələrinə sahib ola bilər, həm də üst-sinifin bütün xüsusiyyətlərini miras alır.

---

#### Nümunə 1: `EZArray` — Array-dən miras alan alt-sinif

```js
class EZArray extends Array {
  // İlk elementi qaytarır
  get first() {
    return this[0];
  }
  // Son elementi qaytarır
  get last() {
    return this[this.length - 1];
  }
}

let a = new EZArray(1, 2, 3, 4);

console.log(a instanceof EZArray); // true
console.log(a instanceof Array);   // true
console.log(a.first);              // 1
console.log(a.last);               // 4
console.log(a.pop());              // 4
console.log(a);                    // EZArray(3) [1, 2, 3]
```

✅ Nəticə: `EZArray` instansiyası həm `EZArray`, həm də `Array` kimi işləyir.

---

#### Nümunə 2: `super` ilə üst-sinif metodunu çağırmaq

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Salam, mənim adım ${this.name}`;
  }
}

class Employee extends Person {
  constructor(name, jobTitle) {
    super(name); // Üst-sinif konstruktorunu çağırırıq
    this.jobTitle = jobTitle;
  }

  greet() {
    // Üst-sinif metodunu çağırıb əlavə məlumat əlavə edirik
    return `${super.greet()}. Mən ${this.jobTitle} vəzifəsindəyəm.`;
  }
}

let emp = new Employee("Rəşad", "Proqramçı");
console.log(emp.greet());
// Salam, mənim adım Rəşad. Mən Proqramçı vəzifəsindəyəm.
```

---

### Qaydalar

1. Alt-sinif konstruktorunda **`super()` çağırılmalıdır**, əks halda `this` istifadə etmək olmaz.
2. `super` həm konstruktor daxilində, həm də metodlarda üst-sinif metodlarını çağırmaq üçün istifadə olunur.
3. Əgər konstruktor təyin etməsəniz, alt-sinif avtomatik olaraq bütün arqumentləri `super()`-a ötürür.

---

### 9.5.3 İrsiyyət (Inheritance) əvəzinə Delegasiya (Delegation)

`extends` ilə bir sinfi miras almaq mümkündür, amma hər zaman lazım deyil.
Əgər sadəcə bir sinfin funksionallığını təkrar istifadə etmək istəyirsinizsə, onun metodlarını **delegasiya** vasitəsilə çağırmaq daha səmərəlidir.

> **Qaydası:** “Irsiyyət əvəzinə kompozisiyaya üstünlük verin.” 
(`Favor composition over inheritance`)

---

#### Nümunə: `Histogram` sinfi (sadələşdirilmiş)

```js
class Histogram {
  constructor() {
    this.map = new Map(); // Daxili delegasiya obyekt
  }

  add(item) {
    this.map.set(item, (this.map.get(item) || 0) + 1);
  }

  count(item) {
    return this.map.get(item) || 0;
  }

  delete(item) {
    const count = this.count(item);
    if (count <= 1) this.map.delete(item);
    else this.map.set(item, count - 1);
  }

  has(item) {
    return this.map.has(item);
  }

  get size() {
    return this.map.size;
  }
}
```

---

#### İstifadə nümunəsi

```js
let h = new Histogram();
h.add("apple");
h.add("apple");
h.add("banana");

console.log(h.count("apple"));  // 2
console.log(h.count("banana")); // 1
console.log(h.size);            // 2

h.delete("apple");
console.log(h.count("apple"));  // 1
```


Bu nümunədə `Histogram` heç bir sinfi miras almır, amma **`Map` obyektinə delegasiya** edərək bütün əsas funksionallığı əldə edir.

---

### 9.5.4 Sinif İyerarxiyaları və Abstrakt Siniflər

Ödəniş sistemi qururuq və müxtəlif ödəniş üsulları mövcuddur:

| Ödəniş tipi         | Nə üçün istifadə olunur |
| ------------------- | ----------------------- |
| `CreditCardPayment` | Kredit kartı ilə ödəniş |
| `PaypalPayment`     | PayPal ilə ödəniş       |

Bütün ödəniş üsulları **eyni interfeys** ilə işləməlidir: `.pay()` və `.toString()` metodları.

---

#### Addım 1: Abstrakt sinif

Abstrakt sinif yalnız **struktur** verir, birbaşa istifadə edilə bilməz:

```js
class AbstractPayment {
  pay() {
    throw new Error("pay() metodu abstraktdır, implementasiya olunmalıdır.");
  }

  toString() {
    throw new Error("toString() metodu abstraktdır, implementasiya olunmalıdır.");
  }
}
```

---

#### Addım 2: Alt-siniflər

Alt-siniflər abstrakt metodları **özünə uyğun implementasiya** edir:

```js
class CreditCardPayment extends AbstractPayment {
  constructor(amount) {
    super();
    this.amount = amount;
  }

  pay() {
    console.log(`Kredit kartı ilə ${this.amount} AZN ödəndi.`);
  }

  toString() {
    return `[CreditCard] ${this.amount} AZN`;
  }
}

class PaypalPayment extends AbstractPayment {
  constructor(amount) {
    super();
    this.amount = amount;
  }

  pay() {
    console.log(`PayPal ilə ${this.amount} AZN ödəndi.`);
  }

  toString() {
    return `[PayPal] ${this.amount} AZN`;
  }
}
```

---

#### Addım 3: Polimorfizm və İstifadə

```js
const payments = [
  new CreditCardPayment(50),
  new PaypalPayment(30),
];

for (let p of payments) {
  p.pay();           // Hər ödəniş öz metodunu icra edir
  console.log(p.toString());
}
```

**Nəticə:**

```
Kredit kartı ilə 50 AZN ödəndi.
[CreditCard] 50 AZN
PayPal ilə 30 AZN ödəndi.
[PayPal] 30 AZN
```

---

#### 4️⃣ Vizual Şema

```
AbstractPayment
       │
       ├── CreditCardPayment
       │      pay() → Kredit kartı ilə ödəniş
       │      toString() → [CreditCard] ...
       │
       └── PaypalPayment
              pay() → PayPal ilə ödəniş
              toString() → [PayPal] ...
```

> **Polimorfizm:** `payments` array-i ilə bütün ödənişləri eyni üsulla çağırırıq, amma hər alt-sinif **öz spesifik davranışını** göstərir.

---
