'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodashCompat = require('lodash-compat');

var _lodashCompat2 = _interopRequireDefault(_lodashCompat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StakesCalculator = function () {
  function StakesCalculator() {
    _classCallCheck(this, StakesCalculator);
  }

  _createClass(StakesCalculator, null, [{
    key: 'straight',
    value: function straight(ballRows) {
      return ballRows.reduce(function (last, row) {
        return last * row.length;
      }, 1);
    }
  }, {
    key: 'oneNum',
    value: function oneNum(ballRows) {
      // check empty row
      if (ballRows.filter(function (row) {
        return row.length === 0;
      }).length > 0) {
        return 0;
      }
      return 1;
    }
  }, {
    key: 'continuousChoose',
    value: function continuousChoose(ballRows) {
      // check empty row
      if (ballRows.filter(function (row) {
        return row.length === 0;
      }).length > 0) {
        return 0;
      }
      return _lodashCompat2.default.reduce(ballRows, function (result, n, key) {
        return result + _lodashCompat2.default.drop(ballRows, key).reduce(function (result, row) {
          return result * row.length;
        }, 1);
      }, 0);
    }

    // C (n, 5)

  }, {
    key: 'combine120',
    value: function combine120(ballRows) {
      var n = _lodashCompat2.default.first(ballRows).length;
      if (n === 0) {
        return 0;
      }
      return this.combination(n, 5);
    }

    // C(n, 3) * m - (C(n, 3) - C(n-1, 3)) * k

  }, {
    key: 'combine60',
    value: function combine60(ballRows) {

      var m = ballRows[0].length;
      var n = ballRows[1].length;
      var k = _lodashCompat2.default.intersection(ballRows[0], ballRows[1]).length;

      return this.combination(n, 3) * m - (this.combination(n, 3) - this.combination(n - 1, 3)) * k;
    }

    // C(m,2) * n - (C(m,2) - C(m-1, 2)) * k

  }, {
    key: 'combine30',
    value: function combine30(ballRows) {

      var m = ballRows[0].length;
      var n = ballRows[1].length;
      var k = _lodashCompat2.default.intersection(ballRows[0], ballRows[1]).length;

      return this.combination(m, 2) * n - (this.combination(m, 2) - this.combination(m - 1, 2)) * k;
    }

    // C(n, 2) * m - (C(n, 2) - C(n-1, 2)) * k

  }, {
    key: 'combine20',
    value: function combine20(ballRows) {

      var m = ballRows[0].length;
      var n = ballRows[1].length;
      var k = _lodashCompat2.default.intersection(ballRows[0], ballRows[1]).length;

      return this.combination(n, 2) * m - (this.combination(n, 2) - this.combination(n - 1, 2)) * k;
    }

    // m * n - k

  }, {
    key: 'combine10',
    value: function combine10(ballRows) {

      var m = ballRows[0].length;
      var n = ballRows[1].length;
      var k = _lodashCompat2.default.intersection(ballRows[0], ballRows[1]).length;

      return m * n - k;
    }

    // m * n - k

  }, {
    key: 'combine5',
    value: function combine5(ballRows) {

      var m = ballRows[0].length;
      var n = ballRows[1].length;
      var k = _lodashCompat2.default.intersection(ballRows[0], ballRows[1]).length;

      return m * n - k;
    }
  }, {
    key: 'combination',
    value: function combination(n, k) {

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
      return _lodashCompat2.default.range(n - k + 1, n + 1).reduce(function (result, num) {
        return result * num;
      }) / this.factorial(k);
    }
  }, {
    key: 'factorial',
    value: function factorial(n) {
      if (n === 0 || n === 1) {
        return 1;
      }
      return _lodashCompat2.default.times(n, function (num) {
        return num + 1;
      }).reduce(function (result, num) {
        return result * num;
      });
    }
  }]);

  return StakesCalculator;
}();

exports.default = StakesCalculator;