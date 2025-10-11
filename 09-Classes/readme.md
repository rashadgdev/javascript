# 9. Siniflər (Classes)

Fəsil 6-da biz JavaScript-də **obyektləri** öyrəndik. Amma çox vaxt eyni xüsusiyyətlərə və metodlara sahib obyektlər qrupu yaratmaq lazım gəlir. Belə hallarda **siniflər (classes)** istifadə olunur. Siniflər kodunuzu daha səliqəli, oxunaqlı və təkrar istifadəyə yararlı edir.

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

#### İnsan (Person) sinfi

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

#### Car sinif

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

JavaScript-də bir obyektin müəyyən sinifdən yaradılıb-yaradılmadığını yoxlamaq üçün `instanceof` operatorundan istifadə olunur.

```js
object instanceof Constructor
```

Bu ifadə **`true`** qaytarır, əgər `object` obyektinin prototip zəncirində `Constructor.prototype` varsa.

---

#### `instanceof` necə işləyir?

`instanceof` daxildə aşağıdakı addımları yerinə yetirir:

1. `object.__proto__` (yəni obyektin prototipi) alınır.
2. Əgər bu, `Constructor.prototype`-ə bərabərdirsə → nəticə **true**.
3. Əgər bərabər deyilsə → `object.__proto__.__proto__` yoxlanılır.
4. Bu proses **zəncirin sonuna** (`null`-a) qədər davam edir.
   Əgər heç bir mərhələdə uyğunluq tapılmazsa, nəticə **false** olur.


```js
class Car {}
let car = new Car();

console.log(car instanceof Car);    // true
console.log(car instanceof Object); // true — çünki Object də zəncirdə var
console.log(car instanceof Array);  // false
```

Burada `car` obyektinin prototip zənciri belədir:

```
car → Car.prototype → Object.prototype → null
```

`Array.prototype` bu zəncirdə olmadığı üçün `car instanceof Array` → `false`.

---

#### Paylaşılan Prototip

Bəzən `instanceof` “aldadıcı” nəticə qaytara bilər. Məsələn:

```js
function Car() {}
function Strange() {}

Strange.prototype = Car.prototype; // Eyni prototip paylaşılır

let weird = new Strange();

console.log(weird instanceof Car); // true — amma əslində Car ilə yaradılmayıb
console.log(weird instanceof Strange); // true
```

Bu vəziyyətdə `Strange.prototype` və `Car.prototype` **eyni obyektə** istinad edir.
`instanceof` sadəcə bu prototip obyektinin zəncirdə olub-olmamasına baxdığı üçün hər iki halda `true` qaytarır.

---

#### `isPrototypeOf()` — Alternativ Yanaşma

Əgər bir obyektin **prototip zəncirində** müəyyən obyektin olub-olmadığını yoxlamaq istəyirsənsə, `isPrototypeOf()` metodundan istifadə edə bilərsən.

```js
Car.prototype.isPrototypeOf(weird); // true
```

Bu metod sadəcə yoxlayır ki, `Car.prototype` həmin obyektin (`weird`) prototip zəncirindədir, yoxsa yox.
Yəni konstruktorun kimliyinə fikir vermir — yalnız **prototip əlaqəsini** yoxlayır.

---


```js
class Animal {}
class Dog extends Animal {}

let d = new Dog();

console.log(d instanceof Dog);     // true
console.log(d instanceof Animal);  // true
console.log(d instanceof Object);  // true
console.log(Animal.prototype.isPrototypeOf(d)); // true
console.log(Dog.prototype.isPrototypeOf(d));    // true
```

Zəncir belə görünür:

```
d → Dog.prototype → Animal.prototype → Object.prototype → null
```

Bu cür əlaqə `instanceof` və `isPrototypeOf()` nəticələrini izah edir.

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

#### `constructor` niyə itir?

Əgər biz `prototype`-u **tamamilə başqa bir obyektlə əvəz etsək**, əvvəlki `constructor` properti də itir. Çünki yeni təyin etdiyimiz obyekt sadəcə `Object`-dən gəlir:

```js
function Range(from, to) {
  this.from = from;
  this.to = to;
}

Range.prototype = {
  includes(x) {
    return this.from <= x && x <= this.to;
  },
};

console.log(new Range(1, 3).constructor === Range); // false
console.log(new Range(1, 3).constructor === Object); // true
```

Göründüyü kimi, artıq `constructor` `Range`-i yox, `Object`-i göstərir.

---

####  `constructor`-u əllə bərpa et

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


#### `add` adlı statik metod

```js
class MathHelper {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathHelper.add(2, 3)); // 5

// Statik metodun instansiyada işləməməsi
let helper = new MathHelper();
helper.add(2, 3); // ❌ Xəta: add instansiyada yoxdur
```

---


### 9.3.2 Getter və Setter metodları

Sinifdə `get` və `set` açar sözləri ilə **xüsusi oxuma və yazma metodları** təyin edilə bilər.
Onlar **xüsusiyyət kimi** istifadə olunur (`obj.name`), **funksiya çağırışı kimi** yox (`obj.name()` deyil).

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

#### `BankAccount` sinfi

```js
class BankAccount {
  // Public sahə
  owner;

  // Private sahə
  #balance = 0;

  // Static sahə (ümumi bank adı)
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

// Obyekt yaradıb istifadə edək

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


## 9.4 Mövcud Siniflərə Metodlar Əlavə Etmək

JavaScript prototip-əsaslıdır, buna görə obyektlər yaradıldıqdan sonra belə onların prototiplərinə **yeni metodlar əlavə etmək** mümkündür.

---

#### `String` tipinə metod əlavə etmək

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

#### `Array` tipinə metod əlavə etmək

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

#### `Number` tipinə metod əlavə etmək

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


* Daxili tiplərin prototiplərinə dəyişiklik etmək **ümumiyyətlə tövsiyə edilmir**.
* Xüsusilə `Object.prototype`-a müdaxilə **risklidir**, çünki bütün obyektlər üçün dəyişir və gələcəkdə konflikt yarada bilər.

---


## 9.5 Alt-siniflər (Subclasses)

Bir sinif (B) başqa sinfi (A) genişləndirərək alt-sinif ola bilər. B, A-nın metodlarını miras alır, həmçinin öz metodlarını əlavə edib A-nın metodlarını əvəz edə bilər.

---


### 9.5.1 Alt-siniflər (Subclasses) və Prototiplər (Prototypes)

Burada `Player` adlı əsas sinif (üst-sinif) və ondan törəyən `Goalkeeper` adlı alt-sinif yaradacağıq.
`Goalkeeper`, `Player`-in xüsusiyyətlərini miras alacaq, amma özünəməxsus davranış (`saveGoal`) metoduna da sahib olacaq.

```javascript
// Üst-sinif: Player
function Player(name, team) {
  this.name = name;
  this.team = team;
}

// Üst-sinifin ümumi metodu
Player.prototype.introduce = function () {
  return `${this.name} ${this.team} komandasında oynayır.`;
};

// Alt-sinif: Goalkeeper
function Goalkeeper(name, team, cleanSheets) {
  // Player konstruktorunu çağırırıq ki, name və team miras alınsın
  Player.call(this, name, team);
  this.cleanSheets = cleanSheets; // əlavə xüsusiyyət
}

// Goalkeeper prototipini Player prototipindən miras aldırırıq
Goalkeeper.prototype = Object.create(Player.prototype);

// Konstruktor istinadını düzəldirik
Goalkeeper.prototype.constructor = Goalkeeper;

// Goalkeeper-ə öz metodunu əlavə edirik
Goalkeeper.prototype.saveGoal = function () {
  return `${this.name} topu möhtəşəm şəkildə saxladı!`;
};

// Üst-sinif metodunu da yenidən təyin edə bilərik
Goalkeeper.prototype.introduce = function () {
  return `${this.name} — ${this.team} komandasının qapıçısıdır, ${this.cleanSheets} təmiz oyunla.`;
};

// İstifadəsi
const gk = new Goalkeeper("Manuel Neuer", "Bayern Munich", 150);

console.log(gk.introduce());
// Manuel Neuer — Bayern Munich komandasının qapıçısıdır, 150 təmiz oyunla.

console.log(gk.saveGoal());
// Manuel Neuer topu möhtəşəm şəkildə saxladı!
```

* `Goalkeeper`, `Player` sinifindən miras alır.
* `Object.create(Player.prototype)` vasitəsilə `Goalkeeper` prototipi `Player`-ın prototipinə bağlanır.
* `Goalkeeper` həm `Player`-in metodlarını istifadə edə bilir, həm də öz metodlarını (`saveGoal`) əlavə edir.
* Bu, obyekt yönlü proqramlaşdırmada **miras (inheritance)** prinsipinin klassik nümunəsidir.


---

### 9.5.2 `extends` və `super` ilə Alt-siniflər (Subclasses)

`extends` və `super` — ES6 siniflərində **miras alma** (inheritance) mexanizmini sadələşdirir.
Alt-sinif (`subclass`) üst-sinifin (`superclass`) xüsusiyyətlərini alır və əlavə davranışlar yarada bilər.


```js
// Üst-sinif
class Musician {
  constructor(name, instrument) {
    this.name = name;
    this.instrument = instrument;
  }

  perform() {
    return `${this.name} ${this.instrument}-da ifa edir.`;
  }
}

// Alt-sinif
class DJ extends Musician {
  constructor(name, genre, stageName) {
    super(name, "DJ set"); // üst-sinifin konstruktorunu çağırırıq
    this.genre = genre;
    this.stageName = stageName;
  }

  // Özünəməxsus metod
  mix() {
    return `${this.stageName} ${this.genre} janrında remix hazırlayır!`;
  }

  // Üst-sinif metodunu yenidən təyin edirik (override)
  perform() {
    return `${this.stageName} səhnədə ${this.genre} 
    musiqisi ilə izdihamı coşdurur!`;
  }
}

// İstifadə
const dj = new DJ("Rəşad", "House", "DJ R3SH");

console.log(dj.perform());
// DJ R3SH səhnədə House musiqisi ilə izdihamı coşdurur!

console.log(dj.mix());
// DJ R3SH House janrında remix hazırlayır!

console.log(dj instanceof DJ);        // true
console.log(dj instanceof Musician);  // true
```

---


#### `super` ilə üst-sinif metodunu çağırmaq

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


1. Alt-sinif konstruktorunda **`super()` çağırılmalıdır**, əks halda `this` istifadə etmək olmaz.
2. `super` həm konstruktor daxilində, həm də metodlarda üst-sinif metodlarını çağırmaq üçün istifadə olunur.

---

## 9.5.3 İrsiyyət (Inheritance) əvəzinə Delegasiya (Delegation)

JavaScript-də bir sinfi başqa bir sinifdən **miras almaq (inherit)** mümkündür.
Bu, `extends` açar sözü ilə edilir və alt-sinif üst-sinifin bütün xüsusiyyətlərini və metodlarını avtomatik əldə edir.

Amma **bütün hallarda miras almaq düzgün seçim deyil.**
Bəzən bizə sadəcə başqa bir obyektin funksionallığından **istifadə etmək** lazımdır, amma onun sinifinə çevrilmək lazım deyil.
Belə hallarda **delegasiya (delegation)** adlanan üsuldan istifadə olunur.

---

### Delegasiya nədir?

**Delegasiya** — bir sinifin öz funksiyalarının bir hissəsini başqa obyektə ötürməsi deməkdir.
Yəni sinif özü işi yerinə yetirmir, sadəcə başqa obyektin metodlarından istifadə edir.

Başqa sözlə:

> “Mən `Map` sinfi kimi işləyirəm, amma `Map` deyiləm. Sadəcə `Map`-dən kömək alıram.”

Bu üsula “irsiyyət əvəzinə kompozisiya” prinsipi də deyilir.

---

### Futbol Liqası Hesab Cədvəli

Aşağıdakı hissədə biz “Futbol Liqası” üçün bir **hesab cədvəli (ScoreBoard)** sinfi yaradırıq.
Bu sinif **`Map` obyektindən** istifadə edir, amma onu **miras almır**.
Beləliklə, `ScoreBoard` sadəcə `Map`-in imkanlarından **delegasiya** yolu ilə faydalanır.

```js
class ScoreBoard {
  constructor() {
    // Map obyektini içəridə saxlayırıq (delegasiya olunan obyekt)
    this.scores = new Map();
  }

  // Komandaya xal əlavə edir
  add(team, points) {
    this.scores.set(team, (this.scores.get(team) || 0) + points);
  }

  // Komandanın ümumi xalını qaytarır
  get(team) {
    return this.scores.get(team) || 0;
  }

  // Komandanı cədvəldən silir
  remove(team) {
    this.scores.delete(team);
  }

  // Komandanın olub-olmadığını yoxlayır
  has(team) {
    return this.scores.has(team);
  }

  // Cədvəldə neçə komanda olduğunu qaytarır
  get totalTeams() {
    return this.scores.size;
  }
}
```


1. `ScoreBoard` sinfi yaradılır və daxilində `Map` obyektini saxlayır.
2. Bütün əməliyyatlar (`add`, `get`, `remove`, və s.) bu `Map` üzərindən həyata keçirilir.
3. Amma `ScoreBoard`, `Map`-in alt-sinfi deyil — yəni `extends Map` istifadə edilmir.
4. Bu üsulla biz `Map`-in gücündən istifadə edirik, amma `ScoreBoard` sinfi müstəqil qalır.


---

```js
const league = new ScoreBoard();

league.add("Manchester City", 3);
league.add("Liverpool", 1);
league.add("Manchester City", 2);

console.log(league.get("Manchester City")); // 5
console.log(league.get("Liverpool"));   // 1
console.log(league.totalTeams);         // 2

league.remove("Liverpool");
console.log(league.has("Liverpool"));   // false
```


> Əgər bir sinif başqa sinifin *tipi* deyilsə, amma onun *xidmətlərindən* istifadə edirsə — bu **delegasiya**dır.

---

### 9.5.4 Sinif İyerarxiyaları və Abstrakt Siniflər

Ödəniş sistemi qururuq və müxtəlif ödəniş üsulları mövcuddur:

| Ödəniş tipi         | Nə üçün istifadə olunur |
| ------------------- | ----------------------- |
| `CreditCardPayment` | Kredit kartı ilə ödəniş |
| `PaypalPayment`     | PayPal ilə ödəniş       |

Bütün ödəniş üsulları **eyni interfeys** ilə işləməlidir: `.pay()` və `.toString()` metodları.

---

####  Abstrakt sinif

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

#### Alt-siniflər

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

#### Polimorfizm və İstifadə

```js
const payments = [
  new CreditCardPayment(50),
  new PaypalPayment(30),
];

for (let p of payments) {
  p.pay();           // Hər ödəniş öz metodunu icra edir
  console.log(p.toString());
}
// Kredit kartı ilə 50 AZN ödəndi.
// [CreditCard] 50 AZN
// PayPal ilə 30 AZN ödəndi.
// [PayPal] 30 AZN
```

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

---


### 9.6 Polimorfizm nədir?

**Polimorfizm** sözünün mənası *“çox formalılıq”* və ya *“bir şeyin bir neçə formada görünməsi”* deməkdir.
Proqramlaşdırmada isə bu o deməkdir ki, **eyni əməliyyat** və ya **eyni metod çağırışı**, **fərqli obyektlər** üçün **fərqli cür işləyə bilər**.

Yəni biz bir əməliyyatın adını dəyişmədən, onu fərqli obyektlərdə fərqli davranış göstərməyə “öyrədirik”.

---

Tutaq ki, “**play()**” adlı bir əməliyyatımız var.

* **Futbolçu** üçün `play()` — “topla oynamaq” deməkdir.
* **Musiqiçi** üçün `play()` — “alət çalmaq” deməkdir.
* **Uşaq** üçün `play()` — “oyun oynamaq” deməkdir.

Burada **eyni əməliyyat (play)** müxtəlif obyektlər üçün **fərqli mənalar** daşıyır.
Bu, **polimorfizmin təməl ideyasıdır.**


```javascript
class Person {
  play() {
    console.log("Bir insan nəsə oynayır.");
  }
}

class FootballPlayer extends Person {
  play() {
    console.log("Futbolçu top oynayır.");
  }
}

class Musician extends Person {
  play() {
    console.log("Musiqiçi gitara çalır.");
  }
}

const people = [new FootballPlayer(), new Musician()];

for (const person of people) {
  person.play(); 
}

// Futbolçu top oynayır.
// Musiqiçi gitara çalır.
```

> **Polimorfizm** – eyni adlı metodların, fərqli siniflərdə fərqli şəkildə işləməsidir.