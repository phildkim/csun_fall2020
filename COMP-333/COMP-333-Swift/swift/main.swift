indirect enum MyList {
  case Cons(Int, MyList)
  case Nil
}

MyList.Cons(1, MyList.Cons(2, MyList.Cons(3, MyList.Nil)));

indirect enum MyBool {
  case Cons(Bool, MyBool)
  case Nil
}

func length(_ list: MyList) -> Int {
  switch list {
    case .Nil:
      return 0
    case .Cons(_, let tail):
      return 1 + length(tail)
  }
}