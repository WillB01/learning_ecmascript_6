let nameBuilder = function(firstName = "John", age = 55){ //default value
    console.log(`${firstName} ${age}`);
};

nameBuilder();


//let block scooping
for (let i = 0; i < 45; i++) { 
    let div = document.createElement('div');
    div.onclick = function() {
        alert(`you clicked on box# ${i}`);
    };
    document.getElementsByTagName('section')[0].appendChild(div);
}


//Template Strings
function createEmail(firstName, purchasePrice){ 
    let shipping = 5.95;
    console.log(`
        hi ${firstName}, 
        Thanks for buying from us!
        Total: $${purchasePrice}
        Shipping: $${shipping}
        Grand Total: $${purchasePrice + shipping}
    `)
}

createEmail("Gina",100);


//Spread Operator
let cats = ["tabby","siames","Persin"]; 
let dogs = ["boxer","golden retriver","pug"];

let animals = ["Whales", cats,"Snake",dogs]; //sub array
let animalsWithSpread = ["Whales", ...cats,"Snake",...dogs]; //sub array

console.log(animals);
console.log(animalsWithSpread);


 //Maps
let course = new Map();
course.set('react',{description:'ui'});
course.set('jest',{description:'testing'});

console.log(course);
console.log(course.react); //dont work get undifined
console.log(course.get('react')); //use get instead for getting the key

let details = new Map([
    [new Date(), "Today"],
    ["items", [1,2]]
])

console.log(details.size);

details.forEach(function(item){
    console.log(item);
})


 //Sets
let books = new Set();
books.add("harry potter").add("oliver twist");

console.log(books);
console.log(`how many books? ${books.size}`);
console.log(`has Oliver Twist? ${books.has("oliver twist")}`);
books.delete("oliver twist");
console.log(`has Oliver Twist still? ${books.has("oliver twist")}`);

let data = [4,2,5,5,5,2,5,1,4,7,9,9,7,4,3,9]; //Set cant have duplicate
let set = new Set(data);
console.log(`data length: ${data.length} set length ${set.size}`);



//for of loop
for (const letter of "JavaScript") { 
    console.log(letter);   
}

let topics = ["javascript","node","react"];

for (const topic of topics) {
   console.log(topic) 
}

let topicsMap = new Map();
topicsMap.set("html","/class/html");
topicsMap.set("css","/class/css");
topicsMap.set("javascript","/class/javascript");
topicsMap.set("Node","/class/node");

for (const topic of topicsMap.keys()) {
    console.log(topic);
    
}
for (const topic of topicsMap.values()) {
    console.log(topic);
    
}

for (const course of topicsMap.entries()) {
    console.log(course);
}

//Enhancing object literals
let cat = {
    meow(times){
        console.log("meaw".repeat(times));
    },
    purr(times){
        console.log("purr".repeat(times));
    },
    snore(times){
        console.log("snore".repeat(times));
    },
}

cat.snore(20);
cat.meow(1);

//Arrow functions

//original function
let studentList = function (students) { console.log(students)  };
let studentListArrow = (students) => console.log(students);

studentList(["Joe","Cindy"]);
studentListArrow(["JoeArrow","CindyArrow"]);

//arrow functions scope

let person = { //old
    first: "Daug",
    actions : ["bike","hike","skie","surf"],
    printActions: function(){
        let _this = this;
        this.actions.forEach(function(action){
            let str = _this.first + " likes to " + action;
            console.log(str);
        });
    }
};
person.printActions()

let personArrow = { //old
    first: "Daug",
    actions : ["bike","hike","skie","surf"],
    printActions() {
        this.actions.forEach((action) => {
            let str = this.first + " likes to arrow " + action;
            console.log(str);
        });
    }
};
personArrow.printActions()

//Destructing assignment

let [first,,,fourth,] = ["boston","new york","LA", "portland","Hartford"];
let {title,price} = {
    title:"Reuben",
    price: 67,
    description: "Cleavlands fav sandwich",
    ingredients: ["beard","beef","cheese"]
};

let vacation = {
    destination : "Chile",
    travelers: 2,
    activity : "skiing",
    cost : 4000

};

function vacationMarketing({destination,activity}){
    return `come to ${destination} and do som ${activity}`;
}

console.log(vacationMarketing(vacation));

console.log(first);
console.log(fourth);

console.log(price);

//Generator
function* director(){
    yield "three";
    yield "two";
    yield "one";
    yield "Action";
};

let action = director();

console.log(action.next().value);
console.log(action.next());
console.log(action.next());
console.log(action.next());
console.log(action.next());

function* eachItem(arr) {
    for (let i = 0; i < arr.length; i++) {
        yield arr[i]; 
        
    };
};

let letters = eachItem(["a","b","c","d","e","f","g"]);

let abcs = setInterval(function(){
    let letter = letters.next();
    if(letter.done){
        clearInterval(abcs);
        console.log("now i know my abc");
    }else{
        let div = document.createElement('div');
        document.getElementsByTagName('section')[1].appendChild(div).innerHTML = letter.value;

    }
},500);

//Symbols

const id = Symbol();
const courseInfo = {
    title: "ES6",
    topics : ["babel","functions","classes"],
    id : "js-course"
};

courseInfo[id] = 412;
console.log(courseInfo);

//Iterators

let titleTwo = "ES6";

let iterateIt = titleTwo[Symbol.iterator]();
console.log(iterateIt.next());
console.log(iterateIt.next());
console.log(iterateIt.next());
console.log(iterateIt.next());
console.log(iterateIt.next());

function tableReady(arr) {
    let nextIndex = 0;
    return{
        next(){
            if(nextIndex < arr.length){
                return {value: arr.shift(), done: false}
            }else{
                return{done: true};
            };
        }
    };
  };

  let waitingList = ["Sarah","Heater","Bengt"];
  let iterateList = tableReady(waitingList);
  console.log(`${iterateList.next().value}, your table is ready`);
  console.log(`${iterateList.next().value}, your table is ready`);
  console.log(`${iterateList.next().value}, your table is ready`);
  console.log(`${iterateList.next().value}, your table is ready`);
  console.log(`${iterateList.next().value}, your table is ready`);
  console.log(`Is it finished? ${iterateList.next().done}`);


//ASYNCHRONOUS FEATURES

//Intro to promises
const DELAY = (seconds) => {
    return new Promise((resolve, reject) => {
        if(typeof seconds !== "number"){
            reject(new Error("Argument seconds must be a number"));
        }
        setTimeout(
            () => resolve(`${seconds} second delay is up`),
             seconds * 1000);
    });
};

console.log("zero seconds");
DELAY(1)
.then((msg) => msg.toUpperCase())
.then(msg => `${msg}!!!!!`)
.then(msg => console.log(msg));

DELAY(3).then((msg) => console.log(msg));

//Building promises
const spacePeople = () => {
    return new Promise((resolves, rejects) => {
        const api = 'http://api.open-notify.org/astros.json';
        const request = new XMLHttpRequest();
        request.open('GET',api);
        request.onload = () => {
            request.status === 200 ? resolves(JSON.parse(request.response)) : rejects(Error(request.statusText));
        };
        request.onerror = err => rejects(err);
        request.send();
    });
};

spacePeople().then(
    spaceData => console.log(spaceData),
    err => console.error(
        new Error("Cannot load space people")
    )
);

//Loading data with fetch
// fetch('http://api.open-notify.org/astros.json')
//     .then(res => res.json())
//     .then(console.log());

//     const getPeopleInSpace = () => {
//         fetch('http://api.open-notify.org/astros.json').then(res => res.json()); 
//     };
// const spaceNames = () => {
//     getPeopleInSpace().then(json => json.people)
//         .then(people => people.map(p => p.name))
//         .then(names => names.join(", "));
// }

//     spaceNames().then(console.log);

//Async and await
const DELAYAsync = (seconds) => {
    return new Promise(
        resolve => setTimeout(resolve, seconds * 1000)
    );
};

const countToFive = async () => {
    console.log('zero seconds');
    await DELAYAsync(1);
    console.log("one second");
    await DELAYAsync(1);
    console.log("Two seconds");
    await DELAYAsync(3);
    console.log("five seconds");
};
countToFive();

//Async with fetch

const githubRequest = async(loginName) => {
    try{
        let response = await fetch(`https://api.github.com/users/${loginName}/followers`);
        let json = await response.json();
        let followerList= json.map(user => user.login);
        console.log(followerList); 
    }catch(e){
        console.log("data didn't load", e);
    }
};

githubRequest("WillB01");

//ES6 classes

class Vehicle {
    constructor(description, wheels){
        this.description = description;
        this.wheels = wheels;
    }

    describeYourself(){
        console.log(`i am a ${this.description} with ${this.wheels} wheels`);
    }
}

let coolSkiVan = new Vehicle("cool ski van", 4);

coolSkiVan.describeYourself();

class SemiTruck extends Vehicle {
    constructor(){
        super("semi truck", 18);
    }
}

let groceryStoreSemi = new SemiTruck();
groceryStoreSemi.describeYourself();

//Getter and setter
let attendance = {
    _list: [],
    set addName(name){
        this._list.push(name);
    },
    get list() {
        return this._list.join(', ');
    }
};
attendance.addName = "willy";
console.log(attendance.list + " attendance list")
console.log(attendance._list + " " + "attendance _list");

attendance.addName = "Anna";
console.log(attendance.list);

console.log("------------CLASSES------------");

class Hike {
    constructor(distance, pace){
        this.distance = distance;
        this.pace = pace;
    }get lenthInHours(){
        return `${this.calcLength()} hours`;
    }
    calcLength(){
        return this.distance / this.pace;
    }
}

const mt = new Hike(10,2);
console.log(mt.lenthInHours);
