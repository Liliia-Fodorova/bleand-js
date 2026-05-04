// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).




// const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');
// const index = styles.indexOf('blues');
// if (index !== -1) {
//     styles[index] = 'classic';
// }

// function logItems(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(`${i + 1} - ${array[i]}`);
//     }
// }
// for (const element of array) {
//     console.log(element);
// }
// logItems(styles);


// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];



// const logins = ["Peter", "John", "Igor", "Sasha"];
// function checkLogin(array) {
//   const name = prompt('Enter your login:');

//   if (array.includes(name)) {
//     alert(`Welcome, ${name}!`);
//   } else {
//     alert('User not found');
//   }
// }

// checkLogin(logins);

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage(...args) {
//   let sum = 0;
//   let count = 0;

//   for (const arg of args) {
//     if (typeof arg === 'number' && !isNaN(arg)) {
//       sum += arg;
//       count++;
//     }
//   }

//   // якщо немає жодного числового аргументу
//   if (count === 0) {
//     return 0;
//   }

//   return sum / count;
// }


// console.log(caclculateAverage(1, 2, 3));          
// console.log(caclculateAverage(10, 'a', 20, 30));  
// console.log(caclculateAverage('x', true));        




// Напишіть функцію, яка сумуватиме сусідні числа 
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім, 
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].


// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// function sumNumbers(array) {
//   const result = [];

//   for (let i = 0; i < array.length - 1; i++) {
//     result.push(array[i] + array[i + 1]);
//   }

//   return result;
// }

// console.log(sumNumbers(someArr)); 

// ЗАДАЧА№7

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
// };
  
// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const userKeys = Object.keys(user);
// for (const key of userKeys) {
//     console.log(`${key}: ${ user[key]}`);
// }

// const arr = Object.keys(user);
// console.log(arrs);
// for (const arr of arrs) {
//     console.log(`${arr[0]}: ${arr[1]}`);
// }

// ЗАДАЧА №8

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
// };
  
// let sum = 0;
// for (const salary of Object.values(salaries)) {
//     sum += salary;
// }

// console.log(sum);

// ЗАДАЧА №9

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'


// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },

//   sum() {
//     if (this.a !== undefined && this.b !== undefined) {
//       return this.a + this.b; 
//     }
//     return 'No such propeties';
//   },

//   mult() {
//     if (this.a !== undefined && this.b !== undefined) {
//       return this.a * this.b;
//     }
//     return 'No such propeties';
//     },
  
//    exist() {
//     return this.hasOwnProperty('a') && this.hasOwnProperty('b');
//   },
// };


// calculator.read(5, 10);
// console.log(calculator.sum());      
// console.log(calculator.mult());     

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Tell-Tale Heart",
//     author: "Edgar Allan Poe",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map(book => book.title);

// console.log(titles);