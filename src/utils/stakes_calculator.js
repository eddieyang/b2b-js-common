import _ from 'lodash-compat';

export default class StakesCalculator {

  static straight(ballRows) {
    return ballRows.reduce((last, row) => last * row.length, 1);
  }

  static oneNum(ballRows) {
    // check empty row
    if (ballRows.filter((row) => row.length === 0).length > 0) {
      return 0
    }
    return 1;
  }

  static continuousChoose(ballRows) {
    // check empty row
    if (ballRows.filter((row) => row.length === 0).length > 0) {
      return 0
    }
    return _.reduce(ballRows, (result, n, key) => {
      return result + _.drop(ballRows, key).reduce((result, row) => result * row.length, 1);
    }, 0);
  }

  // C (n, 5)
  static combine120(ballRows) {
    const n = _.first(ballRows).length;
    if (n === 0) {
      return 0;
    }
    return this.combination(n, 5);
  }

  // C(n, 3) * m - (C(n, 3) - C(n-1, 3)) * k
  static combine60(ballRows) {

    const m = ballRows[0].length;
    const n = ballRows[1].length;
    const k = _.intersection(ballRows[0], ballRows[1]).length;

    return this.combination(n, 3) * m - (this.combination(n, 3) - this.combination(n - 1, 3)) * k;
  }

  // C(m,2) * n - (C(m,2) - C(m-1, 2)) * k
  static combine30(ballRows) {

    const m = ballRows[0].length;
    const n = ballRows[1].length;
    const k = _.intersection(ballRows[0], ballRows[1]).length;

    return this.combination(m, 2) * n - (this.combination(m, 2) - this.combination(m - 1, 2)) * k;
  }

  // C(n, 2) * m - (C(n, 2) - C(n-1, 2)) * k
  static combine20(ballRows) {

    const m = ballRows[0].length;
    const n = ballRows[1].length;
    const k = _.intersection(ballRows[0], ballRows[1]).length;

    return this.combination(n, 2) * m - (this.combination(n, 2) - this.combination(n - 1, 2)) * k;
  }

  // m * n - k
  static combine10(ballRows) {

    const m = ballRows[0].length;
    const n = ballRows[1].length;
    const k = _.intersection(ballRows[0], ballRows[1]).length;

    return m * n - k;
  }

  // m * n - k
  static combine5(ballRows) {

    const m = ballRows[0].length;
    const n = ballRows[1].length;
    const k = _.intersection(ballRows[0], ballRows[1]).length;

    return m * n - k;
  }

  static combination(n, k) {

    if (n === 0) {
      return 0;
    }

    if (k === 0) {
      return 1;
    }

    if (k > n) {
      return 0;
    }

    // ex: n=10, k=3, _.range(n-k+1, n+1): 10,9,8 => reduce: 10*9*8 / 3!
    // 約分過後的算法, 速度提升
    return _.range(n - k + 1, n + 1).reduce((result, num) => result * num) / this.factorial(k);
  }

  static factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return _.times(n, (num) => (num + 1)).reduce((result, num) => result * num);
  }

}