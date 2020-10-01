package MidTerm.java.pr4;

public class Main {
  public static void main(String[] args) {
    Operation op1 = new AddOperation();       // line 3
    Operation op2 = new SubtractOperation();  // line 4
    int res1 = op1.doOp(5, 3); // line 5
    int res2 = op2.doOp(5, 3); // line 6
    System.out.println(res1);  // line 7; should print 8
    System.out.println(res2);  // line 8; should print 5
  }
}