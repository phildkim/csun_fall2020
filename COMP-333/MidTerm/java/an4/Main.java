public class Main {
 // dynamic typing; (aka unit typing)
 // Base class / interface: Operation
 //   - Subclass: AddOperation
 //   - Subclass: SubtractOperation
 // Operation has doOp method
 //   - Takes two integers
 //   - Returns an integer
 public static void main(String[] args) {
   Operation op1 = new AddOperation();
   Operation op2 = new SubtractOperation();
   int res1 = op1.doOp(5, 3);
   int res2 = op2.doOp(5, 3);
   System.out.println(res1); // prints 8
   System.out.println(res2); // prints 2
 }
}