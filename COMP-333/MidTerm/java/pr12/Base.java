package MidTerm.java.pr12;
public class Base {
  public void method() {
    System.out.println("base");
  }
}
public class Sub1 extends Base {
  public void method() {
    System.out.println("sub1");
  }
}
public class Sub2 extends Base {}

// Begin program
Base a = new Base(); a.method();  // prints "base"
Base b = new Sub1(); b.method();  // prints "sub1"
Base c = new Sub2(); c.method();  // prints "base"
Sub1 d = new Sub1(); d.method();  // prints "sub1"
Sub2 e = new Sub2(); e.method();  // prints "base"