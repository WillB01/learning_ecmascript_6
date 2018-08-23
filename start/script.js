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

console.log(first);
console.log(fourth);