public class Nil implements ImmutableList {
  public Nil() {}
  @Override
  public int sum() {
    return 0;
  } // sum
  @Override
  public int length() {
    return 0;
  } // length
  @Override
  public int hashCode() {
    return 0;
  } // hashCode
  @Override
  public String toString() {
    return "Nil";
  } // toString
  @Override
  public boolean contains(final int value) {
    return false;
  } // contains
  @Override
  public boolean equals(final Object other) {
    return other instanceof Nil;
  } // equals
  @Override
  public ImmutableList append(final ImmutableList other) {
    return other;
  } // append
} // Nil