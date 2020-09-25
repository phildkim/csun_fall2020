package MidTerm.java;
public class Main {
  public static void makeCall(final I1 value) {
    value.doThing();
  }
  public static void main(final String[] args) {
    final I1 t1 = new C1();
    final I1 t2 = new C2();
    makeCall(t1);
    makeCall(t2);
  }
}