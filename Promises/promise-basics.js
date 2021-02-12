"use strict"
/**
 * This is the solution for the tasks on https://javascript.info/promise-basics.
*/
//Re-resolve a promise?
/**
 * The output is 1, after the line "resolve(1)" the promise executor can only
 * call a single resolve function.
 */

// delay with a promise
function delay(ms) {
    let promise = new Promise(resolve => {
        setTimeout(resolve(), ms);
    });
    return promise;
}
delay(3000).then(() => alert('runs after 3 seconds'));

// show circle question is on a different page