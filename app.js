
// declare the variable named firstName
let firstName = 'Eunjin';
const numberOfStates = 50;
let add = 5 + 4

function sayHello() {
    alert("Hello World!")
}

sayHello();

function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry" + " " + name + ",you aren't old enough to view this page!");
    }

}

checkAge('charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

let vegetables = ['carrots', 'onions', 'potatoes', 'mushrooms', 'leeks', 'beets'];

for (let i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i]);
}

let pet = {
    name: 'Jenny',
    breed: 'Goldendoodle'
}

console.log(pet.name, pet.breed);

let customers = [
    {
        name: 'Sam', age: 15
    },
    {
        name: 'Ann', age: 20
    },
    {
        name: 'Maggie', age: 4
    },
    {
        name: 'Sally', age:16
    },
    {
        name: 'Carol', age: 60
    }

];

for (let i = 0; i < customers.length; i++) {
    checkAge(customers[i].name, customers[i].age);
}


function getLength(text) {
    let length = text.length;

    if (length % 2 === 0) {
        console.log('The world is nice and even!')
    } else {
        console.log('The world is an odd place!')
    }

};

getLength('Hello World');






