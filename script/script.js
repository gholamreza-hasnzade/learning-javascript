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

const sum = (...sumArgs) => {
    return sumArgs.reduce((prev, current) => prev + current);
};

console.log(sum(10, 20, 30));
