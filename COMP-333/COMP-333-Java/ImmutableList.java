

public interface ImmutableList {
    public int numEvens();
    public int sum();
    public int length();
    public int hashCode();
    public String toString();
    public boolean contains(final int value);
    public boolean equals(final Object other);
    public ImmutableList append(final ImmutableList other);
} // ImmutableList