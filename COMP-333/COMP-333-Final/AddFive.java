public class AddFive implements MyObject {
  private int n = 5;
  public int doThing(final int n) {
    this.n += n;
    return this.n;
  }
}
