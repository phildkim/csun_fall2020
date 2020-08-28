public class Cons implements ImmutableList {
  public final int head;
  public final ImmutableList tail;
  public Cons(final int head, final ImmutableList tail) {
    this.head = head;
    this.tail = tail;
  } // Cons
  @Override
  public int sum() {
    return this.head + this.tail.sum();
  } // sum
  @Override
  public int length() {
    return 1 + tail.length();
  } // length
  @Override
  public int hashCode() {
    return sum();
  } // hashCode
  @Override
  public String toString() {
    return "Cons(" + this.head + ", " + this.tail.toString() + ")";
  } // toString
  @Override
  public boolean contains(final int value) {
    return this.tail.contains(value) || this.tail.hashCode() == value || this.head == value;
  } // contains
  @Override
  public boolean equals(final Object other) {
    if (other instanceof Cons) {
      final Cons otherCons = (Cons) other;
      return this.head == otherCons.head && this.tail.equals(otherCons.tail);
    } else {
      return false;
    }
  } // equals
  @Override
  public ImmutableList append(final ImmutableList other) {
    return new Cons(this.head, this.tail.append(other));
  } // append
} // Cons