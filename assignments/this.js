/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. when in global scope, "this" will return the window/console object.
* 2. When calling a function with a preceeding dot [obj.function()], "this" will refer to the object [obj] before the dot.
* 3. When you use a constructor function to create a new object, this will refer to the speciffic instance of the object that the constructor creates and returns.
* 4. If you use the call or apply method, you define "this" explicitly.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function logWindow(something){
  console.log(this);
  return something;
}

logWindow("HI"); //this is passed to console.log and since we are in global scope, it passes the window

// Principle 2
// code example for Implicit Binding

const anyObj = {
  someVariable: "Test",
  someFunc: function(something){
    console.log(`what was passed in: ${something} someVariable declared in this: ${this.someVariable}`);
  }
}

anyObj.someFunc("Hello");

// Principle 3

// code example for New Binding
function randomFunc(variable){
  this.variable = variable;
  this.testingThis = function(){
    console.log(this.variable);
  }
}
const myTest = new randomFunc("This is my test");
myTest.testingThis();
// Principle 4

// code example for Explicit Binding

function testObj(name) {
  this.name = name;
  this.greet = function(){
    console.log('My name is ' + this.name);
  }
}

let prinFourTest = new testObj('Max');
let prinFourOther = new testObj('Power');

prinFourTest.greet.apply(prinFourOther);
prinFourTest.greet();