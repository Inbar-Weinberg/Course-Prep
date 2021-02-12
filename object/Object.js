"use strict"
/**
 * This is the solution for the tasks on https://javascript.info/object.
*/
// Hello, object
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Check for emptiness
function isEmpty(obj) {
    for (key in obj) {
        return false;
    }
    return true;
}

// Sum object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let worker in salaries) {
    sum += salaries[worker];
}

// Multiply numeric property values by 2
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
}