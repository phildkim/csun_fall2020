public class ReturnSame implements MyObject {
  private int n;
  public int doThing(final int n) {
    this.n = n;
    return this.n;
  }
}
