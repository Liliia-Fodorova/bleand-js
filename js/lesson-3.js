// // задача№1

// // Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить 
// // квадрати кожного елементу вхідного масиву. 
// // Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers2 = [1, 2, 3, 4, 5];
// const doubledNambers = numbers2.map(number => number * number);
// console.log(doubledNambers);

// //2 спосіб

// const getDoubleNambers1 = (array) => array.map((element) => element * element);
// console.log(getDoubleNambers1(numbers2));

// // const numbers = [1, 2, 3, 4, 5];





// // задача№2

// // Дано масив об'єктів. Створіть новий масив, що містить всі значення 
// // з масивів values кожного об'єкту, збережених в одному масиві. 
// // Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];

// const result = data.flatMap(item => item.values);

// console.log(result);

// //2 

// const result01 = data.reduce((acc, item) => acc.concat(item.values), []);
// console.log(result01);




// // задача№3

// // Дано масив об'єктів. 
// // Перевірте, чи є хоча б один об'єкт з віком менше 20 років. 
// // Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];


// const hasUnder20 = people.some(people => people.age < 20);

// console.log(hasUnder20);

// //2
// const hasUnder20_1 = people.reduce((acc, people) => acc || people.age < 20, false);
// console.log(hasUnder20_1);



// // задача№4

// // Дано масив чисел [2, 4, 6, 8, 10]. 
// // Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers1 = [2, 4, 6, 8, 10];

// const isAllEven = numbers1.every(number => number % 2 === 0);

// console.log(isAllEven);


// //2 
// const isAllEven1 = numbers1.reduce((acc, number) => acc && number % 2 === 0, true);
// console.log(isAllEven1);



// задача№5

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];


// const firstOdd = numbers.find(num => num % 2 !== 0);

// console.log(firstOdd);



// // Завдання 6

// // Відсортуйте масив чисел [4, 2, 5, 1, 3] 
// // у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];
// numbersArray.sort((a, b) => a - b);
// console.log(numbersArray);



// // Завдання 7

// // Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
// //  у порядку алфавіту. 
// // Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];
// stringArray.sort((a, b) => a.localeCompare(b));
// console.log(stringArray);



// Завдання 8

//  Відсортуйте масив об'єктів за віком у порядку зростання. 
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];
// users.sort((a, b) => a.age - b.age);
// console.log((users));


// Завдання 9

// Дано масив об'єктів. 
// Створіть новий масив, що містить тільки об'єкти, в яких 
// вік більше 20 років. 
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//     { name: 'John', age: 27 },
//     { name: 'Jane', age: 31 },
//     { name: 'Bob', age: 19 },
// ];

// const filteredUser = user.filter(person => person.age > 20);
// console.log(filteredUser);



// Завдання 10

// Дано масив чисел [1, 2, 3, 4, 5]. 
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers3 = [1, 2, 3, 4, 5];
// let sum = numbers3.reduce((acc, curentValue) => acc + curentValue, 0);
// console.log(sum);


//ДОП.ЗАДАЧА

// Напишіть функцію getStatisticsOfTags(array), яка приймає масив
// і повертає об'єкт статистики, який враховує скільки разів повторюється кожен тег
// в усіх користувачів разом (не для кожного окремо)
// має бути відповідь: {js: 5, nodejs: 5, html: 2, css: 2, react: 4}

// function getStatisticsOfTags(array) {
//     return array.reduce((acc, user) => {
//         user.tags.forEach(tag => {
//             if (acc[tag]) {
//                 acc[tag] += 1;
//             } else {
//                 acc[tag] = 1;
//             }
//         });
//         return acc;
//     },{})
// }

// const users = [
//   { tags: ["js",  "nodejs", "html", "css", "react"] },
//   { tags: ["js", "react","nodejs", "css"] },
//   { tags: ["nodejs", "js", "html", "react"] },
//   { tags: ["react", "nodejs", "js"] },
//   { tags:["js", "nodejs"]}
// ];

// console.log(getStatisticsOfTags(users));

   


// Завдання 11
// Розроби клас Calculator, який дозволяє виконувати арифметичні 
 //  операції над числом за допомогою методів класу, підтримуючи
 // ланцюжковий виклик (method chaining).
 //
 // Вимоги до класу Calculator
 // - Метод number(value)
 // Встановлює початкове значення для наступних обчислень.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод getResult, Повертає поточний результат усіх операцій.
 // Не змінює значення, просто повертає його.
 
 // - метод add - Додає value до поточного значення.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод subtract - Віднімає value від поточного значення. Повертає this.
 
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод multiply -Множить поточне значення на value. Повертає this.
 
 // Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 
 // Приклад використання:
 // const calc = new Calculator();


// const result = calc
//   .number(10)   // Встановлюємо початкове значення 10
//   .add(5)       // Додаємо 5 (10 + 5 = 15)
//   .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4)  // Множимо на 4 (12 * 4 = 48)
//   .divide(2)    // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24


//   console.log(result); // 24

// class Calculator{
//     constructor() {
//         this.value = 0;
//     }
//     number(value) {
//         this.value = value;
//         return this;
//     }
    
//     add(value) {
//         this.value += value;
//         return this;
//     }
//     subtract(value) {
//         this.value -= value;
//         return this;
//     }
    
//     multiply(value) {
//         this.value *= value;
//         return this;
//     }
//     divide(value) {
//         if (value === 0) {
//             console.error("Неможливо ділити на нуль");
//         }else{
//             this.value /= value;
//         }
//         return this;
       
//     }
//     getResult() {
//         return this.value;
//     }
// };

// const calc = new Calculator();
// const result1 = calc
// .number(10)  // Встановлюємо початкове значення 10
// .add(5)     // Додаємо 5 (10 + 5 = 15)
// .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
// .multiply(4) // Множимо на 4 (12 * 4 = 48)
// .divide(2)    // Ділимо на 2 (48 / 2 = 24)
// .getResult() // Отримуємо результат: 24
// console.log(result1); // 24


// // Завдання 12

//  // Напиши клас Client який створює об'єкт з властивостями login email.
//  // Оголоси приватні властивості #login #email, доступ до яких зроби
//  // через геттер та сеттер login email


// class Client{
//     #login;
//     #email;
//     constructor(login, email) {
//         this.#login = login;
//         this.#email = email;
//     }
//     get login() {
//         return this.#login;
//     }
//     set login(newLogin) {
//         this.#login = newLogin;
//     }
//     get email() {
//         return this.#email;
//     }
//     set email(newEmail) {
//         this.#email = newEmail;
//     }

// };
 
// const client = new Client('user123', 'user@gmail.com');

// console.log(client.login);
// console.log(client.email);

// // Завдання 13
//   //  Наслідування у класах!
//   // Cтворіть клас `Person`, який містить наступні властивості:
//   //  - `name` - ім'я людини;
//   //  - `age`- вік людини;
//   //  - `gender` - стать людини;
//   //  - `email`- електронна пошта людини.
  
//   // Крім того, клас `Person` має мати метод `getDetails()`,
//   // який повертає об'єкт з ім'ям, віком, статтю
//   //та електронною поштою людини.
  
//   //
//   // Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//   //  - salary - зарплата співробітника;
//   //  - department - відділ, в якому працює співробітник.
//   // Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

// class Person {
//     constructor(name, age, gender, email) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.email = email;
//     }
//     getDetails() {
//         return {
//             name: this.name,
//             age: this.age,
//             gender: this.gender,
//             email: this.email
//         };
//     }
    
// }
// class Employee extends Person{
//     constructor(name, age, gender, email, salary, department) {
//         super(name, age, gender, email);
//         this.salary = salary;
//         this.department = department;
//   }

//     getEmployeeDetails() {
//         return {
//             salary: this.salary,
//             department: this.department
//         }
//     }
// }
// const employee = new Employee("Liliia", 35, "email", "emai@gmail.com", 50000, "IT");
// console.log(employee.getEmployeeDetails());


