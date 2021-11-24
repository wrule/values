
export
class values {
  public constructor(
    private nums: number[],
  ) { }

  private normalizeEndStart(
    end?: number,
    start?: number,
  ) {
    return [
      end != null ? end : this.nums.length,
      start != null ? start : 0,
    ];
  }

  public slice(end?: number, start?: number) {
    const [iend, istart] = this.normalizeEndStart(end, start);
    return this.nums.slice(istart, iend);
  }

  public min(end?: number, start?: number) {
    return Math.min(...this.slice(end, start));
  }

  public max(end?: number, start?: number) {
    return Math.max(...this.slice(end, start));
  }

  public avg(end?: number, start?: number) {
    const slice = this.slice(end, start);
    let sum = 0;
    slice.forEach((num) => sum += num);
    return sum / slice.length;
  }
}
