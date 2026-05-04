// console.log("hello")

// const number = Number(prompt('Введіть число'));
// const number = +prompt('Введіть число');

// if (number === 10) {
//     alert('Вірно');
// } else {
//     alert('Невірно')
// }

// number === 10 ? alert('Вірно') : alert('Невірно');

// number === 10 ? ('Вірно') : ('Невірно');

// const min = Math.floor(Math.random() * (59 - 0) + 0); 
//     if (min <= 15) {
//     alert('${min} входить в першу чверть');
// } else if (min <= 30) {
//     alert('${min} входить в другу чверть');
// } else if(min <= 45){
//     alert('${min} входить в третю чверть');
// } else {
//     alert('${min} входить в четверту чверть')
// }


// const num = prompt("Введіть число від 1 до 4:");
// let result = "";

// switch (num) {
//   case "1":
//     result = "зима";
//     break;
//   case "2":
//     result = "весна";
//     break;
//   case "3":
//     result = "літо";
//     break;
//   case "4":
//     result = "осінь";
//     break;
//   default:
//     result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
// }

// console.log(result);

// function getNumbers(min, max) {
//     if (typeof min !== 'number' || typeof max !== 'number') {
//         return "Not a number!!!";
//     }
//     let sum = 0;

//     for (let i = max; i >= min; i--){
//         console.log(i);
//         if (i % 2 === 0) {
//             sum += i;  
//         }
//     }
//     return sum;
// }

// console.log("func:", getNumbers(1, 10));

// const answer = getNumbers(5, 25);
// console.log("answer:", answer);
// console.log("funcNaN:", getNumbers("1", false));

// function min(a, b) {
//     if (typeof a !== 'number' || typeof max !== 'number') {
//       return a < b ? a : b;  
//     }
//    return "Not a number!!!";
// }

// console.log(min(2, 3));
// console.log(min(3, 6));


// function isAdult(age) {
//     if (typeof age !== "number" || Number.isNaN(age)) {
//         return false;
//     }
//     return age >= 18 ? true : confirm("??")
//     // if (age >= 18) {
//     //     return true;
//     // } else {
//     //    return confirm = ('Чи є Вам 18? Підтверджуєте?')
//     // }
// }
// const input = prompt('Ведіть ваш вік');
// const age = Number(input);
// console.log(isAdult(age));



// function getSlice(array, value) {
//   const index = array.indexOf(value); 

//   if (index === -1) {
//     return []; 
//   }

//   return array.slice(0, index + 1); 
// }
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }


// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let i = 0; i < order.length; i++) {
//     total += Number(order[i]);
//   }

//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));           
// console.log(calculateTotalPrice([164, 48, 291]));           
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));  

// function getEvenNumbers(start, end) {
//   const result = [];

//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       result.push(i);
//     }
//   }

//   return result;
// }

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));
// console.log(getEvenNumbers());


// function checkStorage(storage, item) {

//   const normalizedItem = item.toLowerCase();

//   for (const product of storage) {
//     if (product.toLowerCase() === normalizedItem) {
//       return `${product} is available to order!`;
//     }
//   }

//   return "Sorry! We are out of stock!";
// }
// console.log(checkStorage(["apple", "plum", "pear"], "plum"));
// console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));
// console.log(checkStorage(["apple", "plum", "pear"], "pear"));
// console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));
// console.log(checkStorage(["apple", "plum", "pear"], "orange"));
// console.log(checkStorage(["apple", "plum", "pear"], "carrot"));
// // function checkStorage(storage, item) {
// //   const normalizedItem = item.toLowerCase();

// //   const found = storage.find(product => product.toLowerCase() === normalizedItem);

// //   if (found) {
// //     return ${found} is available to order!;
// //   } else {
// //     return "Sorry! We are out of stock!";
// //   }
// // }
// // function checkStorage(storage, item) {
// //   const normalizedItem = item.toLowerCase();
// //   for (const product of storage){
// //     if (product.oLowerCase() === normalizedItem){
// //       return "${product}'is available to order!";
// //     }
// //   }
// //   return "Sorry! We are out of stock!";
// // }

// function getCommonElements(array1 = [], array2 = []) {
//   const commonElements = [];
//   for (let i = 0; i < array1.length; i++){
//     const element = array1[i];
//     if (array2.includes(element)){
//       commonElements.push(element);
//     }
//   }
//   return commonElements;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// console.log(getCommonElements());



// function calculateTotalPrice(order = []) {
//   let total = 0;
  
//   for (const item of order){
//     total += Number(item);
//   }  
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));           
// console.log(calculateTotalPrice([164, 48, 291]));           
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); 
// console.log(calculateTotalPrice([]));
// console.log(calculateTotalPrice());

// function createReversedArray() {
//   const result = [];
//   for (let i = arguments.length - 1; i >= 0; i--){
//     result.push(arguments[i]);
//   }
//   return result;
// }
// console.log(createReversedArray(12, 85, 37, 4));
// console.log(createReversedArray());


// function calculateTax(amount, taxRate = 0.2) {
//   return amount * taxRate;
// }
  
// console.log(calculateTax(100, 0.1))


// function fillArray(min, max) {
//     let arr = [];
//     for (let i = min; i <= max; i += 2) {
//       return arr.push(i)
//     }
// }

// console.log(fillArray(2, 10));