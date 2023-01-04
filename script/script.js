// * Hoisting - Hoist - بالا بردن
/* var userAge;
userAge = 28;
console.log( userAge); */
/////////////////////////////////////////////////////////

/* showValue()
function showValue() {
    console.log("this is test value :)");
} */
// * Function Declaration (به معنی اعلام تابع) نیز از قانون  following hosting
/////////////////////////////////////////////////////////
/* showValue()
var showValue = function () {
    console.log("this is test value :)");
}; */
// *  Function Expression  not following hosting
/////////////////////////////////////////////////////////
// * varibles var - let - const
/*
 *  different var vs let
 * 1 - hosting
 * 2 - has already been declared or Re-Declerate
 * 3 - scope local and global and logical => if or for etc
 */

/* var num1 = 10;
let num2 = 20; */

/* num1 = 10;
console.log("num1:", num1);
var num1; */ // * following hosting

/* num2 = 20;
console.log("num2:", num2);
let num1; */ // * not following hosting
/* var num1 = 10;
let num2 = 20;
var num1 = 30;
let num2 = 40;
console.log("num1:", num1); // * success but not true
console.log("num2:", num2); // *  has already been declared error 
*/
// * scope global
/* let num1 = 10;
{
    // * scope local
    let num1 = 12;
    console.log(num1);
}
console.log(num1); */
/* var num1 = 10;
let num2 = 20;
const num3 = 30;  // * not update or not chnage value and like the let varibale
console.log("num1:", num1);
console.log("num2:", num2);
console.log("num3:", num3);  */
/////////////////////////////////////////////////////////
// * arrow function

/*
 * not following hosting
 * 1 -just one line run
 **/

/* let sum = (num1, num2) => {
    num1 + num2;
};
console.log("sun:", sum(2, 12)); */

/* let doubleNumber = (num) => num * 2;

console.log("doubleNumber", doubleNumber(2)); */

/* let makeUser = (id, name) => ({
    id: id,
    name: name,
})

console.log("doubleNumber", makeUser(1, "Raza"));  */

// constructor  function
/* function User () {
}

let user1 = new User()
console.log(user1);
 */

/* let users = [
    { id: 1, name: "ali", age: 25 },
    { id: 2, name: "madd", age: 26 },
    { id: 3, name: "hassan", age: 27 },
];

users.forEach(function (user) {
    console.log(user);
});

let mainUser = users.find(user => user.name === "ali")
console.log(mainUser); */

/////////////////////////////////////////////////////////
/*
 * rest-operators
 * ...example
 */
/* function showValue(value) {
    console.log(value);
}
showValue(`thia ia test...`);  */

/* function sun(a, b, c) {
    console.log(arguments);
}
sun(5, 5, 5); */

/* const sum = (...sumArgs) => {
    return sumArgs.reduce((prev, current) => prev + current);
};

console.log(sum(10, 20, 30)); */
/////////////////////////////////////////////////////////

/*
 * rest-operators
 * ...spread-syntax
 */

/* let users1 = ["ali", "mmad", "kazem"];
let users2 = ["ali", "mmad", "kazem", "jafar"];
let allUsers = [...users1, ...users2];
console.log(allUsers);

function showUsers(...params) { // * Rest-operators
    params.forEach((user) => console.log(user));
}
showUsers(...users1); // * Spread-syntax */
/////////////////////////////////////////////////////////
/*
 * array-destructuring
 */

/* let array = [12, "ali", true, "babak", "mma"];
const [item1, ,item2, ...others] = array;
console.log(item1 ,  item2, others);
 */
/* let [a = 1, b = 12] = [10];
console.log(a, b); */

/* const makeNumber = () => {
    return [40, 80];
};

let [a = 1, b = 12] = makeNumber(); // * [40, 80]
console.log(a, b); */
/////////////////////////////////////////////////////////

/*
 * object-destructuring
 */

/* let user = {
    id: 1,
    name: "madd",
    family: "maddie",
    age: 23,
};
const { id:userId, name } = user;
console.log(userId); */
/////////////////////////////////////////////////////////

/*
 * Ternary Condition
 */

/* let num1 = 8;
let num2 = 4;

if (num1 + num2 === 13) {
    console.log("biger in 13");
} else {
    console.log("small in 13");
}

num1 + num2 === 13 ? console.log("biger in 13") : console.log("small in 13");
 */

/*
 * Module
 * tow important keys
 * 1 -  import وارد کردن
 * 2 - export صادر کردن
 */
/* import userFullName, { userName, num , double } from "./utils.js";


console.log(userName, num, double(2), userFullName); */
/////////////////////////////////////////////////////////

/*
 * map in lists
 * ما زمانی از مپ استفاده میکنیم بخواهیم بلایی به سر تک تک آرایه های مورد نظر خود بیاریم
 */
/* 
let scores = [0, 1, 2, 3, 4, 5];

let mapResult = scores.map((score) => {
    return score * 2;
});
console.log(mapResult); // * result Always in arrary but forEach never return result */
/////////////////////////////////////////////////////////

/*
 * this in javascript
 */

/* function clickHandler(param) {
    console.log(param);
}
function showvalue() {
    console.log(this);
}
showvalue();

let user = {
    id: 12,
    name: "Amin",
    age: 22,
    showAge: function(){
        console.log(this?.name);
    }
};

user.showAge() */
/////////////////////////////////////////////////////////

/*
 * bind in javascript
 */
/* const user = {
    id: 12,
    username: "ali",
    age: 21,
    showAge: function () {
        console.log(this);
    },
};

user.showAge();
let showAgeFunc = user.showAge.bind(user);
showAgeFunc(); */
/////////////////////////////////////////////////////////

/* let user1 = {
    id: 1,
    username: "ali",
    age: 21,
};

let user2 = {
    id: 2,
    username: "Reza",
    age: 28,
};

function showAge() {
    console.log(`your age`, this.age);
}
showAge();

let user1ShowAge = showAge.bind(user1);
let user2ShowAge = showAge.bind(user2);

user1ShowAge();
user2ShowAge();
 */

/////////////////////////////////////////////////////////
