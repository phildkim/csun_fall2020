/*
 * length: returns empty lists (Nil) have length 0. 
 * 
 * sum: returns empty lists (Nil) have a sum of 0. 
 * 
 * append: appends two lists together, returning a new list. 
 * 
 * contains: returns true if the given list contains the given element, else false.
 */
public class Nil implements ImmutableList {
  public Nil() {} // Empty List (Tail) [1,2,3,Nil]
  
  public boolean equals(final Object other) {
    return other instanceof Nil;
  } // equals

  public String toString() {
    return "Nil";
  } // toString

  public int hashCode() {
    return 0;
  } // hashCode

  public int sum() {
    return 0;
  } // sum

  public int length() {
    return 0;
  } // length

  public boolean contains(final int value) {
    return false;
  } // contains

  public ImmutableList append(final ImmutableList other) {
    return other;
  } // append
} // Nil