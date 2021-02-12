"use strict"
/**
 * This is the solution for the tasks on https://javascript.info/constructor-new.
*/

//Two functions – one object
/**
 * it is possible in the following way:
 */
let object = {};
function A() {
    return object;
}
function B() {
    return object;
}

// Create new Calculator
function Calculator() {
    this.read = function () {
        this.a = +prompt("Enter first value", 0);
        this.b = +prompt("Enter second value", 0);
    };
    this.sum = function () {
        return (this.a + this.b);
    };
    this.mul = function () {
        return (this.a * this.b);
    };
}

//Create new Accumulator
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value += +prompt("Enter value to add", 0);
    }
}
