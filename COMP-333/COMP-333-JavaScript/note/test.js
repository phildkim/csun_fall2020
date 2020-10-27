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
  console.log("sub2");
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
function SubThis(x) { this.x = x; }
function MulThis(x) { this.x = x; }
AddThis.prototype.add = function (y) { return this.x + y; }
SubThis.prototype = new AddThis();
SubThis.prototype.sub = function (y) { return this.x - y; }
MulThis.prototype = new AddThis();
MulThis.prototype.mul = function (y) { return this.x * y; }
let withOne = new AddThis(1);
let withFive = new AddThis(5);
let subOne = new SubThis(withOne.add(2));
let mulOne = new MulThis(subOne.sub(1));
console.log(withOne.add(1));//2
console.log(withOne.add(2));//3
console.log(subOne.sub(1));//2
console.log(mulOne.mul(5));//10

// join
/*
function join(list, delim) {
  var retval = "[";
  while (list instanceof Cons &&
    !(list.tail instanceof Nil)) {
    retval += list.head.toString() + delim;
    list = list.tail;
  }
  if (list instanceof Cons) {
    retval += list.head.toString();
  }
  retval += "]";
  return retval;
}; // join

function List() { };
List.prototype.join = function (delim) {
  return join(this, delim);
};
List.prototype.toString = function () {
  return this.join(", ");
};// List
*/
// Parameters:
// - A List of elements
// - A delimeter to separate them by
// Returns a single string, which results from calling
// toString on each element, separated by the delimeter.
//
// For example:
// join(new Nil(), ", ")                     // "[]"
// join(new Cons(1, new Nil()), ", ")        // [1]
// join(new Cons(2, new Cons(3, new Nil())), // [2, 3]
//