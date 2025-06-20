#  Fəsil 6. Obyektlər

JavaScript-də **obyektlər (objects)** ən vacib anlayışlardan biridir. 💡 Obyektlər JavaScript-in ürəyidir, çünki onlar real dünya məlumatlarını və onların funksionallığını təsvir etmək üçün əsas quruluş daşıyıcısıdır.

##  6.1 Obyektlərə Giriş

###  Obyekt nədir?

Obyekt — bir neçə dəyəri **bir yerdə, açar-dəyər (key-value) cütləri şəklində saxlayan** konteynerdir. Bu dəyərlər **string, number, boolean və ya hətta başqa obyektlər və ya funksiyalar** ola bilər.

Hər bir obyekt içində **xüsusiyyətlər (properties)** saxlayır. Hər bir xüsusiyyət öz növbəsində bir ad (**key**) və ona uyğun bir dəyərdən (**value**) ibarətdir.

Məsələn, bir avtomobili təsvir edən obyekt belə görünə bilər:

```javascript
let car = {
  brand: "Toyota",
  year: 2020,
  color: "qara",
  isElectric: false
};
```

Burada `brand`, `year`, `color` və `isElectric` obyektin xüsusiyyətləridir.


```javascript
let person = {
  firstName: "Əli",
  lastName: "Əliyev",
  age: 30,
  isStudent: false,
  address: { // address xüsusiyyəti özü bir obyektdir
    street: "Neftçilər Prospekti",
    city: "Bakı",
    zipCode: "AZ1000"
  },
  hobbies: ["kitab oxumaq", "idman", "proqramlaşdırma"] // hobbies xüsusiyyəti bir massivdir
};
```

Gördüyünüz kimi, `address` xüsusiyyəti özü bir obyektdir, `hobbies` isə bir massivdir.Obyekt daxilində primitiv dəyərlərdən əlavə, primitiv olmayan dəyərlər də ola bilər.

---


### Xüsusiyyətlər (Properties) necə işləyir?

Təsəvvür edin ki, hər obyekt real həyatdakı bir varlıqdır. Məsələn, bir `kitab` obyekti. Bu kitabı təsvir edən hər bir məlumat onun **xüsusiyyətidir**. Hər xüsusiyyət iki hissədən ibarətdir: **adı (key)** və **dəyəri(value)**.

---

#### Əsas Qaydalar

* Xüsusiyyətin **adı (key)** çox vaxt **string** tipində olur. Bəzən nadir hallarda, xüsusi məqsədlər üçün `Symbol` (Simvol) tipindən də istifadə oluna bilər.
* Xüsusiyyətin **dəyəri (value)** isə istənilən JavaScript tipində (string, number, boolean, null, undefined, funksiya, başqa obyekt və s.) ola bilər.
* Bir obyekt daxilində **eyni adlı iki xüsusiyyət ola bilməz**. Əgər eyni adlı bir xüsusiyyəti təkrar yaratsan, sonuncu dəyər əvvəlki dəyərin üzərinə yazılır (overwrite).

---

####  Praktik Nümunə: Açar Adlarının Yazılışı

Gəlin bir `avtomobil` obyekti yaradaq və açarların fərqli yazılış stillərinə baxaq.

**Qızıl Qayda:** Əgər açarın adı sadədirsə (hərf və rəqəmlərdən ibarətdir, amma rəqəmlə başlamır, boşluq və ya `-` kimi simvolları yoxdur), onu dırnaqsız yaza bilərsiniz. Bu, daha səliqəli görünür. Lakin ad mürəkkəbdirsə, dırnaq işarəsi (`"` və ya `'`) **mütləqdir**.

```javascript
// Gəlin bir avtomobil obyekti yaradaq
let car = {
  //  Sadə adlar - dırnaqsız yazmaq tamamilə normaldır
  brand: "Mercedes",
  model: "S-Class",
  year: 2023,
  isNew: true,

  //  Mürəkkəb adlar - dırnaq işarəsi MÜTLƏQDİR!
  "engine-type": "V8 Biturbo",   // defis (-) olduğu üçün
  "color option": "Obsidian Black" // boşluq olduğu üçün
};

// İndi isə məlumatları əldə edək:

// Sadə adlara nöqtə ilə müraciət edirik
console.log("Avtomobilin markası:", car.brand); // Nəticə: Mercedes

// Mürəkkəb adlara isə kvadrat mötərizə və dırnaqla müraciət edirik
console.log("Mühərrikin növü:", car["engine-type"]); // Nəticə: V8 Biturbo
console.log("Rəng seçimi:", car["color option"]);    // Nəticə: Obsidian Black

// Mürəkkəb ada nöqtə ilə müraciət etmək səhvə səbəb olacaq!
console.log(car.engine-type); // Bu kod error verəcək!
```



####  Dəyərin Üzərinə Yazılması (Overwrite)

Tutaq ki, bir istifadəçinin statusunu qeyd edirik, amma sonra statusu dəyişir.

```javascript
let user = {
  username: "ayan_qarayeva",
  status: "Online", // İlk dəyər
  loginCount: 42,
  
  // Tutaq ki, haradasa səhvən statusu yenidən yazdıq
  status: "Away" // Son dəyər
};

// Gəlin görək, "status" açarının son dəyəri nədir?
console.log(user.status); // Nəticə: "Away"

// JavaScript kodu yuxarıdan aşağı oxuduğu üçün "status" açarına
// təyin edilən ən son dəyəri yadda saxlayır və əvvəlkini unudur.
```

---

###  Obyektlərdə Məlumat Paylaşımı: Dəyər yoxsa İstinad?

JavaScript-də obyektlər **dəyərlə (by value) yox, istinadla (by reference)** ötürülür. Bu, proqramlaşdırmada çox vacib bir anlayışdır və əksər tələbələrin ilk başda çətinlik çəkdiyi mövzulardan biridir. Gəlin fərqə baxaq:

---

**1. Primitiv Tiplər (string, number, boolean, null, undefined, symbol, bigint) — Dəyərlə Ötürülür:**
Primitiv bir dəyəri başqa bir dəyişkənə mənimsətdikdə, orijinal dəyərin bir **kopyası** yeni dəyişənə verilir. Hər hansı birinin dəyişdirilməsi digərinə təsir etmir.

Primitiv tipləri bir vərəq kağıza yazılmış tək bir məlumat kimi düşünün.

1.  Sizin `a` adlı vərəqiniz var və üzərində **"10"** yazılıb.
2.  Dostunuz `b` gəlir və sizdən bu məlumatı istəyir. Siz orijinal vərəqi vermirsiniz. Bunun yerinə, yeni bir boş vərəq götürüb, üzərinə **"10"** yazıb ona verirsiniz. Yəni dəyərin bir **kopyasını** yaradırsınız.
3.  İndi hərənizin əlində üzərində "10" yazılan öz vərəqi var. Onlar bir-birindən tamamilə müstəqildir.
4.  Dostunuz `b` öz vərəqindəki "10"-u pozub yerinə **"20"** yazır. Bu, sizin `a` vərəqinizə heç bir şəkildə təsir etmir.

Sizin kod nümunəniz bu prinsipi mükəmməl şəkildə nümayiş etdirir:

```javascript
let a = 10; // 'a' vərəqində "10" yazılıb.
let b = a;  // 'b' üçün yeni bir vərəq yaradılır və ora da "10" köçürülür.

console.log("Başlanğıcda a:", a); // 10
console.log("Başlanğıcda b:", b); // 10

// İndi 'b' öz vərəqini dəyişir.
b = 20; 

console.log("--- Dəyişiklikdən sonra ---");
console.log("'a' təsirlənmədi:", a); // Hələ də 10 olaraq qalır!
console.log("'b' dəyişdi:", b);      // Artıq 20-dir.
```

Yuxarıdakı misalda gördüyün kimi, `a` primitiv bir dəyər (ədəd) olduğu üçün, `b = a` əməliyyatı `a`-nın dəyərinin bir kopyasını `b`-yə verir. `b`-ni dəyişəndə `a` təsirlənmir.

***

**2. Obyektlər (Objects) — İstinadla Ötürülür:**
Obyektləri kopyaladığımızda, dəyərin özü deyil, obyektin yaddaşdakı yeri (**istinad**) kopyalanır. Bu o deməkdir ki, iki dəyişən eyni obyektə işarə edir. Bir dəyişən vasitəsilə obyektdə edilən hər hansı bir dəyişiklik, digər dəyişən vasitəsilə də görünür.

```javascript
let x = { name: "Rashad" }; // 'x' dəyişəni { name: "Rashad" } obyektinə işarə edir
let y = x;              // 'y' dəyişəni də 'x' ilə eyni obyektə işarə etməyə başlayır (istinad kopyalandı)

console.log(x.name); // "Rashad"
console.log(y.name); // "Rashad"

y.name = "Vəli"; // 'y' vasitəsilə obyektin 'name' xüsusiyyətini dəyişirik

console.log(x.name); // Nəticə: "Vəli" olacaq! Çünki 'x' də 'y' də eyni obyektə baxır.
console.log(y.name); // Nəticə: "Vəli"
```
Yəni `x` və `y` **eyni obyektə baxır**. Birində edilən dəyişiklik o birində də görünür.

---

###  Obyektlər Dinamikdir!

JavaScript-də obyektlər çox dinamikdir. Bu o deməkdir ki, onlar yaradıldıqdan sonra belə, strukturları asanlıqla dəyişdirilə bilər:

* **Yeni xüsusiyyət əlavə edə bilərsən:** Mövcud obyektdə olmayan yeni xüsusiyyətlər təyin edə bilərsən.
* **Xüsusiyyəti silə bilərsən:** `delete` operatorundan istifadə edərək obyektdən istənilən xüsusiyyəti qaldıra bilərsən.
* **Mövcud xüsusiyyətləri dəyişdirə bilərsən:** Bir xüsusiyyətin dəyərini istənilən vaxt yeniləyə bilərsən.

```javascript
let user = {
  name: "Ayan",
  email: "ayan@ay.com"
};
console.log(user); // { name: "Ayan", email: "ayan@ay.com" }

user.age = 22; // Yeni xüsusiyyət əlavə etdik
console.log(user); // { name: "Ayan", email: "ayan@ay.com", age: 22 }

user.email = "ayan.garayev@ay.com"; // Email xüsusiyyətinin dəyərini dəyişdik
console.log(user); // { name: "Ayan", email: "ayan.garayev@ay.com", age: 22 }

delete user.age; // age xüsusiyyətini sildik
console.log(user); // { name: "Ayan", email: "ayan.garayev@ay.com" }
```

---

### 💡 Obyektlərdə ən çox istifadə olunan əməliyyatlar:

* 🔨 **Yaratmaq:** Boş bir obyekt (`let obj = {}`) və ya xüsusiyyətləri ilə birgə (`let person = { name: "Rashad" }`) yarada bilərsən.

* 🧾 **Xüsusiyyət oxumaq (Accessing Properties):** Obyektin xüsusiyyətlərinə iki əsas yolla daxil olmaq olar:
    * **Nöqtə notasiyası (Dot Notation):** `obj.name` - Bu, xüsusiyyət adının bilindiyi və keçərli bir identifikator olduğu hallarda ən çox istifadə olunan yoldur.
    * **Kvadrat mötərizə notasiyası (Bracket Notation):** `obj['name']` - Bu notasiya, xüsusiyyət adı bir dəyişkəndə saxlandığı, yaxud adında boşluq, defis və ya rəqəmlə başlayan kimi xüsusi simvollar olduğu hallarda istifadə olunur.
        ```javascript
        let myKey = "age";
        let person = { name: "Zaur", age: 28, "full-name": "Zaur Əliyev" };

        console.log(person.age);        // 28 (Dot Notation)
        console.log(person[myKey]);     // 28 (Bracket Notation with a variable key)
        console.log(person["full-name"]); // "Zaur Əliyev" (Bracket Notation for special characters)
        ```
* 🖊️ **Xüsusiyyət əlavə etmək/dəyişmək:** `obj.age = 25` və ya `obj['age'] = 25`
* ❌ **Xüsusiyyət silmək:** `delete obj.age`
* ❓ **Xüsusiyyətin mövcudluğunu yoxlamaq:** `"name" in obj` (boolean dəyər qaytarır: `true` və ya `false`).
* 🔄 **Bütün xüsusiyyətləri gəzmək (Iterating):** Ən çox `for...in` dövrü ilə (`for (let key in obj) { ... }`) istifadə olunur.

---

## 🧬 Obyektlər və İrsiyyət (Prototypal Inheritance)  

JavaScript-də hər obyekt, başqa bir obyektin xüsusiyyətlərini və methodlarını **irsən ala bilər**. Bu mexanizmə **prototypal inheritance** deyilir. Bu, obyektlərin bir-biri ilə əlaqə quraraq ortaq funksionallıqları paylaşmasına imkan verir.

Bu irsən alınan obyektə **prototype** (prototip) deyilir. Yəni, əgər sən bir obyektin xüsusiyyətinə və ya metoduna daxil olmaq istəyirsənsə, JavaScript əvvəlcə həmin obyektin özündə bu xüsusiyyəti axtarır. Əgər tapmasa, avtomatik olaraq onun **prototype-ına** baxır. Bu axtarış zəncir boyu davam edir, ta ki xüsusiyyət tapılana və ya zəncirin sonuna çatana qədər.

Demək olar ki, hər bir JavaScript obyekti bir prototype-a malikdir. Bu zəncirin ən yuxarı hissəsində isə **`Object.prototype`** dayanır. Məsələn, `toString()` (obyekti stringə çevirir) və ya `hasOwnProperty()` (obyektin özündə bir xüsusiyyətin olub-olmadığını yoxlayır) kimi bir çox obyekt methodları məhz `Object.prototype`-dan irsən gəlir

---

### 🔗 Bu necə işləyir?

Təsəvvür et:

* Sənin bir **ata** obyektin var.
* Sən də onun **övladı**san.
* Əgər sənin özündə bir xüsusiyyət yoxdursa, JavaScript gedib **atanın üstünə baxır**.
* Əgər atanızda da yoxdursa, onun atasına, və s. bu cür **zəncir** gedir.
* Bu zəncirə **prototype chain** deyilir.

---


## 💻 Frontend Developer və Intern (Prototypal Inheritance)

Təsəvvür et bir şirkətdə:

* 👨‍💻 **FrontendDeveloper** – əsas veb funksiyaları bilir: məsələn, səhifə düzəltmək.
* 🧑‍💻 **Intern** – bu developer-dən **miras alır**, amma özünün də bacarığı var: məsələn, düymə dizayn etmək.

```javascript
const FrontendDeveloper = {
  sehifeYarat: function () {
    console.log("Mən responsiv veb səhifə yaradıram! 📱💻");
  }
};

// Intern frontend developerdən irs alır
const Intern = Object.create(FrontendDeveloper);

// Özünəməxsus bacarığı
Intern.unitTestYaz = function () {
  console.log("Mən unit test yaziram!");
};

// Öz bacarığını işlədir
Intern.unitTestYaz();     // Mən unit test yaziram!

// İrsən aldığı bacarığı işlədir
Intern.sehifeYarat();       // Mən responsiv veb səhifə yaradıram! 📱💻
```

---

### 🧠 İzah :

* "`Object.create()` bir obyektin başqa bir obyektlə əlaqəsini qurur. Bu əlaqə vasitəsilə biri digərindən metod və xüsusiyyət \*\*götürə bilər.\`"
* "`Prototype zənciri` JavaScript-in əsas **irsiyyət modelidir**. Sinif (class) anlayışından fərqli olaraq \*\*obyektlərdən obyektlərə keçid var.\`"

---

### 🧪 "Own Property" nədir?

Bəzən, obyektin **özündə olan xüsusiyyətləri** ilə **prototipindən irsən gələn xüsusiyyətlər** arasında fərq qoymaq vacib olur.

🔍 **JavaScript-də "own property"** termini, yalnız obyektin birbaşa özünə məxsus (yəni, prototipdən irsən alınmamış) xüsusiyyətlərə deyilir. `hasOwnProperty()` metodu bu fərqi yoxlamaq üçün istifadə olunur:

```javascript
let baseObject = {
  a: 1,
  b: 2
};

let myObject = Object.create(baseObject); // myObject-in prototipi baseObject-dir
myObject.c = 3; // 'c' myObject-in öz xüsusiyyətidir

console.log(myObject.a); // 1 (baseObject-dən irsən gəldi)
console.log(myObject.c); // 3 (myObject-in öz xüsusiyyətidir)

console.log(myObject.hasOwnProperty('a')); // false (çünki 'a' prototipdən gəlir)
console.log(myObject.hasOwnProperty('c')); // true (çünki 'c' myObject-in öz xüsusiyyətidir)
```

---

#  6.2 Obyekt Yaratmaq (Creating Objects)

JavaScript-də **object (obyekt)** yaratmağın bir neçə yolu var:
-  **Object literal** ilə  
- `new` açar sözü ilə  
-  `Object.create()` funksiyası ilə

---
##  6.2.1 Object Literals (Obyekt Literalı)

**Obyekt literalı (Object Literal)** JavaScript-də obyekt yaratmağın **ən sadə, ən qısa və ən çox istifadə olunan** yoludur. Bu üsulda, obyekt birbaşa kodun içində, **curly braces** (fiqurlu mötərizələr) `{}` daxilində, **`açar (key): dəyər (value)`** cütlükləri şəklində təyin olunur. 

###  Sintaksis:

```javascript
let objectName = {
  property1: value1,
  property2: value2,
  // ... daha çox property
};
```

###  Sadə Misallar:

```javascript
let empty = {}; // 🔹 Tamamilə boş bir obyekt yaradır

let point = {
  x: 0,
  y: 0
}; // 🔹 İki ədədi dəyər (x və y koordinatları) saxlayan obyekt

let p2 = {
  x: point.x,
  y: point.y + 1 
  // Mövcud 'point' obyektinin dəyərlərindən istifadə edərək yeni dəyər hesablayır
}; // 🔹 Digər obyektin xüsusiyyətlərinə əsaslanaraq yeni obyekt yaradır
```

---

### 📚 Mürəkkəb obyekt nümunəsi:

Obyekt literalları içərisində başqa obyektlər, massivlər və ya müxtəlif data tipləri saxlaya bilər ki, bu da onları real dünya məlumatlarını modelləşdirmək üçün çox güclü edir:

```javascript
let book = {
  "main title": "JavaScript",          
  // Adında boşluq olan xüsusiyyət – mütləq dırnaq içində yazılmalıdır
  "sub-title": "The Definitive Guide", 
  // Adında defis olan xüsusiyyət – string kimi yazılmalıdır
  for: "all audiences",                
  // ⚠️ `for` JavaScript-in rezerv açar sözüdür. Lakin burada property adı kimi istifadə olunduğu üçün, bu halda problem yaratmır.
  author: {                           
  //  Daxilində başqa bir obyekt saxlayan xüsusiyyət
    firstname: "David",
    surname: "Flanagan"
  },
  pages: 1200,                         // Ədədi dəyər
  isAvailable: true                    // Boolean dəyər
};
```

### 💡 Qeydlər:

* **Xüsusiyyət adı (property key)** JavaScript **identifikatoru** (məs: `name`, `x`) ola bilər və ya **string literal** (`"main title"`, `"sub-title"`). Əgər xüsusiyyət adı JavaScript identifikatoru olmaya biləcək simvollar (məsələn, boşluq, defis, rəqəmlə başlama) -dan ibarətdirsə, onu mütləq dırnaq içində string kimi yazmalısan.
* **Xüsusiyyət dəyəri (property value)** isə istənilən **JavaScript ifadəsi** ola bilər — bu, sadə bir dəyər, başqa bir dəyişkən, obyekt, massiv və ya hətta bir funksiya ola bilər.
* Obyektin **son xüsusiyyətindən sonra vergül (trailing comma)** qoymaq **ən yaxşı təcrübədir (best practice)**:

```javascript
let user = {
  name: "Ayan",
  age: 25, // ✅ Bu vergül sintaktik cəhətdən düzgündür və tövsiyə olunur
};
```

---

### 🔁 Hər dəfə yeni obyekt

**Object literal** bir **ifadə (expression)** olduğu üçün, **hər çağırıldıqda (yəni, hər dəfə icra olunduqda) yeni və fərqli bir obyekt** yaradır. Bu, yaddaşda tamamilə ayrı bir yer tutan yeni bir obyekt instansı deməkdir.

`Date.now()` sənə **hal-hazırkı anın zaman damğasını (timestamp)** qaytarır — bu da **1970-01-01 00:00:00 UTC** tarixindən bəri keçən **millisaniyə sayıdır**.

```javascript
function createUser(name) {
  return {
    username: name,
    createdAt: Date.now() // Funksiyanın hər çağırılışında fərqli zaman olur
  };
}

let u1 = createUser("Rashad");
// Bir neçə milli saniyə gözləyək (və ya başqa kod icra olunsun)
setTimeout(() => {
  let u2 = createUser("Ayan");
  console.log(u1 !== u2); // true – u1 və u2 yaddaşda fərqli obyektlərdir
  console.log(u1.createdAt); // Məsələn: 1718029200000
  console.log(u2.createdAt); // Məsələn: 1718029200050 (bir qədər sonra yaranıb)
}, 50);
```

Burada `createUser()` funksiyası çağırıldıqca **fərqli obyektlər** yaranır və onların `createdAt` dəyərləri də təbii olaraq fərqli olur, çünki `Date.now()` çağırıldığı anın zaman (timestamp) qaytarır. ⏱️

---

#  6.2.2 `new` ilə Obyekt Yaratmaq

JavaScript-də obyekt yaratmağın başqa bir üsulu **`new` operatorundan** istifadə etməkdir. 🔧 Bu operator, adətən **konstruktor funksiyaları (constructor functions)** və ya **siniflərlə (classes)** birlikdə istifadə olunur.

### `new` operatoru nə edir?

`new` operatoru çağırıldıqda bir neçə addımı avtomatik olaraq yerinə yetirir:

1.  **Yeni Obyekt Yaradır:** Boş bir JavaScript obyekti yaradır.
2.  **Prototipə Bağlayır:** Yaradılan bu yeni obyektin prototipini (prototype) konstruktor funksiyasının `prototype` xüsusiyyətinə bağlayır.
3.  **Konstruktor Funksiyasını Çağırır:** Konstruktor funksiyasını yeni yaradılmış obyektin kontekstində (`this` açar sözü yeni obyektə işarə edir) çağırır. Bu, obyektin ilkin dəyərlərlə doldurulmasını (initialize) təmin edir. Konstruktor funksiyasının əsas məqsədi budur.
4.  **Obyekti Qaytarır:** Əgər konstruktor funksiyası açıq şəkildə bir obyekt qaytarmasa, `new` operatoru avtomatik olaraq yeni yaradılmış və doldurulmuş (initialized) obyekti qaytarır.

Bu funksiyaya **konstruktor (constructor)** deyilir — yəni obyektin ilk dəyərlərini təyin edən və onun quruluşunu formalaşdıran funksiya. 🏗️

---

###  `new` operatoru necə işləyir?

Təsəvvür edin ki, `new` operatoru bir "ustadır" və siz ona bir "tikinti planı" (konstruktor funksiyası) verirsiniz. Usta bu plan əsasında yeni bir bina (obyekt) tikir. Bu proses bir neçə addımda baş verir:

1.  **Boş bir ərazi seçir:** Usta ilk olaraq heç nə olmayan, tamamilə **boş bir yer** (yeni bir JavaScript obyekti) ayırır.
2.  **Planı yerə qoyur:** Seçilmiş bu boş yer, sizin verdiyiniz **tikinti planı ilə** (konstruktor funksiyasının `prototype` xüsusiyyəti ilə) əlaqələndirilir. Beləcə, usta nəyi tikəcəyini bilir.
3.  **Planı tətbiq edir:** Usta sonra sizin **tikinti planınızı** (konstruktor funksiyasını) götürür və onu bu boş yerdə tətbiq etməyə başlayır. Məsələn, divarları hörür, pəncərələri qoyur. Bu zaman, planın içindəki `this` sözü məhz tikilməkdə olan **yeni binaya** işarə edir. Bu, binanın ilkin xüsusiyyətlərini təyin edən əsas mərhələdir.
4.  **Hazır binanı təhvil verir:** Əgər planın özü başqa bir bina təhvil vermirsə, usta avtomatik olaraq **yeni tikilmiş və tamamlanmış binanı** (obyekti) sizə qaytarır.

Bu "tikinti planı" rolunu oynayan funksiyaya **konstruktor** deyilir. O, obyektin ilkin dəyərlərini təyin edir və onun necə qurulacağını formalaşdırır.

---

### 🌐 `User` Obyektləri Yaratmaq

Veb tətbiqlərində, eyni quruluşa malik, lakin fərqli məlumatlara sahib çoxlu istifadəçi obyektləri olur. **`new` operatoru** bizə bu tip obyektləri proqramatik şəkildə və təkrar kod yazmadan yaratmağa imkan verir.

Gəlin bir **`User` konstruktor funksiyası** yaradaq. Bu funksiya hər bir istifadəçi obyekti üçün bir "sxem" və ya "klassik obyekt şablonu" rolunu oynayacaq:

```javascript
// 'User' konstruktor funksiyamız (istifadəçi obyekti üçün şablon)
function User(id, name, email) {
  // 'this' açar sözü burada 'new' ilə yaradılacaq yeni istifadəçi obyektinə (instansına) işarə edir.
  this.id = id;         // İstifadəçinin unikal ID-sini təyin edir
  this.name = name;     // İstifadəçinin adını təyin edir
  this.email = email;   // İstifadəçinin e-mail adresini təyin edir

  // İstifadəçinin proqramda statusunu göstərən metod
  this.displayStatus = function() {
    console.log(`ID: ${this.id}, Name: ${this.name}, Email: ${this.email}`);
  };

  // İstifadəçinin emailini dəyişdirmək üçün metod
  this.updateEmail = function(newEmail) {
    this.email = newEmail;
    console.log(`${this.name}'s email has been updated to ${this.email}.`);
  };
}

// İndi 'new' operatorundan istifadə edərək bu şablondan yeni istifadəçi obyektləri yaradaq:

// Yeni bir 'user1' obyekti yaradırıq
let user1 = new User(101, "Nicat Qarayev", "nicat@example.com");

// Yeni bir 'user2' obyekti yaradırıq
let user2 = new User(102, "Ayan Qarayeva", "ayan@example.com");

// Yeni bir 'user3' obyekti yaradırıq
let user3 = new User(103, "Yunis Huseynzade", "yunis@example.com");


console.log(user1);
//  User { id: 101, name: 'Nicat Qarayev', email: 'nicat@example.com', displayStatus: [Function], updateEmail: [Function] }

console.log(user2);
// User { id: 102, name: 'Ayan Qarayeva', email: 'ayan@example.com', displayStatus: [Function], updateEmail: [Function] }

user1.displayStatus();    
//  ID: 101, Name: Nicat Qarayev, Email: nicat@example.com
user2.displayStatus();   
 // ID: 102, Name: Ayan Qarayeva, Email: ayan@example.com

user3.updateEmail("yunis.h@newdomain.com"); 
// Yunis Huseynzade's email has been updated to yunis.h@newdomain.com.
user3.displayStatus();                        
// ID: 103, Name: Yunis Huseynzade, Email: yunis.h@newdomain.com
```

---

Bu nümunədə **`User` konstruktor funksiyası** bir növ "istifadəçi obyektlərini idarəetmə sistemi" kimi edir. Biz **`new` operatoru** vasitəsilə bu sistemdən **`user1`, `user2`, `user3`** kimi fərqli, lakin eyni quruluşa (id, name, email) malik və eyni bacarıqlara (`displayStatus`, `updateEmail`) sahib obyektlər "yaradıb, konfiqurasiya etdik". Hər bir yeni obyekt fərqli məlumatlarla ilkinləşdirilir, ancaq hər biri `User` tipindən olduğunu qoruyur.

---

### 📚 Misallar – JavaScript-in daxili konstruktorları:

JavaScript-in özünün bəzi daxili (built-in) konstruktorları var ki, onlarla `new` operatoru vasitəsilə müəyyən tipli obyektlər yarada bilərik:

```javascript
let o = new Object(); // ✅ Boş bir obyekt yaradır. Bu, `{}` ilə obyekt yaratmaqla eyni nəticə verir.
console.log(o); // {}

let a = new Array(); // ✅ Boş bir massiv (array) yaradır. Bu, `[]` ilə massiv yaratmaqla eyni nəticə verir.
console.log(a); // []

let d = new Date(); // ✅ Hazırkı tarixi və vaxtı göstərən bir Date obyekt yaradır.
console.log(d); // Məsələn: 2025-06-11T11:02:50.000Z

let r = new RegExp("pattern"); // ✅ Bir müntəzəm ifadə (regular expression) obyekti yaradır.
console.log(r); // /pattern/

let m = new Map(); // ✅ Açar/dəyər (key/value) cütlərini saxlayan bir Map obyekti yaradır.
console.log(m); // Map(0) {}

let s = new Set(); // ✅ Unikal dəyərlər saxlayan bir Set obyekti yaradır.
console.log(s); // Set(0) {}
```

### 🔧 Nəticə:

`new` operatoru ilə istənilən **built-in (daxili)** konstruktorla obyekt yarada bilərsən. Adətən, `Object()` və `Array()` üçün obyekt literalları `{}` və `[]` istifadə etmək daha qısa və oxunaqlı olduğu üçün daha çox üstün tutulur.

Lakin, `Date`, `RegExp`, `Map`, `Set` kimi daha mürəkkəb daxili tiplər üçün `new` operatoru vacibdir.

---

### 6.2.3 **Prototiplər (Prototypes)**

JavaScript-də obyekt yaratmağın daha inkişaf etmiş üsullarına keçməzdən əvvəl, dilin əsas prinsiplərindən biri olan **prototip** konsepsiyasını dərindən anlamalıyıq. Bu anlayış, JavaScript-in obyekt yönümlü təbiətini və məlumatı necə miras aldığını izah edən mərkəzi bir mexanizmdir.

---

### **Prototip Nədir?**

JavaScript-də **hər bir obyekt** (bəzi istisnalar olsa da) özündən daha yuxarı səviyyədə, yəni **prototip zəncirində** yerləşən başqa bir obyektə bağlıdır. Bu bağlı olduğu obyektə **prototip** deyilir. Bu əlaqə, obyektlərin **xüsusiyyətləri (properties)** və **metodları (methods)** başqa obyektlərdən **irsən almasına (inheritance)** imkan verən daxili bir mexanizmdir.

Daha sadə desək:

* Hər bir obyektin arxasında, onun "genetik məlumatını" daşıyan bir **ana obyekt** var. Bu ana obyekt prototipdir.
* Bir obyektdə müəyyən bir xüsusiyyətə və ya metoda müraciət edildikdə, JavaScript ilk olaraq həmin obyektin özündə axtarış aparır.
* Əgər axtarılan xüsusiyyət və ya metod obyektin özündə tapılmazsa, JavaScript avtomatik olaraq onun **prototipində** axtarışa başlayır.
* Bu axtarış, obyektin prototipindən başlayaraq, prototipin prototipinə və s. doğru, bir **zəncir** boyunca davam edir. Bu zəncirə **prototip zənciri (prototype chain)** deyilir. Zəncir ən sonda `null` prototipə çatanda axtarış dayanır.

---

### **Praktiki Əhəmiyyəti**

Prototip mexanizmi JavaScript-də yaddaş səmərəliliyi və kodun təkrar istifadəsi üçün kritikdir. Məsələn:

* Əgər siz minlərlə **`User` (istifadəçi)** obyekti yaratırsınızsa və hər bir istifadəçinin `greet()` (salamlamaq) adlı bir metodu varsa, bu metodu hər obyektin daxilində təkrarən saxlamaq yaddaş israfına səbəb olar.

Prototip zənciri, JavaScript-in obyektlər arasında əlaqə qurma və funksionallığı paylaşma yoludur. Bu, dilin unikal "miras alma" modelinin əsasını təşkil edir.

---

###  Hansı obyektin prototipi nədir?

Hər bir obyektin prototipi, onun necə yaradılmasından asılı olaraq dəyişə bilər:

| Necə yaradılıb?                  | Əsas prototipi nədir?      | Açıqlama                                                                          |
| :------------------------------- | :------------------------- | :-------------------------------------------------------------------------------- |
| `{}` və ya `new Object()`         | `Object.prototype`         | Boş obyektlər və ya `Object` konstruktoru ilə yaradılan obyektlər `Object.prototype`-dan irsən gəlir. |
| `[]` və ya `new Array()`          | `Array.prototype`          | Massivlər (arrays) `Array.prototype`-dan irsən gəlir. Bu prototip `push()`, `pop()`, `map()` kimi metodları təmin edir. |
| `new Date()`                     | `Date.prototype`           | `Date` obyektləri `Date.prototype`-dan irsən gəlir. Bu prototip `getFullYear()`, `getMonth()` kimi metodları təmin edir. |
| `new Function()` | `Function.prototype`       | Funksiyalar `Function.prototype`-dan irsən gəlir. |

Unutma ki, bütün bu prototiplər (məsələn, `Array.prototype`, `Date.prototype`, `Function.prototype`) sonda yenidən **`Object.prototype`-ə bağlanır**. Bu ardıcıllığa **prototip zənciri (prototype chain)** deyilir. Yəni, bütün obyektlər (bir neçə istisna ilə) nəticədə `Object.prototype`-dən metodları miras ala bilir.

---


### 🔍 **`prototype` və `[[Prototype]]` Fərqi: Aydın Nümunə**

Bu iki termin JavaScript-də obyektlərin miras mexanizmini anlamaq üçün əsasdır, lakin tez-tez qarışdırılır. Onları bir konstruktor funksiyası və ondan yaradılan obyektlər kontekstində aydınlaşdıraq.

---

### 1. **`[[Prototype]]` (Obyektin "Miras Aldığı Yer")**

* Bu, **hər bir obyektin** (funksiyalar da daxil olmaqla) sahib olduğu **daxili bir əlaqədir**.
* Bu əlaqə, obyektin **hansı digər obyektin xüsusiyyətlərini və metodlarını miras aldığını** göstərir. Yəni, bir obyektin özündə olmayan bir xüsusiyyətə müraciət etdikdə, JavaScript avtomatik olaraq bu `[[Prototype]]` əlaqəsi vasitəsilə "yuxarıya", miras aldığı obyektə baxır.
* Siz `[[Prototype]]` daxili əlaqəsinə birbaşa adla müraciət edə bilməzsiniz. Onu əldə etmək üçün `Object.getPrototypeOf()` kimi standart metodlardan istifadə olunur (və ya bəzi brauzerlərdə köhnəlmiş `__proto__` xüsusiyyətindən).
* **Məqsədi:** Obyektin **miras zəncirindəki** növbəti "mərhələsini" təyin etmək.

---

### 2. **`prototype` (Konstruktor Funksiyasının "Gələcək Planı")**

* Bu, **yalnız funksiyaların** (xüsusilə **konstruktor funksiyalarının** və siniflərin) sahib olduğu **adi bir xüsusiyyətdir**.
* Bu xüsusiyyətin dəyəri, həmin funksiya ilə **`new` operatoru vasitəsilə yaradılacaq bütün yeni obyektlərin "Miras Aldığı Yer" (`[[Prototype]]`) olacaq obyektə** işarə edir. Yəni, konstruktor funksiyası yeni obyektlər üçün bir növ "gələcək miras planı" təqdim edir.
* Bu xüsusiyyətə birbaşa müraciət edib metodlar və xüsusiyyətlər əlavə edə bilərsiniz ki, gələcəkdə yaradılacaq bütün instanslar onları miras alsın.
* **Məqsədi:** `new` operatoru ilə yaradılacaq yeni obyektlərin hansı ümumi metodları və xüsusiyyətləri miras alacağını **müəyyənləşdirmək**.

---

### **Kod Nümunəsi: `Smartphone`**

Gəlin bir `Smartphone` konstruktoru yaradaq. Hər smartfonun özünə aid `brand` (brendi) və `model`i var, və bütün smartfonlar `call()` (zəng etmək) metoduna sahib olacaq.

```javascript
// 'Smartphone' konstruktor funksiyamız (Bu, yeni smartfonlar yaratmaq üçün bizim "şablonumuzdur")
function Smartphone(brand, model) {
  this.brand = brand;   // Smartfonun özünə aid xüsusiyyətlər
  this.model = model;
  this.batteryLevel = 100; // Bütün smartfonlar ilkin olaraq 100% batareya ilə başlasın
}

// 'Smartphone.prototype' üzərinə bir metod əlavə edirik.
// Bu metod, 'Smartphone' konstruktoru ilə 'new' vasitəsilə yaradılacaq BÜTÜN smartfon instansları tərəfindən miras alınacaq.
Smartphone.prototype.call = function(number) {
  console.log(`${this.brand} ${this.model} is calling ${number}...`);
};

// Batareya səviyyəsini azaltmaq üçün başqa bir metod
Smartphone.prototype.drainBattery = function(amount) {
    this.batteryLevel -= amount;
    console.log(`${this.brand} ${this.model}'s battery is now ${this.batteryLevel}%.`);
};

// İndi 'new' operatoru ilə 'Smartphone' şablonundan iki yeni smartfon obyekti yaradaq:
let iphone = new Smartphone("Apple", "iPhone 15 Pro");
let samsung = new Smartphone("Samsung", "Galaxy S24");

// --- '[[Prototype]]' nədir? (Obyektin miras bağlantısı) ---
// 'iphone' obyektinin daxili '[[Prototype]]' dəyəri 'Smartphone.prototype' obyektinə işarə edir.
// Yəni 'iphone', 'Smartphone.prototype'-dan miras alır.
console.log(Object.getPrototypeOf(iphone) === Smartphone.prototype); // true


// iphone.call() çağırılanda, JavaScript əvvəlcə iphone-un özündə 'call' metodunu axtarır.
// Tapmayanda, iphone-un '[[Prototype]]' vasitəsilə 'Smartphone.prototype'-a gedir və metodu oradan tapır.
iphone.call("555-1234"); //  Apple iPhone 15 Pro is calling 555-1234...
samsung.drainBattery(10); //  Samsung Galaxy S24's battery is now 90%.

// --- 'prototype' nədir? (Konstruktorun miras planı) ---
// 'Smartphone' funksiyasının özünün 'prototype' adlı bir xüsusiyyəti var.
// Bu 'prototype' xüsusiyyətinin dəyəri, yuxarıda 'call' və 'drainBattery' metodlarını əlavə etdiyimiz obyektdir.
console.log(typeof Smartphone.prototype); //  "object" (həmin obyektin tipini göstərir)
console.log(Smartphone.prototype);
//  { call: [Function (anonymous)], drainBattery: [Function (anonymous)] }
// Bu obyektin içində 'call' və 'drainBattery' metodları var.

// 'Smartphone' funksiyasının özünün '[[Prototype]]'-i nədir?
// Unutmayın ki, funksiyalar da JavaScriptdə obyektdir, ona görə onların da '[[Prototype]]'-i var.
// Funksiyalar ümumi 'Function.prototype'-dan miras alır.
console.log(Object.getPrototypeOf(Smartphone) === Function.prototype); //  true
// Qeyd: Bu, 'Smartphone.prototype'-dan fərqlidir.
```

---

Bu nümunədə:

* **`Smartphone.prototype`** bizim **"Miras Planımızdır"**. Ora əlavə etdiyimiz `call` və `drainBattery` metodları, `new Smartphone()` ilə yaradılacaq bütün ağıllı telefonların ortaq bacarıqları olacaq.
* **`iphone` və `samsung`** obyektlərinin hər birinin öz daxili **`[[Prototype]]` bağlantısı** var. Bu bağlantı onları `Smartphone.prototype` obyektinə yönləndirir ki, onlar `call` və `drainBattery` metodlarını **miras ala bilsinlər**.

Beləliklə, **`prototype`** konstruktor funksiyasına aiddir və **gələcək instansların** nəyi miras alacağını **müəyyən edir**, `[[Prototype]]` isə **hər bir obyekt instansına** aiddir və onun **hazırda nədən miras aldığını** göstərir.

---

###  `Object.prototype` haqqında xüsusi qeyd

`Object.prototype` – prototip zəncirinin ən yuxarı hissəsində yerləşən **xüsusi bir obyektdir**:
* Bu **yeganə obyektlərdən biridir ki, heç bir prototipi yoxdur**. Yəni, o heç nədən irsən gəlmir — bu, **prototip zəncirinin başlanğıcı və ya sonudur**. 🔚
* `Object.prototype` digər bütün obyektlərin miras ala biləcəyi `toString()`, `hasOwnProperty()`, `isPrototypeOf()` kimi fundamental metodları özündə saxlayır.

---

### 🔗 Prototip Zənciri (Prototype Chain) – Axtarış Mexanizmi

JavaScript-də bir obyektin xüsusiyyətinə və ya metoduna daxil olmaq istədikdə, JavaScript aşağıdakı ardıcıllığı izləyir:

1.  **Əvvəlcə obyektin özündə axtarır.**
2.  Əgər tapmasa, obyektin **`[[Prototype]]`-inə (yəni, prototipinə)** baxır.
3.  Prototipində də tapmasa, prototipin `[[Prototype]]`-inə baxır və bu beləcə **prototip zənciri boyunca** davam edir.
4.  Axtarış `Object.prototype`-ə çatdıqda və orada da tapılmasa, `undefined` qaytarılır.

Misal:

```javascript
let userProfile = {
  name: "Ali",
  age: 30,
  city: "Baku"
};

// userProfile.name xüsusiyyətinə müraciət edirik
// 1. 'userProfile' obyektinin özündə 'name' xüsusiyyəti varmı? Bəli!
// 2. Tapdı və dəyəri qaytardı.
console.log(userProfile.name); // Output: "Ali"

// userProfile.toString() metodunu çağırırıq
// 1. 'userProfile' obyektinin özündə 'toString()' metodu varmı? Xeyr.
// 2. 'userProfile'-in prototipinə ('Object.prototype'-ə) baxır. 'Object.prototype'-də 'toString()' metodu var!
// 3. Tapdı və icra etdi.
console.log(userProfile.toString()); // Output: "[object Object]"

// userProfile.hasOwnProperty('age') metodunu çağırırıq
// 1. 'userProfile' obyektinin özündə 'hasOwnProperty()' varmı? Xeyr.
// 2. 'userProfile'-in prototipinə ('Object.prototype'-ə) baxır. 'Object.prototype'-də 'hasOwnProperty()' metodu var!
// 3. Tapdı və icra etdi.
console.log(userProfile.hasOwnProperty('age')); // Output: true (Çünki 'age' birbaşa 'userProfile' obyektinin özünün xüsusiyyətidir)
console.log(userProfile.hasOwnProperty('city')); // Output: true

// userProfile.hasOwnProperty('toString') metodunu çağırırıq
// 1. 'userProfile' obyektinin özündə 'hasOwnProperty()' varmı? Xeyr.
// 2. 'userProfile'-in prototipinə ('Object.prototype'-ə) baxır. 'Object.prototype'-də 'hasOwnProperty()' metodu var!
// 3. Tapdı və icra etdi.
console.log(userProfile.hasOwnProperty('toString')); // Output: false (Çünki 'toString' metodu 'Object.prototype'-dədir, 'userProfile'-in özündə deyil)

// userProfile.propertyIsEnumerable('name') metodunu çağırırıq
// 1. 'userProfile' obyektinin özündə 'propertyIsEnumerable()' varmı? Xeyr.
// 2. 'userProfile'-in prototipinə ('Object.prototype'-ə) baxır. 'Object.prototype'-də 'propertyIsEnumerable()' metodu var!
// 3. Tapdı və icra etdi.
console.log(userProfile.propertyIsEnumerable('name')); // Output: true (Çünki 'name' enumeration üçün mövcuddur)
```
Bu nümunə prototip zəncirinin düz obyektlərdə necə fəaliyyət göstərdiyini aydın şəkildə nümayiş etdirir:

* **`name`, `age`, `city`** kimi xüsusiyyətlər birbaşa **`userProfile`** obyektinin özündə mövcuddur, buna görə də onlara müraciət edərkən prototip zəncirində axtarışa ehtiyac qalmır.
* **`toString()`**, **`hasOwnProperty()`** və **`propertyIsEnumerable()`** kimi metodlar isə **`userProfile`** obyektinin özündə deyil, onun prototipi olan **`Object.prototype`** üzərində yerləşir. Bu səbəbdən, bu metodlar çağırıldıqda, JavaScript prototip zəncirini izləyərək onları `Object.prototype` üzərində tapır və istifadə edir.

---

# 🧱 6.2.4 `Object.create()` ilə Obyekt Yaratmaq

`Object.create()` funksiyası — JavaScript-də obyekt yaratmağın **çevik və güclü** üsullarından biridir. ⚙️ Bu metod sənə birbaşa **yeni yaradılacaq obyektin prototipini özün təyin etməyə** imkan verir.

### Sintaksis:

`Object.create(proto, [propertiesObject])`

* `proto`: Yeni obyektin prototipi olacaq obyekt. Bu arqument `null` da ola bilər.
* `propertiesObject` (optional): Yeni obyektə əlavə olunacaq xüsusiyyətləri təyin edən, xüsusiyyət təsvirlərini (property descriptors) ehtiva edən obyekt.  
  Bu, ən çox §14.1-də müzakirə olunacaq xüsusiyyət atributları (`writable`, `enumerable`, `configurable`) ilə bağlıdır.

```javascript
let protoObj = { x: 1, y: 2 };
let o1 = Object.create(protoObj); // 'o1' adlı yeni obyekt yaradılır

console.log(o1);         // {} (boş görünür, çünki x və y öz xüsusiyyəti deyil)
console.log(o1.x);       // Nəticə: 1 (çünki 'x' dəyəri 'o1'-in prototipindən götürülür)
console.log(o1.y);       // Nəticə: 2 (çünki 'y' dəyəri 'o1'-in prototipindən götürülür)
console.log(o1.x + o1.y); // => 3 ✅

// Əmin olmaq üçün prototipə baxaq:
console.log(Object.getPrototypeOf(o1) === protoObj); // true
console.log(o1.hasOwnProperty('x')); // false (xüsusiyyət özündə yox, prototipdədir)

o1.z = 3; // 'z' yeni xüsusiyyət kimi 'o1'-in özünə əlavə olunur
console.log(o1.z);       // 3
console.log(o1.hasOwnProperty('z')); // true
```

Burada `o1` adlı yeni obyekt yaradılır və onun `[[Prototype]]`-i (yəni, prototipi) `protoObj` obyekti (`{ x: 1, y: 2 }`) olur. Yəni `o1.x` və `o1.y`-ə daxil olmaq istədikdə, JavaScript bu dəyərləri **prototipindən götürür**.

---

### 🚫 **`null` Prototipi ilə Obyekt Yaratmaq: Praktik Nümunələr**

`Object.create(null)` istifadə etdiyiniz zaman, nəticədə **heç bir prototipi olmayan** bir obyekt əldə edirsiniz. Bu o deməkdir ki, o, **JavaScript-in ən təməl obyektindən (yəni `Object.prototype`-dən)** gələn heç bir metodu miras almır.

Gəlin bunun praktikada nə anlama gəldiyinə baxaq:

```javascript
// 'null' prototipi ilə bir obyekt yaradırıq
let cleanObject = Object.create(null);

console.log(cleanObject); // Output: [Object: null prototype] {}
// (Brauzer konsolunda adətən {} kimi görünür, amma prototype fərqi qeyd olunur

// Öz xüsusiyyətlərini əlavə edə bilərik
cleanObject.name = "John Doe";
cleanObject.age = 30;
cleanObject.id = 123;

console.log(cleanObject); // Output: [Object: null prototype] { name: 'John Doe', age: 30, id: 123 }
```

---

### **`null` Prototipi Obyektlərinin Xüsusiyyətləri:**

Bu obyektlər öz təmizliyində faydalı olsa da, `Object.prototype`-dən metodları miras almadıqları üçün bəzi xüsusiyyətlərə malikdirlər:

1.  **Ümumi Obyekt Metodlarını İrsən Almır:**
    `cleanObject` üzərində `Object.prototype`-də olan metodları birbaşa çağıra bilməzsiniz.

    ```javascript
    // Misal 1: toString() metodu yoxdur
    try {
      console.log(cleanObject.toString()); // TypeError: cleanObject.toString is not a function
    } catch (e) {
      console.log(`Error: ${e.message}`); // Output: Error: cleanObject.toString is not a function
    }

    // Misal 2: hasOwnProperty() metodu yoxdur
    try {
      console.log(cleanObject.hasOwnProperty('name')); // TypeError: cleanObject.hasOwnProperty is not a function
    } catch (e) {
      console.log(`Error: ${e.message}`); // Output: Error: cleanObject.hasOwnProperty is not a function
    }
    ```

    **Qeyd:** Əgər siz yenə də `hasOwnProperty` kimi metodlara ehtiyac duyursunuzsa, onlara `Object.prototype` üzərindən birbaşa müraciət edə bilərsiniz:

    ```javascript
    // 'Object.prototype.hasOwnProperty.call()' vasitəsilə hasOwnProperty-ni çağırmaq
    console.log(Object.prototype.hasOwnProperty.call(cleanObject, 'name')); // Output: true
    console.log(Object.prototype.hasOwnProperty.call(cleanObject, 'someProperty')); // Output: false
    ```
---

###  Adi Boş Obyekt Yaratmaq

Əgər sadəcə `{}` və ya `new Object()` ilə eyni nəticəni almaq istəyirsənsə (yəni, `Object.prototype`-dən irsən gələn adi bir boş obyekt), belə yaza bilərsən:

```javascript
let o3 = Object.create(Object.prototype);

console.log(o3); // {}
console.log(o3.toString()); // "[object Object]" - işləyir, çünki Object.prototype-dən gəlir
```

Bu, **adi boş obyekt** kimidir – `toString()` və digər ümumi metodlara malikdir.

---

### ⚡ `Object.create()` niyə bu qədər güclüdür?

`Object.create()` sənə birbaşa prototip zəncirini manipulyasiya etmək imkanı verir. Bu, aşağıdakı üstünlükləri təmin edir:

* ✅ **Özün seçdiyin prototipi olan obyekt yaratmaq:** Bu, klassik irsiyyət modelləri olmadan obyektlər arasında irsiyyət əlaqələri qurmağa imkan verir.
* ✅ **Orijinal (prototip) obyektə toxunmadan irsən gələn xüsusiyyətləri istifadə etmək:** Yeni obyekt prototipdəki xüsusiyyətləri "görür", lakin onların dəyərlərini özündə saxlamır.
* ✅ **Təhlükəsizlik və immutability (dəyişilməzlik) senariləri:** Funksiyalara obyektlərin təhlükəsiz nüsxələrini ötürməyə imkan verir.

---

Əlbəttə, `Object.create()` metodunun gücünü və xüsusilə də "shallow copy" (səthi nüsxə) funksiyasını daha yaxşı başa düşmək üçün başqa bir nümunəyə baxaq. Bu dəfə, bir konfigurasiya obyektini təhlükəsiz şəkildə funksiyalara ötürmə ssenarisini araşdıraq.

---

### ⚙️ **Standart Tənzimləmələrin Fərdiləşdirilməsi**

Bir tətbiqdə adətən **standart tənzimləmələr** olur və biz istifadəçi üçün bu tənzimləmələrin üzərində dəyişikliklər etməyə imkan veririk, lakin orijinal standart tənzimləmələrə toxunmaq istəmirik. `Object.create()` bu cür ssenari üçün əlverişlidir.

```javascript
// Standart (Default) Tənzimləmələr Obyekti
// Bu obyektdəki dəyərlər dəyişməz qalmalıdır.
const defaultSettings = {
  theme: "dark",
  fontSize: 16,
  notifications: true,
  language: "en"
};

// 'defaultSettings'-i prototip kimi istifadə edərək yeni, fərdiləşdirilmiş tənzimləmələr yaradırıq.
// 'userSettings' obyekti 'defaultSettings'-in bütün xüsusiyyətlərini irsən alır.
let userSettings = Object.create(defaultSettings);

console.log("Default Theme:", defaultSettings.theme);         // Output: Default Theme: dark
console.log("User Settings Theme (reads from prototype):", userSettings.theme); // Output: User Settings Theme (reads from prototype): dark
console.log("---");

// İstifadəçi tənzimləmələrini dəyişməyə cəhd edirik:
console.log("User changing settings...");
userSettings.theme = "light";       // 'userSettings' obyekti üçün yeni 'theme' xüsusiyyəti yaranır
userSettings.fontSize = 18;         // 'userSettings' obyekti üçün yeni 'fontSize' xüsusiyyəti yaranır
userSettings.notifications = false; // 'userSettings' obyekti üçün yeni 'notifications' xüsusiyyəti yaranır

console.log("---");
console.log("After User Settings Changes:");

// Orijinal 'defaultSettings' obyektinə baxaq:
console.log("Original Default Theme:", defaultSettings.theme);       // Output: Original Default Theme: dark (Dəyişmədi!)
console.log("Original Default Font Size:", defaultSettings.fontSize); // Output: Original Default Font Size: 16 (Dəyişmədi!)
console.log("Original Default Notifications:", defaultSettings.notifications); // Output: Original Default Notifications: true (Dəyişmədi!)

// 'userSettings' obyektinə baxaq (dəyişikliklər onun özündədir):
console.log("User Settings Theme:", userSettings.theme);           // Output: User Settings Theme: light
console.log("User Settings Font Size:", userSettings.fontSize);     // Output: User Settings Font Size: 18
console.log("User Settings Notifications:", userSettings.notifications); // Output: User Settings Notifications: false

// 'language' xüsusiyyəti dəyişdirilməyib, ona görə hələ də prototipdən oxunur:
console.log("User Settings Language:", userSettings.language);     // Output: User Settings Language: en
console.log("Is 'language' directly on userSettings?", userSettings.hasOwnProperty('language')); // Output: false
```

---

**Bu Nümunədə Nələr Baş Verir:**

* `defaultSettings` obyekti bizim **standart tənzimləmələrimizdir**. Biz bunların dəyişməz qalmasını istəyirik.
* `userSettings = Object.create(defaultSettings)` ifadəsi ilə `defaultSettings`-i **prototip** kimi istifadə edən yeni bir **`userSettings`** obyekti yaratdıq.
    * Bu o deməkdir ki, `userSettings` obyekti `defaultSettings`-dəki `theme`, `fontSize`, `notifications`, `language` dəyərlərini **oxuya bilir**, lakin bu dəyərlər ilkin olaraq `userSettings`-in özündə saxlanılmır; onlar prototipdən miras alınır.
* `userSettings.theme = "light";` kimi sətirləri icra etdikdə, JavaScript `userSettings` obyektinin **özündə** `theme` adlı yeni bir xüsusiyyət yaradır.
    * Bu yeni `theme` xüsusiyyəti `defaultSettings`-dəki `theme` xüsusiyyətini **kölgələyir (shadows)**. Yəni, `userSettings.theme` indi onun özündəki `"light"` dəyərini qaytarır, amma `defaultSettings.theme` hələ də `"dark"` olaraq qalır.
* `language` xüsusiyyəti dəyişdirilmədiyindən, `userSettings.language` hələ də `defaultSettings`-dən miras alınan `"en"` dəyərini göstərir. `userSettings.hasOwnProperty('language')` ifadəsinin `false` qaytarması da bunu təsdiqləyir, çünki `language` `userSettings`-in özünün bir xüsusiyyəti deyil, prototipdən gəlir.

Nəticədə, `Object.create()` sayəsində **orijinal `defaultSettings` obyektinə zərər vermədən**, istifadəçi üçün fərdiləşdirilmiş tənzimləmələr yarada bildik. Bu, konfigurasiya idarəetməsi və ya dəyişməz (immutable) data strukturları ilə işləyərkən çox faydalı bir yanaşmadır.

---

### 📌 Qeyd: İkinci Arqument

`Object.create()` funksiyası həmçinin **ikinci əlavə argument** qəbul edə bilir. Bu argument, obyektin **öz xüsusiyyətlərini** (`own properties`) `configurable`, `writable`, `enumerable` kimi **atributları ilə birlikdə** detallı şəkildə təyin etməyə imkan verir. Bu mövzu, xüsusiyyətlərin daha dərin səviyyədə idarə olunması üçün vacibdir və **§14.1**-də ətraflı izah olunacaq. 📘🔍

---

# 6.3 Xüsusiyyətlərə Daxil Olmaq və Təyin Etmək (Querying and Setting Properties)

JavaScript-də obyektlərin ən fundamental əməliyyatlarından biri onların daxilində saxladıqları xüsusiyyətlərə (properties) daxil olmaq (oxumaq) və ya onların dəyərlərini dəyişdirmək (yazmaq, təyin etmək)dir.  
Bu əməliyyatlar üçün iki əsas operatordan istifadə edirik: **dot operator (`.`)** və **square bracket operator (`[]`)**. (Bu operatorlar haqqında ilkin məlumatı §4.4-də əldə etmişdin.)

### 🔍 Xüsusiyyətlərin dəyərini almaq (Querying Properties)

Bir obyektin xüsusiyyətinin dəyərini oxumaq üçün hər iki operatordan istifadə edə bilərsən:

* **Dot operator (`.`):**
    Bu operatoru istifadə edərkən, soldakı ifadə obyekt olmalıdır (məsələn: `book`), sağdakı isə **birbaşa xüsusiyyətin adı olan sadə bir identifikator** olmalıdır (məsələn: `author`, `name`). Bu üsul ən çox yayılmış və ən oxunaqlı üsuldur, ancaq xüsusiyyət adının sintaktik cəhətdən keçərli bir identifikator olması tələb olunur (yəni, rəqəmlə başlamamalı, boşluq və ya defis kimi xüsusi simvollar ehtiva etməməlidir).

    ```javascript
    let book = {
      title: "JavaScript Programming",
      author: {
        firstname: "John",
        surname: "Doe"
      }
    };

    let author = book.author;     // book obyektinin "author" xüsusiyyətini alırıq
    let surname = author.surname; // author obyektinin "surname" xüsusiyyətini alırıq

    console.log(surname); // "Doe"
    console.log(book.title); // "JavaScript Programming"
    ```

* **Square bracket operator (`[]`):**
    Bu operatoru istifadə edərkən, mötərizələrin `[]` daxilindəki ifadə ya **string** tipində olmalı, ya da string-ə çevrilə bilən bir dəyər, yaxud **Symbol** (§6.10.3) olmalıdır. Bu üsul, xüsusiyyət adında boşluq, defis, rəqəmlə başlama kimi xüsusi simvollar olduqda və ya xüsusiyyət adının proqram icra olunarkən (runtime) dinamik olaraq təyin edildiyi hallarda çox vacibdir.

    ```javascript
    let book = {
      "main title": "JavaScript: The Good Parts", // Adında boşluq var
      "publication-year": 2008,                   // Adında defis var
      "author": "Douglas Crockford"
    };

    let mainTitle = book["main title"]; // book obyektinin "main title" xüsusiyyətini alırıq
    let pubYear = book["publication-year"]; // book obyektinin "publication-year" xüsusiyyətini alırıq

    console.log(mainTitle); // "JavaScript: The Good Parts"
    console.log(pubYear);   // 2008
    ```

---

### ✏️ Xüsusiyyət yaratmaq və ya dəyərini dəyişmək (Setting Properties)

Yeni bir xüsusiyyət əlavə etmək və ya mövcud bir xüsusiyyətin dəyərini yeniləmək (dəyişdirmək) üçün də dot (`.`) və ya square bracket (`[]`) operatorlarından istifadə edirik. Lakin bu dəfə, onlar **assignment əməliyyatının (`=`) sol tərəfində** yer alır:

```javascript
let book = {
  "main title": "JavaScript",
  author: "Douglas"
};

book.edition = 7; // book obyektinə "edition" adlı yeni xüsusiyyət əlavə etdik
console.log(book.edition); // 7

book["main title"] = "ECMAScript"; // mövcud "main title" xüsusiyyətinin dəyərini dəyişdik
console.log(book["main title"]); // "ECMAScript"

book.author = { // Author xüsusiyyətinin dəyərini başqa bir obyektlə dəyişdik
  firstname: "David",
  surname: "Flanagan"
};
console.log(book.author.firstname); // "David"
```

---

**Xülasə: Dot vs. Square Bracket Operatorları**

| Əməliyyat              | Sintaksis (dot operator)  | Sintaksis (square brackets)      | Nə zaman istifadə olunur?                           |
| :--------------------- | :------------------------ | :------------------------------- | :-------------------------------------------------- |
| **Xüsusiyyət oxuma** | `object.property`         | `object["propertyName"]`         | **Dot:** Sabit, sadə identifikatorlar. **Bracket:** Dinamik adlar, boşluqlu/defisli adlar, rəqəmli adlar. |
| **Xüsusiyyət yazma** | `object.property = value` | `object["propertyName"] = value` | **Dot:** Sabit, sadə identifikatorlar. **Bracket:** Dinamik adlar, boşluqlu/defisli adlar, rəqəmli adlar. |

---

# 6.3.1 Obyektlər Assosiativ Massivlər Kimi (Objects As Associative Arrays)

Əvvəlki bölmədə izah etdiyimiz kimi, aşağıdakı iki JavaScript ifadəsi əksər hallarda eyni dəyəri qaytarır:

```javascript
object.property      // Məsələn: book.title
object["property"]   // Məsələn: book["title"]
```

Birinci sintaksis — **dot operator (`.`)** ilə və bir **identifikatorla** istifadə olunur. Bu, C++ və Java kimi **strongly typed (ciddi tipli)** dillərdə struct və ya obyektin **statik sahəsinə (static field)** daxil olmaq kimi oxşardır. Bu dillərdə obyektin sahib olacağı xüsusiyyətlər (sahələr) kodu yazarkən artıq müəyyən edilmiş olur.

İkinci sintaksis — **square bracket operator (`[]`)** ilə və içində **string (və ya stringə çevrilə bilən ifadə)** olan bir dəyərlə istifadə olunur. Bu, sanki bir **string indeksli massivə (array)** daxil olmaq kimidir. Proqramlaşdırma dünyasında belə massivlər **associative array** (digər adları: hash, map, dictionary) adlanır. Onlar dəyərləri indekslərin əvəzinə açarlar (keys) vasitəsilə saxlamağa imkan verir.

**JavaScript-də obyektlər təməlində assosiativ massivlərdir!** Bu bölmə bunun niyə bu qədər vacib və güclü bir xüsusiyyət olduğunu izah edir.

---

### 🤔 Strongly Typed vs. Loosely Typed (Dinamik Tipli) – Fərq Nədir?

* **Strongly typed (Ciddi tipli) dillər (məsələn: C, C++, Java):** Bu dillərdə obyektlərin yalnız öncədən təyin olunmuş və sayca məhdud olan xüsusiyyətləri (properties) ola bilər. Obyektin tipini təyin edərkən bütün xüsusiyyətlər bəyan edilir və proqram işləyərkən yeni xüsusiyyətlər əlavə etmək mümkün deyil.

* **JavaScript isə loosely typed (dinamik tipli) dildir:** Bu, obyektlərə **istənilən vaxt, istənilən sayda yeni xüsusiyyət əlavə etməyin** və ya mövcudlarını silməyin mümkün olduğu deməkdir.
---

### 🔸 Dot operator (`.`) – Sabit (Static) Xüsusiyyət Adları

Dot operatoru (`.`) ilə istifadə olunan property adı **identifier** kimi yazılır, yəni kodu yazarkən **sabitdir (hardcoded)** və proqram işləyərkən (runtime) bir dəyişkən vasitəsilə dəyişdirilə bilməz. Əgər sən bir xüsusiyyətə daxil olmaq üçün dəyişkəndən istifadə etmək istəyirsənsə, dot operatoru işləməyəcək.

```javascript
let myProperty = "name";
let person = { name: "Aysel", age: 25 };

// console.log(person.myProperty); 
// undefined olacaq! Çünki "person" obyektində "myProperty" adlı bir xüsusiyyət yoxdur.
// JavaScript `myProperty` sözünü bir identifikator kimi qəbul edir, dəyişkən kimi yox.
```

---

### 🔹 Square bracket operator (`[]`) – Dinamik (Dynamic) Xüsusiyyət Adları

Square bracket operatoru (`[]`) ilə property adı bir **string ifadəsi** kimi verilir. Bu o deməkdir ki, proqram icra olunarkən (runtime) bu string dəyəri **dinamik şəkildə yaradıla və ya dəyişdirilə bilər**.

Məsələn:

```javascript
let customer = {
  address0: "Nizami küçəsi 1",
  address1: "Səməd Vurğun küçəsi 5",
  address2: "Əhməd Cavad küçəsi 10",
  address3: "28 May küçəsi 20"
};

let addr = "";
for(let i = 0; i < 4; i++) {
  // `address${i}` ilə dinamik olaraq "address0", "address1" və s. stringlər yaradırıq.
  addr += customer[`address${i}`] + "\n"; // Square bracket operatoru dinamik stringlərlə işləyir
}
console.log(addr);
// Nəticə:
// Nizami küçəsi 1
// Səməd Vurğun küçəsi 5
// Əhməd Cavad küçəsi 10
// 28 May küçəsi 20
```

Bu kod `customer` obyektinin `address0`, `address1`, `address2`, `address3` xüsusiyyətlərinin dəyərlərini oxuyur və birləşdirir. Gördüyün kimi, xüsusiyyət adları loop (dövr) daxilində dinamik olaraq formalaşdırılır.

---

### ⚙️ Niyə Assosiativ Massivlər Belə Faydalıdır? (Praktik Nümunə)

Tutaq ki, sən istifadəçi portfelində (portfolio) saxladığı səhmlərin adlarını və sayını izləyən bir proqram yazırsan. Bu portfel `portfolio` adlı obyektlə təmsil olunur və hər bir səhmin adı **property adı (key)**, səhmin sayı isə həmin property'sinin **dəyəridir (value)**.

İstifadəçi səhmin adını proqramın işləmə vaxtında (runtime) daxil edir, ona görə də property adları əvvəlcədən məlum deyil. Bu səbəbdən, dot operatoru ilə birbaşa istifadə etmək mümkün deyil. Məhz burada square bracket operatoru imdadımıza çatır:

```javascript
// Yeni səhm əlavə edən funksiya
function addStock(portfolio, stockName, shares) {
  portfolio[stockName] = shares; 
  // stockName dəyəri dinamikdir, ona görə square bracket istifadə edirik
  console.log(`${stockName} səhmi portfelə əlavə edildi: ${shares} ədəd.`);
}

let myPortfolio = {}; // Boş portfel obyekti

addStock(myPortfolio, "AAPL", 10); 
// Apple səhmi portfelə əlavə edildi: 10 ədəd.
addStock(myPortfolio, "GOOGL", 5); 
// Google səhmi portfelə əlavə edildi: 5 ədəd.
addStock(myPortfolio, "MSFT", 12); 
// Microsoft səhmi portfelə əlavə edildi: 12 ədəd.

console.log(myPortfolio); // { AAPL: 10, GOOGL: 5, MSFT: 12 }
```

---

### 🔄 `for...in` dövrü və Assosiativ Massivlər

Portfeldəki bütün səhmlərin ümumi dəyərini hesablamaq kimi hallarda `for...in` dövründən istifadə etmək çox faydalıdır. Bu dövr, obyektin bütün **nömrələnə bilən (enumerable)** xüsusiyyətlərinin adlarını ardıcıllıqla gəzməyə imkan verir:

```javascript
// Səhmlərin hazırkı qiymətini qaytaran fiktiv funksiya
function getQuote(stockSymbol) {
  const prices = {
    "AAPL": 170.00,
    "GOOGL": 180.00,
    "MSFT": 420.00
  };
  return prices[stockSymbol] || 0; // Qiymət tapılmasa 0 qaytar
}

function computePortfolioValue(portfolio) {
  let totalValue = 0.0;
  for(let stockSymbol in portfolio) {
    // `stockSymbol` dəyişəni hər iterasiyada property adını (string olaraq) saxlayır
    let shares = portfolio[stockSymbol];  // Bu səhmin sayı
    let price = getQuote(stockSymbol);    // Səhmin cari qiyməti
    totalValue += shares * price;         // Ümumi dəyərə əlavə et
  }
  return totalValue; // Portfelin ümumi dəyəri
}

let myPortfolio = { "AAPL": 10, "GOOGL": 5, "MSFT": 12 };
let portfolioWorth = computePortfolioValue(myPortfolio);
console.log(`Portfelin ümumi dəyəri: $${portfolioWorth.toFixed(2)}`);
// Nəticə: $8310.00 (10*170 + 5*180 + 12*420)
```

---

### 🚩 ES6 və sonrakı versiyalarda: `Map` class-ı

Sadə obyektlər assosiativ massiv kimi işləməyinə baxmayaraq, **ES6 (ECMAScript 2015)** və sonrakı versiyalarda təqdim olunan **`Map` class-ı (§11.1.2)** daha əlverişli və effektiv assosiativ massiv (key-value kolleksiyası) kimi istifadə olunur.

`Map` obyektlərinə nisbətən bəzi üstünlüklərə malikdir:

* **İstənilən tipdə açar (key) istifadə edə bilmək:** `Map` obyektlərdən fərqli olaraq, açar kimi stringlərlə yanaşı, rəqəmlər, boolean dəyərlər, hətta digər obyektlər və funksiyalar da qəbul edə bilər.
* **Açarların sırası qorunur:** `Map` obyektlərində əlavə olunan açarların daxilolma sırası qorunur, bu isə `for...in` kimi dövrlərdə açarların hansı ardıcıllıqla gələcəyini proqnozlaşdırmağa imkan verir.
* **Performans:** Böyük həcmli data üçün `Map` obyektlər, xüsusilə tez-tez əlavə etmə/silmə əməliyyatları edildikdə, sadə obyektlərə nisbətən daha yaxşı performans göstərə bilər.
* **`size` xüsusiyyəti:** Birbaşa kolleksiyadakı elementlərin sayını verir.

---

# 6.3.2 İrsiyyət (Inheritance) 

JavaScript obyektləri həm **özünəməxsus xüsusiyyətlərə (own properties)**, həm də **prototip obyektindən miras aldıqları (inherited properties)** xüsusiyyətlərə sahib ola bilirlər.

### 🔗 Prototip Zənciri (Prototype Chain) – Xüsusiyyətlərin Axtarışı

Bildiyimiz kimi, JavaScript-də demək olar ki, hər obyektin bir **prototipi (prototype)** var (yeganə istisna `Object.prototype`-dir, onun prototipi `null`-dır). Bir obyektin xüsusiyyətinə (məsələn, `o.x`) daxil olmağa cəhd etdiyin zaman JavaScript aşağıdakı ardıcıllıqla axtarış aparır:

1.  **Obyektin özündə axtarır:** Əvvəlcə, JavaScript həmin xüsusiyyətin obyektin **özünə məxsus (own property)** olub-olmadığını yoxlayır.
2.  **Prototip zəncirini izləyir:** Əgər axtarılan xüsusiyyət obyektin özündə tapılmazsa, JavaScript dərhal onun **`[[Prototype]]`-inə (yəni, prototip obyektinə)** baxır.
3.  **Zəncir boyu davam edir:** Əgər prototipdə də tapılmazsa, prototipin `[[Prototype]]`-inə (zəncirdəki növbəti obyektə) baxılır və bu proses **`null`-a çatana qədər** davam edir.
4.  **`undefined` qaytarılır:** Əgər zəncirin sonuna qədər axtarılan xüsusiyyət tapılmazsa, nəticə olaraq `undefined` dəyəri qaytarılır.

Misal:

```javascript
let o = {};           // 'o' → Object.prototype (Object.prototype-in prototipi null-dır)
o.x = 1;              // 'o'-nun öz xüsusiyyəti (own property): x = 1

let p = Object.create(o);  // 'p'-nin prototipi 'o' obyektidir (p → o → Object.prototype)
p.y = 2;              // 'p'-nin öz xüsusiyyəti: y = 2

let q = Object.create(p);  // 'q'-nun prototipi 'p' obyektidir (q → p → o → Object.prototype)
q.z = 3;              // 'q'-nun öz xüsusiyyəti: z = 3

console.log(q.x); // 1
// Q.x-i axtararkən: q-da yoxdur → p-də yoxdur → o-da var (x=1) → tapdı!
console.log(q.y); // 2
//  Q.y-i axtararkən: q-da yoxdur → p-də var (y=2) → tapdı!
console.log(q.z); // 3
// Q.z-i axtararkən: q-da var (z=3) → tapdı!

let f = q.toString(); // "[object Object]". toString() metodunu axtararkən: q-da yoxdur → p-də yoxdur → o-da yoxdur → Object.prototype-də var → tapdı!

console.log(q.x + q.y); // 3 
// (miras alınan x və y dəyərləri istifadə olundu)
```

---

### ✍️ Xüsusiyyət Dəyərinin Təyin Edilməsi (Setting Properties) – Shadowing (Kölgələmə)

Bir obyektə (məsələn, `o.x = value`) dəyər təyin etdiyin zaman axtarış mexanizmi oxumaqdan bir qədər fərqlidir. JavaScript bu prosesi aşağıdakı şəkildə idarə edir:

1.  **Obyektin özündə yoxlayır:** JavaScript əvvəlcə obyektdə (`o`) həmin ada malik (`x`) bir xüsusiyyətin olub-olmadığını yoxlayır.
2.  **Mövcudsa, dəyəri dəyişir:** Əgər `x` adlı xüsusiyyət obyektdə artıq mövcuddursa (own property-dirsə), onun dəyəri sadəcə yenisi ilə əvəz olunur.
3.  **Yoxdursa, yeni yaradır:** Əgər `x` adlı xüsusiyyət obyektdə yoxdursa, JavaScript yeni bir `x` xüsusiyyəti yaradır və bu, həmin obyektin **özünəməxsus xüsusiyyəti (own property)** olur.
4.  **Miras alınan xüsusiyyətlərin "kölgələnməsi" (Shadowing):** Əgər obyektdə yaradılan yeni xüsusiyyətin prototip zəncirində eyni adlı miras alınmış bir xüsusiyyət varsa, yeni yaradılan own property miras alınan xüsusiyyəti "kölgələyir" (shadows). Bu o deməkdir ki, həmin obyekt vasitəsilə həmin xüsusiyyətə daxil olduqda, özünəməxsus property-nin dəyəri qaytarılır, miras alınan dəyər isə gizli qalır və birbaşa obyekt vasitəsilə əlçatan olmur. Lakin, prototipdəki orijinal dəyər dəyişməz qalır.

```javascript
let unitcircle = { r: 1 };   
// Prototip obyekti: çevrənin radiusu 1-dir.

let c = Object.create(unitcircle); 
// 'c' obyekti 'unitcircle'-dən miras alır.   
// c-nin prototipi unitcircle-dir.
// c.r-i oxuyanda 1 qaytarılacaq.

c.x = 1;                  
// 'c'-nin özünəməxsus xüsusiyyəti: x = 1 yaradılır.
c.y = 1;                  
// 'c'-nin özünəməxsus xüsusiyyəti: y = 1 yaradılır.
c.r = 2;                 
// 'c'-nin özünəməxsus xüsusiyyəti: r = 2 yaradılır.
// Bu, 'unitcircle.r' (dəyəri 1 olan) xüsusiyyətini 'c' üçün "kölgələyir".

console.log(unitcircle.r); 
// Orijinal prototip obyekti dəyişməz qaldı.
console.log(c.r);          
//'c'-nin özünəməxsus 'r' xüsusiyyəti oxundu, prototipdəki gizləndi.

console.log(c.hasOwnProperty('r'));        
// true (çünki c.r indi c-nin öz xüsusiyyətidir)
console.log(unitcircle.hasOwnProperty('r')); 
// true (unitcircle.r də öz xüsusiyyətidir)
```
---

### ⚠️ İstisna: Accessor Properties (Getter/Setter) və Setter-lər

Yuxarıda izah olunan "shadowing" qaydası yalnız **data properties** (dəyər saxlayan adi xüsusiyyətlər) üçün keçərlidir. Əgər miras alınan property **accessor property**-dirsə (yəni, `getter` və ya `setter` funksiyasına malikdirsə) və ona bağlı **setter** metodu varsa, dəyər təyin edərkən yeni bir own property yaranmır. Bunun əvəzinə, miras alınan accessor property-nin **setter funksiyası çağırılır**.

Setter funksiyası çağırılanda, `this` açar sözü həmişə **ilk dəyəri təyin etməyə cəhd edən orijinal obyektə** (yəni, bizim nümunədə `c` obyektinə) işarə edir, prototip obyektinə yox. Bu, miras alınan accessor property-lər üzərində işləyərkən diqqətli olmağı tələb edən bir nüansdır. Bu mövzuya daha sonra, `Object.defineProperty()` və ya `class` mövzularında daha dərindən toxunacağıq.

---

## 6.3.3 Xüsusiyyətə Daxil Olarkən Yaranan Xətalar (Property Access Errors) ⚠️❌

JavaScript-də obyekt xüsusiyyətlərinə daxil olmaq və onları təyin etmək prosesi adətən sadə olsa da, bəzi hallarda gözlənilməz xətalarla qarşılaşa bilərik. Bu bölmədə bu zaman baş verə biləcək **səhvlər və xəta növləri** izah olunur.

---

### ❓ Mövcud Olmayan Xüsusiyyətlər (Non-existent Properties)

* Bir obyektin **özünə və ya prototip zəncirinə** aid olmayan bir xüsusiyyəti soruşmaq **sintaktik səhv hesab edilmir** — nəticə sadəcə `undefined` dəyəri olur.

  ```javascript
  let book = { title: "JavaScript", author: "Anonim" };
  console.log(book.subtitle); // Nəticə: undefined, çünki "subtitle" xüsusiyyəti mövcud deyil.
  console.log(book.year);     // Nəticə: undefined
  ```

* **Amma diqqət!** `null` və ya `undefined` dəyərlərin heç bir xüsusiyyəti ola bilməz (primitiv dəyərlərdir). Ona görə də, bu dəyərlərdən birinin xüsusiyyətinə daxil olmağa cəhd etsən, JavaScript **TypeError** xətası atır. Bu, ən çox rast gəlinən JavaScript xətalarından biridir.

  ```javascript
  // let len = book.subtitle.length; // book.subtitle 'undefined' olduğu üçün:
  // TypeError: Cannot read properties of undefined (reading 'length')
  // (Yəni, 'undefined' dəyərinin 'length' xüsusiyyətini oxumaq mümkün deyil!)
  ```

---

### 🛡️ `null` və `undefined`-dən Qorunmaq (Safe Navigation)

Dərin qatlanmış obyektlərdə xüsusiyyətlərə daxil olarkən `null` və ya `undefined` ilə qarşılaşma ehtimalını nəzərə almaq və buna qarşı müdafiə mexanizmləri qurmaq vacibdir, yoxsa `TypeError` ilə tez-tez üzləşəcəksən.

Bu cür halların öhdəsindən gəlmək üçün ən çox istifadə olunan üsullar:

* **Uzun (Verbose) Üsul:** Hər bir addımda varlığı yoxlamaq. Bu, kodun oxunaqlığını azalda bilər.

    ```javascript
    let surname = undefined;
    if (book) { // book obyektinin mövcudluğunu yoxla
      if (book.author) { // book.author obyektinin mövcudluğunu yoxla
        surname = book.author.surname; // Yalnız sonra surname-i əldə et
      }
    }
    console.log(surname); // undefined (əgər book.author yoxdursa)
    ```

* **Qısa və İdiomatik Üsul (`&&` logical AND operatoru ilə):** Bu üsul JavaScript-də çox məşhurdur və "short-circuiting" prinsipindən istifadə edir.

    ```javascript
    // book, book.author, book.author.surname ardıcıllığını yoxlayır.
    // Əgər bunlardan hər hansı biri 'falsy' (null, undefined, 0, "", false) olarsa,
    // dəyəri qaytarır və sonrakı yoxlamanı dayandırır (short-circuiting).
    let surname = book && book.author && book.author.surname;
    console.log(surname); // undefined (əgər book.author yoxdursa)
    ```
    Burada `&&` operatoru əgər `book` və ya `book.author` `undefined` (və ya `null`) olarsa, növbəti ifadəyə keçmir və `undefined` qaytarır. Bu, `TypeError`-dən qorunmağın effektiv yoludur.

---

### 🚀 ES2020: Optional Chaining Operatoru `?.`

ECMAScript 2020 (ES2020) ilə gələn ən faydalı sintaksislərdən biri **optional chaining operatoru (`?.`)**-dur. Bu operator, mürəkkəb obyekt strukturlarında iç-içə xüsusiyyətlərə daxil olarkən kodun daha qısa, daha oxunaqlı və xətalara qarşı daha davamlı olmasını təmin edir:

```javascript
let book = {
  title: "JavaScript",
  author: {
    firstname: "John",
    // surname: "Doe" //surname xüsusiyyəti yoxdur
  }
};

let authorSurname = book?.author?.surname; // book?.author?.surname - author və ya surname yoxdursa undefined qaytar
console.log(authorSurname); // Nəticə: undefined

// Massivlər və funksiyalarla da işləyir:
let users = [{ name: "Ayşe" }, { name: "Fatma" }];
let firstUserName = users?.[0]?.name; // Massivin 0-cı elementi və onun adı
console.log(firstUserName); // "Ayşe"

let greet = {
  sayHello: () => "Hello!"
};
let message = greet?.sayHello?.(); // sayHello metodu varsa çağır
console.log(message); // "Hello!"

let noGreet;
let noMessage = noGreet?.sayHello?.(); // noGreet yoxdursa çağırılmaz
console.log(noMessage); // undefined
```

Bu operator yuxarıdakı `&&`-lə eyni işi görür, amma daha aydın, daha qısa və xüsusilə dərin qatlanmış obyektlərdə koda oxunaqlıq qatır. Əgər `?.` operatorundan əvvəlki hissə `null` və ya `undefined` olarsa, ifadənin qalan hissəsi icra olunmur və dərhal `undefined` qaytarılır.

---

### ❌ Xüsusiyyət Təyin Edərkən Yaranan Xətalar (Setting Properties Errors)

Property təyin etməyə çalışarkən də bəzi xətalarla qarşılaşa bilərik:

* **`null` və ya `undefined` dəyərinə property təyin etmək:** Təbii ki, `null` və `undefined` primitiv dəyərlər olduğu üçün onlara yeni xüsusiyyət əlavə etmək və ya mövcudunu dəyişmək mümkün deyil. Buna cəhd etsən, **TypeError** alınır.

    ```javascript
    let obj = null;
    // obj.x = 10; // TypeError: Cannot set properties of null (setting 'x')
    ```

* **Read-only (yalnız oxuna bilən) xüsusiyyətlər:** Obyektin bəzi xüsusiyyətləri (`writable` atributu `false` olaraq təyin edildiyi üçün) dəyişdirilə bilməz. Belə bir xüsusiyyətə dəyər təyin etməyə çalışsan, **strict mode**-da **TypeError** atılır. Non-strict mode-da isə dəyişiklik sadəcə **uğursuz olur** (silent failure) və xəta atılmır.

    ```javascript
    let constantObject = {};
    Object.defineProperty(constantObject, 'PI', { value: 3.14, writable: false });
    // constantObject.PI = 3.14159; // Strict mode-da TypeError, Non-strict mode-da dəyişmir (silent failure)
    ```

* **Non-extensible (genişlənməyən) obyektlər:** Bəzi obyektlərə (`Object.preventExtensions()`, `Object.seal()`, `Object.freeze()` kimi metodlar vasitəsilə) yeni xüsusiyyət əlavə etmək qadağan edilə bilər. Belə bir obyektə yeni property əlavə etməyə çalışsan, **strict mode**-da **TypeError** atılır. Non-strict mode-da isə yenə də dəyişiklik **uğursuz olur** (silent failure).

    ```javascript
    let sealedObject = {};
    Object.seal(sealedObject); // Obyektə yeni xüsusiyyətlər əlavə etməyi qadağan edir və mövcudları silməyə icazə vermir.
    // sealedObject.newProp = "value"; // Strict mode-da TypeError, Non-strict mode-da dəyişmir (silent failure)
    ```

* **Strict Mode-un Rolu:** `use strict` direktivi JavaScript kodunun daha sərt qaydalarla icra olunmasını təmin edir. Bu rejimdə, yuxarıda qeyd olunan "uğursuz amma sakitcə keçən" (silent failure) əməliyyatlar artıq **TypeError** kimi açıq şəkildə xəta atılmasına səbəb olur. Bu, xətaları erkən aşkarlamağa və daha etibarlı kod yazmağa kömək edir.

---

### ⚙️ Xüsusiyyət Təyinin Uğursuz Olma Şərtləri – Dərinləşdirmə

Bir obyektin (`o`) `p` adlı xüsusiyyətini təyin etməyə cəhd edərkən (məsələn, `o.p = value`), bu əməliyyat aşağıdakı hallarda **uğursuz** ola bilər:

1.  `o`-nun **özündə olan `p` xüsusiyyəti `read-only` (yalnız oxuna bilən)** olarsa (`writable: false`). Bu halda dəyərini dəyişmək mümkün deyil.
2.  `o`-nun prototip zəncirindən **miras aldığı (`inherited`) `p` xüsusiyyəti `read-only` olarsa**, VƏ onu `o`-nun özündə yeni bir `p` xüsusiyyəti ilə **gizlətmək (shadowing) qadağan olunarsa** (bəzən bu, miras alınan accessor properties üçün olur).
3.  `o`-nun özündə `p` xüsusiyyəti yoxdursa, mirasdan `p` xüsusiyyəti varsa, amma miras alınan xüsusiyyətə bağlı **`setter` metodu yoxdursa** VƏ `o`-nun **`extensible` atributu `false`** olarsa (yəni `o`-ya yeni xüsusiyyət əlavə etmək qadağandır). Bu halda, JavaScript nə mirasdakı dəyəri dəyişə bilir (setter yoxdur), nə də obyektin özünə yeni xüsusiyyət əlavə edə bilir (extensible false).

---

# 6.4 Xüsusiyyətləri Silmək (Deleting Properties) 🗑️

Obyektin xüsusiyyətlərini silmək üçün **`delete` operatorundan** istifadə olunur. Burada vacib məqam budur ki, `delete` operatoru xüsusiyyətin **dəyərinə deyil, xüsusiyyətin özünə** (yəni, açar-dəyər cütünə) təsir edir və onu obyektdən tamamilə qaldırır.

```javascript
let book = {
  title: "JavaScript",
  author: "John Doe",
  year: 2023
};

console.log(book);         // { title: "JavaScript", author: "John Doe", year: 2023 }
delete book.author;        // book obyektinin "author" xüsusiyyəti silinir
console.log(book);         // { title: "JavaScript", year: 2023 }

delete book["year"];       // "year" xüsusiyyəti də silinir (bracket notation ilə də işləyir)
console.log(book);         // { title: "JavaScript" }
```

---

### ️🧩 `delete` operatoru və İrsi Xüsusiyyətlər (Inherited Properties)

`delete` operatoru yalnız obyektin **özünəməxsus xüsusiyyətlərini (own properties)** silir. O, **irsi (inherited) xüsusiyyətləri silmir**.

Əgər sən bir obyekt vasitəsilə miras alınan bir xüsusiyyəti silməyə cəhd etsən, `delete` operatoru həmin əməliyyatı yerinə yetirməyəcək, çünki xüsusiyyət obyektin özündə deyil, onun prototip zəncirində yerləşir. İrsi xüsusiyyətin silinməsi üçün onu prototip obyektindən silmək lazımdır. Bu isə həmin prototipdən miras alan bütün obyektlərə təsir edəcək.

```javascript
let protoObj = { x: 1 };
let myObj = Object.create(protoObj);
myObj.y = 2;

console.log(myObj.x); // 1 (irsən gəlir)
console.log(myObj.y); // 2 (own property)

delete myObj.x; // false və ya true qaytara bilər, lakin myObj.x dəyəri dəyişməz qalır
                // Xüsusiyyət silinmədi, çünki o, myObj-nin öz xüsusiyyəti deyil, prototipdədir.
console.log(myObj.x); // Hələ də 1

delete myObj.y; // true (own property silindi)
console.log(myObj.y); // undefined
```

---

### ✔️ `delete` operatorunun nəticəsi (Return Value)

`delete` ifadəsi həmişə bir boolean dəyər qaytarır:

* Əgər silmək mümkün olduqda (və ya silinəcək property mövcud deyilsə), **`true`** qaytarır.
* Əgər silmə əməliyyatı qadağan olunarsa (məsələn, `non-configurable` xüsusiyyət silinməyə çalışılırsa) və strict mode-da deyilsə, **`false`** qaytarır. Strict mode-da isə bu hallarda xəta atılır.

Misal:

```javascript
let o = { x: 1, y: 2 };

console.log(delete o.x);      // Nəticə: true (o.x silindi)
console.log(o);               // { y: 2 }

console.log(delete o.x);      // Nəticə: true (o.x artıq yoxdur, amma yenə də true qaytarır)

console.log(delete o.toString); // Nəticə: true (toString irsi xüsusiyyətdir, silmir, amma true qaytarır.
                                // Bu, əməliyyatın sintaktik cəhətdən keçərli olduğunu göstərir, lakin obyektə təsir etmir.)

console.log(delete 1);        // Nəticə: true (mənasız olsa da, sintaktik cəhətdən keçərlidir)
```

---

### ❌ `delete` və `non-configurable` Xüsusiyyətlər

`delete` operatoru **`non-configurable` (silinməz)** olaraq təyin edilmiş xüsusiyyətləri silə bilməz.

* **Built-in (daxili) obyektlərin bəzi xüsusiyyətləri** standart olaraq `non-configurable` olur (məsələn, `Object.prototype`-dakı metodlar).
* Brauzerlərdə və ya Node.js-də qlobal obyektin (`globalThis` və ya `window`/`global`) birbaşa elan edilmiş **`var` açar sözü ilə yaradılmış qlobal dəyişənlər** və **funksiya deklarasiyaları** da adətən `non-configurable` olurlar.

**Strict mode**-da belə bir `non-configurable` xüsusiyyəti silməyə cəhd **`TypeError`** ilə nəticələnir. Non-strict mode-da isə `delete` sadəcə **`false`** qaytarır və heç bir xəta atmır (silent failure).

```javascript
// Strict mode-da:
// "use strict";
// delete Object.prototype; // TypeError: Cannot delete property 'prototype' of function Object()
// var x = 1;
// delete x; // SyntaxError: Delete of an unqualified identifier in strict mode.
            // Bu səhv 'delete globalThis.x;' yazmağın vacibliyinə işarə edir.

// Non-strict mode-da:
console.log(delete Object.prototype);    // false
var x = 1;
console.log(delete x); // false (browserdə və ya Node.js-də qlobal skopda `var` ilə elan olunduğu üçün)
function f() {}
console.log(delete f); // false (qlobal skopda funksiya deklarasiyası olduğu üçün)
```

---

### ⚠️ Qlobal Obyekt Property-lərini Silmək və Strict Mode Fərqi

Non-strict mode-da qlobal obyektin konfiqurasiya edilə bilən xüsusiyyətlərini sadəcə `delete myGlobalVar;` kimi silmək mümkün ola bilər.

Lakin **Strict mode**-da, ixtisaslaşdırılmamış identifikatorların (`unqualified identifiers`) `delete` operatoru ilə silinməsi **`SyntaxError`** verir. Bu o deməkdir ki, qlobal dəyişəni silmək istəyirsənsə, ona qlobal obyekt (məsələn, `window` brauzerdə, `global` Node.js-də, və ya `globalThis` hər ikisində) vasitəsilə daxil olmalısan:

```javascript
"use strict";

var myGlobalVar = "Hello";
// delete myGlobalVar; // SyntaxError: Delete of an unqualified identifier in strict mode.

delete globalThis.myGlobalVar; // ✅ Strict mode-da düzgün yazılışdır.
console.log(myGlobalVar); // undefined

// const və let ilə elan edilmiş qlobal dəyişənlər heç vaxt silinə bilməz.
// delete globalThis.myConst; // Həmişə false və ya TypeError (qlobal obyektdə property kimi yoxdur).
```

---
# 6.5 Xüsusiyyətləri Yoxlamaq (Testing Properties) 🧪✅

Obyektin müəyyən bir **xüsusiyyətə (property)** malik olub-olmadığını yoxlamaq çox vacibdir. Bu, kodumuzun daha etibarlı işləməsinə kömək edir. Bunun üçün bir neçə üsul var.

---

### 1️⃣ `in` operatoru ❓

`in` operatoru bir xüsusiyyətin obyektin **özündə (own property)** və ya onun **prototip zəncirində (inherited property)** mövcud olub-olmadığını yoxlayır.

* **Sintaksis:** `"xüsusiyyət_adı" in obyekt`
* **Nəticə:** Mövcuddursa `true`, yoxdursa `false` qaytarır.

```javascript
let o = { x: 1 }; // 'o' obyektinin öz xüsusiyyəti 'x'

"x" in o;         // => true  ('x' 'o'-nun öz xüsusiyyətidir)
"y" in o;         // => false ('y' 'o'-da yoxdur)
"toString" in o;  // => true  ('toString' 'Object.prototype'-dən miras alınıb)
```

---

### 2️⃣ `hasOwnProperty()` metodu 🔑

Bu metod obyektin **yalnız özünə aid (own property)** xüsusiyyətləri yoxlayır. Miras alınan xüsusiyyətlər üçün `false` qaytarır.

* **Sintaksis:** `obyekt.hasOwnProperty("xüsusiyyət_adı")`
* **Nəticə:** Öz xüsusiyyətidirsə `true`, yoxdursa və ya miras alınıbsa `false` qaytarır.

```javascript
let o = { x: 1 };

o.hasOwnProperty("x");        // => true  ('x' 'o'-nun öz xüsusiyyətidir)
o.hasOwnProperty("y");        // => false ('y' 'o'-da yoxdur)
o.hasOwnProperty("toString"); // => false ('toString' miras alınıb, 'o'-nun öz xüsusiyyəti deyil)
```
Bu metod `for/in` dövrü ilə birlikdə yalnız obyektin öz xüsusiyyətlərini gəzmək üçün çox faydalıdır:

```javascript
for (let p in o) {
  if (o.hasOwnProperty(p)) {
    console.log(p); // Output: "x" (yalnız 'o'-nun öz xüsusiyyətlərini göstərir)
  }
}
```

---

### 3️⃣ `propertyIsEnumerable()` metodu 📝

Bu metod yoxlayır ki, xüsusiyyət:
1.  Obyektin **özünə aiddirmi (own property)**?
2.  Onun **`enumerable` atributu `true`**-durmu? (`enumerable` - "sayıla bilən" və ya "gəzilə bilən" deməkdir)

* **Sintaksis:** `obyekt.propertyIsEnumerable("xüsusiyyət_adı")`
* **Nəticə:** Hər iki şərt ödənilirsə `true`, əks halda `false` qaytarır.

```javascript
let o = { x: 1 };
o.propertyIsEnumerable("x");        // => true (öz enumerable xüsusiyyətidir)

o.propertyIsEnumerable("toString"); // => false (miras alınıb və enumerable deyil)

// Massivin 'length' xüsusiyyəti öz xüsusiyyətidir, amma enumerable deyil:
[1, 2].propertyIsEnumerable("length"); // => false
```

---

### 4️⃣ Xüsusiyyət dəyərini yoxlama (`!== undefined`) 🧐

Bu üsul, xüsusiyyətin dəyərinin `undefined` olub-olmadığını yoxlayır. **Lakin bu, xüsusiyyətin mövcudluğunu yoxlamaq üçün hər zaman etibarlı deyil**, çünki bir xüsusiyyətin dəyəri elə `undefined` ola bilər.

* **Sintaksis:** `obyekt.xüsusiyyət_adı !== undefined`
* **Nəticə:** Dəyəri `undefined`-dan fərqlidirsə `true`, `undefined` və ya xüsusiyyət yoxdursa `false` qaytarır.

```javascript
let o = { x: undefined, y: 2 }; // 'x' property'si var, amma dəyəri undefined

o.x !== undefined;       // => false (xüsusiyyət var, amma dəyəri undefined-dır)
o.y !== undefined;       // => true  (xüsusiyyət var və dəyəri undefined deyil)
o.z !== undefined;       // => false (xüsusiyyət mövcud deyil)

// Müqayisə üçün 'in' operatoru ilə:
"x" in o;                // => true  ('x' xüsusiyyəti mövcuddur)
"z" in o;                // => false ('z' xüsusiyyəti mövcud deyil)
```
Bu səbəbdən, xüsusiyyətin **mövcudluğunu** yoxlamaq üçün `in` operatoru və ya `hasOwnProperty()` metodları daha dəqiqdir.

---

### 5️⃣ `Object.keys()`, `Object.getOwnPropertyNames()`, `Object.getOwnPropertySymbols()` 📋

Bu metodlar obyektin **özünəməxsus xüsusiyyətlərinin adlarını** (yaxud Symbol-larını) massiv şəklində qaytarır. Sonra bu massivdə axtardığın xüsusiyyət adının olub-olmadığını yoxlaya bilərsən.

* **`Object.keys(o)`**: Obyektin **özünə aid olan və enumerable** xüsusiyyətlərinin adlarını qaytarır.
    ```javascript
    let o = { a: 1, b: 2 };
    Object.keys(o); // => ["a", "b"]
    ```
* **`Object.getOwnPropertyNames(o)`**: Obyektin **özünə aid olan** (enumerable olub-olmadığından asılı olmayaraq) xüsusiyyətlərinin adlarını qaytarır.
    ```javascript
    let o = { x: 1 };
    Object.defineProperty(o, "y", { value: 2, enumerable: false }); // 'y' enumerable deyil
    Object.keys(o);                // => ["x"]
    Object.getOwnPropertyNames(o); // => ["x", "y"]
    ```
* **`Object.getOwnPropertySymbols(o)`**: Obyektin **özünə aid olan Symbol** xüsusiyyətlərini qaytarır.
    ```javascript
    const mySymbol = Symbol("id");
    let o = { [mySymbol]: 1, name: "Test" };
    Object.getOwnPropertySymbols(o); // => [Symbol(id)]
    ```
Bu metodlarla qaytarılan massivdə `includes()` metodunu istifadə edərək xüsusiyyətin mövcudluğunu yoxlaya bilərsən:
```javascript
const o = { name: "Alice", age: 30 };
Object.keys(o).includes("name"); // => true
Object.keys(o).includes("email"); // => false
```

---

### 🚩 Qeyd

* **`in` operatoru** xüsusiyyətin mövcudluğunu dəyərindən asılı olmayaraq yoxlamaq üçün ən doğru seçimdir (öz və ya miras alınmış).
* **`hasOwnProperty()`** yalnız obyektin öz xüsusiyyətlərini nəzərə almaq lazım gəldikdə vacibdir.
* Sadə `!== undefined` yoxlama isə qısa kod yazmaq üçün əlverişlidir, amma xüsusiyyətin dəyəri `undefined` ola biləcəyi üçün **həmişə dəqiq nəticə vermir**.

---

# 6.6 Xüsusiyyətləri Siyahıya Almaq (Enumerating Properties) 🔄📜

JavaScript-də bəzən obyektin **tək bir xüsusiyyətini yox, bütün xüsusiyyətlərini (properties)** siyahı şəklində almaq və ya onlar üzərində dövr etmək (iterate) lazım olur. Bunun üçün müxtəlif üsullar mövcuddur.

---

### 1️⃣ `for/in` dövrü 🔄

`for/in` dövrü obyektin **bütün `enumerable` xüsusiyyətləri** (həm öz, həm də miras alınan) üzərində dövr edir.

* **`Enumerable` xüsusiyyətlər:** JavaScript tərəfindən normal kodla yaradılan xüsusiyyətlər (məsələn, `obj.x = 1`) **default olaraq `enumerable`** olurlar.
* **`Non-enumerable` xüsusiyyətlər:** Daxili (built-in) metodlar (məsələn, `toString()`) və ya `Object.defineProperty()` ilə xüsusi olaraq `enumerable: false` təyin edilmiş xüsusiyyətlər `non-enumerable` olurlar və `for/in` tərəfindən siyahıya alınmırlar.

```javascript
let o = { a: 1, b: 2, c: 3 };

// toString metodu Object.prototype-dədir və non-enumerable-dir:
console.log(o.propertyIsEnumerable("toString")); // => false

for (let p in o) {
  console.log(p); // Output: a, b, c (toString kimi miras alınan non-enumerable-lər göstərilməz)
}
```

---

### 2️⃣ `for/in` ilə miras alınan xüsusiyyətlərdən qorunmaq 🛡️

`for/in` dövrü həm obyektin öz xüsusiyyətlərini, həm də miras aldığı (ənumerable olan) xüsusiyyətləri siyahıya alır. Bəzən bizə yalnız obyektin **öz xüsusiyyətləri** lazım olur. Bu halda `hasOwnProperty()` metodundan istifadə edirik:

```javascript
let proto = { p: 1 };
let o = Object.create(proto);
o.x = 2; // 'o'-nun öz xüsusiyyəti
o.y = 3; // 'o'-nun öz xüsusiyyəti

for (let prop in o) {
  if (!o.hasOwnProperty(prop)) continue;  // Miras alınan xüsusiyyətləri ötür
  console.log(prop); // Output: x, y (p göstərilməz)
}
```
Əlavə olaraq, yalnız **data xüsusiyyətlərini** (metodları yox) gəzmək istəyirsənsə:

```javascript
for (let prop in o) {
  if (typeof o[prop] === "function") continue;  // Funksiyaları ötür
  console.log(prop);
}
```

---

### 3️⃣ Alternativ: `Object.keys()` və `for/of` dövrü 🎯

`for/in` dövrünə alternativ olaraq, obyektin xüsusiyyətlərinin adlarını bir **massiv şəklində almaq** və sonra bu massiv üzərində `for/of` dövrü ilə keçmək daha rahat və dəqiq ola bilər. Bu metodlar yalnız **obyektin öz xüsusiyyətlərini** qaytarır (miras alınanları yox).

Aşağıdakı metodlar bu məqsədlə istifadə olunur:

| Metod                            | Nə edir?                                                                                              |
| :------------------------------- | :---------------------------------------------------------------------------------------------------- |
| `Object.keys(obj)`               | Obyektin **`enumerable` olan öz xüsusiyyətlərinin** adlarını (string kimi) massivdə qaytarır.        |
| `Object.getOwnPropertyNames(obj)`| Obyektin **bütün öz xüsusiyyətlərinin** (enumerable və non-enumerable string adları) massivini qaytarır.|
| `Object.getOwnPropertySymbols(obj)`| Obyektin **bütün öz `Symbol`** xüsusiyyətlərini massivdə qaytarır.                                   |
| `Reflect.ownKeys(obj)`           | Obyektin **bütün öz xüsusiyyətlərinin** (həm string, həm də Symbol adları, enumerable/non-enumerable fərqi yoxdur) massivini qaytarır. Ən geniş siyahıdır. |

---

### 4️⃣ Misal: `Object.keys()` və `for/of` istifadəsi

```javascript
let o = { a: 1, b: 2, c: 3 };

for (let key of Object.keys(o)) { // Object.keys(o) => ["a", "b", "c"] massivini qaytarır
  console.log(key); // Output: a, b, c
}

// Xüsusiyyətin dəyərinə daxil olmaq:
for (let key of Object.keys(o)) {
  console.log(`${key}: ${o[key]}`); // Output: a: 1, b: 2, c: 3
}
```
Bu üsul `for/in` ilə müqayisədə daha çox istifadə olunur, çünki o, yalnız obyektin öz xüsusiyyətlərini verir və daha proqnozlaşdırıla bilən bir ardıcıllıq təmin edir.

---

### 6.6.1 Xüsusiyyətlərin Siyahıya Alınma Qaydası (Property Enumeration Order) 📋➡️

ES6 (ECMAScript 2015) standartı **obyektin xüsusiyyətlərinin siyahıya alınma qaydasını** (məsələn, `Object.keys()` kimi metodlarda) dəqiq şəkildə təyin edib. Bu sıralama ardıcıllığı aşağıdakı kimidir:

1.  **Rəqəm kimi görünən string adları olan xüsusiyyətlər:** Əvvəlcə, xüsusiyyət adları mənfi olmayan tam ədədlər kimi qəbul edilə bilən stringlər (məsələn, `"0"`, `"1"`, `"10"`) ən kiçikdən ən böyüyə doğru sıralanır. Bunlar adətən massiv indeksləri kimi düşünülə bilər.
2.  **Digər string adları olan xüsusiyyətlər:** Daha sonra yerdə qalan bütün string adlı xüsusiyyətlər (məsələn, `"name"`, `"-5"`, `"3.14"`) **obyektə əlavə olunma sırasına** görə siyahıya alınır.
3.  **`Symbol` adları olan xüsusiyyətlər:** Sonda isə **`Symbol` tipli açar adı olan xüsusiyyətlər** obyektə əlavə olunma sırasına görə göstərilir.

---

### `for/in` dövründə sıralanma qaydası

* `for/in` dövründə xüsusiyyətlərin sıralanma qaydası **ES6 standartında tam dəqiq göstərilməyib**, yəni brauzerdən-brauzerə və ya mühitdən-mühitə fərqliliklər ola bilər. Lakin praktikada əksər müasir mühitlərdə yuxarıdakı qaydaya bənzər şəkildə sıralanır.
* `for/in` həmçinin **prototip zənciri (proto chain)** boyunca yuxarı qalxaraq miras alınan `enumerable` xüsusiyyətləri də siyahıya əlavə edir.
* Əgər zəncir boyu eyni adda olan bir xüsusiyyət artıq siyahıya alınmışsa, o, təkrar siyahıya daxil edilmir, hətta prototipdəki xüsusiyyət `non-enumerable` olsa belə (bu, xüsusiyyətin "kölgələnməsi" səbəbindən olur).

---

### Qısa Nəticə ✨

* Obyektin bütün xüsusiyyətlərini siyahıya almaq və üzərində dövr etmək üçün **`Object.keys()`** (ən çox istifadə olunan), **`Object.getOwnPropertyNames()`**, **`Object.getOwnPropertySymbols()`**, və **`Reflect.ownKeys()`** kimi metodlar çox faydalıdır.
* **`for/in` dövrü** həm öz, həm də miras alınan `enumerable` xüsusiyyətləri sadalayır, bu səbəbdən yalnız öz xüsusiyyətlərini istəyəndə **`hasOwnProperty()`** ilə əlavə yoxlamalar lazım ola bilər.
* Xüsusiyyətlərin **siyahıya alınma qaydası** ES6 standartına əsasən müəyyən olunub, əsasən rəqəm tipli string indekslər əvvəl gəlir, sonra digər stringlər, sonda isə Symbollar.

---

# 6.7 Obyektləri Genişləndirmək (Extending Objects) 🧩✨

JavaScript-də tez-tez bir obyektin xüsusiyyətlərini (properties) başqa bir obyektə **kopyalamaq** lazım gəlir. Bu, obyektləri birləşdirmək və ya default dəyərləri təyin etmək üçün istifadə olunur.

---

### 1️⃣ `Object.assign()` — Standart Genişləndirmə Funksiyası ⚙️

**ES6 (ECMAScript 2015)** ilə gələn `Object.assign()` funksiyası obyektlərin xüsusiyyətlərini kopyalamaq üçün ən çox istifadə olunan standart metoddur.

* **Necə işləyir?**
    * İlk arqument **`target` (hədəf) obyekti** olur. Xüsusiyyətlər bu obyektə kopyalanır və funksiya sonda bu obyektin özünü qaytarır.
    * Sonrakı arqumentlər **`source` (mənbə) obyektləri** olur. Onlar dəyişdirilmir.
    * Hər `source` obyektin **`enumerable` (sayıla bilən) öz xüsusiyyətləri** (həmçinin `Symbol` açarları) `target` obyektə kopyalanır.
    * `source` obyektlər arqument sırasına görə işlənir. Yəni, əgər sonrakı `source` obyektlərdə əvvəlkilərlə eyni adlı xüsusiyyət varsa, **sonrakı dəyər əvvəlkinin üzərinə yazır** (overwrite edir).

```javascript
let target = { x: 1 };
let source1 = { y: 2, z: 3 };
let source2 = { z: 4, a: 5 };

Object.assign(target, source1, source2);
console.log(target); // => { x: 1, y: 2, z: 4, a: 5 }
// Qeyd: source2-dəki 'z: 4' source1-dəki 'z: 3'-ün üzərinə yazdı.
```

---

### 2️⃣ Getter və Setter-lərlə əlaqə 🔄

`Object.assign()` xüsusiyyətləri kopyalayarkən, onları adi dəyərlər (data properties) kimi oxuyur və yazır. Əgər `source` obyektdə **`getter` və ya `setter`** (accessor property) varsa, `Object.assign()` onları **funksiya kimi kopyalamır**. Sadəcə `getter` funksiyasını çağırır, qaytardığı dəyəri alır və `target` obyektə adi bir dəyər kimi yazır.

---

### 3️⃣ Default Dəyərlər və Üzərinə Yazma (Defaults & Overrides) 🎯

Tutaq ki, `defaults` adlı bir obyektdə müəyyən default xüsusiyyətlər var və sən onları `o` adlı başqa bir obyektə tətbiq etmək istəyirsən. Əgər `Object.assign(o, defaults)` yazsan, bu, **`o` obyektinin mövcud xüsusiyyətlərini `defaults`-dakı dəyərlərlə üstələyəcək (overwrite edəcək)**, bu da adətən istənilən davranış deyil.

Default dəyərləri düzgün tətbiq etmək (yəni, yalnız `o`-da olmayanları əlavə etmək) üçün `Object.assign()`-i belə istifadə etməlisən:

```javascript
let defaults = { color: "red", size: "medium" };
let userSettings = { size: "large", font: "Arial" }; // Kullanıcının öz ayarları

// Düzgün yol: Boş obyektə defaults kopyalanır, sonra userSettings üstün yazılır
// Bu şəkildə userSettings-dəki dəyərlər defaults-dakıları "üstələyir", yəni prioritet daşıyır.
let finalSettings = Object.assign({}, defaults, userSettings);
console.log(finalSettings); // => { color: "red", size: "large", font: "Arial" }
```
Bu yolla əvvəl `defaults` bir boş obyektə kopyalanır, sonra `userSettings`-in xüsusiyyətləri həmin obyektə kopyalanır. `userSettings`-dəki dəyərlər `defaults`-dakı eyni adlı dəyərləri üstələyir.

---

### 4️⃣ Spread Operatoru (`...`) ilə Oxşar Əməliyyat ✨

**ES6 (ES2015)** ilə gələn **spread operatoru (`...`)** obyektləri birləşdirmək üçün daha qısa və oxunaqlı bir sintaksis təklif edir. Bu, `Object.assign()` ilə eyni şəkildə işləyir:

```javascript
let defaults = { color: "red", size: "medium" };
let userSettings = { size: "large", font: "Arial" };

// Spread operatoru ilə:
let finalSettings = { ...defaults, ...userSettings };
console.log(finalSettings); // => { color: "red", size: "large", font: "Arial" }
```
Bu sintaksis daha çox üstünlük verilir, çünki daha aydın və lakonikdir.

---

### 5️⃣ Özümüzün `merge()` Funksiyamız — Yalnız Olmayanları Əlavə Etmək ✅

`Object.assign()` (və spread operatoru) mövcud xüsusiyyətləri üstələyir. Lakin bəzən biz yalnız **`target` obyektdə hələ mövcud olmayan** xüsusiyyətləri `source` obyektlərdən əlavə etmək istəyirik. Yəni, `target`-dəki mövcud dəyərlər qorunsun.

Bunun üçün özümüzə aid bir `merge()` funksiyası yaza bilərik:

```javascript
function merge(target, ...sources) { // '...sources' birdən çox source obyekt qəbul edir
  for (let source of sources) {
    for (let key of Object.keys(source)) { // Hər source obyektin öz enumerable açarlarını gəz
      if (!(key in target)) {  // Yalnız target obyektdə bu açar yoxdursa əlavə et
        target[key] = source[key];
      }
    }
  }
  return target; // Dəyişdirilmiş target obyekti qaytar
}
```

**Misal:**

```javascript
let obj1 = { x: 1 };
let obj2 = { x: 2, y: 2 };
let obj3 = { y: 3, z: 4 };

console.log(Object.assign({}, obj1, obj2, obj3));
// => { x: 2, y: 3, z: 4 } (Object.assign hər şeyi üstələyir)

console.log(merge(obj1, obj2, obj3));
// => { x: 1, y: 2, z: 4 } (merge yalnız mövcud olmayanı əlavə edir, 'x:1' və 'y:2' qaldı)
// Qeyd: obj1 özü də dəyişir, çünki 'target' odur.
```

---

### 6️⃣ Digər Faydalı Yardımçı Funksiyalar (Utilities) 🛠️

Eyni məntiqlə, obyektlərlə işləmək üçün başqa funksiyalar da yaza bilərik:

* **`restrict(target, allowedKeys)`**: `target` obyektinin yalnız `allowedKeys` massivində olan xüsusiyyətlərini saxlayar, digərlərini silər.
* **`subtract(target, keysToRemove)`**: `target` obyektindən `keysToRemove` massivində olan xüsusiyyətləri silər.
* Bu cür funksiyalar kodun daha təmiz və təkrar olunmadan yazılmasına kömək edir.

---

### Qısa Yekun 📝

* Obyektdən obyektə xüsusiyyətləri kopyalamaq üçün **`Object.assign()`** ən standart yoldur.
* **Spread operatoru (`...`)** daha müasir və oxunaqlı bir alternativ təqdim edir.
* Əgər mövcud dəyərləri qoruyaraq yalnız əskik xüsusiyyətləri əlavə etmək istəyirsənsə, öz **`merge()`** funksiyasını yaza bilərsən.
* Bu texnikalar JavaScript-də obyektlərlə işləyərkən çox faydalıdır.

---

# 6.8 Obyektləri Serializasiya Etmək (Serializing Objects) 📦➡️📝

### Serializasiya Nədir? 🤔

**Serializasiya** obyektin (və ya başqa bir məlumatın) strukturunu və dəyərlərini, onu **mətndən ibarət bir formaya (string)** çevirmək prosesidir. Bunun məqsədi məlumatı saxlamaq (faylda, verilənlər bazasında) və ya şəbəkə üzərindən başqa bir sistemə göndərməkdir. Sonra bu string yenidən orijinal obyektə çevrilə bilər.

JavaScript-də bu məqsədlə iki əsas funksiya istifadə olunur:

* **`JSON.stringify()`**: JavaScript obyektini **JSON formatlı stringə** çevirir.
* **`JSON.parse()`**: JSON formatlı stringi yenidən **JavaScript obyektinə** çevirir.

---

### JSON Nədir? 📜

**JSON (JavaScript Object Notation)**, yəni "JavaScript Obyekt Notasiyası", yüngül bir məlumat mübadiləsi formatıdır. Adından da göründüyü kimi, JavaScript obyekt və massiv (array) sintaksisinə çox oxşardır, lakin daha sadə və Universaldır (bir çox proqramlaşdırma dili tərəfindən dəstəklənir).

**Misal:**

```javascript
let o = { x: 1, y: { z: [false, null, "Salam"] } }; // Orijinal JavaScript obyekti

// Obyekti JSON stringə çeviririk:
let s = JSON.stringify(o);
console.log(s);
// Nəticə: '{"x":1,"y":{"z":[false,null,"Salam"]}}' (JSON string)

// JSON stringi yenidən JavaScript obyektinə çeviririk:
let p = JSON.parse(s);
console.log(p);
// Nəticə: { x: 1, y: { z: [false, null, "Salam"] } } (Orijinal obyektə oxşar)
```

---

### JSON-in Dəstəklədiyi Dəyərlər ✔️❌

JSON formatı yalnız müəyyən tipli dəyərləri dəstəkləyir:

* **Dəstəklənir:**
    * Obyektlər (JavaScript obyektləri)
    * Massivlər (Arrays)
    * Stringlər (Mətnlər)
    * Ədədlər (Numbers: tam ədədlər və onluqlar, amma `NaN`, `Infinity` istisna)
    * `true` (boolean)
    * `false` (boolean)
    * `null`

* **Xüsusi Hallar:**
    * `NaN` (Not a Number), `Infinity`, `-Infinity` dəyərləri serializasiya olunarkən JSON-da **`null`** kimi göstərilir.
    * **`Date` obyektləri** (tarix obyektləri) `JSON.stringify()` tərəfindən **ISO formatlı stringə** çevrilir (məsələn: `"2023-10-27T10:00:00.000Z"`). Lakin `JSON.parse()` həmin stringi **yenidən `Date` obyektinə çevirmir**, onu sadəcə bir string olaraq saxlayır. Tarix obyektini bərpa etmək üçün əlavə kod lazım olur.

* **Tam Dəstəklənməyənlər (Serializasiya Olunmayanlar):**
    * Funksiyalar (`function`)
    * `RegExp` (müntəzəm ifadələr)
    * `Error` obyektləri
    * `undefined`
    * `Symbol` dəyərləri
    * Dövrvari referanslar (circular references – obyektin özünə və ya özünün bir hissəsinə istinad etməsi)

    Bu tipli dəyərlərə malik xüsusiyyətlər `JSON.stringify()` tərəfindən **sadəcə stringdən çıxarılır** (silinir) və JSON stringinə daxil edilmir.

---

### İkinci Arqument — Serializasiyanı Fərdiləşdirmə 🎛️

`JSON.stringify()` və `JSON.parse()` funksiyalarının hər ikisinin **optional (ixtiyari) ikinci arqumenti** var. Bu arqumentlər serializasiya və ya parsing prosesini **fərdiləşdirməyə** imkan verir:

* **`JSON.stringify(value, replacer, space)`**:
    * `replacer`: Bu, bir massiv (hansı xüsusiyyətlərin daxil ediləcəyini göstərir) və ya bir funksiya (dəyərləri dəyişdirmək üçün) ola bilər.
    * `space`: JSON stringini oxunaqlı etmək üçün boşluq və ya tab əlavə edir.

* **`JSON.parse(text, reviver)`**:
    * `reviver`: JSON stringi obyektə çevrilərkən hər açar/dəyər cütünü emal etmək üçün bir funksiya. Məsələn, yuxarıda qeyd olunan tarix stringlərini `Date` obyektinə çevirmək üçün istifadə oluna bilər.

Bu fərdiləşdirmə imkanları ilə JSON-u öz ehtiyaclarına uyğunlaşdıra bilərsən.

---

# 6.9 Obyekt Metodları (Object Methods) 🔧

JavaScript obyektlərində iki növ faydalı metod var: **universal metodlar** (obyektin prototipindən miras alınanlar) və **statik metodlar** (`Object` konstruktorunun özünə aid olanlar).

---

### Universal Metodlar (Prototype Metodları) 🌍

Bütün JavaScript obyektləri (yəni, `Object.prototype`-dən gələn prototip zənciri olanlar) avtomatik olaraq `Object.prototype`-də təyin edilmiş metodları miras alırlar. Bu metodlar hər bir obyekt üzərində istifadə edilə bilər.

**Misal:**

* **`hasOwnProperty()`**: Bu metod obyektin **özünə aid (own property)** müəyyən bir xüsusiyyətin olub-olmadığını yoxlayır. Miras alınan xüsusiyyətləri saymır.
* **`propertyIsEnumerable()`**: Bu metod isə xüsusiyyətin obyektin özünə aid olub-olmadığını və `for/in` dövrü kimi yerlərdə **siyahıya alına bilən (enumerable)** olub-olmadığını yoxlayır.

---

### Statik Metodlar (Object Konstruktorunun Metodları) 📚

`Object` konstruktorunun özündə də çoxlu faydalı metodlar var. Bu metodlar birbaşa `Object` üzərindən çağırılır və obyektin özünə aid deyil.

**Misal:**

* **`Object.create()`**: Yeni bir obyekt yaradır və onun prototipini təyin edir.
* **`Object.keys()`**: Bir obyektin **özünə aid olan və `enumerable`** xüsusiyyətlərinin adlarını massiv olaraq qaytarır.
* **`Object.assign()`**: Bir və ya bir neçə mənbə obyektindən xüsusiyyətləri hədəf obyektə kopyalayır.

---

### Gələcəkdə Daha Çox Öyrənəcəyik! 🚀

Bu metodların necə işlədiyini, nümunələrini və daha dərin istifadələrini sonrakı bölümlərdə ətraflı izah edəcəyik. Xüsusilə də:

* Bu metodların spesifik obyektlərdə (məsələn, `Date` və `Number` obyektləri) necə **yenidən təyin edildiyi (override)** öyrəniləcək.
* 9-cu fəsildə isə bu metodları **siniflər (classes)** üçün necə ümumi şəkildə təyin etmək mümkün olduğu göstəriləcək.

---

## 6.9.1 `toString()` Metodu 🧾➡️🖋️

### `toString()` Nədir? 🤔

`toString()` metodu JavaScript obyektlərinin ən əsas universal metodlarından biridir. O, **heç bir arqument qəbul etmir** və çağırıldığı obyektin **string (mətn) təmsilçiliyini** qaytarır. JavaScript çox vaxt obyektləri stringə çevirmək lazım gələndə bu metodu avtomatik olaraq çağırır.

**Misal üçün, belə hallar:**

* Bir stringlə obyekt birləşdiriləndə: `"Dəyər: " + myObject`
* String gözləyən bir funksiya və ya parametrə obyekt göndərəndə.

---

### Default `toString()` Necədir? 😐

`Object.prototype`-dəki default `toString()` versiyası çox məlumat verici deyil. O, adətən obyektin "klass" adını bildirən bir string qaytarır:

```javascript
let o = { x: 1, y: 1 };
let s = o.toString();
console.log(s); // Nəticə: "[object Object]"
// Array üçün: [1,2,3].toString() => "1,2,3"
// Function üçün: (function(){}).toString() => "function(){}"
```

---

### Öz `toString()` Metodunu Yaratmaq (Override Etmək) 🌟

Çox vaxt default `toString()` metodu bizim üçün kifayət qədər faydalı olmur. Daha mənalı və oxunaqlı bir string təmsilçiliyi əldə etmək üçün **`toString()` metodunu obyektin özündə yenidən yaza (override edə) bilərik**.

**Misal:** Bir nöqtə obyektini `(x, y)` formatında göstərmək üçün:

```javascript
let point = {
  x: 1,
  y: 2,
  toString: function() { // toString metodunu override edirik
    return `(${this.x}, ${this.y})`; // Bu obyektin x və y dəyərlərini istifadə edirik
  }
};

console.log(String(point)); // => "(1, 2)" (String() funksiyası point.toString() metodunu çağırır)
console.log("Nöqtə: " + point); // => "Nöqtə: (1, 2)" (String birləşməsi toString() metodunu çağırır)
```

---

## 6.9.2 `toLocaleString()` Metodu 🌍🖋️

### `toLocaleString()` Nədir? 🤔

`toLocaleString()` metodu da `Object.prototype`-dən miras alınan universal bir metoddur. O, obyekti **lokallaşdırılmış (yəni, yerli dil və region qaydalarına uyğun) stringə** çevirmək üçün nəzərdə tutulub.

* Default `toLocaleString()` versiyası sadəcə `toString()` metodunu çağırır, yəni özü heç bir lokallaşdırma aparmır.

---

### Fərqli Klasslarda Xüsusi Versiyalar (Overridden) 📊

Bəzi daxili JavaScript sinifləri (klassları) `toLocaleString()` metodunu özləri üçün yenidən təyin edirlər ki, dəyərləri yerli qaydalara uyğun formatlasınlar:

* **`Date` obyektləri**: Tarix və vaxtı istifadəçinin yerli saat qurşağı, dil və format qaydalarına uyğun göstərir.
* **`Number` obyektləri**: Ədədləri minlik ayırıcıları, onluq ayırıcıları və valyuta simvolları kimi yerli formatlara uyğun göstərir.
* **`Array` obyektləri**: Massivin hər bir elementinin `toLocaleString()` metodunu çağırır və sonra onları birləşdirir (baxmayaraq ki, `toString()`-dan fərqli olaraq, burada elementlərin öz `toLocaleString()` metodları işləyir).

---

### Öz `toLocaleString()` Nümunən:

`toString()` metodunu override etdiyimiz kimi, `toLocaleString()` metodunu da öz obyektlərimiz üçün yenidən yaza bilərik. Bu zaman obyektin daxilindəki ədədləri və ya tarixləri yerli formatlara uyğun çevirmək üçün daxili `toLocaleString()` metodlarından istifadə edə bilərik.

```javascript
let point = {
  x: 1000,
  y: 2000,
  toString: function() {
    return `(${this.x}, ${this.y})`; // Sadə string təmsilçiliyi
  },
  toLocaleString: function() { // toLocaleString metodunu override edirik
    // Burada rəqəmlərin öz toLocaleString() metodunu çağırırıq:
    return `(${this.x.toLocaleString()}, ${this.y.toLocaleString()})`;
  }
};

console.log(point.toString());        // => "(1000, 2000)"
console.log(point.toLocaleString());  // => "(1,000, 2,000)" (minlik ayrıcıları ilə, yerli formata görə)
```

---

### Əlavə: Beynəlxalqlaşdırma API-ləri (Internationalization API) 🌐

JavaScript-də **Internationalization (Beynəlxalqlaşma)** API-ləri (§11.7) mövcuddur. Bu API-lər `toLocaleString()` metodunu yaratmaq və ya dəyərləri müxtəlif dillərə və regionlara uyğun formatlamaq üçün çox faydalıdır. Məsələn, `Intl.DateTimeFormat` və `Intl.NumberFormat` kimi obyektlər ilə tarix, vaxt və nömrələri dəqiq şəkildə beynəlxalq standartlara uyğun formatlaya bilərsən.

---

## 6.9.3 `valueOf()` Metodu 🔢

### `valueOf()` Nədir? 🤔

`valueOf()` metodu JavaScript-də obyektin **primitiv dəyərə** (əsasən rəqəmə) çevrilməsi lazım gələndə avtomatik olaraq çağırılır. Bu, obyektin rəqəmsal bir kontekstdə istifadə olunduğu zaman baş verir.

---

### Default Davranış 🔄

Əsas (default) `valueOf()` metodu obyektin özünü qaytarır və adətən heç bir xüsusi çevirmə etmir. Amma bəzi daxili siniflər (məsələn, `Date`) bu metodu özləri üçün yenidən təyin ediblər.

---

### `Date` Sinfində `valueOf()` 📅

`Date` obyektlərinin `valueOf()` metodu tarixi **millisaniyələrlə ölçülmüş bir rəqəmə** (Unix timestamp kimi) çevirir. Bu xüsusiyyət tarixləri `+`, `-`, `<`, `>` kimi operatorlarla asanlıqla müqayisə etməyə imkan verir.

---

### Öz `valueOf()` Nümunəsi — Məsafəni Hesablayan Nöqtə 📍

Biz də öz obyektlərimiz üçün `valueOf()` metodunu yenidən yaza (override edə) bilərik. Məsələn, bir `point` (nöqtə) obyektinin `(0,0)` nöqtəsindən olan məsafəsini rəqəm olaraq qaytarmaq üçün:

```javascript
let point = {
  x: 3,
  y: 4,
  valueOf: function() {
    // Math.hypot(x, y) (0,0) nöqtəsindən (x,y) nöqtəsinə olan məsafəni hesablayır.
    return Math.hypot(this.x, this.y); // (3,4) üçün nəticə: 5
  }
};

console.log(point > 4);       // => true  (5 > 4 olduğu üçün)
console.log(point > 5);       // => false (5 > 5 deyil)
console.log(point < 6);       // => true  (5 < 6 olduğu üçün)
console.log(Number(point));   // => 5 (Number() funksiyası point.valueOf() metodunu çağırır)
```

---

## 6.9.4 `toJSON()` Metodu 🗃️➡️📝

### `toJSON()` Nədir? 🤔

`Object.prototype`-də standart bir `toJSON()` metodu yoxdur. Lakin **`JSON.stringify()`** funksiyası obyektləri JSON stringinə çevirərkən xüsusi olaraq obyektin **`toJSON()` metodunu axtarır**.

* Əgər obyektin özünə aid bir `toJSON()` metodu varsa, `JSON.stringify()` obyekti serializasiya etmək əvəzinə, həmin `toJSON()` metodunun **qaytardığı nəticəni** serializasiya edir.

---

### `Date` Sinfi Nümunəsi 📅

`Date` sinfi öz `toJSON()` metodunu təyin edib. Bu metod `Date` obyektini standart **ISO formatlı stringə** çevirir. Bu o deməkdir ki, `JSON.stringify()` bir `Date` obyektini gördükdə, onu birbaşa stringə çevirmək üçün bu `toJSON()` metodundan istifadə edir.

---

### Öz `toJSON()` Nümunəsi — `point` Obyekti 💡

`toJSON()` metodunu override edərək obyektimizin JSON-a necə çevriləcəyinə nəzarət edə bilərik. Məsələn, `point` obyektimizi `(x, y)` formatında bir string olaraq serializasiya etmək üçün:

```javascript
let point = {
  x: 1,
  y: 2,
  toString: function() {
    return `(${this.x}, ${this.y})`; // Point obyektinin string təmsilçiliyi
  },
  toJSON: function() {
    // JSON.stringify() çağırılanda bu metod işə düşür
    return this.toString(); // Və point obyektini toString() nəticəsinə çevirir
  }
};

// Massiv içində point obyektini serializasiya edirik:
console.log(JSON.stringify([point])); // => '["(1, 2)"]'
// Nəticə: JSON.stringify() `point`-in `toJSON()` metodunu çağırır və nəticə kimi `"(1, 2)"` stringini serializasiya edir.
```
Bu, obyektlərin JSON formatında necə təmsil olunacağını fərdiləşdirmək üçün çox faydalı bir yoldur.

---

## 6.10 Genişlənmiş Obyekt Literal Sintaksisi (Extended Object Literal Syntax) 🧩✨

ES6 (ECMAScript 2015) və sonrakı JavaScript versiyaları **obyekt literalını (object literal)** yazmaq üçün bir neçə yeni və faydalı üsul gətirib. Bu yeniliklər kodumuzu daha qısa, oxunaqlı və dinamik edir.

---

## 6.10.1 Qısa Yazılış Xüsusiyyəti (Shorthand Properties) ⚡

Əgər bir obyekt xüsusiyyətinin adı ilə ona təyin edilən dəyəri verən dəyişənin adı eynidirsə, artıq hər ikisini yazmağa ehtiyac qalmır.

**Əvvəl:**

```javascript
let x = 1, y = 2;
let o = {
  x: x, // Xüsusiyyət adı 'x', dəyər 'x' dəyişənindən
  y: y  // Xüsusiyyət adı 'y', dəyər 'y' dəyişənindən
};
console.log(o.x + o.y); // => 3
```

**İndi (ES6 ilə):**

```javascript
let x = 1, y = 2;
let o = { x, y }; // Əgər adlar eynidirsə, sadəcə dəyişənin adını yazmaq kifayətdir
console.log(o.x + o.y); // => 3
```
Bu sintaksis kodu daha qısa və oxunaqlı edir.

---

## 6.10.2 Hesablanmış (Dinamik) Xüsusiyyət Adları (Computed Property Names) 🧮

Bəzən obyektin bir xüsusiyyətinin adı sabit olmur, bir dəyişkəndə saxlanılır və ya bir funksiyanın nəticəsi olur. Artıq obyekt literalının içində birbaşa bu cür dinamik adları təyin etmək mümkündür.

**Əvvəl (obyekti yaratdıqdan sonra əlavə etmək):**

```javascript
const PROPERTY_NAME = "p1";
function computePropertyName() { return "p" + 2; }

let o = {};
o[PROPERTY_NAME] = 1;         // Obyekti yaratdıqdan sonra əlavə edirik
o[computePropertyName()] = 2; // Obyekti yaratdıqdan sonra əlavə edirik
console.log(o.p1 + o.p2); // => 3
```

**İndi (ES6 ilə obyekt literalının içində):**

```javascript
const PROPERTY_NAME = "p1";
function computePropertyName() { return "p" + 2; }

let p = {
  [PROPERTY_NAME]: 1,          // PROPERTY_NAME dəyişəninin dəyəri "p1" property adı olur
  [computePropertyName()]: 2   // computePropertyName() funksiyasının nəticəsi "p2" property adı olur
};
console.log(p.p1 + p.p2); // => 3
```
Kvadrat mötərizələr `[ ... ]` içində istənilən JavaScript ifadəsi yazıla bilər. Bu ifadə icra olunur və nəticəsi xüsusiyyətin adı kimi istifadə olunur.

---

## 6.10.3 Symbol-lardan Xüsusiyyət Adı Kimi İstifadə (Symbols as Property Names) 🛡️

ES6 ilə obyekt xüsusiyyətlərinin adları artıq yalnız string (mətn) deyil, həm də **`Symbol`** ola bilər. Symbol-lar JavaScript-də unikal və "şəffaf olmayan" (opaque) dəyərlərdir.

```javascript
const extension = Symbol("my extension symbol"); // Unikal bir Symbol yaradırıq
let o = {
  [extension]: { /* genişlənmə məlumatları burada saxlanır */ } // Symbol-u property adı kimi istifadə edirik
};

o[extension].x = 0; // Bu Symbol ilə obyektə məlumat əlavə edirik
console.log(o[extension].x); // => 0
```

* `Symbol()` funksiyası ilə hər dəfə unikal bir `Symbol` yaradılır. Ona verdiyiniz string arqumenti yalnız debugging (kodda səhvləri tapmaq) məqsədi üçündür, Symbol-un öz dəyərini dəyişmir.
* **Faydası:** Symbol-lar obyektlərə unikal və başqa kodla **toqquşmayan (collision-free)** xüsusiyyət adları əlavə etməyə imkan verir. Bu, xüsusilə üçüncü tərəfin kodundan aldığınız obyektə özəl məlumatlar əlavə etmək istədiyinizdə faydalıdır, çünki adların eyniliyinə görə bir-birinin üzərinə yazma (overwrite) riski yox olur.
* **Qeyd:** Symbol-lar təhlükəsizlik (security) üçün deyil, yalnız ad toqquşmalarının qarşısını almaq üçün nəzərdə tutulub.

---

## 6.10.4 Spread Operator (`...`) — Obyektə Xüsusiyyətlərin Yayılması (Kopyalanması) 📤

ES2018-dən başlayaraq, **spread operatoru (`...`)** mövcud bir obyektin bütün özünə məxsus xüsusiyyətlərini yeni bir obyektin içinə asanlıqla kopyalamaq üçün istifadə olunur.

```javascript
let position = { x: 0, y: 0 };
let dimensions = { width: 100, height: 75 };

let rect = { ...position, ...dimensions }; // position və dimensions-ın xüsusiyyətlərini rect-ə kopyalayır

console.log(rect); // => { x: 0, y: 0, width: 100, height: 75 }
console.log(rect.x + rect.y + rect.width + rect.height); // => 175
```

* `...` operatoru yalnız obyektin **özünə məxsus (own)** və **`enumerable`** xüsusiyyətlərini kopyalayır.
* **Miras alınan (inherited)** xüsusiyyətlər kopyalanmır.

**Misal:**

```javascript
let o = Object.create({ x: 1 }); // 'x' miras alınan property-dir
let p = { ...o };               // 'o'-dan 'x' kopyalanmır

console.log(p.x); // => undefined, çünki 'x' 'p'-nin özünə məxsus xüsusiyyəti olmadı
```

**Vacib Qeyd:**

* Əgər iki kopyalanan obyektin **eyni adlı xüsusiyyətləri** varsa, **sonuncu obyektin dəyəri üstünlük qazanır** (overwrite edir):

```javascript
let o = { x: 1 };
let p = { x: 0, ...o }; // 'o'-dakı 'x:1' 'x:0'-ın üzərinə yazır
console.log(p.x); // => 1

let q = { ...o, x: 2 }; // 'o'-dakı 'x:1'-dən sonra 'x:2' yazıldığı üçün bu üstün gəlir
console.log(q.x); // => 2
```

* Spread operatorunun performansı obyektin xüsusiyyətlərinin sayına görə **O(n)** mürəkkəbliyindədir (yəni xüsusiyyət sayı artdıqca icra vaxtı da xətti olaraq artır). Çox böyük obyektlərin spread edilməsi performansa təsir edə bilər.

---

## 6.10.5 Qısa Yazılışla Metod Yaratmaq (Shorthand Methods) 🏎️

ES6-da obyekt metodlarını təyin etmək üçün daha qısa və aydın bir sintaksis gətirildi.

**ES5-də metod yazılışı:**

```javascript
let square = {
  side: 10,
  area: function() { // 'function' açar sözü və iki nöqtə (:) var
    return this.side * this.side;
  }
};
console.log(square.area()); // => 100
```

**ES6 ilə qısa yazılış:**

```javascript
let square = {
  side: 10,
  area() { // 'function' açar sözü və iki nöqtə (:) yoxdur
    return this.side * this.side;
  }
};
console.log(square.area()); // => 100
```

* Bu yeni sintaksis **`function` açar sözünü və iki nöqtəni (`:`)** yazmaq ehtiyacını aradan qaldırır.
* Bu, obyektin daxilindəki elementin bir **metod** olduğunu daha aydın göstərir.

Metod adları adi identifikator (dəyişən adı kimi), string, hesablanmış property adı (computed property) və hətta `Symbol` ola bilər:

```javascript
const METHOD_NAME = "m";
const mySymbolMethod = Symbol("myMethod"); // Unikal Symbol metodu adı

let weirdMethods = {
  "method With Spaces"(x) { return x + 1; }, // Boşluqlu string adı
  [METHOD_NAME](x) { return x + 2; },         // Hesablanmış property adı
  [mySymbolMethod](x) { return x + 3; }       // Symbol metodu adı
};

console.log(weirdMethods["method With Spaces"](1)); // => 2
console.log(weirdMethods.m(1));                     // => 3
console.log(weirdMethods[mySymbolMethod](1));       // => 4
```

* `Symbol` adları olan metodlar da adi metodlar kimi çağırıla bilər.
* Məsələn, `Symbol.iterator` metodu obyektləri iterasiya (üzərində dövr etmə) üçün istifadə olunur.


---

## 6.10.6 Xüsusiyyətlərin Oxuyucuları və Yazıcıları (Property Getters and Setters) 📝

JavaScript-də obyekt xüsusiyyətləri iki cür ola bilər:

1.  **Data Property**: Bu, bildiyimiz adi xüsusiyyətdir, sadəcə bir adın bir dəyəri saxladığı yerdir (məsələn, `ad: "Əli"`).
2.  **Accessor Property**: Bu, birbaşa dəyər saxlamaq əvəzinə, dəyəri oxuyanda və ya yazanda çağırılan xüsusi **getter** və **setter** metodlarına malikdir. Bu metodlar bir növ "qapıçı" kimidir, xüsusiyyətə daxil olan və çıxan dəyərləri idarə edir.

* **Getter**: Bir xüsusiyyətin dəyəri oxunanda (məsələn, `obyekt.xususiyyet` yazanda) çağırılır və dəyəri qaytarır.
* **Setter**: Bir xüsusiyyətə dəyər təyin ediləndə (məsələn, `obyekt.xususiyyet = deyer` yazanda) çağırılır və təyin edilən dəyəri parametr kimi qəbul edir.

---

### Sintaksis:

```javascript
let mehsul = {
  // Bu adi data property-dir:
  qiymet: 10,

  // Bu isə accessor property-dir (getter və setter-i var):
  get vergiliQiymet() {
    // vergiliQiymet oxunanda bu işləyir
    return this.qiymet * 1.18; // Qiymətə 18% ƏDV əlavə edirik
  },

  set vergiliQiymet(yeniQiymet) {
    // vergiliQiymet-ə dəyər veriləndə bu işləyir
    this.qiymet = yeniQiymet / 1.18; // Vergisiz qiyməti hesablayıb saxlayırıq
  }
};

console.log(mehsul.qiymet);          // => 10
console.log(mehsul.vergiliQiymet);   // vergiliQiymet oxunur, getter işləyir => 11.8 (10 * 1.18)

mehsul.vergiliQiymet = 23.6;         // vergiliQiymet-ə dəyər verilir, setter işləyir
console.log(mehsul.qiymet);          // => 20 (23.6 / 1.18)
console.log(mehsul.vergiliQiymet);   // => 23.6
```

Bu nümunədə **`vergiliQiymet`** birbaşa dəyər saxlamır. Onun dəyəri **`qiymet`** data property-si üzərindən hesablanır və idarə olunur. Bu, daxili məlumatın (qiymətin) necə istifadə olunduğunu gizlətməyə və daha çevik riyazi hesablamalar etməyə imkan verir.

---

### Nümunə: Tam Adı Yoxlama (Virtual Property) 🧍

Gəlin bir istifadəçi obyektinə baxaq. Biz istifadəçinin `ad` və `soyad`ını saxlayırıq, amma eyni zamanda `tamAd` adlı bir "virtual" xüsusiyyətə də ehtiyacımız var.

```javascript
let user = {
  ad: "Kamran",
  soyad: "Əliyev",

  get tamAd() {
    // tamAd-ı oxuyanda ad və soyadı birləşdirir
    return `${this.ad} ${this.soyad}`;
  },

  set tamAd(value) {
    // tamAd-a dəyər veriləndə, dəyəri boşluğa görə ayırıb ad və soyadı təyin edir
    let parts = value.split(" "); // "Ayxan Muradov" => ["Ayxan", "Muradov"]
    this.ad = parts[0];
    this.soyad = parts[1];
  }
};

console.log(user.tamAd); // => "Kamran Əliyev" (getter işləyir)

user.tamAd = "Ayxan Muradov"; // Setter işləyir
console.log(user.ad);      // => "Ayxan"
console.log(user.soyad);   // => "Muradov"
console.log(user.tamAd);   // => "Ayxan Muradov"
```
Burada `tamAd` adlı bir data property yoxdur, amma biz ona adi bir property kimi daxil ola və ya dəyər təyin edə bilirik. Bu, kodumuzu daha səliqəli və məntiqi edir.

---

### Nümunə: Yaşın Avtomatik Hesablanması 🎂

Doğum tarixini saxlayıb, yaşını avtomatik hesablamaq istəyirik:

```javascript
let person = {
  dogumIli: 1990,

  get yas() {
    let currentYear = new Date().getFullYear(); // Cari ili alırıq
    return currentYear - this.dogumIli; // Yaşı hesablayırıq
  },

  set yas(yeniYas) {
    // Yaşı təyin etməyə çalışdıqda xəta veririk, çünki yaş avtomatik hesablanmalıdır.
    // Veya doğum ilini dəyişə bilərik.
    let currentYear = new Date().getFullYear();
    this.dogumIli = currentYear - yeniYas; // Yaşa görə doğum ilini dəyişir
  }
};

console.log(person.yas); // Məsələn, 2025-ci ildə => 35 (getter işləyir)

person.yas = 25; // Setter işləyir, doğum ilini dəyişir
console.log(person.dogumIli); // => 2000
```
Bu nümunədə `yas` bir `getter` və `setter` vasitəsilə idarə olunur, beləliklə obyektin daxili məntiqini qoruyur.