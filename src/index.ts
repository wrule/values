
export
class nums {
  public constructor(
    private nums: number[],
  ) { }

  private normalizeEndStart(
    end?: number,
    start?: number,
  ) {
    return [
      (end != null) ? end : this.nums.length,
      (start != null && start >= 0) ? start : 0,
    ];
  }

  private normalizeSize(
    size: number,
  ) {
    return size < 1 ? 1 : Math.floor(size);
  }

  public slice(end?: number, start?: number) {
    const [iend, istart] = this.normalizeEndStart(end, start);
    return new nums(this.nums.slice(istart, iend));
  }

  public min(end?: number, start?: number) {
    return Math.min(...this.slice(end, start).nums);
  }

  public max(end?: number, start?: number) {
    return Math.max(...this.slice(end, start).nums);
  }

  public sum(end?: number, start?: number) {
    const slice = this.slice(end, start).nums;
    let sum = 0;
    slice.forEach((num) => sum += num);
    return sum;
  }

  public avg(end?: number, start?: number) {
    const slice = this.slice(end, start).nums;
    let sum = 0;
    slice.forEach((num) => sum += num);
    return sum / slice.length;
  }

  public concat(vals: nums) {
    return new nums(this.nums.concat(vals.nums));
  }

  public push(num: number) {
    this.nums.push(num);
  }

  public MA(size: number) {
    const nsize = this.normalizeSize(size);
    return new nums(
      this.nums.map((num, index) =>
        this.avg(index + 1, index - nsize + 1)
      )
    );
  }

  public EMA(size: number) {
    const nsize = this.normalizeSize(size);
    const weight = 2 / (nsize + 1);
    const result: number[] = [];
    this.nums.forEach((num, index) => {
      let prevEMA = result[index - 1];
      if (prevEMA == null) {
        prevEMA = num;
      }
      result.push(num * weight + prevEMA * (1 - weight));
    });
    return new nums(result);
  }
}
