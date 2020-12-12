const n = 5;
function invertPredicate(p1) {
  return p1 => p1 <= n;
}
let p1 = e => e > n;
let p2 = invertPredicate(p1);
let result = [3, 4, 5, 6, 7].filter(p2);
console.log(result); // prints [3, 4, 5]


// let f = function (p) {
//   return p <= 5;
// }
// return f;

/**
 * Write the invertPredicate function below, in JavaScript. invertPredicate should:
 *
 * Take a predicate (i.e., a higher-order function which takes some parameter and returns a Boolean value).
 * Return a predicate which does the opposite of the predicate passed to invertPredicate.
 */