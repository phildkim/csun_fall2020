package MidTerm.java.pr12;
public interface MyInterface {
  public void doSomething();
}
public class Foo implements MyInterface {
  public void doSomething() {
    System.out.println("Foo");
  }
}
public class Bar implements MyInterface {
  public void doSomething() {
    System.out.println("Bar");
  }
}
MyInterface a = new Foo(); a.doSomething();
Foo b = new Foo(); b.doSomething();  // prints "Foo"
MyInterface c = new Bar(); c.doSomething();
Bar d = new Bar(); d.doSomething();  // prints "Bar"
