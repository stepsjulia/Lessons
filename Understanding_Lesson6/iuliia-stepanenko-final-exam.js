// Question 1
// Part 1.1

// let image = document.images[0];
// image.style.width = '100px';

// // Part 1.2

// let questionOne = ['window', 'document', 'console'];

// // Question 2

// let headings = document.getElementsByTagName('h1');

// for(heading of headings) {
//   if(heading.className.includes('special') !== true) {
//     heading.style.color = 'red';
//   }
// }

// // Question 3
// // Part 3.1

// for (let link of document.links) {
//   if(link.href.includes('bcit')) {
//     link.style.textDecoration = 'none';
//   }
// }

// // Part 3.2

// function questionThree(item) {
//   if (typeof(item) == 'number') {
//     if(item >= 60) {
//       return true;
//     }
//     else {
//       return false;
//     }
//   }
// }

// // Question 4

// let paragraphs = document.getElementsByTagName('p');

// for(let i = 0; i < paragraphs.length; i++) {
//   paragraphs[i].onclick = function() {this.classList.add('clicked')};
//   paragraphs[i].ondblclick = function() {this.style.fontStyle = 'italic'};
// }

// // Question 5
// // Part 5.1

// function questionFive() {
//   setTimeout(() => document.getElementById("target").innerHTML = "Complete!", 5000);
// }

// // Part 5.2

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(response => {
//     window.users = response;
//     useData();
//   })

// function useData() {
//   for(let i=0; i < window.users.length; i++) {
//    document.getElementById('user').innerHTML = window.users[8].username;
//   }
// }

// // Question 6
// // Part 6.1
// let parent = document.getElementById('questionSix');

// let subHeading = document.createElement('h2');
// let headingText = document.createTextNode('DOM Scripting');
// subHeading.appendChild(headingText);
// parent.appendChild(subHeading);

// // Part 6.2

// let innerDiv = document.createElement('div');
// innerDiv.setAttribute('style', 'width: 200px; height: 200px; background-color: red')
// parent.appendChild(innerDiv);

// // Part 6.3

// let innerImage = document.createElement('img');
// innerImage.setAttribute('id','img3');
// innerImage.setAttribute('src','a.jpg');
// innerDiv.appendChild(innerImage);

// Question 7

//Object Liteal
//single-usw objects

let emptyObject = {}
let dog = {
  name: "Charlie",
  age: 12,
  breed: "Ridgeback",
  isAdopted: true,
  bark: function() {
    console.log('grrr');
  }
}

let dog2 = {
  name: "Simka",
  age: 5,
  breed: "Mutt",
  isAdopted: false,
  bark: function() {
    console.log('grrr');
  }
}

console.log(dog2.name)

//another way - array notation
//we can specify proprty  ia a string or we can use variable whose value ia a string
dog2["isAdopted"] = true;
console.log(dog2.isAdopted)

//h1
let h1 = document.querySelector("h1");
// h1.style.color = 'red';
// h1.style.fontSize = '3rem';
// h1.style.borderBottom = "2px solid red";

// create a function that wraps style changes, similar to css.() in jQuery

function css(property, value) {
  h1.style.property = value; //does not work
  h1.style[property] = value; //IT WORKS!!!

}

css('color', 'red');
css('fontSize', '3rem');
css('borderBottom ', '2px solid red');

//ASIDE
// we can dynamicly assign property names 

let val = 'name';
let dog3 = {
  age: 12,
  breed: "dashund",
  [val]: 'simka'
}

console.log(dog3);

//Aside: strings have a method called splice

console.log("123456756789".slice(0,5));

//Adding properties and methods after it was ceated

// let cat = {
//   name: "Catty",
//   age: 8,
//   colro: "grey"
// }

// cat.gender = "female";
// cat.meow = function() {
//   console.log('...');
// }

//Checking if an object has a properety 

//console.log(cat.hasOwnProperty('gender'));

//Final Exam Q7

function questionSeven() {
    return {
      title: "My first book",
      author: "Julia Step",
      yearPublished: 2020,
      readBook: function() {

      }
    }
}

//to test this - create a script section in html and try call function , storing the returned value into a varible
//
//let book = questionSeven;

//then ensure that your variable has all properties

//Constructor Function(s)


function Dog(username, userage, userbreed) {
  let x =10;//normal local variable, not an object property
  this.name = username;
  this.age = userage;
  this.breed =  userbreed;
  this.speak = function(message) {
    console.log(message);
  } 
}

let dog4 = new Dog('Charlie', 12, "Poroda");
let dog5 = new Dog('Simka', 2, "Chihua");
//console.log(dog4.x); ///errror - it is a local var
// console.log(dog4.breed);
// console.log(dog4.speak);

//The way do add properties or methods after create an object
dog4.numberOfLengs = 4;
console.log(dog4); //has numberOfLeng
console.log(dog5); //does not have numberOfLeng

// method to add properties or methods to ALL object after they were creted
Dog.prototype.sit = function() {
  console.log('...')
}

//Every obj in JS inherts after from "Object" and the prototype is a link from the object to its inheritad class (ie Object)

console.log(dog5.toString());
// we can create links betweebn objects
//creating our own interface between object types

function Animal(){
  this.age =2;
}
function Cat(){
  this.numberOfWhiskers = 6;
}

Cat.prototype  = new Animal();

let whiskers = new Cat();
console.log(whiskers.age);
console.log(whiskers.numberOfWhiskers);
console.log(whiskers);

function Fish(){
  this.nmberOfGills = 4;
}
Fish.prototype = new Animal();

let fishAnimal = new Fish();
console.log(fishAnimal);

//Inheritance relationship are reffered to as an is -a relationship , a cat is a type of animal

//for in loop

// let obj = {
//   a: 10,
//   b: 20,
//   c:30
// }

// for(let prop of obj) {
//   console.log(prop);
// }

//ES 6 classes

//1. use 'class' keyword
// 2. provide a method called "constractor"
class Parent {

    constructor(lastname) {
      this.lastname = lastname;
    }
    goToSleep() {
      console.log('zzz');
    }
}

let parent = new Parent("harrison");
// to establish relationship between two ES6 classes
//use "extends"
class Child extends Parent{
  constructor(firstname, lastname) {

    // Note: super() has to be first statement inside the constractor
    super(lastname);
    this.firstname = firstname;
  }
}

let child = new Child('Jason', "harrison");
console.log(child);


// function makeCounter () {
//   let conter = 0;

//   return function() {
//     console.log(conter++);
//   }
// }

// let counter1 = makeCounter();
// console.log(counter1);

// counter1();
// counter1();

// let counter2 = makeCounter();
// counter2();

let y= 3;
y++;
console.log(y);

let x= 3;
console.log(x++);


console.log(isNaN(0.5+"0.5"));

let name = "Jack"
let sex = "male"
let age = 20;
let person = {
  name,
  sex,
  age,
  greet() {
    console.log(`Hello ${this.name}`);
  },
  password(){
    return this.name + this.age;
  }
}

console.log(person.password());

//console.log(person['name']); //обращение к свойству обьекта
// если имя свойства присвое в переменную - то внутри квадратных скобок можно указать не строку а имя переменной
let firstName = 'name';
person[firstName];

person = {
  [firstName]: 'Max'
}


//опредео=лили для обьекта новое свойство password
// Object.defineProperty(person, 'password', {
//   get: function() {
//     return this.name + this.age;
//   }
// })

// теперь определим это свойство которое работает внутри обьекта как метода снаружи оьекта - как свойство обьекта
// определим его с помощью нового синтаксиса ES6 _ let person = {
 // name,
 // sex,
 // age,
 // greet: function() {
 //   console.log(`Hello ${this.name}`);
 // }
//}


/// Classes
class Task {
  constructor(title=Task.getDefaultTitle(), isCompleted = false) {
    this.title = title,
    this._isCompleted = isCompleted;
    Task.counter +=1;
  }

  //статический метод Task.counter  задается внутри класс, в отличтии т свойств статических, которые задаются снаружи - 
  //метод задается внутри класса
  //_isCompleted- начинается с нижнего ропдчеркивания чтобы избежать ошибки скрипта - так как  назвние свойст get 
  // и set не должны совпадать по названию с методами, определенными в конструкторе - поэтому к исходному свойству - добавить черточку

  static getDefaultTitle() {
    return 'Title text';
  }

  completed() {
    this.isCompleted = true;
  }

  // get isCompleted() - 

  // get isCompleted() {
  //   return this._isCompleted === true ? 'task completed' : 'task is not completed'
  // }
}
Task.counter = 0;
// console.log(task.isCompleted);

let task = new Task('learn ES6', false);
let task2 = new Task("LearN React", true);
let task3 = new Task();

//console.log(task3.isCompleted, task3._isCompleted);
 
task.completed(true);
console.log(task);
console.log(task3);


//статические свойства обьекта определяются за пределами обьекта с большой буквы
console.log(Task.counter);

//Metods это описание работы обьектов completed() -метод обьекта
//задание статических свойст должны быть созданы до создания экземляра класса ---let task -- , но не после 

// Наследование - 2я особенность ООП ПЕрвая особенность - возможность создание экземляров класса Обьекта

//Способность обьектов наследвать методы и свойства от родителя

//class рдитель
class EsTask {
  constructor(title="") {
    this.titleVariable = title,
    this.isCompleted = false
  }

  completed() {
    this.isCompleted = true;
  }
}

// class ребенок 
 class EsSubTask extends Task {
  constructor(title) {
    super(title)
  }

  completed() {
    super.completed();
    console.log(`task ${this.title} is completed!`)
  }
}

// lets create variables that are eksembluar of classes Task and SubTAsk
let estask = new EsTask("Learn REact JS");
let subtask = new EsSubTask("Learn ES6");

estask.completed();
subtask.completed();

console.log(estask);
console.log(subtask);

// слово super в сабклассе дает команду чтоб наследовало конструктор, если его не указать - будет ошибка
// а если указаать - то дочерний класс наследует конструктор родителя. после чего этот конструктор можно расширять

//также можно наследовать методы - нпример метод completed() от класса EsTask  

///Деструктивное присваивание////

///Как было в стандарте ES 5 - при извлечении из массива данных раньше делалось так:

const people = ['Jack', 'Max', "Leo"]

// let jack = people[0];
// let max = people[1];
// let leo = people[2];

//console.log(jack, max,leo); //это было громоздко Но в стандарте ES6 стало по другому:

//let[jack, max, leo] = people; // можно записать так 
let[jack, max, leo] = ['Jack', 'Max', "Leo"]; // или даже можно записать так - сразу присваиванием значения
// элементов массива - к перевменнным

const rate = [1,50,100]
// с помощью деструктивного присваисваивания - присвоим значения элементов массива - переменным и выведем рез-т в консоль
//let [first, second, third] = rate;
//и выведем значения переменных сразу в консль
//console.log(first, second, third);

// что произойдет ели количество обьявленных переменных будет юольше чем элементов внутри массива - fourth
let [first, second, third, fourth =1000] = rate;
console.log(first, second, third);
// тогда значение переменной будет  fourth - underfined
// мы можем для переменных определить дефолтное значение

//Деструктивное присваивание мы можем использовать для
//многомерного массива Для т ого чтобы извлечь значения из вложенного массива - нужно добавить еще одни
//квадратные скобки

const anoterRate = [1,30,490, [1000, 2000]]
//затем делаем деструктуризацию
//
let [firstValue, secondValue, thirdValue, [forthVAlue, fifthValue]] = anoterRate;

console.log(forthVAlue, fifthValue);
//Деструктивное присвагивание можно использовать как параметр функции
//например мы передаем массив зачений в качестве аргумента во время вызова функции 
// Для того чтобы мы могли оперировать каждым значением переданным в вызов функции - нам нужно выполнить
// деструктивное присваивание - путем записи  [a,b] в function calculate([a,b])

function calculate([a,b]) {
  return [a,b]
}

let res = calculate([1,10]);
console.log(res);

//чтобы вывести из массива значений из возвращаемого функцмей массива нужно сделать следующее:ё

let [a,b] = calculate([1,10]);
console.log(a,b);

//Деструктивное присваивание обьектов
let personObj ={
  name: "Yulia",
  age: 20
}
//чтобы присвоитьь значение свойств name & age  в переменные - нужно записатьь let {name, age} - это деструктивное
// выражение 
//Можно сделать для занчений этих свойств - значение по умолчанию name = Alex, age = 30
let {objname= "Alex", objage= 40} = {}; 

console.log(objname, objage)

//JSON Promises

fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(res=> res.json())//обявили переменнуютres и то что получили изAPI записали  в файл .json
  .then(res=> console.log(res))//'эти данные выведи в консоль 
  .catch(()=>console.log('res error')) // если бы не получили данные - получи бы эту ощибку

// Async //Awsit - новый стиль написания асинхронного кода - заставляет код который работает асинхронно - выглядить синхрнно

// const fetchData = () => Promise.resolve( {
//   data: ['Jack', 'Mx', 'Leo']
// })

//Symbols - - уникальные и не изменные значения, которые помогаю решить проблему конфликта имен сойств

//Symbol() - функция которая превращает переменную в символ
let symbol = Symbol('mySymbol');
let symbol2 = Symbol('mySymbol');
// console.log(type symbol);
// console.log(symbol);
console.log(symbol===symbol2); //false - так как создать 2 одинаковых символа - невозможно
// мы можем сразу передать в скобках функции символ - имя переменной mySymbol например

//2 метод создания символа

let symbol3 = Symbol.for('mySymbol')
let symbol4 = Symbol.for('mySymbol')

console.log(symbol3===symbol4); // true та ка к применяется метод .for - та к как в таком 
//случае символ - это ссилка на значение// также у Symbol есть метод keyFor - им можно получить имя символа
let symbolName = Symbol.keyFor(symbol3);
console.log(symbolName);

//Examole symbols in the real object

let realPerson = {
  name: 'Jack',
  age: 20,
  [Symbol.for('password')]: "JAck20",// Symbol.for применили метод Symbol.for - так ктолько так пароль 
  // будет записан в реестр, иначе это свойство - будет андерфайнед
  [Symbol.for('nickname')]: "Freename",
}

console.log(Object.getOwnPropertySymbols(realPerson)); // Object.getOwnPropertySymbols(имя обьекта ) с- 
//возвращает все символы которые содержит обьект

///Итерироуемый обьект - обьект - значение которого можно перебрать как массив циклом for of

let generateNumbers = {
  start: 1,
  end: 10
}

generateNumbers[Symbol.iterator] = function() {
  let current = this.start;
  let last = this.end;

  return {
    next() {
      if(current <= last) {
        return {
          done: false,
          value: current++
        }
      } else {
        return {
          done: true
        }
      }
    }
  }
}

for(let number of generateNumbers) {
  console.log(number);
}