indirect enum MyList {
  case Cons(Int, MyList)
  case Nil
}

MyList.Cons(1, MyList.Cons(2, MyList.Cons(3, MyList.Nil)));

indirect enum MyBool {
  case Cons(Bool, MyBool)
  case Nil
}