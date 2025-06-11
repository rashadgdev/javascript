# 📦 Fəsil 6. Obyektlər

JavaScript-də **obyektlər (objects)** ən vacib anlayışlardan biridir. 💡
Əvvəlki fəsillərdə onlarla bir neçə dəfə qarşılaşmışdın. İndi isə onlara daha dərindən baxacağıq. 📚

Bu fəsildə:
✅ Obyektlər nədir?
✅ Necə yaradılır?
✅ Onların xüsusiyyətləri (property) necə işləyir?
✅ Yeni ES6 yazılışları nələrdir?


---

## 🧱 6.1 Obyektlərə Giriş

### 📌 Obyekt nədir?

Obyekt — bir neçə dəyəri **bir yerdə saxlayan** konteynerdir. 🧺
Bu dəyərlər **string, number, boolean və ya hətta başqa obyektlər** ola bilər.

Hər bir object, içində properties (xüsusiyyətlər) saxlayır. Hər property bir ad (key) və dəyərdən (value) ibarətdir.
📝 Məsələn:

```javascript
let car = {
  brand: "Toyota",
  year: 2020
};
```

Burada `brand` və `year` obyektin xüsusiyyətləridir.

---

### 🔑 Properties(Xüsusiyyətlər) necə işləyir?

* Xüsusiyyətin **adı** çox vaxt string-dir (bəzən `Symbol` də ola bilər).
* **Dəyəri** isə istənilən JavaScript tipində ola bilər: string, number, object və s.
* Bir obyekt daxilində **eyni adlı iki xüsusiyyət ola bilməz**. ❌

---

### 🔁 Obyektlərdə Məlumat Paylaşımı

JavaScript-də obyektlər **dəyərlə yox, istinadla (reference)** ötürülür. 📦🔗

```javascript
let x = { name: "Ali" };
let y = x;

y.name = "Vəli";

console.log(x.name); // "Vəli" olacaq!
```

Yəni `x` və `y` **eyni obyektə baxır**. Birində edilən dəyişiklik o birində də görünür. 🔄

---

### ✨ Obyektlər Dinamikdir!

JavaScript-də obyektlərə:
✅ Yeni xüsusiyyət əlavə edə bilərsən
❌ Xüsusiyyəti silə bilərsən
🔄 Onları dəyişdirə bilərsən

---

### 💡 Obyektlərdə ən çox istifadə olunan əməliyyatlar:

* 🔨 Yaratmaq (`let obj = {}`)
* 🧾 Property oxumaq (`obj.name`)
* 🖊️ Property əlavə/dəyişmək (`obj.age = 25`)
* ❌ Property silmək (`delete obj.age`)
* ❓ Mövcudluğunu yoxlamaq (`"name" in obj`)
* 🔄 Bütün property-ləri gəzmək (`for...in` dövrü ilə)

---

### 🧬 Obyektlər və İrsiyyət (Prototypal Inheritance)

JavaScript-də hər obyekt, başqa bir obyektin xüsusiyyətlərini **irsən ala bilər**. JavaScript-də hər object başqa bir object-dən **property və method-lar irsən ala bilər**. 👨‍👩‍👧
Bu irsən alınan object-ə **prototype** deyilir.

Yəni əgər bir method bir object-də yoxdursa, JavaScript avtomatik onun prototype-ına baxır.
Bu sistemə **prototypal inheritance** deyilir.

---

### 🧪 "Own Property" nədir?

Bəzən, obyektin **özündə olan xüsusiyyətləri** ilə **prototipdən gələnlər** arasında fərq qoymaq vacib olur.
🔍 **JavaScript-də "own property"** termini, yalnız obyektin özünə məxsus xüsusiyyətlərə deyilir.

---

### ⚙️ Xüsusiyyətlərin Atributları

Hər xüsusiyyətin 3 əsas atributu var:

1. ✏️ `writable` – Dəyəri dəyişmək mümkündürmü?
2. 🔁 `enumerable` – `for...in` dövründə çıxırmı?
3. 🔧 `configurable` – Silmək və dəyişmək mümkündürmü?

Məsələn, JavaScript-in daxili obyektlərində bəzi xüsusiyyətlər:

* `read-only` ola bilər (yalnız oxuna bilər) 🛑
* `non-enumerable` ola bilər (gizli qalır) 🕵️
* `non-configurable` ola bilər (dəyişilə bilməz) 🔒

Ancaq sən öz yaratdığın obyektlərdə bu atributlar **standart olaraq aktivdir**. ✅

➡️ Bu atributları necə dəyişmək §14.1-də izah olunacaq.

---

Əla! Gəlin bu hissəni əvvəlki nümunəyə uyğun olaraq **beginner-friendly**, emoji-lərlə zəngin və strukturlaşdırılmış formada təqdim edim. Terminlər saxlanacaq, amma yanında Azərbaycan dilində açıqlama veriləcək. Başlayaq! 🚀

---

# 🛠️ 6.2 Obyekt Yaratmaq (Creating Objects)

JavaScript-də **object (obyekt)** yaratmağın bir neçə yolu var:

✅ **Object literal** ilə
✅ `new` açar sözü ilə
✅ `Object.create()` funksiyası ilə

Bu hissədə **ən sadə və ən çox istifadə olunan yol** — **object literal** ilə obyekt yaratmağa baxacağıq. 📦

---

## 🧾 6.2.1 Object Literals (Obyekt Literalı)

### 🧩 Nədir?

**Object literal** — obyekt yaratmağın **ən sadə** və **ən qısa** yoludur.
Birbaşa kodun içində, `{}` mötərizələri içində **ad : dəyər** (key : value) cütlükləri yazılır. 🧱

### 🧪 Sintaksis necədir?

```javascript
let objectName = {
  property1: value1,
  property2: value2,
  ...
};
```

### 🧾 Məsələlər:

```javascript
let empty = {}; // 🔹 Boş obyekt

let point = {
  x: 0,
  y: 0
}; // 🔹 İki ədədi dəyər saxlayan obyekt

let p2 = {
  x: point.x,
  y: point.y + 1
}; // 🔹 Mövcud obyektə əsaslanaraq yeni obyekt yaradır
```

---

### 📚 Mürəkkəb obyekt nümunəsi:

```javascript
let book = {
  "main title": "JavaScript",      // 🔸 Adında boşluq olan property — dırnaq içində yazılıb
  "sub-title": "The Definitive Guide", // 🔸 Həmçinin string kimi yazılıb
  for: "all audiences",            // ⚠️ `for` açar sözüdür, amma burada property adı kimi istifadə olunub
  author: {
    firstname: "David",
    surname: "Flanagan"
  } // 🔸 Daxilində başqa obyekt saxlayan property
};
```

### 💡 Qeydlər:

* **Property adı** JavaScript **identifier** ola bilər (məs: `name`, `x`) və ya **string literal** (`"main title"`, `"sub-title"`).
* **Property dəyəri** isə istənilən **JavaScript ifadəsi** ola bilər — sadə dəyər, dəyişən və ya başqa obyekt.
* Obyektin **son property-sindən sonra vergül** qoymaq **icazəlidir**:

```javascript
let user = {
  name: "Aysel",
  age: 25,
}; // ✅ Bu sintaktik cəhətdən düzgündür
```

Bu üsul, gələcəkdə yeni property əlavə etdikdə **sintaksis səhvini** önləyir. ✅

---

### 🔁 Hər dəfə yeni obyekt

**Object literal** bir **ifadə** (expression) olduğu üçün, **hər çağırıldıqda yeni və fərqli obyekt** yaradır:

```javascript
function createUser(name) {
  return {
    username: name,
    createdAt: Date.now()
  };
}

let u1 = createUser("Ali");
let u2 = createUser("Aytac");

console.log(u1 !== u2); // true – fərqli obyektlərdir
```

Burada `createUser()` funksiyası çağırıldıqca **fərqli obyektlər** yaranır və onların `createdAt` dəyərləri fərqli olur. ⏱️

---

### 🔮 Əlavə Yaradılma Üsulları

Buradakı nümunələr **JavaScript-in ilkin versiyalarından** etibarən dəstəklənir.
Amma **ES6 və sonrası** versiyalarda `object literal` yazmağı daha **güclü** edən **yeni xüsusiyyətlər** də əlavə olunub. Onlara **§6.10** bölməsində baxacağıq. 🧙‍♂️

---

Əla! Bu hissəni də əvvəlki kimi **beginner-friendly**, emoji-lərlə zəngin və aydın strukturda izah edim. Terminlər əsas izah hissəsində ingiliscə qalacaq, lazım gəldikdə mötərizədə Azərbaycan dilində açıqlanacaq. Gəlin başlayaq! 🚀

---

# 🏗️ 6.2.2 `new` ilə Obyekt Yaratmaq

JavaScript-də obyekt yaratmağın başqa bir üsulu **`new` operatorudur**. 🔧

### 🧠 `new` nə edir?

`new` operatoru:

1. ✅ Yeni obyekt yaradır
2. ✅ Onu müəyyən funksiyanın (`constructor`) köməyi ilə **initialize** (başlanğıc dəyərlə doldurur)

Bu funksiyaya **constructor (konstruktor)** deyilir — yəni obyektin ilk dəyərlərini təyin edən funksiya. 🏗️

---

### 📚 Misallar – JavaScript-in daxili constructor-ları:

```javascript
let o = new Object(); // ✅ Boş obyekt yaradır ({} ilə eynidir)

let a = new Array(); // ✅ Boş array yaradır ([] ilə eynidir)

let d = new Date(); // ✅ Hazırkı tarixi göstərən obyekt

let r = new Map(); // ✅ Key/value (açar/dəyər) cütlərini saxlayan Map
```

### 🔧 Nəticə:

`new` operatoru ilə istənilən **built-in (daxili)** konstruktorla obyekt yarada bilərsən.
Amma çox vaxt sən **öz konstruktor funksiyalarını** da yazırsan — bu daha sonra, **9-cu fəsildə** izah olunacaq. 📘

---

# 🧬 6.2.3 Prototiplər (Prototypes)

Obyekt yaratmağın üçüncü üsuluna keçməzdən əvvəl **prototip** anlayışını başa düşməliyik. 🧠

### 🧩 Prototip nədir?

JavaScript-də **demək olar ki, hər obyektin** başqa bir obyektlə əlaqəsi var.

Bu əlaqəli obyektə **prototype** (prototip) deyilir.
O deməkdir ki, obyekt **öz prototipindən bəzi property-ləri "irsən alır"**. 🧬

---

### 🧱 Prototiplər necə işləyir?

| Necə yaradılıb?           | Prototipi nədir?   |
| ------------------------- | ------------------ |
| `{}` və ya `new Object()` | `Object.prototype` |
| `new Array()`             | `Array.prototype`  |
| `new Date()`              | `Date.prototype`   |

🔗 Bütün bu prototiplər isə sonda **`Object.prototype`-ə bağlanır** — buna **prototype chain** (prototip zənciri) deyilir.

---

### 🔍 Qarışdırıcı məqam: `prototype` və `[[Prototype]]`

Bir az çaşdırıcı görünə bilər:

* **Demək olar ki, bütün obyektlərin `[[Prototype]]`-i var** (gizli bağ).
* Amma **yalnız bəzi obyektlərin `prototype` adlı property-si olur** — əsasən konstruktor funksiyalarının.

```javascript
function User() {}
let u = new User();

console.log(Object.getPrototypeOf(u) === User.prototype); // ✅ true
```

Burada `User.prototype` yeni yaranan `u` obyektinin prototipidir.

---

### 🧤 `Object.prototype` haqqında

`Object.prototype` — istisnadır:
✨ Bu **yeganə obyektlərdən biridir ki**, **heç bir prototipi yoxdur**.
Yəni irsən heç nə almır — o, **prototip zəncirinin başlanğıcıdır**. 🔚

---

### 🔗 Prototip Zənciri (Prototype Chain)

Əgər obyektin özündə axtardığın property yoxdursa, JavaScript **prototip zənciri** boyunca axtarmağa davam edir:

```javascript
let d = new Date(); // d → Date.prototype → Object.prototype

// d.toString() → Date.prototype.toString() → tapdı!
```

Beləliklə, obyekt həm `Date.prototype`-dən, həm də `Object.prototype`-dən **xüsusiyyətləri və metodları miras ala bilir**. 🧬

---

### 📘 Davamı Harada?

* §6.3.2-də **property inheritance** daha ətraflı izah olunur.
* 9-cu fəsildə isə:

  * Öz constructor funksiyanı necə yazmalı
  * `prototype` property-nə necə dəyər verməli
  * Yeni "siniflər" necə yaradılır

Əlavə olaraq:
➡️ §14.3-də obyektin prototipinə **baxmaq** və **dəyişmək** üsulları göstərilir. 🔧

---

Əla, gəlin bu hissəni də əvvəlki üslubda – **başlayanlar üçün dost**, **emoji-lərlə zəngin**, və **terminlərin əsas yerdə ingiliscə saxlanıldığı** formatda yazım. 📘✨

---

# 🧱 6.2.4 `Object.create()` ilə Obyekt Yaratmaq

`Object.create()` funksiyası — JavaScript-də obyekt yaratmağın **çevik və güclü** üsullarından biridir. ⚙️

Bu metod vasitəsilə **istədiyin prototipi** olan obyekt yarada bilərsən. 🧬

---

### 🧪 Sintaksis:

```javascript
let o1 = Object.create({ x: 1, y: 2 });
```

Burada `o1` adlı yeni obyekt yaradılır və onun **prototipi** `{ x: 1, y: 2 }` olur.
Yəni `o1.x` və `o1.y`-yə baxanda, JavaScript bu dəyərləri **prototipindən götürür**:

```javascript
o1.x + o1.y; // => 3 ✅
```

---

### 🚫 `null` Prototipi ilə Obyekt

Əgər `Object.create(null)` istifadə etsən, nəticədə **heç bir prototipi olmayan** obyekt yaranır:

```javascript
let o2 = Object.create(null);
```

❌ Bu obyekt:

* `toString()` kimi metodları **irsən almır**
* Hətta `+` operatoru belə onunla **işləməyə bilər**

Bu üsul adətən **tamamilə təmiz obyektlər yaratmaq** üçün istifadə olunur – məsələn, təhlükəsiz `dictionary` obyektləri üçün. 🛡️

---

### 🧼 Adi Boş Obyekt Yaratmaq

Əgər sadəcə `{}` və ya `new Object()` ilə eyni nəticəni almaq istəyirsənsə, belə yaz:

```javascript
let o3 = Object.create(Object.prototype);
```

Bu, **adi boş obyekt** kimidir – `toString()` və digər ümumi metodlara malikdir. ✅

---

### ⚡ Niyə bu güclüdür?

`Object.create()` sənə belə imkan verir:

✅ Özün seçdiyin prototipi olan obyekt yarat
✅ Orijinal obyektə **toxunmadan** irsən property-ləri istifadə et
✅ Gələcəkdə property-lərin **dəyişilməsinin qarşısını al**

---

### 🛡️ Real Dünya Nümunəsi: Təhlükəsiz Nüsxə

Təsəvvür et ki, hansısa kitabxana funksiyasına obyekt ötürürsən, amma onun bu obyektə **təsadüfən dəyişiklik etməsini istəmirsən**.

```javascript
let o = { x: "don't change this value" };
library.function(Object.create(o));
```

Bu zaman:

* 📖 Funksiya `x` property-sini **oxuya bilər**
* ❌ Amma onu dəyişsə də, **əsl obyektə təsir etməz** — dəyişiklik yeni obyektin özündə qalır

---

### 📌 Qeyd:

`Object.create()` funksiyası həmçinin **ikinci əlavə argument** qəbul edə bilir — bu, obyektin property-lərini detallı şəkildə təyin etməyə imkan verir. Bu mövzu **§14.1**-də ətraflı izah olunacaq. 📘🔍

---

### ⏭️ Növbəti Addım

Obyektlərdə property-lərin necə **oxunması və yazılması** mexanizmi növbəti hissədə izah olunacaq — bu konseptlər `Object.create()` ilə yaradılmış obyektlərdə **nəyə görə işlədiyini** başa düşmək üçün vacibdir. 🧠🔎

---

Əlbəttə, terminləri saxlayıb daha zəngin, amma aydın izah verim, eyni vaxtda beginner-friendly olsun. Buyur, 6.3 hissəsinin yenilənmiş Azərbaycan dilində versiyası:

---

# 6.3 Querying və Setting Properties

### 🔍 Xüsusiyyətlərin (properties) dəyərini almaq

Bir obyektin xüsusiyyətinin dəyərini **dot operator (`.`)** və ya **square bracket operator (`[]`)** vasitəsilə əldə edə bilərsən. (Bu operatorlar §4.4-də izah olunub.)

* **Dot operator (`.`)** istifadə edərkən, soldakı ifadə (expression) obyekt olmalıdır, sağdakı isə **property-nin adı olan sadə identifier** (məsələn: `author`, `name`) olmalıdır:

```javascript
let author = book.author; // book obyektinin "author" xüsusiyyətini alırıq
let name = author.surname; // author obyektinin "surname" xüsusiyyətini alırıq
```

* **Square bracket (`[]`)** istifadə edərkən, içəridə olan ifadə (expression) ya **string** olmalıdır, ya da string-ə çevrilə bilən bir dəyər və ya **Symbol** (§6.10.3):

```javascript
let title = book["main title"]; // book obyektinin "main title" xüsusiyyətini alırıq
```

> **Qeyd:** Növbəti fəsildə (§7) square bracket operatorunda rəqəmlərin də çox istifadə olunduğunu görəcəyik.

---

### ✏️ Xüsusiyyət yaratmaq və ya dəyərini dəyişmək (Setting properties)

Yeni xüsusiyyət yaratmaq və ya mövcudunun dəyərini dəyişmək üçün də dot (`.`) və ya square bracket (`[]`) operatorlarından istifadə edirik, amma **onlar assignment əməliyyatının (təyin etmənin) sol tərəfində** olur:

```javascript
book.edition = 7; // book obyektinə "edition" adlı yeni xüsusiyyət əlavə etdik
book["main title"] = "ECMAScript"; // mövcud "main title" xüsusiyyətinin dəyərini dəyişdik
```

---

**Xülasə:**

| Əməliyyat        | Sintaksis (dot operator)  | Sintaksis (square brackets)      |
| ---------------- | ------------------------- | -------------------------------- |
| Xüsusiyyət oxuma | `object.property`         | `object["propertyName"]`         |
| Xüsusiyyət yazma | `object.property = value` | `object["propertyName"] = value` |

---

Növbəti bölmədə **JavaScript-də property-lərin necə axtarıldığı və necə təyin olunduğu** barədə daha dərin izah verəcəyik.

---

Əlbəttə! Terminləri qoruyub, izahı sadə, amma texniki dildə belə yazaq:

---

# 6.3.1 Objects As Associative Arrays (Obyektlər kimi Assosiativ Massivlər)

Əvvəlki bölmədə izah etdiyimiz kimi, aşağıdakı iki JavaScript ifadəsi eyni dəyəri qaytarır:

```javascript
object.property
object["property"]
```

Birinci sintaksis — **dot operator (`.`)** ilə və bir **identifier** ilə istifadə olunur və bu, C və Java kimi dillərdə struct və ya obyektin **statik sahəsinə (field)** daxil olmaq kimi oxşardır.

İkinci sintaksis — **square bracket operator (`[]`)** ilə və içində **string** olan ifadə ilə istifadə olunur. Bu, sanki **string indeksli massivə (array)** daxil olmaq kimidir. Belə massivlər **associative array** (və ya hash, map, dictionary) adlanır.

**JavaScript-də obyektlər assosiativ massivlərdir!** Bu bölmə bunun niyə vacib olduğunu izah edir.

---

### 🤔 Fərq nədir?

* C, C++, Java kimi **strongly typed** dillərdə obyektlərin yalnız öncədən təyin olunmuş və sayca məhdud olan xüsusiyyətləri (properties) ola bilər.
* JavaScript isə **loosely typed** dildir və obyektlərə istənilən sayda property əlavə etmək mümkündür.

---

### 🔸 Dot operator (`.`) ilə property adı **identifier** kimi yazılır, yəni yazılışda **sabitdir (hardcoded)** və proqram zamanı dəyişdirilə bilməz.

---

### 🔹 Square bracket operator (`[]`) ilə property adı **string** kimi verilir, yəni proqram zamanı **dinamik şəkildə yaradılıb dəyişdirilə bilər**.

Məsələn:

```javascript
let addr = "";
for(let i = 0; i < 4; i++) {
  addr += customer[`address${i}`] + "\n";
}
```

Bu kod `customer` obyektinin `address0`, `address1`, `address2`, `address3` xüsusiyyətlərinin dəyərlərini oxuyur və birləşdirir.

---

### ⚙️ Niyə assosiativ massiv?

Tutaq ki, istifadəçi portfelində (portfolio) saxladığı səhmlərin adlarını və sayını saxlayan proqram yazırsan. Bu portfel `portfolio` adlı obyektlə təmsil olunur və hər bir səhmin adı **property adı**, səhmin sayı isə həmin property'sinin dəyəridir.

İstifadəçi səhmin adını proqramın işləmə vaxtında daxil edir (runtime), ona görə də property adları əvvəlcədən məlum deyil və dot operatoru ilə istifadə etmək mümkün deyil.

```javascript
function addstock(portfolio, stockname, shares) {
  portfolio[stockname] = shares;
}
```

Burada, `stockname` dəyişəni runtime zamanı dinamik təyin olunur, ona görə yalnız square bracket operatoru ilə property oxumaq/yazmaq mümkündür.

---

### 🔄 for...in dövrü və assosiativ massivlər

Portfeldəki bütün səhmlərin ümumi dəyərini hesablamaq üçün for...in dövründən istifadə etmək çox faydalıdır:

```javascript
function computeValue(portfolio) {
  let total = 0.0;
  for(let stock in portfolio) { 
    let shares = portfolio[stock];  // səhmlərin sayı
    let price = getQuote(stock);    // səhmin qiyməti
    total += shares * price;         // ümumi dəyərə əlavə et
  }
  return total; // portfelin ümumi dəyəri
}
```

---

### 🚩 ES6 və sonrakı versiyalarda

Sadə obyektlər assosiativ massiv kimi işləyir, amma **ES6**-dan sonra **Map class (§11.1.2)** daha əlverişli və effektiv assosiativ massiv kimi istifadə olunur.

---

Tamam, bu dəfə emojilərlə zənginləşdirilmiş formada, texniki terminlər və şəxsi fikirlərlə birlikdə izah edirəm! 🚀✨

---

# 6.3.2 Inheritance (İrsi Xüsusiyyətlər) 🧬🧩

JavaScript obyektləri həm **özünəməxsus property-lərə (own properties)**, həm də **prototype obyektindən miras aldıqları (inherited) property-lərə** sahib olur. Bunun üçün property-ə daxil olarkən necə davranıldığını yaxşı anlamaq vacibdir.

---

### 🔗 Prototype Zənciri (Prototype Chain)

JavaScript-də hər obyektin bir **prototype**-u var (istisna `Object.prototype`-dir, onun prototipi `null`-dır). Əgər soruşduğun property obyektin özündə yoxdursa, həmin property **prototype** obyektində axtarılır. Əgər orda da yoxdursa, prototipin prototipi yoxlanılır və bu zəncir `null`-a çatana qədər davam edir.

Misal:

```js
let o = {};           // o -> Object.prototype
o.x = 1;              // o-nun own property-si: x = 1

let p = Object.create(o);  // p-nin prototipi o-dur
p.y = 2;              // p-nin own property-si: y = 2

let q = Object.create(p);  // q prototipi p-dir
q.z = 3;              // q-nun own property-si: z = 3

let f = q.toString(); // toString() Object.prototype-dan miras alınıb

q.x + q.y // => 3 (miras alınan x və y)
```

---

### ✍️ Property Dəyərinin Təyin Edilməsi (Setting Properties)

* Əgər obyektin özündə artıq `x` adlı property varsa, dəyər dəyişdirilir.
* Əgər yoxdursa, yeni `x` property yaradılır və bu, həmin obyektin **öz property-si** olur.
* Miras alınan eyni adda property “gizlənir” (shadowing) — yəni obyektin özünə aid olan property prototipdəkinin üzərinə çıxır.

```js
let unitcircle = { r: 1 };   // prototype obyekt

let c = Object.create(unitcircle); // c unitcircle-dən miras alır
c.x = 1;                  // c-nin own property-si x = 1
c.y = 1;                  // c-nin own property-si y = 1
c.r = 2;                  // c-nin own property-si r = 2 (unitcircle.r dəyişmir)

console.log(unitcircle.r); // 1
console.log(c.r);          // 2 (öz property-si, prototipdəki gizlənir)
```

---

### ⚠️ İstisna: Accessor Properties və Setter-lər

Əgər miras alınan property **accessor property**dirsə və ona bağlı **setter** metodu varsa, dəyər təyin edərkən yeni property yaranmır, onun əvəzinə setter funksiyası çağırılır. Setter çağırılan obyekt isə həmişə **öz orijinal obyektdir**, prototip deyil.

---

Əlbəttə, bu mövzunu da emojilərlə, terminlərlə və şəxsi fikirlərlə zənginləşdirilmiş şəkildə izah edirəm! 🚀✨

---

# 6.3.3 Property Access Errors (Property Əldəetmə Xətaları) ⚠️❌

JavaScript-də **property**-lərə daxil olmaq və onları təyin etmək hər zaman problemsiz olmur. Bu bölümdə bu zaman baş verə biləcək **səhvlər və xətalar** izah olunur.

---

### ❓ Property Tapılmadıqda

* Bir obyektin **özünə və ya prototip zəncirinə** aid olmayan bir property soruşmaq **səhv deyil** — nəticə sadəcə `undefined` olur.

  ```js
  book.subtitle // undefined, çünki "subtitle" property-si yoxdur
  ```

* **Amma!** `null` və ya `undefined` dəyərlərin heç bir property-si yoxdur. Ona görə də, bu dəyərlərdən birinin property-sinə daxil olmağa cəhd etsən, **TypeError** alınır.

  ```js
  let len = book.subtitle.length; 
  // TypeError: undefined dəyərinin 'length' property-si yoxdur!
  ```

---

### 🛡️ Null və Undefined-dən Qorunmaq

Property-lərə daxil olarkən **`null`** və **`undefined`** ilə qarşılaşma ehtimalını nəzərə almaq vacibdir, yoxsa `TypeError` ilə üzləşərsən.

İki üsul:

* Verbose (uzun) üsul:

```js
let surname = undefined;
if (book) {
  if (book.author) {
    surname = book.author.surname;
  }
}
```

* Qısa və **idiomatik** üsul (məşhur):

```js
surname = book && book.author && book.author.surname;
```

Burada `&&` operatoru **short-circuiting** edərək, əgər `book` və ya `book.author` `undefined` və ya `null` olarsa, növbəti ifadəyə keçmir və `undefined` qaytarır.

---

### 🚀 ES2020: Optional Chaining `?.`

ES2020 ilə gəlib çıxan ən faydalı sintaksislərdən biri **optional chaining** əməliyyatçısıdır. Bu, çox daha qısa və oxunaqlı kod yazmağa imkan verir:

```js
let surname = book?.author?.surname;
```

Bu kod da eynilə yuxarıdakı `&&`-lə eyni işi görür, amma daha aydın və rahatdır.

---

### ❌ Property Təyin Edərkən Xətalar

* `null` və ya `undefined` dəyərinə property təyin etməyə çalışsan **TypeError** alınır.
* Hər property-ə dəyər təyin etmək mümkün olmaya da bilər:

  * **Read-only (yalnız oxuna bilən) property-lər** dəyişdirilə bilməz.
  * Bəzi obyektlərə **yeni property əlavə etmək** mümkün olmaya bilər (məsələn, `Object.preventExtensions()` istifadə olunubsa).
* **Strict mode**-da (`"use strict";`) bu kimi xətalar ciddi şəkildə **TypeError** kimi atılır.
* Strict mode olmayan rejimdə isə bu cür uğursuzluqlar adətən **sakitcə (silent)** keçir, yəni proqram xətasız işləməyə davam edir amma dəyişiklik baş vermir.

---

### ⚙️ Property Təyinin Uğursuz Olma Şərtləri

Property `p`-ni `o` obyektində təyin etmək **uğursuz** olacaq hallarda:

1. `o`-nun **özündə olan `p` property-si read-only-dursa**.
2. `o`-nun miras aldığı (`inherited`) `p` property-si read-only-dursa və onu `o`-nun özündə təzə `p` ilə gizlətmək (shadowing) olmaz.
3. `o`-nun özündə `p` property-si yoxdur, mirasdan `p` property-si varsa, amma **setter metodu yoxdursa** və `o`-nun **extensible** atributu `false`-dursa (yəni `o`-ya yeni property əlavə etmək qadağandır).

---

Növbəti mövzuda davam edək? 🚀😎

Əlbəttə, struktur pozmadan, emojiləri hissələrə bölüb əlavə edirəm:

---

### 6.4 Deleting Properties 🗑️

`delete` operatoru obyektin **öz property**-lərini silmək üçün istifadə olunur. Burada vacib məqam budur ki, `delete` mülkiyyətin **dəyərinə deyil, mülkiyyətin özünə** təsir edir:

```js
delete book.author;        // book obyektinin author property-si silinir
delete book["main title"]; // "main title" property-si də silinir
```

---

### ️🧩 Delete və inherited properties

`delete` yalnız obyektin **öz property**-lərini silir, **irsi (inherited) property**-ləri silmir. İrsi property-nin silinməsi üçün onu prototip obyektindən silmək lazımdır. Bu, həmin prototipdən miras alan bütün obyektlərə təsir edir.

---

### ✔️ Delete operatorunun nəticəsi

`delete` ifadəsi:

* Əgər silmək mümkün olduqda, **true** qaytarır.
* Əgər silmək istənilən property mövcud deyilsə, yenə də **true** qaytarır.
* Əgər operand property access ifadəsi deyilsə, məsələn, `delete 1`, bu da mənasız olsa da, **true** qaytarır.

Misal:

```js
let o = { x: 1 };
delete o.x;        // true - o.x silindi
delete o.x;        // true - artıq o.x yoxdur, amma true qaytarır
delete o.toString; // true - inherited property, silmir amma true qaytarır
delete 1;          // true - mənasız, amma true qaytarır
```

---

### ❌ Delete və non-configurable properties

`delete` **non-configurable** (silinməz) property-ləri silə bilməz.

* Built-in obyektlərin bəzi property-ləri non-configurable-dir.
* Qlobal dəyişən və funksiyaların yaradıldığı property-lər də adətən belədir.

**Strict mode**-da silməyə cəhd **TypeError** ilə nəticələnir, **non-strict mode**-da isə `delete` **false** qaytarır.

```js
delete Object.prototype;    // false
var x = 1;
delete globalThis.x;        // false
function f() {}
delete globalThis.f;        // false
```

---

### ⚠️ Qlobal obyekt və strict mode fərqi

Non-strict mode-da qlobal obyektin konfiqurasiya edilə bilən property-lərini sadəcə `delete x;` kimi silmək olur. Amma

**Strict mode**-da `delete x;` **SyntaxError** verir, ona görə mütləq

```js
delete globalThis.x;
```

şəkilində yazmaq lazımdır.

---

Əlbəttə, gəlin 6.5 Testing Properties mövzusunu əvvəlki kimi bölümlərə ayırıb, emojilərlə və terminlərlə zəngin izah edək. ✨

---

# 6.5 Testing Properties 🕵️‍♂️🔍

JavaScript obyektləri **xassələr toplusu (set of properties)** kimi düşünülə bilər və çox vaxt **obyektin müəyyən bir xassəyə sahib olub-olmadığını yoxlamaq** lazım olur. Bunun üçün müxtəlif üsullar mövcuddur:

---

### 1️⃣ `in` operatoru

* Sol tərəfdə **property name (xassə adı)**, sağ tərəfdə isə **obyekt** olur.
* Obyektin **öz xassəsi (own property)** və ya **miraslənmiş xassəsi (inherited property)** varsa, `true` qaytarır.

```js
let o = { x: 1 };
"x" in o        // => true  (o obyektinin "x" adlı xassəsi var)
"y" in o        // => false (yoxdur)
"toString" in o // => true  (miraslənmiş xassədir, Object.prototype-dən gəlir)
```

---

### 2️⃣ `hasOwnProperty()` metodu

* Obyektin **yalnız öz xassələrini yoxlayır**.
* Miraslənmiş xassələri **false** hesab edir.

```js
let o = { x: 1 };
o.hasOwnProperty("x")        // => true  (öz xassədir)
o.hasOwnProperty("y")        // => false (yoxdur)
o.hasOwnProperty("toString") // => false (miraslənmiş xassədir)
```

---

### 3️⃣ `propertyIsEnumerable()` metodu

* `hasOwnProperty()`-dən fərqli olaraq, bu metod yoxlayır ki, xassə **öz xassədir və enumerable** atributu **true**-durmu.
* **Enumerable xassələr**: normal JS kodu ilə yaradılan xassələrdir.
* **Non-enumerable xassələr**: məsələn, bəzi daxili (built-in) xassələr, yəni siyahıda göstərilməyənlər.

```js
let o = { x: 1 };
o.propertyIsEnumerable("x")        // => true (öz enumerable xassə)
o.propertyIsEnumerable("toString") // => false (miraslənmiş və enumerable deyil)
```

---

### 4️⃣ Sadə property yoxlama (`!== undefined`)

* `in` operatorundan fərqli olaraq, bu üsul yalnız **undefined-dan fərqli olub-olmadığını yoxlayır**.
* Yəni, əgər property mövcuddursa və undefined deyilsə, `true` verir.
* Lakin property mövcuddursa, amma **dəyəri undefined-dursa**, bu üsul onu mövcud olmayan kimi qəbul edir.

```js
let o = { x: 1 };
o.x !== undefined       // => true (mövcuddur)
o.y !== undefined       // => false (mövcud deyil)
o.toString !== undefined // => true (miraslənmiş xassə)
```

---

### 5️⃣ `in` operatorunun üstünlüyü ⚡️

`in` operatoru property-nin mövcudluğunu **dəyərindən asılı olmayaraq** yoxlaya bilir:

```js
let o = { x: undefined }; // x property'si var, amma dəyəri undefined

o.x !== undefined // => false (dəyişən mövcuddur, amma dəyəri undefined olduğu üçün false)
"x" in o          // => true  (property mövcuddur, dəyərindən asılı olmayaraq)

o.y !== undefined // => false (mövcud deyil)
"y" in o          // => false (mövcud deyil)

delete o.x;        // x property silindi

"x" in o          // => false (artıq mövcud deyil)
```

---

# Qeyd 📝

* **`in` operatoru** dinamik yoxlamalar üçün ən doğru seçimdir.
* `hasOwnProperty()` istifadə etmək inherited xassələri nəzərə almamaq lazım gəldikdə vacibdir.
* Sadə `!== undefined` yoxlama isə qısa kod yazmaq üçün əlverişlidir, amma diqqətli olmaq lazımdır.

---

Əlbəttə! Gəlin 6.6 mövzusunu da əvvəlki kimi, emojilərlə, bölümlərə ayrılmış və aydın şəkildə izah edək. ✨

---

# 6.6 Enumerating Properties 🔄📜

JavaScript-də bəzən tək bir property yox, **obyektin bütün xassələrini siyahı şəklində almaq və ya üzərində dövr etmək** lazım olur. Bunun üçün müxtəlif üsullar var.

---

### 1️⃣ `for/in` dövrü 🔄

* `for/in` dövrü **obyektin bütün enumerable xassələri** (öz və miraslənmiş) üzərində işləyir.
* **Daxili metodlar (built-in methods)** enumerable deyil, ona görə siyahıda çıxmaz.
* Sənin yaratdığın xassələr isə **default olaraq enumerable** olur.

```js
let o = { x: 1, y: 2, z: 3 };
o.propertyIsEnumerable("toString") // => false: toString enumerable deyil

for (let p in o) {
  console.log(p);
}
// Nəticə: x, y, z (toString siyahıda deyil)
```

---

### 2️⃣ `for/in` ilə inherited properties-dən qorunmaq 🛡️

`for/in` həm öz, həm miraslənmiş xassələri göstərir, bəzən miraslənmişləri keçmək lazım olur:

```js
for (let p in o) {
  if (!o.hasOwnProperty(p)) continue;  // Miraslənmiş xassələri ötür
  console.log(p);
}
```

Əlavə olaraq, metodları (funksiyaları) da keçmək istəyirsənsə:

```js
for (let p in o) {
  if (typeof o[p] === "function") continue;  // Metodları ötür
  console.log(p);
}
```

---

### 3️⃣ Alternativ: `Object.keys()` və `for/of` dövrü 🎯

* `for/in` yerinə **obyektin xassələrinin massivini almaq və ondan sonra üzərində `for/of` dövrü ilə keçmək** daha sadədir.
* Bunun üçün bir neçə metod mövcuddur:

| Metod                            | Nə edir?                                                                                    |
| -------------------------------- | ------------------------------------------------------------------------------------------- |
| `Object.keys(obj)`               | Enumerable **öz xassələrin** adlarını massiv şəklində qaytarır.                             |
| `Object.getOwnPropertyNames()`   | Öz xassələrin adlarını (enumerable və non-enumerable) massiv kimi qaytarır (stringlər).     |
| `Object.getOwnPropertySymbols()` | Öz xassələrin adlarını qaytarır, **Symbols** adlar da daxil olmaqla.                        |
| `Reflect.ownKeys()`              | Bütün öz xassələri qaytarır, həm string, həm də Symbol adlarını, enumerable/non-enumerable. |

---

### 4️⃣ Misal: `Object.keys()` və `for/of` istifadəsi

```js
let o = { a: 1, b: 2, c: 3 };
for (let key of Object.keys(o)) {
  console.log(key);
}
// Çıxış: a, b, c
```

---

# 6.6.1 Property Enumeration Order 📋➡️

ES6 standartı **obyektin xassələrinin siyahıya alınma qaydasını** təyin edib. Aşağıdakı metodlar eyni sıralamaya riayət edir:

* `Object.keys()`
* `Object.getOwnPropertyNames()`
* `Object.getOwnPropertySymbols()`
* `Reflect.ownKeys()`
* `JSON.stringify()` və s.

---

### Sıralama qaydası:

1. **String adları olan xassələrdən, rəqəm kimi görünənlər (non-negative integers)** ən kiçikdən ən böyüyə doğru (yəni massiv indeksləri kimi).
2. Daha sonra digər string adlı xassələr (məsələn, mənfi rəqəmlər, float-lar, adi stringlər) əlavə olunma sırasına görə.
3. Sonda isə **Symbol adları olan xassələr**, əlavə olunma sırasına görə göstərilir.

---

### `for/in` dövründə enumeration order

* `for/in` sıralaması ES6-də tam dəqiq göstərilməyib, amma praktikada yuxarıdakı kimi sıralanır.
* `for/in` həmçinin **proto chain** boyunca yuxarı qalxaraq miras xassələri də siyahıya əlavə edir.
* Eyni adda olan xassə artıq siyahıya alınmışsa, o, təkrar siyahıya daxil edilmir, hətta non-enumerable olsa belə.

---

### Qısa nəticə ✨

* Obyektin bütün xassələrini siyahıya almaq və üzərində dövr etmək üçün `Object.keys()`, `Object.getOwnPropertyNames()`, `Object.getOwnPropertySymbols()` və `Reflect.ownKeys()` kimi metodlar çox faydalıdır.
* `for/in` dövrü həm öz, həm miras xassələrini sadalayır, ona görə əlavə yoxlamalar lazım ola bilər.
* Xassələrin sıralanma qaydası ES6 standartına əsasən müəyyən olunub, əsasən rəqəm tipli indekslər əvvəl gəlir.

---

Yaxşı, 6.7 mövzusunu da əvvəllərki kimi, emojilərlə bölüb, aydın və sadə izah edim! 🚀

---

# 6.7 Extending Objects 🧩✨

JavaScript proqramlarında çox vaxt bir obyektin xassələrini başqa obyektə **kopyalamaq** lazım olur. Bu, sadə kodla belə edilir:

```js
let target = { x: 1 }, source = { y: 2, z: 3 };
for (let key of Object.keys(source)) {
  target[key] = source[key];
}
console.log(target); // => {x: 1, y: 2, z: 3}
```

---

### 1️⃣ `Object.assign()` — Standart extend funksiyası ⚙️

ES6 ilə JavaScript-ə daxil olan `Object.assign()` funksiyası **obyektlərin xassələrini kopyalamaq** üçün geniş istifadə olunur.

* İlk arqument — **target obyekt**, dəyişdirilir və qaytarılır.
* Sonrakı arqumentlər — **source obyektlər**, dəyişdirilmir.
* Hər source obyektin **enumerable, öz xassələri** (həmçinin Symbol-lər) target obyektə kopyalanır.
* Source obyektlər argument sırasına görə işlənir, yəni sonrakı source-lar əvvəlkilərin üstündə yaza bilir.

---

### 2️⃣ Getter və Setter-lərlə əlaqə 🔄

`Object.assign()` xassələri adi getter/setter kimi oxuyur və yazır, amma getter/setter funksiyaları **kopyalanmır**, sadəcə çağrılır.

---

### 3️⃣ Defaults və override məsələsi 🎯

Əgər `defaults` adında default xassələr saxlayan obyekt varsa və sən onları `o` obyektinə əlavə etmək istəyirsənsə, `Object.assign(o, defaults)` bunu **üstələyər** (overwrite).

Düzgün yol:

```js
o = Object.assign({}, defaults, o);
```

Bu yolla əvvəl defaults kopyalanır, sonra `o`-nun xassələri onları üstələyir.

---

### 4️⃣ Spread operator ilə oxşar əməliyyat ✨

ES6 spread operatoru (`...`) ilə də eyni əməliyyatı belə edə bilərsən:

```js
o = { ...defaults, ...o };
```

---

### 5️⃣ Özümüzün `merge()` funksiyamız — yalnız olmayanları əlavə etmək ✅

`Object.assign()` mövcud xassələri üstələyir, amma bəzən biz yalnız **mövcud olmayan** xassələri əlavə etmək istəyirik.

Belə bir funksiya yaza bilərik:

```js
function merge(target, ...sources) {
  for (let source of sources) {
    for (let key of Object.keys(source)) {
      if (!(key in target)) {  // Yalnız target-da yoxdursa əlavə et
        target[key] = source[key];
      }
    }
  }
  return target;
}
```

Misal:

```js
Object.assign({ x: 1 }, { x: 2, y: 2 }, { y: 3, z: 4 });
// => { x: 2, y: 3, z: 4 }

merge({ x: 1 }, { x: 2, y: 2 }, { y: 3, z: 4 });
// => { x: 1, y: 2, z: 4 }
```

---

### 6️⃣ Digər faydalı utilitilər 🛠️

* `restrict()` — bir obyektin xassələrini başqa obyektin xassələrinə görə məhdudlaşdırar (mövcud deyilsə silər).
* `subtract()` — bir obyektin bütün xassələrini digərindən silər.

Belə funksiyaları da eyni qaydada yaza bilərsən.

---

### Qısa yekun 📝

* Objektdən obyektə xassə kopyalamaq üçün `Object.assign()` çox rahatdır.
* Spread operatoru ilə də oxşar əməliyyat edə bilərik.
* Xassələri yalnız mövcud olmayanlara əlavə etmək üçün öz `merge()` funksiyanı yazmaq mümkündür.
* Bu cür funksiyalar geniş istifadə olunur və kodun təkrarını azaldır.

---


Əla, gəlin 6.8 və 6.9 mövzularını da əvvəlki kimi, hissələrə bölüb, sadə, aydın, emojilərlə zəngin şəkildə izah edək! 🚀

---

# 6.8 Serializing Objects 📦➡️📝

### Serializasiya nədir? 🤔

**Serializasiya** — obyektin vəziyyətini **string** (mətn) formasına çevirməkdir ki, sonra onu yenidən bərpa etmək mümkün olsun.

JavaScript-də bunu etmək üçün əsas iki funksiya var:

* `JSON.stringify()` — obyektin JSON stringinə çevrilməsi.
* `JSON.parse()` — JSON stringini yenidən obyektə çevirmək.

---

### JSON nədir? 📜

**JSON (JavaScript Object Notation)** — JavaScript obyekt və array literalına çox oxşar, amma daha sadə sintaksisə malik bir məlumat mübadiləsi formatıdır.

Misal:

```js
let o = { x: 1, y: { z: [false, null, ""] } };
let s = JSON.stringify(o);
// s == '{"x":1,"y":{"z":[false,null,""]}}'

let p = JSON.parse(s);
// p == { x: 1, y: { z: [false, null, ""] } }
```

---

### JSON-in dəstəklədiyi dəyərlər ✔️❌

* **Dəstəklənir:** obyektlər, array-lər, stringlər, ədədlər (finite), `true`, `false`, `null`.
* **Dəstəklənmir:** `NaN`, `Infinity`, `-Infinity` → `null` kimi serializə olunur.
* **Xüsusi hallar:** `Date` obyektləri ISO formatlı string kimi serializə olunur, amma `JSON.parse()` onları tarix obyektinə çevirmir.
* **Tam dəstəklənməyənlər:** funksiyalar, `RegExp`, `Error`, `undefined` serializasiya olunmur, bu xassələr sadəcə stringdə çıxarılır.

---

### İkinci arqument — fərdiləşdirmə 🎛️

`JSON.stringify()` və `JSON.parse()`-də optional ikinci arqument olur:

* Bu arqumentlə serializasiya və ya parse prosesini **fərdiləşdirmək** olur.
* Məsələn, hansı xassələrin daxil olacağını seçmək və ya bəzi dəyərləri dəyişdirmək mümkündür.

---

# 6.9 Object Methods 🔧

### JavaScript obyektlərinin universal metodları 🌍

Bütün JavaScript obyektləri (prototip ilə yaradılanlar) `Object.prototype`-dən metodlar miras alırlar. Bu metodlar geniş istifadə olunur və hər obyekt üçün əlçatandır.

---

### Məsələn:

* `hasOwnProperty()` — obyektin öz xassəsi olub-olmadığını yoxlayır.
* `propertyIsEnumerable()` — xassənin enumerasiya edilə biləcəyini yoxlayır.

---

### Static metodlar (statik funksiyalar) 📚

`Object` konstruktorda da çoxlu faydalı metodlar mövcuddur:

* `Object.create()`
* `Object.keys()`

---

### Gələcəkdə daha çox öyrənəcəyik! 🚀

Sonrakı bölümlərdə bu metodların nümunələri və spesifik obyektlərdə necə yenidən təyin ediləcəyi izah olunacaq.

9-cu fəsildə isə bu metodları **siniflər (class-lar)** üçün ümumi şəkildə necə təyin etmək öyrəniləcək.

---

Əlbəttə, gəlin 6.9.1 və 6.9.2 hissələrini də eynilə aydın və strukturlaşdırılmış şəkildə, emojilərlə bölərək izah edək! 🚀

---

# 6.9.1 The toString() Method 🧾➡️🖋️

### toString() nədir? 🤔

* `toString()` metodu **heç bir arqument qəbul etmir** və onu çağırdığın obyektin bir **string təmsilçiliyini** qaytarır.
* JavaScript bu metodu obyektləri stringə çevirmək lazım olanda avtomatik çağırır.

### Məsələn, belə hallar:

* String + obyekt (`"Value: " + obj`)
* String gözləyən funksiya/parametrə obyekt göndərəndə.

---

### Default toString() necədir? 😐

* Default versiyası çox məlumat vermir.
* Məsələn:

```js
let s = { x: 1, y: 1 }.toString();
// s == "[object Object]"
```

---

### Öz toString() metodunu yaratmaq 🌟

Çox vaxt daha faydalı format üçün `toString()`-u yenidən yazırlar.

Misal: nöqtəni `(x, y)` kimi göstərmək üçün

```js
let point = {
  x: 1,
  y: 2,
  toString: function() {
    return `(${this.x}, ${this.y})`;
  }
};

String(point); // => "(1, 2)"
```

---

# 6.9.2 The toLocaleString() Method 🌍🖋️

### toLocaleString() nədir? 🤔

* `toLocaleString()` obyekti **lokallaşdırılmış stringə** çevirir.
* Default `toLocaleString()` sadəcə `toString()` metodunu çağırır, yəni lokalizasiyanı özü etmir.

---

### Fərqli klasslarda xüsusi versiyalar:

* `Date` və `Number` kimi siniflər öz lokal versiyalarını təyin edir — məsələn, tarix və ədədləri yerli qaydalara uyğun formatlayır.
* `Array` isə elementlərin hər birinin `toLocaleString()` metodunu çağırır (baxmayaraq ki, `toString()`-dan fərqli işləyir).

---

### Öz nümunən:

```js
let point = {
  x: 1000,
  y: 2000,
  toString: function() {
    return `(${this.x}, ${this.y})`;
  },
  toLocaleString: function() {
    return `(${this.x.toLocaleString()}, ${this.y.toLocaleString()})`;
  }
};

point.toString();        // => "(1000, 2000)"
point.toLocaleString();  // => "(1,000, 2,000)"  — minlik ayrıcılarla
```

---

### Əlavə:

* **Internationalization (Beynəlxalqlaşma)** API-ləri (§11.7) `toLocaleString()` yaratmaq üçün faydalıdır — məsələn, tarix, zaman və nömrələri müxtəlif dillərə və regionlara uyğun formatlamaq üçün.

---

Əla! Gəlin indi 6.9.3 və 6.9.4 hissələrini də aydın və sadə dildə, addım-addım izah edək. 👇✨

---

# 6.9.3 The valueOf() Method 🔢

### valueOf() nədir? 🤔

* `valueOf()` metodu obyekt **stringdən başqa primitiv tipə** (adətən **rəqəmə**) çevrilmək lazım olanda çağırılır.
* JavaScript bu metodu avtomatik olaraq, obyekt primitiv dəyərə çevrilməli olan kontekstdə istifadə edir.

---

### Default davranış:

* Əsas (default) `valueOf()` çox fərqli bir şey etmir.
* Amma bəzi daxili siniflər (məsələn, `Date`) öz `valueOf()` metodlarını təyin edib.

---

### `Date` sinifində:

* `valueOf()` tarixi **rəqəmə çevirir** (Unix timestamp kimi).
* Bu da tarixlərin `<`, `>` kimi müqayisə olunmasına imkan verir.

---

### Öz `valueOf()` nümunəsi — məsafəni hesablayan nöqtə:

```js
let point = {
  x: 3,
  y: 4,
  valueOf: function() {
    return Math.hypot(this.x, this.y); // (3,4) nöqtəsinin 0,0 nöqtəsindən məsafəsi: 5
  }
};

point > 4       // true  (5 > 4)
point > 5       // false (5 > 5 deyil)
point < 6       // true  (5 < 6)
Number(point)   // 5, çünki valueOf() çağırılır
```

---

# 6.9.4 The toJSON() Method 🗃️➡️📝

### toJSON() nədir? 🤔

* `Object.prototype`-də standart `toJSON()` yoxdur.
* Amma `JSON.stringify()` metodu obyekt serializasiya olunanda obyektin `toJSON()` metodunu axtarır.
* Əgər obyekt `toJSON()`-a malikdirsə, `JSON.stringify()` onun qaytardığı nəticəni serializasiya edir, obyektin özünü yox.

---

### `Date` sinfi nümunəsi:

* `Date` öz `toJSON()` metodunu təyin edib.
* Bu metod `Date`-i ISO formatlı stringə çevirir.

---

### Öz `toJSON()` nümunəsi — `point` obyekti:

```js
let point = {
  x: 1,
  y: 2,
  toString: function() {
    return `(${this.x}, ${this.y})`;
  },
  toJSON: function() {
    return this.toString();
  }
};

JSON.stringify([point]); // => '["(1, 2)"]'
```

**Nəticə:** `JSON.stringify()` `point`-in `toJSON()` metodunu çağırır və nəticə kimi `"(1, 2)"` stringini serializasiya edir.

---

Gəlin indi 6.10 Extended Object Literal Syntax mövzusunu başa düşülən və sadə dildə izah edək. 🚀✨

---

# 6.10 Extended Object Literal Syntax — Genişlənmiş obyekt literal sintaksisi

ES6 və daha sonra çıxan JavaScript versiyalarında obyekt literal yazma üsulu bir neçə faydalı şəkildə genişləndirildi.

---

## 6.10.1 Shorthand Properties — Qısa yazılış xüsusiyyəti ⚡

Əgər dəyişənlərin (məsələn, `x` və `y`) dəyərlərini həmin adlarla obyektin özəlliklərinə vermək istəyirsinizsə, əvvəl belə yazırdıq:

```js
let x = 1, y = 2;
let o = {
  x: x,
  y: y
};
```

ES6 ilə artıq daha qısa yazmaq olur:

```js
let x = 1, y = 2;
let o = { x, y };
```

Bu tamamilə eyni iş görür, amma daha qısa və oxunaqlıdır.
`o.x + o.y` // => 3

---

## 6.10.2 Computed Property Names — Hesablanmış (dinamik) property adları 🧮

Bəzən property adı əvvəlcədən yazılmış sabit deyil, dəyişkəndə saxlanır və ya funksiya nəticəsidir.

Ənənəvi üsulla belə edirdik:

```js
const PROPERTY_NAME = "p1";
function computePropertyName() { return "p" + 2; }

let o = {};
o[PROPERTY_NAME] = 1;
o[computePropertyName()] = 2;
```

ES6 ilə bunun üçün sintaksisi obyekt literalının içində birbaşa istifadə etmək olur:

```js
const PROPERTY_NAME = "p1";
function computePropertyName() { return "p" + 2; }

let p = {
  [PROPERTY_NAME]: 1,
  [computePropertyName()]: 2
};

p.p1 + p.p2 // => 3
```

Kvadrat mötərizələr `[ ... ]` içində olan istənilən JavaScript ifadəsi icra olunur və nəticə property adı kimi götürülür.

---

## 6.10.3 Symbols as Property Names — Symbol-lardan property adı kimi istifadə 🛡️

ES6 ilə property adları **string** və ya **Symbol** ola bilər. Symbol-lar xüsusi, unikal və şəffaf olmayan (opaque) dəyərlərdir.

```js
const extension = Symbol("my extension symbol");
let o = {
  [extension]: { /* genişlənmə məlumatları burada saxlanır */ }
};

o[extension].x = 0;  // Digər property-lərlə toqquşma olmaz
```

* Symbol-lar obyektlərə unikal və təkrarlanmayan property adları əlavə etməyə imkan verir.
* `Symbol()` funskiyası ilə yeni symbol yaradırsınız, string argumenti yalnız debugging məqsədi üçündür.
* Bu yanaşma üçüncü tərəfin kodundan aldığınız obyektə özəl və qarşılıqlı toqquşmayan əlavə məlumatlar yerləşdirmək üçün faydalıdır.
* Lakin, Symbol-lar təhlükəsizlik üçün deyil, yalnız toqquşmaların qarşısını almaq üçün nəzərdə tutulub.

---

### Nəticə:

* **Shorthand Properties:** Qısa yazılış üçün.
* **Computed Property Names:** Dinamik property adları üçün.
* **Symbols:** Təkrarlanmayan və təhlükəsiz (collision-free) property adları üçün.

Bu genişlənmiş sintaksis obyektlərin yaradılmasını daha güclü və rahat edir.

---

Əlbəttə! Gəlin 6.10.4-dən 6.10.6-ya qədər **Extended Object Literal Syntax** bölmələrini daha sadə, aydın və səliqəli şəkildə yenidən yazım. 🚀

---

# 6.10.4 Spread Operator — Objekte Xüsusiyyətlərin Yayılması (Kopyalanması) 📤

ES2018-dən başlayaraq, mövcud bir obyektin bütün özəlliklərini başqa obyektin içində asanlıqla kopyalamaq üçün **spread operator** `...` istifadə olunur:

```js
let position = { x: 0, y: 0 };
let dimensions = { width: 100, height: 75 };
let rect = { ...position, ...dimensions };

console.log(rect.x + rect.y + rect.width + rect.height); // => 175
```

* Burada `rect` obyektinin içərisinə `position` və `dimensions` obyektlərinin bütün **özünə məxsus** (own) property-ləri yayılır.
* **Miras alınan** (inherited) property-lər isə yayılmır.

Məsələn:

```js
let o = Object.create({ x: 1 }); // x miras alınan property-dir
let p = { ...o };
console.log(p.x); // => undefined, çünki x özünə məxsus property deyil
```

**Qeyd:**

* Əgər iki obyektin eyni adlı property-ləri varsa, **sonuncu dəyər üstünlük qazanır**:

```js
let o = { x: 1 };
let p = { x: 0, ...o };
console.log(p.x); // => 1 (o obyektindən gələn dəyər üstün oldu)

let q = { ...o, x: 2 };
console.log(q.x); // => 2 (sonuncu dəyər üstün oldu)
```

* Spread operatorunun performansı obyektin property sayına görə **O(n)** mürəkkəbliyindədir. Yəni çox böyük obyektlərin spread edilməsi performansa təsir edə bilər.

---

# 6.10.5 Shorthand Methods — Qısa Yazılışla Metod Yaratmaq 🏎️

ES5-də obyekt metodları belə yazılırdı:

```js
let square = {
  side: 10,
  area: function() {
    return this.side * this.side;
  }
};

console.log(square.area()); // => 100
```

ES6 ilə metod yazılışı daha qısa və aydın oldu:

```js
let square = {
  side: 10,
  area() {
    return this.side * this.side;
  }
};

console.log(square.area()); // => 100
```

* `function` sözü və iki nöqtə (`:`) artıq yazmağa ehtiyac yoxdur.
* Bu yazılış metod olduğunu daha aydın göstərir.

Metod adları adi identifikator, string, computed property və hətta `Symbol` ola bilər:

```js
const METHOD_NAME = "m";
const symbol = Symbol();

let weirdMethods = {
  "method With Spaces"(x) { return x + 1; },
  [METHOD_NAME](x) { return x + 2; },
  [symbol](x) { return x + 3; }
};

console.log(weirdMethods ); // => 2
console.log(weirdMethods.m(1));                     // => 3
console.log(weirdMethods );                // => 4
```

* `Symbol` metodları da adi metodlar kimi çağırıla bilər.
* Məsələn, `Symbol.iterator` metodu iterasiya üçün istifadə olunur.

---

# 6.10.6 Property Getters and Setters — Xüsusiyyətlərin Oxuyucuları və Yazıcıları 📝

* İndiyə qədər danışdığımız property-lər **data property** idi: sadəcə ad və dəyər saxlayan.
* JavaScript həmçinin **accessor property**-ləri dəstəkləyir — bunlar dəyər saxlamaq əvəzinə, **getter** və **setter** metodlarına malikdir.

**Getter:** property oxunduqda çağırılır və dəyəri qaytarır.
**Setter:** property-yə dəyər təyin ediləndə çağırılır və dəyəri dəyişdirir.

---

### Sintaksis:

```js
let o = {
  dataProp: 123,  // adi data property

  get accessorProp() {
    return this.dataProp;
  },

  set accessorProp(value) {
    this.dataProp = value;
  }
};
```

---

### Nümunə: 2D nöqtə (point) obyektində həm kartesian, həm də polar koordinatlar

```js
let p = {
  x: 1.0,
  y: 1.0,

  // Radius (r) — oxuya və yaza bilən accessor property
  get r() {
    return Math.hypot(this.x, this.y);
  },

  set r(newValue) {
    let oldValue = Math.hypot(this.x, this.y);
    let ratio = newValue / oldValue;
    this.x *= ratio;
    this.y *= ratio;
  },

  // Bucaq (theta) — yalnız oxuna bilən (yalnız getter) property
  get theta() {
    return Math.atan2(this.y, this.x);
  }
};

console.log(p.r);     // => təxminən 1.414 (√2)
console.log(p.theta); // => təxminən 0.785 (π/4)
```

`this` burada `p` obyektini göstərir (`p.x` və `p.y`).

---

### Mirasa da gedir (Inheritance):

```js
let q = Object.create(p); // p prototipi kimi
q.x = 3;
q.y = 4;

console.log(q.r);     // => 5 (mirasa gedən getter işləyir)
console.log(q.theta); // => Math.atan2(4, 3)
```

---

### Başqa maraqlı nümunə: Sıralı nömrə generatoru

```js
const serialnum = {
  _n: 0,  // daxili data property

  get next() {
    return this._n++;
  },

  set next(n) {
    if (n > this._n) this._n = n;
    else throw new Error("serial number can only be set to a larger value");
  }
};

serialnum.next = 10;
console.log(serialnum.next); // => 10
console.log(serialnum.next); // => 11
```

---

### Və “sehrli” oxuyucular — təsadüfi ədədlər verən property-lər

```js
const random = {
  get octet() {
    return Math.floor(Math.random() * 256);
  },
  get uint16() {
    return Math.floor(Math.random() * 65536);
  },
  get int16() {
    return Math.floor(Math.random() * 65536) - 32768;
  }
};

console.log(random.octet);  // hər dəfə 0–255 arasında təsadüfi ədəd
console.log(random.uint16); // hər dəfə 0–65535 arasında təsadüfi ədəd
console.log(random.int16);  // hər dəfə -32768–32767 arasında təsadüfi ədəd
```

---

İstəsən, əlavə nümunələr və ya izahlar da verə bilərəm! 😎
