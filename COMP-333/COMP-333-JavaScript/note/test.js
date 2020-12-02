function Base() {}
function Sub1() {}
function Sub2() {} 
Base.prototype.method = function () {
  console.log("base");
}
Sub1.prototype = new Base();
Sub2.prototype = new Base();
Sub1.prototype.method = function () {
  console.log("sub1");
}
Sub2.prototype.method = function () {
  base.method();
}
let base = new Base();
let sub1 = new Sub1();
let sub2 = new Sub2();
base.method(); // prints "base"
sub1.method(); // prints "sub1"
sub2.method(); // prints "base"
console.log(base instanceof Base); // prints "true"
console.log(sub1 instanceof Base); // prints "true"
console.log(sub2 instanceof Base); // prints "true" 

/*
  Write JavaScript code which will effectively 
  add a sub method to all instances of AddThis, 
  where sub should subtract this.x from its parameter 
  and return the result.

  As a hint, you'll need to add it to AddThis' prototype.
  ////////////////////////////////////////////////////////
  Write JavaScript code which will 
  add a mul method to only newly-created instances of AddThis, 
  where mul should multiply this.x with its parameter and return the result. 
  Newly-created AddThis instances should have the same add and sub methods as before, 
  without repeating their definitions. Existing instances of AddThis should not have a mul method. 
  
  As a hint, you should not modify AddThis' prototype.
*/
function AddThis(x) { this.x = x; }
function AddThis(x) { this.x = x; }
function AddThis(x) { this.x = x; }
AddThis.prototype.add = function (y) { return this.x + y; }
AddThis.prototype = new AddThis();
AddThis.prototype.sub = function (y) { return this.x - y; }
AddThis.prototype = new AddThis();
AddThis.prototype.mul = function (y) { return this.x * y; }
let withOne = new AddThis(1);
let withFive = new AddThis(5);
let subOne = new AddThis(withOne.add(2));
let mulOne = new AddThis(subOne.sub(1));
console.log(withOne.add(1));//2
console.log(withOne.add(2));//3
console.log(subOne.sub(1));//2
console.log(mulOne.mul(withFive.add(1)));//12



function output() {
  console.log("foo");
}
let f1 = mystery(output); 
f1();
console.log();

let f2 = mystery(f1); 
f2();
console.log();

let f3 = mystery(f2); 
f3();
console.log();
// first define a function mystery since let f1 = mystery(output)
function mystery(f) {
  // you know its going to return a function since output is a function itself
  return function() {
    // now here it can get a little tricky, but let's make it simple but observing the output he provided.
    // first call f1, displays foo, foo. Since out return "foo", called the f parameter twice should do the trick.
    f();
    f();
  }
}

/**
Output:
foo 
foo

foo
foo
foo
foo

foo
foo
foo
foo
foo
foo
foo
foo
 */