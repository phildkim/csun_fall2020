public class Main {
  public static void main(String[] args) {
    MyObject obj1 = new ReturnSame();
    MyObject obj2 = new AddFive();
    int i1 = obj1.doThing(2);
    int i2 = obj2.doThing(2);
    System.out.printf("%d\n",i1);//2
    System.out.printf("%d\n",i2);//7
  }
}