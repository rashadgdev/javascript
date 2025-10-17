# 14. Metaprogramlaşdırma (Metaprogramming)

Bu fəsil, gündəlik proqramlaşdırmada çox tez-tez istifadə olunmAysel, lakin təkrar istifadə edilə bilən kitabxanalar yazan proqramçılar üçün çox dəyərli olan bir sıra qabaqcıl JavaScript xüsusiyyətlərini əhatə edir. Bu mövzular, həmçinin JavaScript obyektlərinin dərinliklərinə baş vurmaq istəyən hər kəs üçün maraqlı olacaq.

Burada təsvir edilən xüsusiyyətlərin bir çoxunu ümumi olaraq **"metaprogramlaşdırma"** adlandırmaq olar. Əgər adi proqramlaşdırma, datanı idarə etmək üçün kod yazmaqdırsa, metaprogramlaşdırma, **başqa bir kodu idarə etmək üçün kod yazmaqdır**.

Bu fəsildə əhatə olunacaq metaprogramlaşdırma mövzuları bunlardır:
* **§14.1**: Obyekt xüsusiyyətlərinin sadalana bilməsini (enumerability), silinə bilməsini (deleteability) və konfiqurasiya edilməsini (configurability) idarə etmək.
* **§14.2**: Obyektlərin genişləndirilməsini (extensibility) idarə etmək və "möhürlənmiş" (sealed) və "dondurulmuş" (frozen) obyektlər yaratmaq.
* **§14.3**: Obyektlərin prototiplərini sorğulamaq və təyin etmək.
* **§14.4**: `Reflect` metodları ilə obyektləri yoxlamaq.
* **§14.5**: `Proxy` ilə obyekt davranışını idarə etmək.

---
## 14.1 Obyekt Xüsusiyyətlərinin Atributları
JavaScript-də bir obyektin xüsusiyyətləri təkcə ad və dəyərdən ibarət deyil. Hər bir xüsusiyyətin, onun davranışını idarə edən 3 əsas **atributu** var:

* **`writable` (yazıla bilən)**: `true` olarsa, xüsusiyyətin dəyərini dəyişmək olar.
* **`enumerable` (sadalana bilən)**: `true` olarsa, xüsusiyyət `for...in` dövründə və `Object.keys()` metodunda görünür.
* **`configurable` (konfiqurasiya edilə bilən)**: `true` olarsa, xüsusiyyəti silmək və onun digər atributlarını (məsələn, `writable` və `enumerable`-ı) dəyişmək olar.

----

#### Xüsusiyyət Təsvirçisi (Property Descriptor)
Bu atributları idarə etmək üçün **"property descriptor"** adlanan bir obyektdən istifadə olunur. Bu obyektin iki növü var:
1.  **Data Descriptor:** `value`, `writable`, `enumerable`, `configurable` xüsusiyyətlərinə malikdir.
2.  **Accessor Descriptor:** `get`, `set`, `enumerable`, `configurable` xüsusiyyətlərinə malikdir.

----

#### `Object.getOwnPropertyDescriptor()` — Atributları Oxumaq
Bir xüsusiyyətin atributlarını oxumaq üçün istifadə olunur.
```javascript
const user = { name: "Ali" };
const descriptor = Object.getOwnPropertyDescriptor(user, 'name');

console.log(descriptor);
// {
//   value: "Ali",
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

const random = {
  get octet() {
    return Math.floor(Math.random() * 256);
  },
};

console.log(Object.getOwnPropertyDescriptor(random, 'octet'));
// { get: f, set: undefined, enumerable: true, configurable: true }
```
❗️ Bu metod yalnız obyektin **öz** xüsusiyyətlərini yoxlayır, prototipdən gələnləri yox.

---

#### `Object.defineProperty()` — Atributları Təyin Etmək
Bir xüsusiyyəti sıfırdan, xüsusi atributlarla yaratmaq və ya mövcud bir xüsusiyyətin atributlarını dəyişmək üçün istifadə olunur.

```javascript
const obj = {};

// Yeni bir 'id' xüsusiyyəti yaradırıq, amma onu enumerable etmirik.
Object.defineProperty(obj, 'id', {
  value: 101,
  writable: true,
  enumerable: false, // for...in və Object.keys()-də görünməyəcək
  configurable: true
});

console.log("obj.id:", obj.id); // 101
console.log("Object.keys(obj):", Object.keys(obj)); 
// [] (çünki enumerable deyil)

// İndi 'id'-ni yalnız-oxunaqlı (read-only) edirik
Object.defineProperty(obj, 'id', { writable: false });

obj.id = 202; // Dəyişməyə cəhd edirik
console.log("Yeni obj.id:", obj.id); 
// 101 (dəyişmədi, strict mode-da xəta verər)

// Hələ də `configurable: true` olduğu üçün, onu yenidən dəyişə bilərik
Object.defineProperty(obj, 'id', { value: 303 });
console.log("Yenidən dəyişdirilmiş obj.id:", obj.id); // 303
```

Bir xüsusiyyəti `configurable: false` etsəniz, onu bir daha silə bilməzsiniz və əksər atributlarını dəyişə bilməzsiniz. Bu, xüsusiyyəti "dondurmaq" kimidir.

----

#### `Object.defineProperties()` — Birdən Çox Xüsusiyyəti Təyin Etmək
Eyni anda bir neçə xüsusiyyəti atributları ilə birlikdə təyin etməyə imkan verir.
```javascript
const point = {};

Object.defineProperties(point, {
  x: { value: 10, writable: true, enumerable: true },
  y: { value: 20, writable: true, enumerable: true },
  r: {
    get() { return Math.sqrt(this.x * this.x + this.y * this.y); },
    enumerable: true
  }
});

console.log(point.r); // 22.36...
```
---
#### `Object.assign()`
Bu metod obyektləri kopyalayarkən yalnız xüsusiyyətlərin **dəyərlərini** kopyalayır, onların atributlarını (məsələn, `get`/`set` metodlarını) yox.

```javascript
const counter = {
  c: 0,
  get count() {
    return this.c++;
  }, // Hər çağırıldıqda `c`-ni artırır
};

console.log(counter.count); // 0
console.log(counter.count); // 1

// `assign` ilə kopyalamağa çalışaq
const copiedCounter = Object.assign({}, counter);

// `count` xüsusiyyətinin `get` metodu deyil, 
// onun o anki dəyəri (2) kopyalandı
console.log(copiedCounter.count); // 2
console.log(copiedCounter.count); 
// 2 (artmır, çünki artıq sadə bir data xüsusiyyətidir)
```

**Həll Yolu:** Atributları da kopyalAysel öz funksiyası.
```javascript
function assignDescriptors(target, ...sources) {
  for (const source of sources) {
    // Obyektin öz xüsusiyyətlərinin adlarını götürürük
    for (const name of Object.getOwnPropertyNames(source)) {
      // Hər xüsusiyyətin descriptor-unu alırıq
      const descriptor = Object.getOwnPropertyDescriptor(source, name);
      // Və həmin descriptor ilə hədəf obyektdə yeni xüsusiyyət yaradırıq
      Object.defineProperty(target, name, descriptor);
    }
  }
  return target;
}

const correctlyCopied = assignDescriptors({}, counter);

console.log(correctlyCopied.count); 
// 3 (kopyalanarkən bir dəfə də işlədi)
console.log(correctlyCopied.count); 
// 4 (artır, çünki getter metodu kopyalandı!)
```
Bu, metaprogramlaşdırmanın gücünü göstərən əla bir nümunədir: dilin standart davranışını öz ehtiyaclarımıza uyğun genişləndirmək.

---

## 14.2 Obyektin Genişləndirilməsi (Object Extensibility)
Bir obyektin **genişləndirilə bilən (extensible)** atributu, ona yeni xüsusiyyətlər əlavə edilib-edilməyəcəyini müəyyən edir. Standart olaraq, bütün obyektlər genişləndirilə biləndir. Amma biz bunu dəyişə bilərik.

Bu, obyektləri arzuolunmaz dəyişikliklərdən qorumaq və onların strukturunu "kilidləmək" üçün faydalıdır.

----
#### `Object.preventExtensions()` — Yeni Xüsusiyyətləri Qadağan Etmək
Bu funksiya, obyekti genişləndirilə bilməyən (non-extensible) edir. Bundan sonra obyektə yeni xüsusiyyət əlavə etmək cəhdi uğursuz olacaq (`strict mode`-da `TypeError` verəcək).

```javascript
const user = { name: "Aysel" };

console.log("Genişləndirilə biləndir?", Object.isExtensible(user)); // true
user.age = 25; // Yeni xüsusiyyət əlavə edirik
console.log("Yaş əlavə olundu:", user); // { name: 'Aysel', age: 25 }

console.log("--- Genişlənmənin qarşısı alınır... ---");
Object.preventExtensions(user);

console.log("İndi genişləndirilə biləndir?", Object.isExtensible(user)); 
// false

user.city = "Bakı"; // Yeni xüsusiyyət əlavə etməyə cəhd edirik
console.log("Şəhər əlavə olundu?", user); 
// { name: 'Aysel', age: 25 } (əlavə olunmadı)
```
---

#### `Object.seal()`

Bu metod daha sərtdir. O, obyekti həm **genişləndirilə bilməyən** edir, həm də onun bütün mövcud xüsusiyyətlərini **qeyri-konfiqurasiyalı (`configurable: false`)** edir.
Yeni xüsusiyyət əlavə etmək və ya mövcud olanı silmək olmaz. Amma mövcud xüsusiyyətlərin dəyərini (əgər `writable: true` isə) dəyişmək olar.`

```javascript
const car = { brand: "Mercedes", year: 2022 };
Object.seal(car);

console.log("Möhürlənib?", Object.isSealed(car)); // true

// Yeni xüsusiyyət əlavə etmək cəhdi (uğursuz)
car.color = "black";
// Mövcud xüsusiyyəti silmək cəhdi (uğursuz)
delete car.year;
// Mövcud xüsusiyyətin dəyərini dəyişmək cəhdi (uğurlu!)
car.brand = "BMW";

console.log(car); // { brand: "BMW", year: 2022 }
```
----

#### `Object.freeze()` — Dondurmaq
Bu, ən sərt kilidləmə metodudur. Obyekti həm **möhürləyir (seals)**, həm də bütün data xüsusiyyətlərini **yalnız-oxunaqlı (`writable: false`)** edir.
Obyektə nəyisə əlavə etmək, silmək və ya dəyişmək mümkün deyil.

```javascript
const settings = { theme: "dark", version: "1.0.0" };
Object.freeze(settings);

console.log("Dondurulub?", Object.isFrozen(settings)); // true

// Dəyəri dəyişməyə cəhd edirik
settings.theme = "light";

console.log(settings); 
// { theme: "dark", version: "1.0.0" } (dəyişmədi)
```
❗️ Bu üç metodun hamısı yalnız obyektin özünə təsir edir, onun prototipinə yox.

---
## 14.3 Prototip Atributu
Bir obyektin **prototip atributu**, onun hansı obyektdən xüsusiyyətləri miras aldığını müəyyən edir. Bu, JavaScript-in irsiyyət (inheritance) mexanizminin təməlidir.

#### Prototipi Əldə Etmək

* **`Object.getPrototypeOf(obj)`**: Bir obyektin prototipini qaytaran müasir üsuldur.
* **`p.isPrototypeOf(o)`**: `p` obyektinin `o` obyektinin prototip zəncirində olub-olmadığını yoxlayır (`true`/`false`).

```javascript
// Boş obyektin prototipi Object.prototype-dır
console.log(Object.getPrototypeOf({})); // [Object: null prototype] {} ...

// Massivin prototipi Array.prototype-dır
console.log(Object.getPrototypeOf([])); // Array.prototype

// Bir prototip yaradırıq
const parent = {
  speak() { console.log("Hello from parent!"); }
};
// Həmin prototiplə yeni bir obyekt yaradırıq
const child = Object.create(parent);

console.log(parent.isPrototypeOf(child)); // true
console.log(Object.prototype.isPrototypeOf(parent)); // true
```
----

### Prototipi Dəyişmək (Setting the Prototype)

Bəzən artıq yaradılmış bir obyektin **`[[Prototype]]`** zəncirini (yəni hansı obyektdən irs aldığını) dəyişmək istəyə bilərik.
Bunun üçün JavaScript bizə **`Object.setPrototypeOf(obj, proto)`** metodunu təqdim edir.

```javascript
const animal = {
  speak() {
    console.log("Animal sound");
  }
};

const dog = {};
Object.setPrototypeOf(dog, animal);

dog.speak(); // Animal sound
```

Yuxarıdakı nümunədə `dog` əvvəlcə boş obyekt idi. Biz `Object.setPrototypeOf()` ilə onun prototipini `animal` obyektinə bağladıq. Artıq `dog` obyekti `animal`-ın metodlarını istifadə edə bilir.

---

### Performans xəbərdarlığı

Bu metod **funksional baxımdan işləyir**, amma **performans baxımından çox təhlükəlidir.**
JavaScript mühərrikləri (məsələn, Chrome-da V8 və ya Firefox-da SpiderMonkey) kodu optimallaşdırmaq üçün obyektlərin prototiplərinin **dəyişməz** olduğunu fərz edirlər.

Amma `Object.setPrototypeOf()` çağıranda bu fərziyyə pozulur.
Nəticədə mühərrik həmin obyektlə bağlı **bütün optimizasiyaları ləğv edir** və kod **daha yavaş** işləməyə başlayır.

> “Prototipi dəyişmək, JavaScript mühərrikini çaşdırmaq kimidir – hər dəfə düşünür ki, bu obyektin davranışı dəyişdi, ona görə hər şeyi sıfırdan hesablamaq məcburiyyətində qalır.”

---

### Daha yaxşı alternativ

Əgər məqsədin müəyyən prototipə malik obyekt yaratmaqdırsa, bunu **yaradılarkən** et.
Bu, həm **sürətli**, həm də **tövsiyə edilən** üsuldur:

```javascript
const animal = {
  speak() {
    console.log("Animal sound");
  }
};

const dog = Object.create(animal);
dog.speak(); // Animal sound
```

Burada `dog` birbaşa `animal`-dan yaradılıb — `setPrototypeOf()` istifadə etməyə ehtiyac yoxdur.

---

## 14.4 `Reflect` API

`Reflect` bir sinif deyil, `Math` obyekti kimi, içində bir neçə statik metod saxlayan bir obyektdir. Bu metodlar ES6-da təqdim edilib və JavaScript-in daxili, fundamental əməliyyatlarını proqramatik olaraq çağırmaq üçün bir "API" təqdim edir.

**Bəs `Reflect` nəyə lazımdır?**

Təsəvvür et ki, JavaScript-də `delete obj.prop`, `prop in obj` kimi operatorlar və `Object.defineProperty()` kimi metodlar var. `Reflect` bütün bu fərqli sintaksisləri vahid, funksional bir "adlar fəzasında" (namespace) birləşdirir.

Onun iki əsas üstünlüyü var:
1.  **Daha Yaxşı Cavab:** `Object.defineProperty()` kimi bəzi metodlar xəta baş verdikdə `TypeError` atır. `Reflect`-in müvafiq metodları isə xəta baş verdikdə sadəcə `false`, uğurlu olduqda isə `true` qaytarır. Bu, `try/catch` olmadan sadə bir `if` ilə yoxlama aparmağı asanlaşdırır.
2.  **`Proxy` ilə Uyğunluq:** `Reflect` API-ındakı metodların siyahısı, növbəti bölmədə öyrənəcəyimiz `Proxy` obyektinin "tələlərinin" (traps) siyahısı ilə eynidir. Bu, `Proxy` yaradarkən standart davranışı çağırmağı çox asanlaşdırır.

----

#### `Reflect` Metodları və Nümunələr

Aşağıda ən çox istifadə olunan `Reflect` metodları və onların sadə nümunələri verilmişdir.

**Xüsusiyyətlərlə İşləmək (`get`, `set`, `has`)**
Bu metodlar, obyektin xüsusiyyətlərini oxumaq, yazmaq və yoxlamaq üçündür.
```javascript
const user = {
  name: "Aysel",
  _age: 25,
  get age() { return this._age; }
};

// Reflect.get() -> obj.prop kimidir
console.log("Ad:", Reflect.get(user, 'name')); // "Aysel"

// Reflect.set() -> obj.prop = value kimidir. Uğurlu olarsa true qaytarır.
Reflect.set(user, 'name', 'Rashad');
console.log("Yeni ad:", user.name); // "Rashad"

// Reflect.has() -> 'prop' in obj kimidir
console.log("`age` xüsusiyyəti varmı?:", Reflect.has(user, 'age')); // true
console.log("`city` xüsusiyyəti varmı?:", Reflect.has(user, 'city')); // false
```

**Xüsusiyyətləri Təyin Etmək və Silmək (`defineProperty`, `deleteProperty`)**
Bunlar, `Object.defineProperty()` və `delete` operatorunun funksional alternativləridir.
```javascript
const car = {};

// `Object.defineProperty` xəta atdığı halda, 
// `Reflect.defineProperty` sadəcə `false` qaytarır
const success = Reflect.defineProperty(car, 'model', {
  value: 'Mercedes',
  writable: false,
  enumerable: true
});

console.log("Əməliyyat uğurludurmu?:", success); // true
console.log("Model:", car.model); // "Mercedes"

// `delete` operatoru kimi işləyir
Reflect.deleteProperty(car, 'model');
console.log("Model silindi?", !Reflect.has(car, 'model')); // true
```

**Funksiya və Konstruktorları Çağırmaq (`apply`, `construct`)**

```javascript
function greet(prefix, suffix) {
  console.log(`${prefix} ${this.name} ${suffix}`);
}

const person = { name: "Leyla" };

// greet funksiyasını `person` obyekti `this` olaraq çağırır
Reflect.apply(greet, person, ["Salam,", "!"]); // Salam, Leyla !

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log(`${name} (${age} yaş) adlı istifadəçi yaradıldı.`);
  }
}

// `new User("Tural", 30)` ilə eynidir
const newUser = Reflect.construct(User, ["Tural", 30]);
```

**`Object` vs `Reflect`**
Əsas fərq, xəta baş verdikdə metodların davranışıdır:
* **`Object.defineProperty()`**: Uğursuz olarsa `TypeError` **atır (throws)**. Uğurlu olarsa, obyekti qaytarır.
* **`Reflect.defineProperty()`**: Uğursuz olarsa `false` **qaytarır**. Uğurlu olarsa, `true` qaytarır.

---

## 14.5 Proksi (Proxy) Obyektləri

JavaScript-də `Proxy` xüsusi bir obyekt növüdür ki, o, başqa bir obyektin üzərində “nəzarətçi təbəqə” kimi davranır.
Sadə desək, `Proxy` vasitəsilə bir obyektə edilən əməliyyatları “görmək”, “dəyişdirmək” və ya “bloklamaq” mümkündür.

---

#### Ümumi Sintaksis

```javascript
const proxy = new Proxy(target, handlers);
```

* **`target`** – Proksinin “əhatə etdiyi” orijinal obyekt.
* **`handlers`** – Xüsusi metodlardan ibarət bir obyekt. Bu metodlara *tələ (trap)* deyilir.
  Hər bir tələ müəyyən əməliyyatı (məsələn, property oxuma, yazma, silmə və s.) ələ keçirir.

---

#### İşləmə Mexanizmi

`Proxy` bir növ “keçid nöqtəsidir” — yəni hər dəfə `proxy.name` və ya `proxy.age = 25` kimi əməliyyat aparanda:

1. JavaScript əvvəlcə `handlers` obyektinə baxır.
2. Əgər uyğun tələ (`get`, `set`, `deleteProperty`, və s.) varsa — o çağırılır.
3. Əgər tələ yoxdur — əməliyyat birbaşa `target` obyektinə yönləndirilir.

Beləliklə, `Proxy` sanki “filtr” və ya “keçid qapısı” kimi işləyir.

---

### Şəffaf Proksi (Transparent Proxy)

Əgər `handlers` boşdursa, `Proxy` sadəcə “keçid” kimi davranır — yəni hər şeyi birbaşa `target` obyektinə ötürür.

```javascript
const target = { id: 10, name: "Məhsul" };
const handlers = {}; // Boş handler-lar

const proxy = new Proxy(target, handlers);

console.log(proxy.name); // "Məhsul"
proxy.price = 99.9;
console.log(target.price); // 99.9
```

Burada `proxy` ilə `target` arasında heç bir fərq yoxdur. Bütün əməliyyatlar şəffaf şəkildə ötürülür.

---

### Ləğv Edilə Bilən Proksi (Revocable Proxy)

Bəzən bir obyektə müvəqqəti giriş icazəsi vermək lazımdır — məsələn, gizli məlumatlara yalnız qısa müddətlik baxmaq istənilir.
Belə hallarda `Proxy.revocable()` metodu istifadə olunur.

Bu metod `{ proxy, revoke }` adlı iki property-si olan obyekt qaytarır:

* **`proxy`** – yaradılmış proksi obyekt
* **`revoke()`** – bu funksiyanı çağırdıqda proksi “ləğv olunur” və daha işləməz olur

```javascript
const sensitiveData = { secret: "12345" };
const { proxy, revoke } = Proxy.revocable(sensitiveData, {});

console.log(proxy.secret); // "12345" — hələlik işləyir

// İndi isə giriş bağlanır
revoke();
console.log("Proksi ləğv edildi!");

try {
  console.log(proxy.secret); // Xəta verəcək
} catch (e) {
  console.error("Xəta:", e.message);
  // Cannot perform 'get' on a proxy that has been revoked
}
```

Bu üsul xüsusilə məlumat təhlükəsizliyi üçün çox faydalıdır — məsələn, müvəqqəti sessiya və ya sınaq məqsədli obyektlərdə.

---
