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
let num1 = 10;

{
    // * scope local
    let num1 = 12;
    console.log(num1);
}
console.log(num1);
