
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
    return new values(this.nums.slice(istart, iend));
  }

  public min(end?: number, start?: number) {
    return new values([Math.min(...this.slice(end, start).nums)]);
  }

  public max(end?: number, start?: number) {
    return new values([Math.max(...this.slice(end, start).nums)]);
  }

  public sum(end?: number, start?: number) {
    const slice = this.slice(end, start).nums;
    let sum = 0;
    slice.forEach((num) => sum += num);
    return new values([sum]);
  }

  public avg(end?: number, start?: number) {
    const slice = this.slice(end, start).nums;
    let sum = 0;
    slice.forEach((num) => sum += num);
    return new values([sum / slice.length]);
  }

  public concat(vals: values) {
    const nums = this.nums.concat(vals.nums);
    return new values(nums);
  }
}
