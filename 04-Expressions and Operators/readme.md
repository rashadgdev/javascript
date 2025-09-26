# 4. İfadələr və Operatorlar (Expressions and Operators)
Bu fəsil, JavaScript-in təməl quruluş daşları olan **ifadələri (expressions)** və onların qurulmasında istifadə olunan **operatorları** əhatə edir.

**İfadə (Expression)** – JavaScript-də qiymətləndirilərək bir **dəyər (value)** yaradan istənilən kod parçasıdır. Sadə bir rəqəm, bir dəyişənin adı və ya daha mürəkkəb riyazi əməliyyatlar – bunların hamısı bir ifadədir.   
Operatorlar isə, bu sadə ifadələri birləşdirərək daha mürəkkəb ifadələr yaratmaq üçün istifadə olunur. Məsələn, `x` və `y` ayrı-ayrı ifadədirsə, `x * y` da onların hasilini yaradan yeni bir ifadədir.

---
## 4.1 İlkin İfadələr (Primary Expressions)
Ən sadə ifadələr, yəni özündən daha sadə bir ifadədən təşkil olunmayan ifadələrə **ilkin ifadələr (primary expressions)** deyilir. Üç əsas növü var:

---

**1. Literallar (Literals)**
Proqramın içinə birbaşa yazılan sabit dəyərlərdir.
```javascript
1.23         // Rəqəm (Number) literalı
"salam"      // String (String) literalı
/pattern/    // Requlyar İfadə (RegExp) literalı
```

**2. Açar Sözlər (Keywords)**
Bəzi rezerv olunmuş açar sözlər özləri birbaşa bir dəyəri ifadə edir.
```javascript
true         // `true` boolean dəyəri
false        // `false` boolean dəyəri
null         // `null` dəyəri
this         // Hazırkı obyektə istinad (kontekstdən asılı olaraq dəyişir)
```

**3. Dəyişən İstinadları (Variable References)**
Kodda tək başına yazılan bir identifikator (ad), JavaScript tərəfindən bir dəyişən, sabit və ya qlobal obyektin bir xüsusiyyəti kimi qəbul edilir və onun dəyərini tapmağa çalışır.
```javascript
i            // i dəyişəninin dəyəri
sum          // sum dəyişəninin dəyəri
undefined    // qlobal obyektdəki "undefined" xüsusiyyətinin dəyəri
```
Əgər bu adda bir dəyişən tapılmazsa, proqram `ReferenceError` xətası verər.

---
## 4.2 Obyekt və Massiv İnisiatorları (Initializers)
Bunlar, yeni bir obyekt və ya massiv  yaradan ifadələrdir. Onlara çox vaxt **"obyekt literalı"** və ya **"massiv literalı"** da deyilir.

---

**Massiv İnisiatorları (Array Initializers)**
Kvadrat mötərizə `[]` içində, vergüllə ayrılmış bir ifadələr siyahısıdır.
```javascript
let empty = [];           // Boş massiv
let nums = [1 + 2, 3 + 4]; // Hesablanmış elementlər: [3, 7]

let matrix = [             // İç-içə massivlər
  [1, 2, 3],
  [4, 5, 6]
];

// "Boş" elementlər əlavə etmək (sparse array)
let sparse = [1, , , 4];   
// 4 elementli massiv: [1, undefined, undefined, 4]
console.log(sparse.length); // 4 
```

**Obyekt İnisiatorları (Object Initializers)**
Fiqurlu mötərizə `{}` içində, `açar: dəyər` formatında cütlüklərdən ibarətdir.
```javascript

let p = { x: 2.3, y: -1.2 };  // 2 properti ilə obyekt
let q = {};                   // Boş obyekt
q.x = 2.3; q.y = -1.2;        // İndi q p-ə bənzəyir

// İç-içə obyekt nümunəsi
let rectangle = {
  topLeft: { x: 0, y: 0 },
  bottomRight: { x: 100, y: 50 }
};
```
---
## 4.3 Funksiya Təyin Etmə İfadələri (Function Definition Expressions)
Bu, yeni bir funksiya yaradan və nəticə olaraq həmin funksiya obyektini qaytaran bir ifadədir. Bu, **"funksiya literalı"** kimidir.

**Nümunə:**
```javascript
// Bu ifadənin dəyəri, `x`-in kvadratını hesablayan bir funksiyadır.
// Həmin funksiya `square` adlı dəyişənə mənimsədilir.
let square = function(x) { 
  return x * x; 
};

// İndi `square` dəyişəni vasitəsilə funksiyanı çağıra bilərik
let result = square(5); //  Nəticə: 25
```

***
## 4.4 Xüsusiyyətə Müraciət İfadələri (Property Access Expressions)
**Xüsusiyyətə müraciət (property access)** ifadəsi, bir obyektin xüsusiyyətinin və ya bir massivin elementinin dəyərini əldə etmək üçün istifadə olunur. JavaScript-də bunun üçün iki fərqli sintaksis var:

1.  **Nöqtə Sintaksisi (Dot Notation):** `ifadə.identifikator`
2.  **Kvadrat Mötərizə Sintaksisi (Bracket Notation):** `ifadə[ifadə]`

**Geniş Nümunə:**
```javascript
const user = {
  "first name": "Ayan", // adda boşluq var
  age: 25,
  address: {
    city: "Bakı"
  }
};

const data = [user, { id: 2 }];

// Nöqtə sintaksisi ilə müraciət
console.log(user.age); //  25
console.log(user.address.city); //  "Bakı"

// Kvadrat mötərizə sintaksisi ilə müraciət
console.log(user["age"]); //  25
console.log(data[0]["address"]["city"]); //  "Bakı"

// Nə vaxt kvadrat mötərizə məcburidir?

// 1. Əgər xüsusiyyətin adı düzgün identifikator deyilsə
console.log(user.first name); // ❌ Səhv! Bu işləməyəcək.
console.log(user["first name"]); //  "Ayan"

// 2. Əgər xüsusiyyətin adı bir dəyişəndə saxlanılırsa 
let propName = "age";
console.log(user[propName]); //  25
```
❗️ **Vacib:** Əgər nöqtə və ya mötərizədən əvvəlki ifadə `null` və ya `undefined` olarsa, proqram dərhal `TypeError` xətası verərək dayanacaq.

---

### 4.4.1 Şərti Müraciət (Conditional Access / Optional Chaining)
Yuxarıda qeyd etdiyimiz `TypeError` xətasından qaçmaq üçün əvvəllər uzun-uzun `if` yoxlamaları yazmaq lazım gəlirdi. ES2020-də gələn **Optional Chaining** operatoru (`?.`) bu problemi həll edir.

**Necə İşləyir?**  
`?.` operatoru, solundakı dəyərin `null` və ya `undefined` olub-olmadığını yoxlayır.
* Əgər dəyər `null` və ya `undefined`-dırsa, ifadənin qalan hissəsini heç icra etmədən dərhal `undefined` qaytarır və xəta baş vermir (**short-circuiting**).
* Əgər dəyər `null` və ya `undefined` deyilsə, müraciət normal şəkildə davam edir.

**Geniş Nümunə: "Əvvəl və Sonra"**

**Problem (Köhnə üsul):**
```javascript
const user = {
  name: "Ayan",
  // profil məlumatları hələ yoxdur
  profile: null 
};

let street;
// Küçə məlumatını almaq üçün iç-içə yoxlama aparmalıyıq ki, xəta olmasın
if (user && user.profile && user.profile.address) {
  street = user.profile.address.street;
} else {
  street = undefined;
}
console.log("Köhnə üsulla küçə:", street); // undefined
```
**Həll Yolu (Müasir üsul - Optional Chaining):**
```javascript
const user = { name: "Ayan", profile: null };

// Eyni məntiq, tək sətirlə!
const street = user.profile?.address?.street;

console.log("Yeni üsulla küçə:", street); 
// undefined (HEÇ BİR XƏTA OLMADAN!)
```

---
## 4.5 Funksiya Çağırış İfadələri (Invocation Expressions)

Adi mötərizə `()` cütlüyü, JavaScript-də **funksiya çağırma (invocation)** operatorudur. O, özündən əvvəl gələn ifadənin bir funksiya olduğunu güman edir və onu arqumentlərlə birlikdə icra edir.
```javascript
f(0)  // f funksiya ifadəsidir; `0` isə arqument ifadəsidir.  
Math.max(x, y)  // `Math.max` funksiyadır; `x`, `y` arqumentlərdir.  
newArray.sort()  // `newArray.sort` funksiyadır; arqument yoxdur.
```
Əgər çağırılan ifadə bir xüsusiyyətə müraciətdirsə (`newArray.sort`), bu, **metod çağırışı (method invocation)** adlanır və funksiyanın daxilindəki `this` açar sözü həmin obyektə (`newArray`-a) işarə edir.

---
### 4.5.1 Şərti Çağırış (Conditional Invocation)
Bu da ES2020 ilə gələn bir yenilikdir və **Optional Chaining**-in funksiyalar üçün olan versiyasıdır.

**Problem:** Bəzən bir funksiyaya arqument kimi başqa bir funksiya (callback) ötürülür, amma bu arqument könüllü (optional) ola bilər. Onu çağırmazdan əvvəl mövcud olub-olmadığını yoxlamaq lazımdır.

**Həll Yolu:** `?.()` operatoru, solundakı dəyərin `null` və ya `undefined` olub-olmadığını yoxlayır. Əgər `null` və ya `undefined`-dırsa, heç bir şey etmir və `undefined` qaytarır. Əks halda isə funksiyanı çağırır.

**Geniş Nümunə: "Əvvəl və Sonra"**

**Problem (Köhnə üsul):**
```javascript
function square(x, log) {
  // `log` funksiyasının ötürülüb-ötürülmədiyini yoxlayırıq
  if (log) {
    log(x);
  }
  return x * x;
}
```
**Həll Yolu (Müasir üsul - Conditional Invocation):**
```javascript
function square(x, log) {
  // Əgər `log` mövcuddursa, onu çağır. Yoxdursa, heç nə etmə.
  log?.(x); 
  return x * x;
}
```

```javascript
o.m()  
// Regular property access, regular invocation, 
// Adi propertiyə çıxış, adi çağırış (invocation)
o?.m() 
// Conditional property access, regular invocation, 
// Şərti (conditional) propertiyə çıxış, adi çağırış.
o.m?.() 
// Regular property access, conditional invocation, 
// Adi propertiyə çıxış, şərti çağırış.
```

**`o.m()`, `o?.m()`, və `o.m?.()` arasındakı fərq:**
Bu üç ifadənin fərqini anlamaq çox vacibdir:
* `o.m()`: `o` mütləq bir obyekt olmalıdır və onun `m` adlı bir funksiya xüsusiyyəti olmalıdır. Əks halda `TypeError`.
* `o?.m()`: Əgər `o` `null` və ya `undefined`-dırsa, bütün ifadə `undefined` olur və dayanır. Əgər `o` bir obyektdirsə, onun mütləq `m` adlı bir funksiya xüsusiyyəti olmalıdır.
* `o.m?.()`: `o` mütləq bir obyekt olmalıdır. Amma onun `m` adlı xüsusiyyəti olmaya da bilər (və ya `null` ola bilər). Əgər `m` bir funksiyadırsa, çağırılır. Əks halda, ifadə `undefined` olur.

***

## 4.6 Obyekt Yaratma İfadələri (Object Creation Expressions)
**Obyekt yaratma ifadəsi**, yeni bir obyekt yaradır və həmin obyektin xüsusiyyətlərini ilkinləşdirmək üçün bir funksiyanı – yəni **konstruktoru (constructor)** – çağırır.

Bu ifadələr, funksiya çağırışlarına çox bənzəyir, lakin onların qarşısında **`new`** açar sözü olur.

**Nümunə:**
```javascript
// Tutaq ki, belə bir sinifimiz (class) var
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

// `new` ilə bu sinifdən yeni bir obyekt (nüsxə - instance) yaradırıq
const p1 = new Point(10, 20);

console.log(p1); // Point { x: 10, y: 20 }

// Konstruktora heç bir arqument ötürülmürsə, 
// mötərizələri yazmaya da bilərsiniz
const rightNow = new Date; // `new Date()` ilə eynidir
console.log(rightNow);
```
---
## 4.7 Operatorlara Ümumi Baxış (Operator Overview)
Bu bölmə, JavaScript-dəki bütün operatorların ümumi bir icmalı və onların üstünlük (precedence) və assosiativlik (associativity) kimi vacib xüsusiyyətlərini izah edir.

#### Operatorların Üstünlük Cədvəli (sadələşdirilmiş)
Aşağıda operatorlar, ən yüksək üstünlükdən ən aşağıya doğru qruplaşdırılıb. Eyni qrupdakı operatorlar eyni üstünlüyə malikdir.

| Prioritet | Kateqoriya                | Operatorlar                                        |
| --------- | ------------------------- | -------------------------------------------------- |
| 1         | Ən Yüksək: Qruplaşdırma   | `()`                                               |
| 2         | Üzvlük və Çağırış         | `.`, `[]`, `?.`, `()`, `new`                       |
| 3         | Artırma/Azaltma (Postfix) | `++`, `--`                                         |
| 4         | Unar Operatorlar          | `!`, `~`, `+`, `-`, `++`, `--`, `typeof`, `delete` |
| 5         | Qüvvət                    | `**`                                               |
| 6         | Vurma/Bölmə/Qalıq         | `*`, `/`, `%`                                      |
| 7         | Toplama/Çıxma             | `+`, `-`                                           |
| 8         | Bit Sürüşdürmə            | `<<`, `>>`, `>>>`                                  |
| 9         | Müqayisə                  | `<`, `<=`, `>`, `>=`, `instanceof`, `in`           |
| 10        | Bərabərlik                | `==`, `!=`, `===`, `!==`                           |
| 11        | Bit Məntiqi               | `&`, `^`, `\|`                                     |
| 12        | Məntiqi Operatorlar       | `&&`, `\|\|`                                       |
| 13        | Şərt (Ternary) Operatoru  | `... ? ... : ...`                                  |
| 14        | Mənimsətmə (Assignment)   | `=`, `+=`, `-=`, `*=`, `**=`, və s.                |
| 15        | Vergül Operatoru          | `,`                                                |

---

### 4.7.1 Operandların Sayı (Arity)

| Növ        | Təsviri                            | Nümunə                   |
| ---------- | ---------------------------------- | ------------------------ |
| **Unar**   | Tək operand qəbul edir             | `-x`, `!flag`            |
| **Binar**  | İki operandla işləyir              | `x + y`, `a * b`         |
| **Ternar** | Üç operandla işləyir (yalnız `?:`) | `age > 18 ? "ok" : "no"` |

---

### 4.7.2 Operand və Nəticə Tipləri

JavaScript lazım gəldikdə **tip çevirməsi** edir.

**Nümunə:**

```js
"3" * "5"  // nəticə: 15 (string → number çevrilir)
"10" + 2   // nəticə: "102" (number → string çevrilir)
```

---

### 4.7.3 Yan Təsirlər (Side Effects)

Bəzi operatorlar **dəyərlə yanaşı proqramın vəziyyətini dəyişir.**

| Operator | Təsiri                      | Nümunə            |
| -------- | --------------------------- | ----------------- |
| `=`      | Dəyişənə dəyər mənimsədir   | `x = 10`          |
| `++/--`  | Dəyişəni artırır/azaldır    | `count++`         |
| `delete` | Obyektdən xüsusiyyəti silir | `delete obj.name` |

---

### 4.7.4 Operator Üstünlüyü (Precedence)

Əməliyyatların hansı sıra ilə icra olunacağını müəyyən edir.

**Nümunə:**

```js
w = x + y * z;
// əvvəl: y * z → sonra: x + (y * z) → sonda: mənimsətmə
```

**Dəyişdirmək üçün:**

```js
w = (x + y) * z;
```

---

### 4.7.5 Assosiativlik (Associativity)

**Eyni səviyyəli operatorlar** üçün icra istiqaməti.

| İstiqamət   | Operatorlar              | Nümunə                      |
| ----------- | ------------------------ | --------------------------- |
| Soldan-sağa | `+`, `-`, `*`, `/` və s. | `a - b - c` → `(a - b) - c` |
| Sağdan-sola | `=`, `**`, `?:`          | `a = b = 5` → `a = (b = 5)` |

---

### 4.7.6 Qiymətləndirmə Ardıcıllığı (Evaluation Order)

JavaScript ifadələri **həmişə soldan-sağa** oxuyur. Bu, **operantların oxunma ardıcıllığıdır**, **icra sırası deyil!**

**Nümunə:**

```js
w = x + y * z;
```

| Addım | Əməliyyat              |
| ----- | ---------------------- |
| 1     | `w` tapılır            |
| 2     | `x` tapılır            |
| 3     | `y`, sonra `z` tapılır |
| 4     | `y * z` hesablanır     |
| 5     | `x + (y * z)`          |
| 6     | `w = nəticə`           |


***

## 4.8 Riyazi (Arithmetic) İfadələr 
Bu bölmə, operandlar üzərində riyazi və ya rəqəmsal əməliyyatlar aparan operatorları əhatə edir.

Əsas riyazi operatorlar bunlardır: `**` (qüvvətə yüksəltmə), `*` (vurma), `/` (bölmə), `%` (qalıq-modulo), `+` (toplama) və `-` (çıxma).

Bu operatorlar (toplama istisna olmaqla), operandları rəqəm deyilsə, onları rəqəmə çevirməyə çalışır. Əgər çevirmək mümkün deyilsə, nəticə `NaN` (Not-a-Number) olur.

```javascript
3 ** 4; // 3-ün 4-cü qüvvəti => 81
10 * 5; // => 50
10 / 3; //  3.333... (JavaScript-də bölmə həmişə həqiqi rəqəm qaytarır)
10 % 3; // 10-u 3-ə böldükdə qalan qalıq => 1
```
❗️ **Vacib Qeydlər:**
* Qüvvət (`**`) operatoru sağdan-sola işləyir: `2 ** 2 ** 3` ifadəsi `2 ** 8` (256) kimi hesablanır.
* `-3 ** 2` kimi bir ifadə yazmaq sintaksis xətasıdır. Brauzer çaşqınlığın qarşısını almaq üçün sizdən mötərizə istifadə etməyi tələb edir: `(-3) ** 2` (9) və ya `-(3 ** 2)` (-9).

---
### 4.8.1 Toplama Operatoru (+): "Toplama yoxsa Birləşdirmə?"
`+` operatorunun iki fərqli rolu var: rəqəmləri toplayır və stringləri (strings) birləşdirir.

**Qızıl Qayda:** Əgər operandlardan heç olmasa biri **string** olarsa, həmişə **birləşdirmə (concatenation)** baş verir. Yalnız hər iki tərəf rəqəmə çevrilə biləndə **toplama (addition)** olur.

**Geniş Nümunə Cədvəli:**
```javascript
// Rəqəm + Rəqəm = Toplama
1 + 2;            //  3

// string + string = Birləşdirmə
"Salam" + " " + "Ayan"; //  "Salam Ayan"
"1" + "2";        //  "12"

// string + Rəqəm = Birləşdirmə (rəqəm stringə çevrilir)
"1" + 2;            //  "12"
1 + "2";            //  "12"

// Obyekt/Boolean/Null ilə
true + true;        //  2        (true 1-ə çevrilir)
2 + null;           //  2        (null 0-a çevrilir)
2 + undefined;      //  NaN      (undefined rəqəmə çevrilmir)
1 + {};             //  "1[object Object]" (obyekt stringə çevrilir)
```
**Assosiativlik (Associativity) Nümunəsi:**
`+` operatoru soldan-sağa işlədiyi üçün, mötərizələr nəticəni tamamilə dəyişə bilər.
```javascript
1 + 2 + " javascript"; // "3 javascript"
1 + (2 + " javascript"); // "12 javascript"
```

---
### 4.8.2 Unar Riyazi Operatorlar (`+`, `-`, `++`, `--`)
Bu operatorlar tək bir operand üzərində işləyir.
* **Unar Plus `(+)`**: Operandını rəqəmə çevirməyə çalışır. Məsələn, `+"3"` ifadəsi `3` rəqəmini qaytarır.
* **Unar Minus `(-)`**: Operandını rəqəmə çevirib, işarəsini əksinə dəyişir.
* **İnkrement `(++)`**: Operandının dəyərini bir vahid artırır.
* **Dekrement `(--)`**: Operandının dəyərini bir vahid azaldır.

**`++` və `--` üçün Pre- və Post- fərqi:**
* **Pre-inkrement (`++i`):** Əvvəlcə dəyəri artırır, sonra **yeni dəyəri** qaytarır.
* **Post-inkrement (`i++`):** Əvvəlcə **köhnə dəyəri** qaytarır, sonra dəyəri artırır.

**Geniş Nümunə:**

#### ▶️ Pre-increment (`++a`)

```js
let a = 10;
let b = ++a;  // Əvvəlcə a = 11 olur, sonra b = 11 təyin olunur
console.log(a); // 11
console.log(b); // 11
```

#### ▶️ Post-increment (`x++`)

```js
let x = 10;
let y = x++;  // Əvvəlcə y = 10 təyin olunur, sonra x = 11 olur
console.log(x); // 11
console.log(y); // 10
```

***

### 4.8.3 Bitlər Üzərində Əməliyyat Operatorları (Bitwise Operators)

Bu, aşağı səviyyəli (low-level) bir mövzudur və əksər veb proqramçılar bunlardan demək olar ki, heç vaxt istifadə etmir. Bu operatorlar rəqəmlərin özləri ilə deyil, onların **ikilik (binary) say sistemindəki bitləri** ilə birbaşa işləyir.

Əməliyyatdan əvvəl JavaScript rəqəmləri 32-bitlik tam ədədə çevirir və əməliyyatı bitlər üzərində apardıqdan sonra nəticəni yenidən standart rəqəm formatına qaytarır.

---

#### Əsas Bitwise Operatorları və Nümunələr

* **`&` (Bitwise AND)**
    Hər iki operandda eyni mövqedəki bit `1` olarsa, nəticədə də həmin bit `1` olur. Əks halda `0` olur.

    ```js
    // 5 & 1
    // İkilik sistemdə:
    // 0101  (5)
    // 0001  (1)
    // ----
    // 0001  (Nəticə: 1)
    console.log(5 & 1); // 1
    ```

* **`|` (Bitwise OR)**
    Operandlardan ən az birində müvafiq mövqedəki bit `1` olarsa, nəticədə də həmin bit `1` olur.

    ```js
    // 5 | 1
    // İkilik sistemdə:
    // 0101  (5)
    // 0001  (1)
    // ----
    // 0101  (Nəticə: 5)
    console.log(5 | 1); // 5
    ```

* **`^` (Bitwise XOR)**
    Yalnız operandlardan birində (hər ikisində eyni anda yox) müvafiq bit `1` olarsa, nəticədə `1` olur. Bitlər eyni olarsa (`0` və `0`, `1` və `1`), nəticə `0` olur.

    ```js
    // 5 ^ 1
    // İkilik sistemdə:
    // 0101  (5)
    // 0001  (1)
    // ----
    // 0100  (Nəticə: 4)
    console.log(5 ^ 1); // 4
    ```

* **`~` (Bitwise NOT)**
    Tək operand qəbul edir və bütün bitləri tərsinə çevirir (`0`-ları `1`, `1`-ləri `0`). 
    Nəticə `-(x + 1)` düsturu ilə hesablanır.

    ```js
    // ~5
    // İkilik sistemdə 5: ...00000101
    // Tərsi:             ...11111010 (bu isə -6 deməkdir)
    console.log(~5); // -6
    ```

* **`<<` (Left Shift)**
    Bitləri müəyyən sayda sola sürüşdürür. Hər bir sürüşdürmə ədədi `2`-yə vurmağa bərabərdir.

    ```js
    // 5 << 1  (5-in bitlərini 1 dəfə sola sürüşdür)
    // 0101 (5) -> 1010 (10)
    console.log(5 << 1); // 10
    ```

* **`>>` (Sign-Propagating Right Shift)**
    Bitləri sağa sürüşdürür. Ədədin işarəsini (`+` və ya `-`) qoruyur. Hər bir sürüşdürmə tam ədədi `2`-yə bölməyə bərabərdir.

    ```js
    // 5 >> 1  (5-in bitlərini 1 dəfə sağa sürüşdür)
    // 0101 (5) -> 0010 (2)
    console.log(5 >> 1); // 2
    ```
---
## 4.9 Nisbət Operatorları (Relational Expressions)
Bu bölmədə, iki dəyər arasında bir əlaqəni (bərabərlik, kiçiklik, mənsubiyyət) yoxlayan və nəticə olaraq `true` və ya `false` qaytaran operatorları araşdıracağıq. Bu ifadələr, proqramın axışını idarə edən `if`, `while` kimi strukturların təməlini təşkil edir.

---
### 4.9.1 Bərabərlik və Bərabərsizlik Operatorları (`==`, `===`, `!=`, `!==`)
JavaScript-də bərabərliyi yoxlamaq üçün iki fərqli operator var. Onların fərqini bilmək, proqramlaşdırmada ən çox edilən səhvlərdən birinin qarşısını alır.

❗️ **Qızıl Qayda:** Peşəkar JavaScript proqramlaşdırmasında **demək olar ki, həmişə `===` (ciddi bərabərlik) və `!==`** operatorlarından istifadə olunur. `==` və `!=` operatorları gözlənilməz nəticələrə və çətin tapılan xətalara səbəb ola bilən mürəkkəb tip çevrilmələri (type coercion) apardığı üçün onların istifadəsi **məsləhət görülmür**.

* **`===` (Ciddi Bərabərlik / Strict Equality):** İki dəyərin həm **tipini**, həm də **dəyərini** müqayisə edir. Heç bir tip çevrilməsi aparmır. Əgər tiplər fərqlidirsə, dərhal `false` qaytarır.
* **`==` (Mücərrəd Bərabərlik / Loose Equality):** Dəyərləri müqayisə etməzdən əvvəl, onların tiplərini eyniləşdirmək üçün arxa planda **tip çevrilmələri** aparır.

Aşağıdakı cədvəl, `==` operatorunun nə qədər çaşdırıcı ola biləcəyini göstərir.

| İfadə (Expression)  | `==` Nəticəsi | `===` Nəticəsi | İzah                                             |
| ------------------- | :-----------: | :------------: | ------------------------------------------------ |
| `5 == "5"`          |  `true`     | ❌ `false`     | `==` stringi rəqəmə çevirir                       |
| `0 == false`        |  `true`     | ❌ `false`     | `==` boolean-ı rəqəmə çevirir (false -> 0)       |
| `null == undefined` |  `true`     | ❌ `false`     | `==` üçün xüsusi bir istisnadır                  |
| `[] == 0`           |  `true`     | ❌ `false`     | Boş massiv primitivə çevrildikdə 0 olur          |
| `"" == 0`           |  `true`     | ❌ `false`     | Boş string rəqəm 0-a çevrilir                     |

---

### **Obyektlərin Müqayisəsi Nümunəsi:**

```js
const obj1 = { name: "Rəşad" };
const obj2 = { name: "Rəşad" };

console.log(obj1 === obj2); // ❌ false
console.log(obj1 == obj2);  // ❌ false
```

**İzah:** `obj1` və `obj2` ayrı-ayrı obyektlərdir, **eyni dəyərlərə malik olsalar belə**, JavaScript onları **eyni deyil** hesab edir, çünki **fərqli yaddaş ünvanlarında yerləşirlər**.

---

### **Eyni İstinadlı Müqayisə (True olan hal):**

```js
const obj3 = { name: "Ayan" };
const obj4 = obj3;

console.log(obj3 === obj4); //  true
```

**İzah:** Burada `obj4` dəyişəni, `obj3` obyektinə istinad edir — yəni **eyni obyektə baxırlar**, buna görə də bərabərdirlər.

---
### 4.9.2 Müqayisə Operatorları (`<`, `>`, `<=`, `>=`)
Bu operatorlar iki dəyərin sıralamasını (ədədi və ya əlifba sırası) yoxlayır.

**Əsas İşləmə Məntiqi:**
* Əgər hər iki operand stringdirsə, müqayisə əlifba sırası ilə (Unicode kodlarına görə) aparılır.
* Əks halda, hər iki operand rəqəmə çevrilir və rəqəmsal müqayisə aparılır.

```js
console.log(10 < 3);        
// false → 10, 3-dən kiçik deyil (rəqəm müqayisəsi)

console.log("10" < "3");    
// true → "1" simvolu "3"-dən əvvəl gəlir (string müqayisəsi)

console.log("2" < 10);      
// true → "2" stringini 2 rəqəminə çevrilir → 2 < 10

console.log("Z" < "a");     
// true → Unicode'a görə "Z" < "a" (böyük hərflər kiçiklərdən əvvəl gəlir)
```

---
### 4.9.3 `in` Operatoru
`in` operatoru, bir obyektin (və ya onun prototip zəncirinin) verilmiş adda bir xüsusiyyətə sahib olub-olmadığını yoxlayır.

**Nümunə:**
```javascript
const user = { name: "Ayan", age: 25 };
const numbers = [10, 20, 30];

// Obyekt üçün
console.log("name" in user);   //  true
console.log("city" in user);   // ❌ false
console.log("toString" in user); 
//  true (çünki Object.prototype-dan miras alır)

// Massiv üçün (indekslər xüsusiyyət adı kimi yoxlanılır)
console.log("1" in numbers);     //  true (indeks 1 var)
console.log(3 in numbers);       // ❌ false (indeks 3 yoxdur)
```
---

### 4.9.4 `instanceof` Operatoru nədir?

`instanceof` operatoru yoxlayır ki, **bir obyekt müəyyən bir `class`-dan (növdən)** yaranıbmı?

### Sintaksis:

```js
obyekt instanceof Constructor
```

Bu ifadə **`true`** qaytarırsa, deməli obyekt həmin `class`-dan yaranıb.

---

### Misallar:

```js
const d = new Date();
const a = [];

console.log(d instanceof Date);    // true → d, Date obyektidir
console.log(d instanceof Object);  // true → bütün obyektlər Object-dən yaranır
console.log(d instanceof Array);    // false → d, array deyil

console.log(a instanceof Array);   // true → a bir masssivdir
console.log(a instanceof Object);  // true → massivlər də obyekt sayılır
```

* `instanceof`, obyektin hansı **class**-a və ya **növə** aid olduğunu yoxlayır.
* Bütün obyektlər əsasda **`Object`**-dən yaranır.
* Massivlər (`Array`) də əslində bir **Object**-dir.

---

## 4.10 Məntiqi İfadələr (Logical Expressions)
Bu bölmədə, adətən müqayisə operatorları ilə birlikdə istifadə edilən `&&` (VƏ), `||` (VƏ YA), və `!` (DEYİL) məntiqi operatorlarını araşdıracağıq. Bu operatorları tam anlamaq üçün, JavaScript-dəki **"doğru" (truthy)** və **"yanlış" (falsy)** anlayışlarını xatırlamaq vacibdir.  

Xatırlatma: `false`, `null`, `undefined`, `0`, `NaN`, və `""` falsy-dir, qalan hər şey isə truthy

---
#### 4.10.1 Məntiqi VƏ (Logical AND `&&`)
`&&` operatoru, sol tərəfdəki ifadəni qiymətləndirir:
* Əgər sol tərəf **falsy**-dirsə, o, heç sağ tərəfə baxmadan, dərhal **sol tərəfin dəyərini** qaytarır.
* Əgər sol tərəf **truthy**-dirsə, o, sağ tərəfdəki ifadəni qiymətləndirir və **sağ tərəfin dəyərini** qaytarır.

Bu davranışa **"qısa qapanma" (short-circuiting)** deyilir.

**Geniş Nümunə: `TypeError`-dan qaçmaq**
Bu, `&&`-nin ən çox istifadə olunduğu yerlərdən biridir: bir obyektin `null` və ya `undefined` olmadığını yoxlayıb, yalnız bundan sonra onun bir xüsusiyyətinə müraciət etmək.
```javascript
// Köhnə üsul (if ilə):
function printUsername(user) {
  if (user) {
    console.log(user.name);
  }
}

// Müasir üsul (`&&` ilə):
function printUsernameModern(user) {
  // Əgər `user` truthy-dirsə, o zaman `user.name`-i icra et.
  user && console.log(user.name); 
}

const user1 = { name: "Ayan" };
const user2 = null;

printUsernameModern(user1); //  "Ayan"
printUsernameModern(user2); 
/* Heç bir xəta baş vermir,`user2` 
falsy olduğu üçün ikinci hissə heç vaxt icra olunmur. */
```
---
#### 4.10.2 Məntiqi VƏ YA (Logical OR `||`)
`||` operatoru da "qısa qapanma" prinsipi ilə işləyir, amma tərsinə:
* Əgər sol tərəf **truthy**-dirsə, o, heç sağ tərəfə baxmadan, dərhal **sol tərəfin dəyərini** qaytarır.
* Əgər sol tərəf **falsy**-dirsə, o, sağ tərəfdəki ifadəni qiymətləndirir və **sağ tərəfin dəyərini** qaytarır.

Bu, adətən bir neçə variant arasından ilk **"doğru"** olanı seçmək və ya standart (default) dəyərlər təyin etmək üçün istifadə olunur.

**Geniş Nümunə: Standart dəyər təyin etmək**
```javascript
function welcome(username) {
  // Əgər `username` ötürülübsə (truthy), onu istifadə et.
  // Əks halda (falsy: undefined, null, ""), "Qonaq" dəyərini götür.
  const nameToDisplay = username || "Qonaq";
  console.log(`Xoş gəldin, ${nameToDisplay}!`);
}

welcome("Ayan"); //  Xoş gəldin, Ayan!
welcome("");     //  Xoş gəldin, Qonaq! (çünki "" falsy-dir)
welcome(null);   //  Xoş gəldin, Qonaq!
```

---
#### 4.10.3 Məntiqi DEYİL (Logical NOT `!`)
`!` unar bir operatordur və operandının boolean dəyərini **tərsinə çevirir**.
* Əgər operand **truthy**-dirsə, `!` `false` qaytarır.
* Əgər operand **falsy**-dirsə, `!` `true` qaytarır.

`&&` və `||`-dan fərqli olaraq, `!` həmişə `true` və ya `false` qaytarır.

**Nümunə: `!!` ilə boolean-a çevirmək**
İkiqat NOT (`!!`) istənilən bir dəyəri onun həqiqi boolean ekvivalentinə çevirmək üçün istifadə olunan bir "trick"-dir.
```javascript
console.log(!true);       //  false
console.log(!false);      //  true
console.log(!!"Salam");   //  true (string truthy-dir)
console.log(!!0);         //  false (0 falsy-dir)
console.log(!!{});        //  true (boş obyekt truthy-dir)
console.log(!!undefined); //  false (undefined falsy-dir)
```

---
## 4.11 Mənimsətmə İfadələri (Assignment Expressions) `=`
JavaScript-də `=` operatoru bir dəyişənə və ya xüsusiyyətə dəyər mənimsətmək üçün istifadə olunur.

**Zəncirvari Mənimsətmə:**
`=` operatoru sağdan-sola assosiativliyə malikdir. Bu, bir neçə dəyişənə eyni anda eyni dəyəri mənimsətməyə imkan verir:
```javascript
let x, y, z;
x = y = z = 10; // Əvvəlcə z=10, sonra y=z, sonra x=y olur.

console.log(x, y, z); //  10 10 10
```
---
#### 4.11.1 Əməliyyatla Birlikdə Mənimsətmə (`+=`, `-=`, `*=`, ...)
Bu operatorlar, bir riyazi əməliyyatı və mənimsətməni birləşdirən qısayollardır.
`a += b;` ifadəsi, `a = a + b;` ifadəsinə demək olar ki, ekvivalentdir.

**Nümunələr:**
```javascript
let total = 100;
const tax = 18;
total += tax; // total = total + tax;
console.log(total); //  118

let message = "Salam";
message += ", Dünya!"; // message = message + ", Dünya!";
console.log(message); //  "Salam, Dünya!"

let score = 10;
score *= 2; // score = score * 2;
console.log(score); //  20
```

---

## 4.12 Qiymətləndirmə İfadələri – `eval()` funksiyası

JavaScript-də `eval()` funksiyası vasitəsilə `string` şəklində olan kodu birbaşa icra etmək mümkündür. Bu çox güclü, amma **çox təhlükəli** bir vasitədir.

---

### ⚠️ Niyə `eval()` təhlükəlidir?

* **Təhlükəsizlik Riski:** İstifadəçidən gələn yazıları `eval()`-a ötürmək **xakerlərin sizin kodunuzu manipulyasiya etməsinə** şərait yarada bilər.
* **Sürət Problemi:** `eval()` olan kodlar JavaScript mühərriki tərəfindən **optimallaşdırılmır**, bu isə kodu **yavaşdırır**.
* **Nəticə:** Müasir proqramlaşdırmada `eval()` istifadə **tövsiyə olunmur**. Əvəzində `JSON.parse()`, `Function` constructor-u kimi alternativlərə baxmaq daha təhlükəsizdir.

---


```js
const indirectEval = eval; // qeyri-direkt çağırış

let city = "Baku";
let country = "Azerbaijan";

function testDirectEval() {
  let city = "Bilasuvar";
  eval("city = city + ' City';"); // Lokal `city` dəyişir
  return city;
}

function testIndirectEval() {
  let country = "Turkey";
  indirectEval("country = country + ' Republic';"); //  Qlobal `country` dəyişir
  return country;
}

console.log("Direct eval nəticəsi:", testDirectEval());  
//  Bilasuvar City
console.log("Qlobal city:", city);                       
//  Baku (dəyişməyib)

console.log("Indirect eval nəticəsi:", testIndirectEval()); 
//  Turkey (dəyişməyib)
console.log("Qlobal country:", country);                   
//  Azerbaijan Republic  dəyişdi

```


* `eval()` əgər birbaşa yazılırsa → **lokal dəyişkənləri dəyişə bilər**
* `eval()` əgər dolayı yolla çağırılırsa → **yalnız qlobal dəyişkənləri dəyişir**

---
## 4.13 Müxtəlif Operatorlar (Miscellaneous Operators)
Bu bölmədə, digər kateqoriyalara tam sığmayan, amma çox faydalı olan bir neçə operatorla tanış olacağıq.

---

###  4.13.1 **Şərt Operatoru `?:` (Ternary Operator)**

Bu, `if/else`-in qısa yazılış formasıdır. Üç hissədən ibarətdir:
**`şərt ? doğrudursa : yalnışdırsa`**

```javascript
const score = 85;
const result = score >= 50 ? "Keçdi " : "Kəsildi ❌";
console.log(result); //  Keçdi
```

---

###  4.13.2 **Nullish Coalescing Operatoru `??`**

Yalnız **`null`** və ya **`undefined`** olduqda sağdakı dəyəri verir.
`||`-dan fərqi odur ki, `0`, `false`, `""` kimi dəyərləri **atlamır**.

```javascript
const settings = {
  brightness: 0,
  theme: ""
};

console.log(settings.brightness || 100); //  0 "falsy" olduğuna görə: 100
console.log(settings.brightness ?? 100); //  0 (null/undefined deyil)

console.log(settings.theme || "dark");   // "" olduğu üçün: "dark"
console.log(settings.theme ?? "dark");   //  "" qorunur, çünki null deyil
```

---

###  4.13.3 **`typeof` Operatoru**

Dəyərin tipini string olaraq qaytarır:

```javascript
console.log(typeof 100);            // "number"
console.log(typeof "JS");           // "string"
console.log(typeof true);           // "boolean"
console.log(typeof [1, 2, 3]);      // "object" ❗️ (array də object-dir)
console.log(typeof { key: "val" }); // "object"
console.log(typeof function() {});  // "function"
console.log(typeof null);           // "object" ❗️ (köhnə JS səhvidir)
console.log(typeof undefined);      // "undefined"
```

---

###  4.13.4 **`delete` Operatoru**

Obyektin xüsusiyyətini və ya massivin elementini silir.

```javascript
const user = { name: "Rəşad", age: 23 };
delete user.age;
console.log(user); //  { name: "Rəşad" }

const fruits = ["alma", "armud", "banan"];
delete fruits[1];
console.log(fruits); //  [ 'alma', <1 empty item>, 'banan' ]
```

---

###  4.13.5 **`await` Operatoru**

Asinxron əməliyyatları gözləmək üçün `async` funksiyalarda istifadə olunur.

```javascript
async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data.title);
}
getData();
```

---

###  4.13.6 **`void` Operatoru**

Dəyəri qiymətləndirir, amma **daima `undefined`** qaytarır.

```javascript
console.log(void 123); //  undefined

// İstifadə sahəsi (məsələn, linkə klik zamanı yönləndirmə etməmək):
<a href="javascript:void(0)">Heç nə etmə</a>
```

---

###  4.13.7 **Vergül Operatoru `,`**

Birdən çox ifadəni bir yerdə yazmağa imkan verir – soldakılar işləyir, **sağdakının nəticəsi qaytarılır**.

```javascript
let x = (1 + 2, 3 + 4);
console.log(x); //  7 (yalnız sonuncunun nəticəsi qaytarılır)

for (let i = 0, j = 5; i < j; i++, j--) {
  console.log(`i = ${i}, j = ${j}`);
}
//  i = 0, j = 5
//  i = 1, j = 4
//  i = 2, j = 3

```
