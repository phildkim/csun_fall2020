function Op(head, tail) {
  this.head = head;
  this.tail = tail;
}
Op.prototype.add = function () {
  return this.head + this.tail;
}
Op.prototype.subtract = function () {
  return this.head - this.tail;
}
function runTest(test) {
  process.stdout.write(test.name + ": ");
  try {
    test();
    process.stdout.write("pass\n");
  } catch (error) {
    process.stdout.write('FAIL\n');
    console.log(error);
  }
}// runTest
function assertEquals(expected, received) {
  if (expected !== received) {
    throw ("\tExpected: " + expected.toString() + "\n" +
      "\tReceived: " + received.toString());
  }
} // assertEquals
function test1() {
  let a = new Op(5, 3);
  assertEquals(8, a.add());
}
function test2() {
  let a = new Op(2, 3);
  assertEquals(5, a.add());
}
function test3() {
  let a = new Op(5, 3);
  assertEquals(2, a.subtract());
}
function test4() {
  let a = new Op(2, 3);
  assertEquals(-1, a.subtract());
}
function runTests() {
  runTest(test1);
  runTest(test2);
  runTest(test3);
  runTest(test4);
}