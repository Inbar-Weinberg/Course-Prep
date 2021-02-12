"use strict"
/**
 * This is the solution for the tasks on https://javascript.info/object-methods.
*/

// Q1. Using "this" in object literal
/**
 * The function returns an error. 
 */

// Create a calculator
let calculator = {
    read() {
        this.a = +prompt("Enter first value", 0);
        this.b = +prompt("Enter second value", 0);
    },
    sum(){
        return (this.a + this.b);
    },
    mul(){
        return (this.a*this.b);
    },
}
calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// Chaining
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // shows the current step
      alert( this.step );
      return this;
    }
  };