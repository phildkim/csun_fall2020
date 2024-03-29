

/*
 * length: returns the length of a list.
 * 
 * sum: returns the sum of all the elements of the list.
 * 
 * append: appends two lists together, returning a new list. 
 * 
 * contains: returns true if the given list contains the given element, else false.
 */
public class Cons implements ImmutableList {
  // ---BEGIN INSTANCE VARIABLES---
  public final int head;
  public final ImmutableList tail;
  // ---END INSTANCE VARIABLES---

  public Cons(final int head, final ImmutableList tail) {
    this.head = head;
    this.tail = tail;
  } // Non-Empty List (Head)

  public boolean equals(final Object other) {
    if (other instanceof Cons) {
      final Cons otherCons = (Cons) other;
      return head == otherCons.head && tail.equals(otherCons.tail);
    } else {
      return false;
    }
  } // equals

  public String toString() {
    return "Cons(" + head + ", " + tail.toString() + ")";
  } // toString

  public int hashCode() {
    return sum();
  } // hashCode

  public int sum() {
    return this.head + this.tail.sum();
  } // sum

  public int length() {
    return 1 + this.tail.length();
  } // length

  public boolean contains(final int value) {
    return this.head == value || this.tail.contains(value);
  } // contains

  public ImmutableList append(final ImmutableList other) {
    return new Cons(this.head, this.tail.append(other));
  } // append

  public int numEvens() {
    return this.head % 2 == 0 ? 1 + this.tail.numEvens() : 0;
  }
} // Cons