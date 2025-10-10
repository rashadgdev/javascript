# 8. Funksiyalar (Functions)

**Funksiyalar** JavaScript proqramlarının əsas hissəsidir. Onlar bir dəfə təyin olunub dəfələrlə çağırıla bilən kod bloklarıdır. Funksiyalar **parametrlər** qəbul edir və çağırış zamanı **arqumentlər** ötürülür.

Əgər funksiya obyektin xüsusiyyətidirsə, o, **metod** adlanır.
Funksiya obyektin içindədirsə, ona metod, yeni obyekt yaradırsa **konstruktor** deyilir.

---

## 8.1 Funksiyaları Təyin Etmək (Defining Functions)

JavaScript-də funksiyaları təyin etməyin ən geniş istifadə olunan yolu `function` açar sözüdür. ES6 isə `function` açar sözü olmadan **"ox funksiyalarını (arrow functions)"** təqdim edib ki, bu, daha yığcam sintaksisə malikdir.

---

### 8.1.1 Funksiya Bəyanatları (Function Declarations)

`Function` açar sözü ilə başlayır, ardınca funksiyanın adı, mötərizədə parametrlər və fiqurlu mötərizədə kod (funksiya gövdəsi) gəlir.

* **Ad (Identifier):** Funksiyanın adıdır, dəyişən kimi işləyir.
* **Parametrlər (Parameters):** Mötərizədə vergüllə ayrılmış dəyişən adlarıdır, funksiya daxilində yerli dəyişənlər kimidir.
* **Gövdə (Body):** Fiqurlu mötərizədəki koddur, funksiya çağırılanda icra olunur.

```javascript

function sum(a,b){
  // 2 verilmiş ədədin cəmini hesablayır
  return a + b;
}
```

Funksiyalar dəyər qaytarmalıdırsa, `return` ifadəsindən istifadə edirlər. Əgər `return` yoxdursa və ya dəyər göstərilməyibsə, funksiya `undefined` qaytarır. 

---

### 8.1.2 Funksiya İfadələri (Function Expressions)

Funksiya ifadəsi — funksiya **bir ifadənin içində yaradılır** və adının olması **məcburi deyil**.
Funksiya bir ifadənin içində yaradılır və **yalnız təyin edildikdən sonra** işləyir. Hoist olunmur.

```javascript
// Funksiya ifadəsi
const greet = function() {
  return "Salam!";
};

console.log(greet()); // "Salam!"
```

Amma belə etsək:

```javascript
console.log(greet()); 
// ❌ Səhv: greet təyin olunmayıb
const greet = function() {
  return "Salam!";
};
```


---

### Funksiya Bəyanatı (Function Declaration)

Funksiya ayrıca elan olunur və **hoist** edilir. Yəni kodda əvvəl yazılmasa belə çağırıla bilər.

```javascript
// Funksiya bəyanatı
function greet() {
  return "Salam!";
}

console.log(greet()); 
// "Salam!"

// Bu formada yazılsa da eyni cavab verəcək:

console.log(sayHello()); 
// "sayHello!" işləyir, çünki bəyanatlar hoist olunur

function sayHello() {
  return "sayHello!";
}
```

---

#### 3. Dərhal Çağırılan Funksiya İfadəsi (IIFE)

İfadə dərhal yaradılıb işə düşür:

```javascript
(function(name) {
  console.log("Salam, " + name + "!");
})("Əli"); 
// Salam, Əli!
```

---

### 8.1.3 Ox Funksiyaları (Arrow Functions)

ES6-da **ox funksiyaları (arrow functions)** `function` açar sözü olmadan, `=>` operatoru ilə təyin olunur. Çox yığcam sintaksisə malikdirlər və ad tələb olunmur.

**Əsas Sintaksis:**

* Parametrlər mötərizədə, sonra `=>`, sonra fiqurlu mötərizədə funksiya gövdəsi:

```javascript
const sum = (x, y) => { 
    return x + y; 
};
```

* Əgər gövdə **tək bir `return` ifadəsidirsə**, `return`, nöqtəli vergül və fiqurlu mötərizələri qoymaya bilərsiniz:

```javascript
const sum = (x, y) => x + y;
```

* Əgər funksiyanın **yalnız bir parametri varsa**, parametrin ətrafındakı mötərizələri də qoymaya bilərsiniz:

```javascript
const polynomial = x => x*x + 2*x + 3;
```

* **Heç bir arqument yoxdursa**, boş mötərizələr `()` mütləqdir:

```javascript
const constantFunc = () => 42;
```

* Parametrlər və `=>` arasında yeni sətir qoymaq olmaz

```javascript
// 1. Blok + return → düzgün
const f = x => { 
    return { value: x }; 
};
f(5); 
// { value: 5 }

// 2. Qısa obyekt literalı üçün mötərizə → düzgün
const g = x => ({ 
    value: x 
});
g(5); 
// { value: 5 }

// 3. Blok, return yoxdur → səhv!
const h = x => { 
    value: x 
};
h(5); 
// undefined
```

Ox funksiyaları `map()`, `filter()` kimi **massiv metodlarına** funksiya ötürərkən ideal seçimdir, çünki qısa yazılışa malikdirlər:

```javascript
let filtered = [1, null, 2, 3].filter(x => x !== null); 
// [1, 2, 3] → null elementlər silinir

let squares = [1, 2, 3, 4].map(x => x*x);   
// [1, 4, 9, 16] → hər elementi kvadrata yüksəldir
```

---

### 8.1.4 İç-içə Funksiyalar (Nested Functions)

JavaScript-də funksiyalar başqa funksiyaların daxilində **iç-içə (nested)** ola bilər.

```javascript
function processArray(arr) {
  function isEven(n) { 
    // Daxili funksiya: ədədin cüt olduğunu yoxlayır
    return n % 2 === 0;
  }

  let evenNumbers = arr.filter(isEven);
  return evenNumbers.reduce((sum, n) => sum + n, 0);
}

console.log(processArray([1, 2, 3, 4, 5, 6])); // => 12 (2+4+6)
```

---

## 8.2 Funksiyaları Çağırmaq (Invoking Functions) 

Funksiya kodları təyin olunanda deyil, **çağırılanda** icra olunur. JavaScript funksiyaları beş əsas yolla çağırıla bilər:
1.  **Funksiyalar kimi (As functions)**
2.  **Metodlar kimi (As methods)**
3.  **Konstruktorlar kimi (As constructors)**
4.  **`call()` və `apply()` metodları vasitəsilə dolayı yolla (Indirectly)**
5.  **Gizli olaraq (Implicitly)**

---

### 8.2.1 Funksiya Çağırışı (Function Invocation)

JavaScript-də funksiyalar **funksiya adı + mötərizə içində arqumentlər** ilə çağırılır:

```javascript
function greet(name) {
  console.log("Salam, " + name + "!");
}

greet("Ayan"); // Salam, Ayan!
```

Arqumentlər **mötərizədə qiymətləndirilir**, parametrlərə ötürülür. Əgər `return` istifadə edilmirsə, funksiya `undefined` qaytarır.

```javascript
function add(a, b) {
  return a + b;
}

let result = add(5, 7); 
console.log(result); // 12

function subtract (a,b){
  a - b;
}

let result = subtract(8, 7); 
console.log(result) // undefined

// Eyni anda 2 funksiya çağırılması
function square(x) {
  return x * x;
}

function sumOfSquares(a, b) {
  return square(a) + square(b);
}

console.log(sumOfSquares(3, 4)); // 25
```

--- 
#### Şərti Çağırış (Optional Chaining)

Bəzən funksiya mövcud olmaya bilər. ES2020-dən `?.` istifadə edərək **funksiya varsa çağırmaq**, yoxdursa keçmək mümkündür:

```javascript
let f = null;
f?.(5); // Heç nə etmir, error atmır

let logger = (msg) => console.log(msg);
logger?.("Hello!"); // Hello!
```

---

#### `this` dəyəri

Funksiya çağırılarkən **`this` konteksti** dəyişə bilər:

* **Adi çağırışda:**

  ```javascript
  function showThis() {
    console.log(this);
  }
  showThis(); 
  // Non-strict: qlobal obyekt, Strict: undefined
  ```

* **Obyekt metodu kimi çağırışda:**

  ```javascript
  const user = {
    name: "Samir",
    greet() {
      console.log("Salam, " + this.name);
    }
  };
  user.greet(); // Salam, Samir
  ```

* **Arrow functions:**

  ```javascript
  const obj = {
    value: 42,
    show: () => console.log(this.value)
  };
  obj.show(); 
  // undefined (arrow this miras alır, obyektə bağlanmır)
  ```

---

#### Rekursiv Funksiyalar və Call Stack

**Rekursiv funksiya** özünü çağırır. Hər çağırışda `call stack`-a yeni kontekst əlavə edilir.

```javascript
function countdown(n) {
  if (n <= 0) {
    console.log("Hazır!");
  } else {
    console.log(n);
    countdown(n - 1);
  }
}
countdown(5);
// 5
// 4
// 3
// 2
// 1
// Hazır!
```

---

### 8.2.2 Metod Çağırışı (Method Invocation)

**Metod** obyektin içində saxlanan funksiyadır.

```javascript
object.method(args);
```

```javascript
let user = {
  name: "Rashad",
  sayHi() {
    console.log("Salam, " + this.name);
  }
};

user.sayHi(); 
// Salam, Rashad
```

Burada `sayHi()` metodu **`user` obyektinə bağlıdır**, `this` → `user`.


```javascript
// Parametrlə Çağırış
let calculator = {
  add(a, b) {
    console.log(a + b);
  }
};

calculator.add(3, 4); 
// 7

// Kvadrat Mötərizə ilə Çağırış
let methodName = "sayHi";
user[methodName](); 
// Salam, Aylin
```

---

#### Metod Zənciri (Method Chaining)

Əgər metod **obyekti qaytararsa**, ardıcıl metod çağırmaq mümkündür:

```javascript
let counter = {
  value: 0,
  increment() {
    this.value++;
    return this;
  },
  decrement() {
    this.value--;
    return this;
  },
  show() {
    console.log(this.value);
    return this;
  }
};

counter.increment().increment().decrement().show(); 
// 1
```

---

### 8.2.3 Konstruktor Çağırışı (Constructor Invocation)

Əgər funksiya **`new` ilə çağırılırsa**, bu **konstruktor çağırışıdır** və **yeni obyekt yaratmaq** üçün istifadə olunur.

```javascript
let obj = new Object();
let arr = new Array(1, 2, 3);
let date = new Date();
```
---

#### Konstruktor

```javascript
function User(name, age) {
  this.name = name;
  this.age = age;
}

let user1 = new User("Aylin", 25);
console.log(user1.name); 
// Aylin
console.log(user1.age);  
// 25
```


#### `this` dəyəri

Konstruktor çağırışında `this` həmişə **yeni yaradılan obyektə** işarə edir.

```javascript
function Point(x, y) {
  this.x = x;
  this.y = y;
}

let p = new Point(3, 4);
console.log(p.x, p.y); 
// 3 4
```

---
   
#### `return` Davranışı

* Konstruktor funksiyasında `return` yazılmasa belə, **yeni obyekt avtomatik qaytarılır.**
* Əgər konstruktor **primitiv dəyər** (number, string, boolean və s.) qaytararsa, yenə də yeni obyekt qaytarılır.

```javascript
function A() {
  this.value = 10;
}
console.log(new A().value); 
// 10

function B() {
  return { x: 1 };
}
console.log(new B()); 
// { x: 1 }

function C() {
  return 42; 
  // primitiv dəyər
}
console.log(new C()); 
// C { } --> yeni boş obyekt, 42 ignore edilir
```

```javascript
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = function() {
    return this.width * this.height;
  };
}

let rect = new Rectangle(5, 10);
console.log(rect.area()); // 50
```

---

### 8.2.4 Dolayı Çağırış (Indirect Invocation)

JavaScript-də funksiyalar obyekt olduğu üçün onların `call()` və `apply()` metodları mövcuddur. Bu metodlar funksiyanı dolayı yolla çağırmağa və `this` dəyərini açıq şəkildə təyin etməyə imkan verir.


* `call()` arqumentləri bir bir qəbul edir.
* `apply()` arqumentləri massiv (array) şəklində qəbul edir.

Hər ikisinin ilk arqumenti `this` dəyərinin hansı obyekt olacağını göstərir.

---

#### `call()`

```javascript
function greet() {
  console.log("Hello, " + this.name);
}

let user = { name: "Alice" };
greet.call(user); // Hello, Alice
```

Burada `greet` funksiyası `user` obyektinin `name` xüsusiyyətini oxuyur, çünki `call()` vasitəsilə `this` həmin obyektə bağlanır.

---

#### `apply()`

`apply()` metodu `call()`-a çox bənzəyir. Fərq ondadır ki, arqumentlər **sıra ilə ayrıca** yox, **massiv (array) şəklində** ötürülür.


```javascript
func.apply(thisArg, [arg1, arg2, ...])
```

```javascript
function introduce(city, age) {
  console.log(`My name is ${this.name}, I am ${age} years old, living in ${city}.`);
}

const person = { name: "John" };

introduce.apply(person, ["London", 30]);
// My name is John, I am 30 years old, living in London.
```

---

## 8.3 Funksiya Arqumentləri və Parametrləri (Function Arguments and Parameters)

JavaScript-də funksiya parametrləri üçün tip təyin edilmir və funksiyalar çağırıldıqda ötürülən arqumentlərin nə tipi, nə də sayı yoxlanılır. Bu, proqramçıya çeviklik versə də, bəzi hallarda arqumentlərin tipi və sayı üzərində nəzarət vacib ola bilər.

---

### 8.3.1 İxtiyari Parametrlər və Standart Dəyərlər (Optional Parameters and Defaults)

JavaScript funksiyaları bəzi arqumentlər ötürülmədikdə `undefined` qəbul edir. Bu hallarda parametrlərə **standart dəyər** vermək faydalıdır.

#### Köhnə üsul (ES6-dan əvvəl)

```javascript
function greet(name, greeting) {
  if (greeting === undefined) {
    greeting = "Hello"; // standart dəyər əllə təyin olunur
  }
  console.log(greeting + ", " + name);
}

greet("Aysel");           // Hello, Aysel
greet("Rəşad", "Salam");  // Salam, Rəşad
```

#### Yeni üsul (ES6 ilə)

```javascript
function greet(name, greeting = "Hello") {
  console.log(greeting + ", " + name);
}

greet("Aysel");           // Hello, Aysel
greet("Rəşad", "Salam");  // Salam, Rəşad

greet("Tunar", null); // null, Tunar

function area(width, height = width * 2) {
  return width * height;
}

console.log(area(3));    // 18
console.log(area(3, 4)); // 12
```

---

### 8.3.2 Rest parametrlər (Rest Parameters)

Funksiyaya neçə arqument ötürüləcəyini əvvəlcədən bilmədiyimiz hallarda **rest parameter** (`...`) sintaksisindən istifadə edilir. Bu sintaksis funksiyaya ötürülən artıq arqumentləri **massiv** kimi toplamağa imkan verir.


```javascript
function sum(...args) {
  let total = 0;
  for (let n of args) {
    total += n;
  }
  return total;
}

console.log(sum(1, 2, 3));        // 6
console.log(sum(10, 20, 30, 40)); // 100
```

> Burada `args` bir `rest parameter`-dir və funksiyaya ötürülən bütün arqumentləri massiv kimi saxlayır.

---

#### Rest parameter digər parametrlə birlikdə

```javascript
function log(type, ...messages) {
  console.log(type + ": " + messages.join(", "));
}

log("Error", "Disk full", "Low memory");
// Error: Disk full, Low memory
```

Rest parameter ilə yazılmış funksiyalar **variadic functions** adlanır.

---

### 8.3.3 `arguments` Objekti

ES6-dan əvvəl funksiyaya ötürülən arqumentlərə daxil olmaq üçün `arguments` adlı xüsusi obyekt istifadə olunurdu. Bu obyekt massivə bənzərdir və bütün arqumentləri indekslə təqdim edir: `arguments[0]`, `arguments[1]`


```javascript
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 2, 3, 4)); // 10
console.log(sum(10, 20));     // 30
```


* `arguments` **array deyil**, amma `length` və indekslər var

---

### 8.3.4  Spread Operatoru (`...`)

**Spread operatoru (`...`)** ES6 ilə gəlib. Massivin və ya iterable obyektin elementlərini funksiya çağırışında ayrıca arqument kimi açır.

```javascript
const words = ['Rashad', 'is', 'coming'];
console.log(...words); // Rashad is coming
```

---

#### Rest parametrlə birlikdə istifadə

Funksiya təyinatında `rest parameter` (`...args`) arqumentləri massiv kimi yığır, spread operator isə çağırışda həmin massiv elementlərini açır.

```javascript
function wrap(f) {
  return function(...args) {
    console.log('Function started');
    let result = f(...args);
    console.log('Function ended');
    return result;
  }
}

function multiply(a, b) {
  return a * b;
}

const wrappedMultiply = wrap(multiply);
wrappedMultiply(4, 5);
// Function started
// Function ended
// 20

// Massivləri birləşdirmək üçün:
const arr1 = [10, 20];
const arr2 = [30, 40];
const combined = [...arr1, ...arr2];
console.log(combined); 
// [10, 20, 30, 40]
```

---


#### Rest operatoru (`...rest`)

**Funksiya parametrlərində** işlənir və **qalan arqumentləri yığır**.
Yəni bir funksiya neçə arqument alacağını bilməyəndə istifadə olunur.

```javascript
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3));     // 6
console.log(sum(4, 5, 6, 7));  // 22
```

Burada `...numbers` **rest parametri** dir. Funksiyaya gələn bütün arqumentləri bir massivdə toplayır.

---

#### Spread operatoru (`...spread`)

**Obyekt və massivlərdə** işlənir və **elementləri açır** (dağıdır).
Yəni bir massiv/obyektin içindəkiləri başqa massivə/obyektə yaymaq üçündür.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [0, ...arr1, 4];

console.log(arr2); // [0, 1, 2, 3, 4]
```
 
Burada `...arr1` **spread operatorudur**. `arr1`-in içindəkiləri açıb `arr2`-nin içinə yerləşdirdi.


```javascript
const person = { name: "Aysel", age: 25 };
const updated = { ...person, age: 26, city: "Baku" };

console.log(updated); 
// { name: "Aysel", age: 26, city: "Baku" }
```

---

### 8.3.5 Funksiya Arqumentlərini Parametrlərdə Açmaq

Funksiyaya arqument kimi massiv və ya obyekt göndərərkən, onları funksiyanın içində ayrıca dəyişənlərə bölmək olar. Bu üsula **destrukturlama (yəni parçalama)** deyilir.

Məsələn, əgər funksiya iki elementli massiv gözləyirsə, həmin elementləri ayrıca dəyişənlər kimi parametrdə götürmək mümkündür.

```javascript
function sum([a, b]) {
  return a + b;
}

sum([3, 5]); // => 8
```

Burada `[a, b]` yazmaqla, funksiya `sum` massivdəki birinci elementi `a`, ikinci elementi `b` kimi qəbul edir.

---

#### Obyekt arqumentini parametrlərdə açmaq

Eyni şeyi obyektlərlə də edə bilərik:

```javascript
function area({width, height}) {
  return width * height;
}

area({width: 5, height: 10}); // => 50
```

Burada `{width, height}` funksiyanın parametri olub, obyektin `width` və `height` xüsusiyyətlərini ayrıca dəyişənlər kimi qəbul edir.

---

#### Parametr adlarını dəyişmək

Əgər funksiyanın içində dəyişən adları fərqli olmalıdırsa, belə yazılır:

```javascript
function area({width: w, height: h}) {
  return w * h;
}

area({width: 5, height: 10}); // => 50
```

Burada `width` obyektin açarı, `w` isə funksiyanın parametri adıdır.

----

#### Standart dəyərlər vermək

Əgər arqumentdə bəzi açarlar yoxdursa, onlara standart dəyər təyin etmək olar:

```javascript
function area({width = 1, height = 1}) {
  return width * height;
}

area({width: 5}); // => 5 (height default olaraq 1 götürülür)
```
---

#### Massiv içində qalan elementləri toplamaq (Rest operator)

Massiv arqumentini destrukturlayarkən, qalan elementləri toplamaq üçün `...` istifadə olunur:

```javascript
function test([first, second, ...rest]) {
  return rest;
}

test([1, 2, 3, 4, 5]); // => [3, 4, 5]
```
---

#### Obyekt içində qalan açarları toplamaq (ES2018+)

Eyni qayda obyekt üçün də keçərlidir:

```javascript
function func({a, b, ...others}) {
  return others;
}

func({a:1, b:2, c:3, d:4}); // => {c:3, d:4}
```
---

### 8.3.6 Arqument Tipləri (Argument Types)

JavaScript-də funksiya parametrlərinin **təyin olunmuş tipləri yoxdur** və funksiyaya ötürülən arqumentlərə **tip yoxlaması (type checking)** avtomatik edilmir.

JavaScript **lazım olanda tip çevirmələri (type coercion)** edir. Məsələn, **string** gözləyən funksiyaya başqa tipdən dəyər versəniz, funksiya onu avtomatik stringə çevirə bilər. Bu, ümumiyyətlə səhvsiz işləyir, çünki **primitivlərin** hamısı `toString()` metoduna malikdir.


```javascript
// 'a' adlı iterable obyektin elementlərinin cəmini hesablayır.
// Bütün elementlər rəqəm olmalıdır.
function sum(a) {
  let total = 0;
  for (let element of a) {
    if (typeof element !== "number") {
      throw new TypeError("sum(): elements must be numbers");
    }
    total += element;
  }
  return total;
}

console.log(sum([1, 2, 3])); 
// => 6

// sum(1, 2, 3);         // TypeError: 1 is not iterable
// sum([1, 2, "3"]);     // TypeError: element 2 is not a number
```
---

### 8.4 Funksiyalar Dəyərlər Kimi (Functions as Values)

JavaScript-də funksiyalar yalnız əməliyyat aparmaq üçün deyillər – onlar həm də **dəyər** kimi istifadə oluna bilirlər.

####  Funksiyaları necə dəyər kimi istifadə edə bilərik?

* Dəyişənlərə təyin edə bilərik.
* Obyekt və massivlərdə saxlaya bilərik.
* Başqa funksiyalara arqument kimi ötürə bilərik.
* Və funksiyalardan geri qaytara da bilərik.

---

#### Funksiya dəyişən və obyekt içində

```javascript
function square(x) { return x * x; }

let s = square;             // Funksiyanı dəyişənə təyin edirik
console.log(s(4));          // => 16 (eyni funksiyanı çağırır)

let o = {
  square: function(x) {
    return x * x;
  }
};

console.log(o.square(16));  // => 256 (obyekt içində metod kimi)
```

---

#### Massivdə Funksiya

```javascript
let a = [x => x * x, 20];
console.log(a[0](a[1])); // => 400
```

Burada `a[0]` bir funksiyadır, `a[1]` isə ədəddir. Funksiyanı həmin ədədlə çağırırıq.

---

#### `Array.sort()`

Massivi çeşidləyərkən istədiyimiz qaydanı biz təyin edə bilərik:

```javascript
let nums = [10, 2, 5];
nums.sort((a, b) => a - b); 
// Artan sıra
```

Burada `sort()` funksiyası başqa bir funksiyanı (comparison function) qəbul edir.

---

#### Funksiyaları Arqument Kimi Ötürmək

```javascript
function add(x, y) { return x + y; }
function multiply(x, y) { return x * y; }

function operate(operator, a, b) {
  return operator(a, b); 
  // Funksiya arqument kimi ötürülür
}

let result = operate(add, operate(add, 2, 3), operate(multiply, 4, 5));
console.log(result); 
// => 25
```

---

#### Funksiyalar Obyekt Daxilində

```javascript
const operators = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => x / y,
  pow: Math.pow
};

function operate2(name, x, y) {
  let func = operators[name];
  if (typeof func === "function") {
    return func(x, y);
  } else {
    throw "unknown operator";
  }
}

console.log(operate2("add", "hello ", "world")); // => "hello world"
console.log(operate2("pow", 10, 2));             // => 100
```

---

### 8.4.1 Funksiyaların Öz Xüsusiyyətləri

JavaScript-də funksiyalar həm də **obyekt olduğuna** görə, onlara adətən obyektə etdiyimiz kimi **xüsusiyyət** əlavə edə bilərik.

    
```javascript
function greet(name) {
  greet.count++; // hər çağırışda say artır
  return `Salam, ${name}!`;
}

greet.count = 0; // xüsusiyyəti təyin edirik

greet("Rəşad");
greet("Turan");
greet("Leyla");

console.log(`Greet funksiyası ${greet.count} dəfə çağırılıb.`); 
// => Greet funksiyası 3 dəfə çağırılıb.
```

 Burada `greet.count` funksiyanın **özünə əlavə edilmiş bir sayğacdır**.

---


### Keşləmə ilə Sadə Kvadrat Funksiyası

Bəzən eyni nəticəni dəfələrlə hesablamağa ehtiyac olmur. Bir dəfə hesablanan nəticəni **yadda saxlamaq** və sonrakı çağırışlarda ordan götürmək daha səmərəlidir. Bu üsula **memoization (keşləmə)** deyilir.

```javascript
function cachedSquare(n) {
  // Əgər nəticə əvvəldən hesablanmayıbsa:
  if (!(n in cachedSquare.cache)) {
    console.log("Hesablanır:", n);
    cachedSquare.cache[n] = n * n; // yadda saxlanır
  }
  // Əks halda mövcud nəticəni qaytarır
  return cachedSquare.cache[n];
}

// Funksiyanın özündə cache obyektini saxlayırıq
cachedSquare.cache = {};

console.log(cachedSquare(4)); // Hesablanır: 4 → 16
console.log(cachedSquare(4)); // (cache-dən götürülür) → 16
console.log(cachedSquare(5)); // Hesablanır: 5 → 25

console.log(cachedSquare.cache); // { "4": 16, "5": 25 }
```

Burada `cachedSquare.cache` funksiyanın **öz "daxili yaddaşı"** kimi işləyir.

* İlk dəfə çağıranda nəticəni hesablayır və cache-ə yazır.
* Sonrakı çağırışlarda artıq **hesablama etmir**, hazır nəticəni qaytarır.

---

### 8.5 Funksiyalar Ad Məkanları Kimi (Functions as Namespaces)

JavaScript-də funksiyalar öz daxilində **yerli (local)** dəyişənlər yaradır. Bu dəyişənlər yalnız həmin funksiyanın daxilində görünür və funksiyanın xaricindən onlara birbaşa giriş mümkün deyil.

Bu xüsusiyyət sayəsində funksiyalar **ad məkanı (namespace)** kimi istifadə edilə bilər. Yəni, çoxlu dəyişənləri qlobal sahədə saxlamaq əvəzinə, onları bir funksiyanın daxilində qruplaşdırırıq. Bu, proqramın digər hissələrində eyni adlı dəyişənlərin qarışmasının qarşısını alır.

```javascript
function first() {
  let message = "Salam";
  console.log(message);
}

function second() {
  let message = "Hello";
  console.log(message);
}

first();  // Konsola "Salam" yazır
second(); // Konsola "Hello" yazır
```

Hər iki funksiyada `message` adlı dəyişən var, amma onlar fərqli namespace - də yerləşdiyindən bir-birinə müdaxilə etmirlər.

---


### Immediately Invoked Function Expression (IIFE)

Bəzən kodu sadəcə namespace yaratmaq üçün funksiyanın içində yazıb dərhal icra etmək istəyirik. Bunun üçün anonim funksiya ifadəsindən istifadə olunur və bu funksiya dərhal çağırılır.

**IIFE** — “dərhal çağırılan funksiya ifadəsi” deməkdir.
Yəni funksiyanı **yaradırıq** və **dərhal işə salırıq**.


```javascript
(function() {
  let count = 0; // Lokal dəyişən
  console.log("İcra olunur, say: " + count);
})(); // → İcra olunur, say: 0
```

Burada:

* `(function() { ... })` → funksiyanı **ifadə** halına gətirir.
* `()` → funksiyanı **dərhal çağırır**.

Yuxarıdakı anonim funksiyanın dərhal çağırılması **IIFE** adlanır. Sintaksisin başa düşülməsi üçün `function` sözündən əvvəl mötərizə qoymaq vacibdir. Bu, JavaScript-ə bildirir ki, bu, funksiya bəyanatı deyil, ifadədir.


#### Parametrlə IIFE

```javascript
(function(name) {
  console.log("Salam, " + name + "!");
})("Aysel");

// → Salam, Aysel!
```

Burada funksiyaya arqument ötürürük və o dərhal istifadə olunur.


#### Arrow Function ilə IIFE

ES6 ilə birlikdə IIFE daha qısa yazıla bilər:

```javascript
(() => {
  console.log("Arrow IIFE işləyir!");
})();
```


#### Praktiki istifadə

Məsələn, qlobal `window` obyektini qarışdırmamaq üçün:

```javascript
(function() {
  const apiKey = "SECRET_KEY_123"; // gizli dəyişən
  console.log("API hazırdır",apiKey);
})();
// API hazırdır SECRET_KEY_123 
console.log(typeof apiKey); // "undefined"
```

`apiKey` xaricdən **görünmür**, çünki yalnız IIFE daxilində yaşayır.

---

### 8.6 Kloujurlar (Closures)

JavaScript-də funksiyalar **Leksikal skoplaşma (lexical scoping)** prinsipi ilə işləyir. Bu o deməkdir ki, funksiyanın daxilində istifadə olunan dəyişənlər onun **harada təyin olunduğuna** görə müəyyənləşir.

---

#### Leksikal skop nədir? (Lexical Scope)

* Funksiya harada **yaradıldısa**, onun **skopu** (dəyişənləri və ətraf mühiti) o yerdən götürülür.
* Funksiya harada **çağırılırsa**, oradan yox.

```javascript
let globalVar = "global";

function outer() {
  let localVar = "local";

  function inner() {
    return localVar;
  }

  return inner();
}

console.log(outer()); // "local"
```

---

### Kloujur nədir?

* Kloujur = **funksiya + onun yaradıldığı skop**.
* Funksiya daxilindəki dəyişənləri **xaricdən qoruyur**, amma öz daxilindən istifadə etməyə imkan verir.

```javascript
function makeFunc() {
  let secret = 42;
  return function() {
    return secret;
  };
}

let func = makeFunc();
console.log(func()); // 42
```
---

####  Şəxsi vəziyyət yaratmaq (Private State)

```javascript
let counter = (function() {
  let count = 0; // gizli dəyişən
  return function() {
    return count++;
  };
})();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
```

---

#### Bir neçə funksiyanın eyni skopu paylaşması

```javascript
function createCounter() {
  let n = 0;
  return {
    inc: function() { return n++; },
    reset: function() { n = 0; }
  };
}

let a = createCounter();
let b = createCounter();

console.log(a.inc()); // 0
console.log(b.inc()); // 0
a.reset();
console.log(a.inc()); // 0
console.log(b.inc()); // 1
```

* Hər `createCounter()` çağırışı **öz şəxsi dəyişənini yaradır**.
* Fərqli funksiyalar fərqli “yaddaşa” malikdir.

---

#### Dövr və `var` vs `let` problemi

**`var` ilə:**

```javascript
function makeFuncs() {
  var funcs = [];
  for(var i = 0; i < 5; i++) {
    funcs[i] = function() { return i; };
  }
  return funcs;
}

let fs = makeFuncs();
console.log(fs[2]()); // 5
```

* `var` **funksiya skoplu**dur → bütün funksiyalar eyni `i`-yə baxır.

**`let` ilə:**

```javascript
function makeFuncs() {
  let funcs = [];
  for(let i = 0; i < 5; i++) {
    funcs[i] = function() { return i; };
  }
  return funcs;
}

let fs = makeFuncs();
console.log(fs[2]()); // 2
```

* `let` hər dövr üçün **yeni kloujur** yaradır → hər funksiya öz `i`-sini yadda saxlayır.

---


## 8.7 Funksiya Xüsusiyyətləri, Metodları və Konstruktoru

JavaScript-də **funksiyalar** təkcə kod blokları deyil, həm də xüsusi obyektlərdir. `typeof` operatoru funksiyaya tətbiq olunanda **function** dəyərini qaytarır. Amma əslində, funksiya JavaScript obyektinin xüsusi növüdür. Bu səbəbdən funksiyalar da obyektlər kimi müxtəlif xüsusiyyətlərə və metodlara sahib ola bilirlər. Bundan əlavə, JavaScript-də yeni funksiya yaratmaq üçün **`Function()`** adlı konstruktor mövcuddur.

---

### 8.7.1 `length` Xüsusiyyəti

Hər funksiyanın `length` adlı oxuna bilən xüsusiyyəti var. Bu, funksiyanın təyin etdiyi parametr sayını göstərir. Qısaca desək, `length` funksiyanın gözlədiyi arqumentlərin sayını bildirir.


```javascript
function f(a, b, c) {}
console.log(f.length); // 3

function g(a, b, ...rest) {}
console.log(g.length); // 2 (rest parametri sayılmır)
```

---

### 8.7.2 `name` Xüsusiyyəti

Funksiyanın `name` xüsusiyyəti funksiyanın adını saxlayır. Bu, funksiyanın təyin olunarkən verdiyiniz adı və ya adlandırılmış funksiya ifadəsinin adını göstərir. Bu xüsusiyyət adətən error mesajlarında və debugging zamanı istifadə olunur.

```javascript
function myFunc() {}
console.log(myFunc.name); // "myFunc"

const anon = function() {};
console.log(anon.name); // "anon" (əgər dəyişən adı varsa)

const arrow = () => {};
console.log(arrow.name); // "arrow"
```

---

### 8.7.3 `prototype` Xüsusiyyəti

Bütün normal funksiyaların (istisna, arrow funksiyalar) **`prototype`** adlı bir xüsusiyyəti olur. Bu `prototype` obyektinə istinad edir. JavaScript-də konstruktor funksiyaları bu prototip obyektindən yeni yaradılan obyektlərə xüsusiyyətləri miras verirlər.

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log("Salam, mən " + this.name);
};

const object = new Person("Rəşad");
object.greet(); // Salam, mən Rəşad
```

---

### 8.7.4 `call()` və `apply()` Metodları

JavaScript-də `call()` və `apply()` metodları bir funksiyanı başqa bir obyektin metodu kimi çağırmağa imkan verir. Bu metodlar funksiyanın çağırış kontekstini (yəni `this` dəyərini) təyin edir.

* `call()` metodunda funksiyaya ötürülən arqumentlər vergüllə ayrılmış formada verilir.
* `apply()` metodunda isə arqumentlər massiv şəklində ötürülür.


```javascript
function f(a, b) {
  console.log(this, a, b);
}

const o = {name: "obyekt"};

f.call(o, 1, 2);     // {name: "obyekt"}, 1,2
f.apply(o, [1, 2]);  // {name: "obyekt"}, 1,2
```


`apply()` metodu xüsusilə ixtiyari sayda arqument qəbul edən funksiyalarda faydalıdır. Məsələn, massivdəki ən böyük rəqəmi tapmaq üçün:

```javascript
let arr = [5, 2, 10, -1, 9];
let max = Math.max.apply(Math, arr);
console.log(max); // 10
```

---
### 8.7.5 bind() Metodu


`bind()` funksiyanı **müəyyən obyektə bağlayır** → yeni funksiya yaranır.
Yeni funksiya çağırıldıqda `this` həmişə **bağlandığı obyekt** olur.

```javascript
let newFunc = oldFunc.bind(obj, arg1, arg2, ...);
```

* `obj` → `this` olacaq obyekt
* `arg1, arg2...` → funksiyaya əvvəlcədən təyin edilmiş arqumentlər


```javascript
function f(y) {
  return this.x + y;
}

let o = { x: 1 };
let g = f.bind(o);

console.log(g(2)); // 3

let sum = (x, y) => x + y;
let succ = sum.bind(null, 1);

console.log(succ(2)); // 3
```

---

### Arrow funksiyaları ilə `bind()`

* Arrow funksiyaları `this`-i bağlamır.
* Onlar **lexical this** istifadə edir → təyin olunduqları mühitin `this` dəyərini götürür.
* Buna görə arrow funksiyasını `bind()` etməyə çalışsan, `this` dəyişməyəcək.

```javascript
let arrow = () => this.x;
let obj = { x: 10 };

let boundArrow = arrow.bind(obj);
console.log(boundArrow()); 
// this.x arrow-un təyin olunduğu yerə görə → undefined (əsasən)
```

---

### 8.7.6 `toString()` Metodu

Bütün JavaScript obyektləri kimi, funksiyaların da `toString()` adlı metodu var. Bu metod funksiyanın mətn şəklində təsvirini qaytarır. ECMAScript spesifikasiyası `toString()` metodunun funksiyanın sintaksisinə uyğun mətn qaytarmasını tələb edir.


```javascript
function sum(a, b) {
  return a + b;
}

console.log(sum.toString());
```


```javascript
/* "function sum(a, b) {
  return a + b;
}"
*/
```

Lakin, daxili funksiyalar (məsələn, `Math.max`) üçün bu metod, funksiyanın tərifi əvəzinə, adətən belə bir yazı qaytarır:

```javascript
"function max() { [native code] }"
```

Bu o deməkdir ki, həmin funksiya JavaScript dili ilə deyil, mühitin özündə natamam (native) şəkildə təmin olunub.

---

### 8.7.7 `Function()` Konstruktoru

JavaScript-də yeni funksiyalar yaratmaq üçün `Function()` adlı konstruktor mövcuddur. Bu konstruktorun arqumentləri funksiyanın parametr adları və funksiyanın gövdəsinin mətni şəklində verilir.

```javascript
const f = new Function("x", "y", "return x * y;");
console.log(f(2, 3)); // 6
```

Yuxarıdakı kod aşağıdakı funksiya ilə eyni işi görür:

```javascript
const f = function(x, y) {
  return x * y;
};
```

`Function()` konstruktoruna ötürülən sonuncu arqument funksiyanın gövdəsidir, digər arqumentlər isə parametr adlarıdır. Əgər parametr yoxdursa, sadəcə gövdə mətni verilir.


Konstruktor dinamik funksiyalar yaratmağa imkan verir, lakin bəzi vacib xüsusiyyətləri var:

* `Function()` ilə yaradılan funksiyalar **leksik skopda** deyil, **qlobal skopda** işləyir. Bu o deməkdir ki, onlar tərtib olunduqları yerdəki dəyişənləri görə bilmirlər.

```javascript
let scope = "qlobal";

function makeFunction() {
  let scope = "yerli";
  return new Function("return scope;");
}

console.log(makeFunction()()); // "qlobal"
```

* Əksər hallarda bu konstruktorun istifadəsinə ehtiyac olmur, çünki funksiyaları adi sintaksis ilə yaratmaq performansa təsir edir.

---

## 8.8 Funksional Proqramlaşdırma

JavaScript rəsmi olaraq **Lisp**, **Haskell** və ya **OCaml** kimi tam funksional proqramlaşdırma dili deyil. Buna baxmayaraq, funksiyaların obyekt kimi istifadə olunması və yüksək səviyyəli massiv metodlarının mövcudluğu JavaScript-də funksional proqramlaşdırma texnikalarını tətbiq etməyə imkan yaradır.

Funksional proqramlaşdırma, əsasən, **funksiyaların** birinci dərəcəli **obyekt** olması, yəni funksiyaların **dəyişənlər** kimi ötürülməsi, başqa funksiyalara **arqument** kimi verilməsi və ya nəticə kimi qaytarılması prinsipinə əsaslanır. 

---

### 8.8.1 Massivlərin Funksiyalarla İşlənməsi (Processing Arrays with Functions)

Təsəvvür edin ki, ədədlər massivimiz var və biz bu dəyərlərin **cəmi** və **kvadratlarının ortalamasını** hesablamaq istəyirik. Ənənəvi üsulla bunu belə edə bilərik:

```javascript
let data = [2, 4, 6, 8, 10];

// Cəmi hesablamaq
let total = 0;
for (let i = 0; i < data.length; i++) {
  total += data[i];
}
console.log(total); // => 30

// Kvadratların cəmini hesablamaq
let totalSquares = 0;
for (let i = 0; i < data.length; i++) {
  totalSquares += data[i] * data[i];
}
let meanSquares = totalSquares / data.length;
console.log(meanSquares); // => 44
```

İndi eyni hesablamaları **`map()`** və **`reduce()`** massiv metodları ilə funksional üslubda yerinə yetirək:

```javascript
const sum = (x, y) => x + y;
const square = x => x * x;

let data = [2, 4, 6, 8, 10];

// Cəmi hesablamaq
let total = data.reduce(sum);
console.log(total); // => 30

// Kvadratların ortalaması
let meanSquares = data.map(square).reduce(sum) / data.length;
console.log(meanSquares); // => 44
```

Daha ümumi funksional üsulla, `map` və `reduce` funksiyalarını ayrıca yazıb istifadə edə bilərik:

```javascript
const map = (a, fn) => a.map(fn);
const reduce = (a, fn) => a.reduce(fn);

const sum = (x, y) => x + y;
const square = x => x * x;

let data = [2, 4, 6, 8, 10];

let total = reduce(data, sum);
let meanSquares = reduce(map(data, square), sum) / data.length;

console.log(total);       // => 30
console.log(meanSquares); // => 44
```

Bu nümunələr funksional proqramlaşdırmanın əsas prinsiplərini — funksiyaların tətbiqi və transformasiyasını — aydın göstərir. Funksional metodlardan istifadə kodu daha qısa, oxunaqlı və təkrar istifadəyə yararlı edir.

---

### 8.8.2 Yüksək Səviyyəli Funksiyalar (Higher-Order Functions)

**Yüksək səviyyəli funksiya** — funksiyaları arqument kimi qəbul edən və/və ya funksiya qaytaran funksiyadır. Yəni, belə funksiyalar digər funksiyalar üzərində işləyir.

`not` funksiyası arqument olaraq funksiya alır və həmin funksiyanın nəticəsini tərsinə çevirən yeni funksiya qaytarır.

```javascript
function not(f) {
  return function(...args) {
    let result = f.apply(this, args);
    return !result;
  };
}

const even = x => x % 2 === 0;  // Ədədin cüt olub-olmadığını yoxlayır
const odd = not(even);          // 'even'in əksini verən funksiya

console.log([1, 1, 3, 5, 5].every(odd)); // => true; bütün ədədlər təkdir
```


`mapper` funksiyası bir funksiya arqumenti kimi qəbul edir və onu massivə tətbiq edən yeni funksiya qaytarır.

```javascript
function mapper(f) {
  return a => map(a, f); // yuxarıdakı 'map' funksiyasından istifadə
}

const increment = x => x + 1;         // Hər elementi 1 artırır
const incrementAll = mapper(increment);

console.log(incrementAll([1, 2, 3])); // => [2, 3, 4]
```

İki funksiyanı qəbul edir və onları ardıcıl şəkildə tətbiq edən yeni funksiya qaytarır: `f(g(...))`.

```javascript
function compose(f, g) {
  return function(...args) {
    return f.call(this, g.apply(this, args));
  };
}

const sum = (x, y) => x + y;
const square = x => x * x;

console.log(compose(square, sum)(2, 3)); // => 25; (2+3)^2 = 25
```

---

### 8.8.4 Memoizasiya (Memoization)

Memoizasiya — bir funksiyanın əvvəlcə hesablanmış nəticələrini yadda saxlamaq və eyni arqumentlərlə növbəti çağırışlarda həmin yaddaşdan sürətlə nəticəni qaytarmaq üsuludur. Bu, xüsusilə **təkrarlanan və mürəkkəb hesablamalar** zamanı proqramın sürətini artırmaq üçün faydalıdır.

---

#### Memoizasiya üçün ümumi funksiya

Aşağıdakı `memoize()` funksiyası istənilən funksiyanı “yaddaşlı” versiyaya çevirir:

```javascript
function memoize(f) {
  const cache = new Map(); // nəticələri saxlayır

  return function(...args) {
    const key = args.join(","); // arqumentləri string kimi birləşdiririk

    if (cache.has(key)) {
      console.log("Keşdən götürüldü:", key);
      return cache.get(key); // Əvvəlki nəticəni qaytar
    }

    console.log("Yenidən hesablanır:", key);
    const result = f.apply(this, args);
    cache.set(key, result); // yaddaşa yaz
    return result;
  };
}

// Sadə test funksiyası
function square(n) {
  console.log(`square(${n}) funksiyası işləyir...`);
  return n * n;
}

// Memoizasiya olunmuş versiya
const memoSquare = memoize(square);

console.log(memoSquare(5)); // Yenidən hesablanır: 5 → 25
console.log(memoSquare(5)); // Keşdən götürüldü: 5 → 25
console.log(memoSquare(6)); // Yenidən hesablanır: 6 → 36
console.log(memoSquare(6)); // Keşdən götürüldü: 6 → 36
```

İlk dəfə çağırıldıqda funksiya real hesablanır,
amma eyni arqumentlə ikinci dəfə çağırıldıqda nəticə **keşdən** qaytarılır.

---

#### Ən Böyük Ortaq Bölən (ƏBOB)

```javascript
function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

const gcdMemo = memoize(gcd);

console.log(gcdMemo(85, 187)); // Yenidən hesablanır → 17
console.log(gcdMemo(85, 187)); // Keşdən götürüldü → 17
```

İkinci çağırış zamanı nəticə artıq `cache`də olduğuna görə funksiyanın içindəki dövr işləmir — nəticə dərhal qaytarılır.

---

#### Rekursiv Faktoriyal (Factorial)

Rekursiv funksiyalarda memoizasiya daha çox faydalıdır, çünki eyni alt-dəyərlər (məsələn, `f(4)`, `f(3)`) təkrar hesablanır.

```javascript
const factorial = memoize(function f(n) {
  return n <= 1 ? 1 : n * f(n - 1);
});

console.log(factorial(5)); // Hesablanır → 120
console.log(factorial(5)); // Keşdən gəlir → 120
console.log(factorial(6)); // Sadəcə f(6) hesablanır, f(5) artıq cache-dədir
```

Memoizasiya sayəsində `factorial(5)` dəyərləri artıq yadda saxlandığından, `factorial(6)` üçün yalnız bir yeni addım hesablanır — bu da prosesi xeyli sürətləndirir.