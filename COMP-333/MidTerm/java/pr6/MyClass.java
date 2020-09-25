package MidTerm.java.pr6;

public class MyClass extends MyInterface {
  public void foo() {}
  public void bar() {}
  public static void main(String[] args) {
    MyInterface a = new MyClass();
    a.bar();
  }
}