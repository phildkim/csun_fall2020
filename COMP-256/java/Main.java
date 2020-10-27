import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Stack;

public class Main {
  public static void countdown(int n) {
    if (n == 0) {
      System.out.println("HI");
    } else {
      System.out.println(n);
      countdown(n - 1);
    }
  }

  public static void nLines(int n) {
    if (n > 0) {
      System.out.println(n);
      nLines(n - 1);
    }
  }

  public static void count(int n) {
    if (n == 0) {
      System.out.println("Blastoff!");
    } else {
      count(n - 1);
      System.out.println(n);
    }
  }

  public static void insert(Stack<Integer> stackInt, int val) {
    if (stackInt.isEmpty() || stackInt.peek() <= val) {
      System.out.printf("1: %d", val);
      stackInt.push(val);
      return;
    }
    
    Integer popped = stackInt.pop();
    System.out.printf("2: %d, %d", popped, val);
    insert(stackInt, val);
    System.out.printf("3: %d, %d", popped, val);
    stackInt.push(popped);
    
  }

  // void List<T>.push(T n) pushes an element n to the front of the list.
  // T List<T>.pop() pops an element from the front of the list.
  // List<T> List<T>.concat(List<T> other) returns the concatenation of this list
  // with other.

  

  // private static void powerList(List<Integer> n, int i, ArrayList<Integer> items) {
  //   // if current index(i) is greater than n length, then exit
  //   if (i >= n.size()) return; 
  //   // create a new list tmp of items
  //   ArrayList<Integer> tmp = new ArrayList<Integer>(items); 
  //   // append each element of n by pop
  //   tmp.add(n.get(i));
  //   // recursively go through tmp
  //   powerList(n, i + 1, tmp);
  //   // recursively
  //   powerList(n, i + 1, items);
  // }
  public static void powerList(List<Integer> n) {
    // call the helper recursive method, n is the give list, 0 is the starting
    // index, and new instance of list
    powerList(n, 0, new ArrayList<Integer>());
  }
  private static void powerList(List<Integer> items, int currIdx, ArrayList<Integer> selectedItems) {
    if (currIdx >= items.size()) { // Base case: No more items
      for (Integer item : selectedItems)
        // System.out.println(item);
      if (selectedItems.isEmpty())
        System.out.println("DONE");
      System.out.println();
      return;
    }
    ArrayList<Integer> selectedCopy = new ArrayList<Integer>(selectedItems);
    // System.out.println("COPY: " + items.get(currIdx));
    selectedCopy.add(items.get(currIdx));
    // System.out.println("add: " + items.get(currIdx));
    powerList(items, currIdx + 1, selectedCopy); // Pick curr
    System.out.println("powerList1: " + items.get(currIdx));
    powerList(items, currIdx + 1, selectedItems); // Ignore curr
    System.out.println("powerList2: " + items.get(currIdx));
  }
  public static void main(String[] args) {
    List<Integer> selectedCopy = new ArrayList<Integer>();
    selectedCopy.add(1);
    selectedCopy.add(2);
    selectedCopy.add(3);
    selectedCopy.add(4);
    selectedCopy.add(5);
    powerList(selectedCopy);


    System.out.printf("%s\n", Arrays.toString(selectedCopy.toArray()));
  }
}


