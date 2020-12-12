public class Test {
  // Object is the root of the class hierarchy, which every class in Java has Object as a superclass.
  public static void takesParam(Object o) {
  }
  public static void main(String[] args) {
    takesParam(new Object());
    takesParam("foo");
  }
}
// Even though the takesParam method is being called with both objects and
// strings, this code still compiles. Why?