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
List.prototype.lists = function(l) {
  return join(l, ", ");
};
function immList(obj) {
  const o = (v) => {
    const l = new List();
    return l.lists(v);
  };
  const objList = o(obj);
  return objList;
};
function Nil() { };
Nil.prototype = new List();
Nil.prototype.isEmpty = function () {
  return !immList(new Nil()).hasOwnProperty('tail');
};
Nil.prototype.length = function () {
  return immList(new Nil()).length-2;
};
Nil.prototype.append = function (nils) {
  return immList(nils);
};
Nil.prototype.contains = function (nils) { 
  return immList(nils).hasOwnProperty('tail').valueOf();
};
Nil.prototype.filter = function (nils) { 
  return immList(nils);
};
Nil.prototype.map = function (nils) { 
  return immList(nils);
};// Nil
function Cons(head, tail) {
  this.head = head;
  this.tail = tail;
};
Cons.prototype = new List();
Cons.prototype.isEmpty = function () {
  return immList(new Cons(this.head, new Cons(this.tail, new Nil()))).hasOwnProperty('head');
};
Cons.prototype.length = function () {
  return immList(new Cons(this.head, new Cons(this.tail, new Nil()))).match(/\w/g).length;
};
Cons.prototype.append = function (cons) {
  const arr = [];
  arr.push(`${immList(this)} ${immList(cons)}`.match(/\w/g,));
  return new Cons(arr, new Nil()).toString().replace(/\,/g, ', ');
};
Cons.prototype.contains = function (cons) {
  return (parseInt(immList(new Cons(this.head, new Cons(this.tail, new Nil()))).search(cons)) == -1) ? false : true;
};
Cons.prototype.filter = function (cons) {
  return getImmList(cons, new Cons(this.head, this.tail));
};
Cons.prototype.map = function (cons) {
  return getImmList(cons, new Cons(this.head, this.tail));
};
function getImmList(e, c) {
  const h = immList(c);
  const f = (l, t) => {
    const arr = [];
    for (let i in l) {
      t(i) == true ? arr.push(i) : t['toString'].length;
    }
    return immList(new Cons(arr.join(", "), new Nil()));
  };
  const consList = f(h, e);
  return consList;
};


function runTests() {
  runTest(test_nil_instanceof_list);
  runTest(test_nil_join);
  runTest(test_nil_toString);
  runTest(test_nil_has_no_head);
  runTest(test_nil_has_no_tail);
  runTest(test_nil_isEmpty);
  runTest(test_nil_length);
  runTest(test_nil_nil_append);
  runTest(test_nil_cons_append);
  runTest(test_nil_contains);
  runTest(test_nil_filter);
  runTest(test_nil_map);
  runTest(test_cons_join_single_element);
  runTest(test_cons_join_two_elements);
  runTest(test_cons_join_three_elements);
  runTest(test_cons_toString_single_element);
  runTest(test_cons_toString_two_elements);
  runTest(test_cons_toString_three_elements);
  runTest(test_cons_instanceof_list);
  runTest(test_cons_head);
  runTest(test_cons_empty_tail);
  runTest(test_cons_nonempty_tail);
  runTest(test_cons_isEmpty);
  runTest(test_cons_length_1);
  runTest(test_cons_length_2);
  runTest(test_cons_nil_append);
  runTest(test_cons_cons_append_1);
  runTest(test_cons_cons_append_2);
  runTest(test_cons_contains_first);
  runTest(test_cons_contains_second);
  runTest(test_cons_contains_nowhere);
  runTest(test_cons_filter_has_element);
  runTest(test_cons_filter_has_no_element);
  runTest(test_cons_filter_multi_1);
  runTest(test_cons_filter_multi_2);
  runTest(test_cons_filter_multi_3);
  runTest(test_cons_filter_multi_4);
  runTest(test_cons_filter_multi_5);
  runTest(test_cons_map_1);
  runTest(test_cons_map_2);
  runTest(test_cons_map_3);
  runTest(test_cons_map_4);
  runTest(test_nil_and_cons_have_different_prototypes);
  runTest(test_nil_and_cons_have_same_grandparent_prototypes);
  runTest(test_nil_grandparent_prototype_has_join);
  runTest(test_nil_grandparent_prototype_has_toString);
  runTest(test_nil_and_cons_have_different_isEmpty);
  runTest(test_nil_and_cons_have_different_append);
  runTest(test_nil_and_cons_have_different_contains);
  runTest(test_nil_and_cons_have_different_length);
  runTest(test_nil_and_cons_have_different_filter);
  runTest(test_nil_and_cons_have_different_map);
} // runTests
function runTest(test) {
  process.stdout.write(test.name + ": ");
  try {
    test();
    process.stdout.write("PASS\n");
  } catch (error) {
    process.stdout.write("FAIL\n");
    console.log(error);
  }
} // runTest
function assertEquals(expected, received) {
  if (expected !== received) {
    throw ("\tExpected: " + expected.toString() + "\n" +
      "\tReceived: " + received.toString());
  }
}
function test_nil_join() {
  let nil = new Nil();
  assertEquals("[]",
    nil.join(", "));
} // test_nil_join
function test_nil_toString() {
  let nil = new Nil();
  assertEquals("[]",
    nil.toString());
} // test_nil_toString
function test_nil_instanceof_list() {
  let nil = new Nil();
  assertEquals(true,
    nil instanceof List);
} // test_nil_instanceof_list
function test_nil_has_no_head() {
  let nil = new Nil();
  assertEquals(false,
    nil.hasOwnProperty("head"));
} // test_nil_has_no_head
function test_nil_has_no_tail() {
  let nil = new Nil();
  assertEquals(false,
    nil.hasOwnProperty("tail"));
} // test_nil_has_no_tail
function test_nil_isEmpty() {
  let nil = new Nil();
  assertEquals(true,
    nil.isEmpty());
} // test_nil_isEmpty
function test_nil_length() {
  let nil = new Nil();
  assertEquals(0,
    nil.length());
} // test_nil_length
function test_nil_filter() {
  let nil = new Nil();
  let f = function (e) { return true; };
  assertEquals("[]", nil.filter(f).toString());
} // test_nil_filter
function test_nil_map() {
  let nil = new Nil();
  let increment = function (e) { return e + 1; };
  assertEquals("[]", nil.map(increment).toString());
} // test_nil_map
function test_cons_instanceof_list() {
  let list = new Cons(1, new Nil());
  assertEquals(true,
    list instanceof List);
} // test_cons_instanceof_list
function test_cons_join_single_element() {
  let list = new Cons(1, new Nil());
  assertEquals("[1]",
    list.join(":"));
} // test_cons_join_single_element
function test_cons_join_two_elements() {
  let list = new Cons(1, new Cons(2, new Nil()));
  assertEquals("[1:2]",
    list.join(":"));
} // test_cons_join_two_elements
function test_cons_join_three_elements() {
  let list = new Cons(1, new Cons(2, new Cons(3, new Nil())));
  assertEquals("[1:2:3]",
    list.join(":"));
} // test_cons_join_three_elements
function test_cons_toString_single_element() {
  let list = new Cons(1, new Nil());
  assertEquals("[1]",
    list.toString());
} // test_cons_toString_single_element
function test_cons_toString_two_elements() {
  let list = new Cons(1, new Cons(2, new Nil()));
  assertEquals("[1, 2]",
    list.toString());
} // test_cons_toString_two_elements
function test_cons_toString_three_elements() {
  let list = new Cons(1, new Cons(2, new Cons(3, new Nil())));
  assertEquals("[1, 2, 3]",
    list.toString());
} // test_cons_toString_three_elements
function test_cons_head() {
  let list = new Cons(1, new Nil());
  assertEquals(1,
    list.head);
} // test_cons_head
function test_cons_empty_tail() {
  let list = new Cons(1, new Nil());
  assertEquals("[]",
    list.tail.toString());
} // test_cons_empty_tail
function test_cons_nonempty_tail() {
  let list = new Cons(1, new Cons(2, new Nil()));
  assertEquals("[2]",
    list.tail.toString());
} // test_cons_nonempty_tail
function test_cons_isEmpty() {
  let list = new Cons(1, new Nil());
  assertEquals(false,
    list.isEmpty());
} // test_cons_isEmpty
function test_cons_length_1() {
  let list = new Cons("a", new Nil());
  assertEquals(1,
    list.length());
} // test_cons_length_1
function test_cons_length_2() {
  let list = new Cons("a", new Cons("b", new Nil()));
  assertEquals(2,
    list.length());
} // test_cons_length_2
function test_cons_filter_has_element() {
  let list = new Cons(1, new Nil());
  let isOdd = function (e) { return e % 2 == 1; };
  assert("[1]", list.filter(isOdd).toString());
} // test_cons_filter_has_element
function test_cons_filter_has_no_element() {
  let list = new Cons(2, new Nil());
  let isOdd = function (e) { return e % 2 == 1; };
  assert("[]", list.filter(isOdd).toString());
} // test_cons_filter_has_no_element
function test_cons_filter_multi_1() {
  let list = new Cons(2, new Cons(4, new Nil()));
  let isOdd = function (e) { return e % 2 == 1; };
  assert("[2, 4]", list.filter(isOdd).toString());
} // test_cons_filter_multi_1
function test_cons_filter_multi_2() {
  let list = new Cons(2, new Cons(5, new Nil()));
  let isOdd = function (e) { return e % 2 == 1; };
  assert("[2]", list.filter(isOdd).toString());
} // test_cons_filter_multi_2
function test_cons_filter_multi_3() {
  let list = new Cons(3, new Cons(4, new Nil()));
  let isOdd = function (e) { return e % 2 == 1; };
  assert("[4]", list.filter(isOdd).toString());
} // test_cons_filter_multi_3
function test_cons_filter_multi_4() {
  let list = new Cons(3, new Cons(5, new Nil()));
  let isOdd = function (e) { return e % 2 == 1; };
  assert("[]", list.filter(isOdd).toString());
} // test_cons_filter_multi_4
function test_cons_filter_multi_5() {
  let list = new Cons(1, new Cons(5, new Cons(2, new Cons(6, new Cons(3, new Cons(7, new Cons(4, new Nil())))))));
  let f = function (e) { return e < 6; }
  assert("[1, 5, 2, 3, 4]", list.filter(f).toString());
} // test_cons_filter_multi_5
function test_nil_nil_append() {
  let nil1 = new Nil();
  let nil2 = new Nil();
  assertEquals("[]",
    nil1.append(nil2).toString());
} // test_nil_nil_append
function test_cons_map_1() {
  let list = new Cons(1, new Nil());
  let increment = function (e) { return e + 1; };
  assertEquals("[2]", list.map(increment).toString());
} // test_cons_map_1
function test_cons_map_2() {
  let list = new Cons(1, new Cons(2, new Nil()));
  let increment = function (e) { return e + 1; };
  assertEquals("[2, 3]", list.map(increment).toString());
} // test_cons_map_2
function test_cons_map_3() {
  let list = new Cons(2, new Cons(5, new Nil()));
  let multBy3 = function (e) { return e * 3; };
  assertEquals("[6, 15]", list.map(multBy3).toString());
} // test_cons_map_3
function test_cons_map_4() {
  let list = new Cons("alpha", new Cons("beta", new Cons("gamma", new Nil())));
  let identity = function (e) { return e; };
  assertEquals("[alpha, beta, gamma]", list.map(identity).toString());
} // test_cons_map_4
function test_nil_cons_append() {
  let nil = new Nil();
  let list = new Cons(1, new Cons(2, new Nil()));
  assertEquals("[1, 2]",
    nil.append(list).toString());
} // test_nil_cons_append
function test_cons_nil_append() {
  let list = new Cons(1, new Cons(2, new Nil()));
  let nil = new Nil();
  assertEquals("[1, 2]",
    list.append(nil).toString());
} // test_cons_nil_append
function test_cons_cons_append_1() {
  let list1 = new Cons(1, new Cons(2, new Nil()));
  let list2 = new Cons(3, new Cons(4, new Cons(5, new Nil())));
  assertEquals("[1, 2, 3, 4, 5]",
    list1.append(list2).toString());
} // test_cons_cons_append_1
function test_cons_cons_append_2() {
  let list1 = new Cons(1, new Cons(2, new Nil()));
  let list2 = new Cons(3, new Cons(4, new Cons(5, new Nil())));
  assertEquals("[3, 4, 5, 1, 2]",
    list2.append(list1).toString());
} // test_cons_cons_append_2
function test_nil_contains() {
  let nil = new Nil();
  assertEquals(false,
    nil.contains(1));
} // test_nil_contains
function test_cons_contains_first() {
  let list = new Cons(1, new Cons(2, new Cons(3, new Nil())));
  assertEquals(true,
    list.contains(1));
} // test_cons_contains_first
function test_cons_contains_second() {
  let list = new Cons(1, new Cons(2, new Cons(3, new Nil())));
  assertEquals(true,
    list.contains(2));
} // test_cons_contains_second
function test_cons_contains_nowhere() {
  let list = new Cons(1, new Cons(2, new Cons(3, new Nil())));
  assertEquals(false,
    list.contains(4));
} // test_cons_contains_nowhere
function test_nil_and_cons_have_different_prototypes() {
  let nil = new Nil();
  let cons = new Cons(1, new Nil());
  assertEquals(false,
    Object.getPrototypeOf(nil) == Object.getPrototypeOf(cons));
} // test_nil_and_cons_have_different_prototypes
function getGrandparent(obj) {
  return Object.getPrototypeOf(Object.getPrototypeOf(obj));
} // getGrandparent
function test_nil_and_cons_have_same_grandparent_prototypes() {
  let nil = new Nil();
  let cons = new Cons(1, new Nil());
  assertEquals(getGrandparent(nil),
    getGrandparent(cons));
} // test_nil_and_cons_have_same_grandparent_prototypes
function test_nil_grandparent_prototype_has_join() {
  let nil = new Nil();
  assertEquals(true,
    getGrandparent(nil).hasOwnProperty("join"));
} // test_nil_grandparent_prototype_has_join
function test_nil_grandparent_prototype_has_toString() {
  let cons = new Cons(1, new Nil());
  assertEquals(true,
    getGrandparent(cons).hasOwnProperty("toString"));
} // test_nil_grandparent_prototype_has_toString
function test_nil_and_cons_have_different_isEmpty() {
  let nil = new Nil();
  let cons = new Cons(1, new Nil());
  assertEquals(false,
    nil.isEmpty == cons.isEmpty);
} // test_nil_and_cons_have_different_isEmpty
function test_nil_and_cons_have_different_append() {
  let nil = new Nil();
  let cons = new Cons(1, new Nil());
  assertEquals(false,
    nil.append == cons.append);
} // test_nil_and_cons_have_different_append
function test_nil_and_cons_have_different_contains() {
  let nil = new Nil();
  let cons = new Cons(1, new Nil());
  assertEquals(false,
    nil.contains == cons.contains);
} // test_nil_and_cons_have_different_contains
function test_nil_and_cons_have_different_length() {
  let nil = new Nil();
  let cons = new Cons(1, new Nil());
  assertEquals(false,
    nil.length == cons.length);
} // test_nil_and_cons_have_different_length
function test_nil_and_cons_have_different_filter() {
  let nil = new Nil();
  let cons = new Cons(1, new Nil());
  assertEquals(false,
    nil.filter == cons.filter);
} // test_nil_and_cons_have_different_filter
function test_nil_and_cons_have_different_map() {
  let nil = new Nil();
  let cons = new Cons(1, new Nil());
  assertEquals(false,
    nil.map == cons.map);
} // test_nil_and_cons_have_different_map