package MidTerm.java.pr13;

public class Main {

  boolean b = (randomBoolean()) ? true : false;
  if (b) {
  System.out.println("foo");
  } else {
  System.out.println("bar");
  }
  
  Conditional c = (randomBoolean()) ? ... : ...;
  c.operation();

}

public interface Conditional {
  public void operation();
}
public class IfTrue implements Conditional {
  public void operation() { System.out.println("foo"); }
}
public class IfFalse implements Conditional {
  public void operation() { System.out.println("bar"); }
}
Conditional c = (randomBoolean()) ? new IfTrue() : new IfFalse();
c.operation();