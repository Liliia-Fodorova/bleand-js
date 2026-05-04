// 1 - отримай body елемент і виведи його в консоль;
// const bodyEl = document.querySelector("body");
// console.log(bodyEl);
// bodyEl.textContent = "Hello";
// bodyEl.innerHTML = "<h1>Hello!</h1>";
// bodyEl.insertAdjacentHTML("beforeend", "<h1>Hello World!</h1>");

// const title = document.createElement("h1");
// title.textContent = "Hello!";
// console.log(title);
// bodyEl.append(title);

// bodyEl.style.color = "blue";
// bodyEl.classList.add('active');

// 2 - отримай елемент id="title" і виведи його в консоль;
// const title = document.getElementById("#title");
// console.log(title);

// 3 - отримай елемент class="list" і виведи його в консоль;
const list = document.querySelector(".list");
console.log(list);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const data = document.querySelectorAll("[data-topic]");
console.log(data);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const topicFirst = data[0];
// const topicFirst = list.firstChild;
const topicFirst = document.querySelector("[data-topic]");
console.log(topicFirst);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const topicLast = list.lastElementChild;
const topicLast = data[data.length - 1];
console.log(topicLast);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// const title = document.querySelector("#title");
// const siblingH1 = title.nextElementSibling;
// console.log(siblingH1);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const heders = document.querySelectorAll("h3");
console.log(heders);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
const h3El = document.querySelectorAll('h3');
h3El.forEach(el => {
    el.classList.add('active');
});
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const elemLi = document.querySelector('[data-topic="navigation"]');
console.log(elemLi);



// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
const navItem = document.querySelector('[data-topic="navigation"]');
navItem.style.backgroundColor = 'yellow';
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".

const El = document.querySelector('[data-topic="navigation"]');
const paragraph = El.querySelector('p');
paragraph.textContent = 'Я змінив тут текст!';
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;

const currentTopic = "manipulation";
const el = document.querySelector(`[data-topic="${currentTopic}"]`);
console.log(el);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
el.style.backgroundColor = "blue";
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const hEl = document.querySelector(".completed");
console.log(hEl);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// const title = document.querySelector('h3.completed');
const li = title.closest('li');
li.remove();
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
const title = document.querySelector('#title');
const newP = document.createElement('p');
newP.textContent = "Обєктна модель документа(D..)";
document.querySelector('h1').after(newP);
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()

// 20 - очисти списоk
list.innerHTML = "";


