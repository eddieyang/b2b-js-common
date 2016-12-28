'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ballBoardConfig = exports.hotGapDigit = undefined;

var _immutable = require('immutable');

// bet digit
var EMPTY = 'EMPTY';
var TEN_THOUSANDS = 'TEN_THOUSANDS';
var THOUSANDS = 'THOUSANDS';
var HUNDREDS = 'HUNDREDS';
var TENS = 'TENS';
var ONES = 'ONES';
var COM = 'COM';

var SINGLE = 'SINGLE';
var REPEAT2 = 'REPEAT2';
var REPEAT3 = 'REPEAT3';
var REPEAT4 = 'REPEAT4';

var BoardConfig = (0, _immutable.Record)({
  ballMin: 0,
  ballMax: 0,
  ballDigit: 1,
  betDigits: [],
  isShowToolbar: true,
  isShowHotGap: true,
  formula: undefined,
  multi: true
});

var hotGapDigit = exports.hotGapDigit = {
  ONES: '1',
  TENS: '2',
  HUNDREDS: '3',
  THOUSANDS: '4',
  TEN_THOUSANDS: '5'
};

var ballBoardConfig = exports.ballBoardConfig = {
  // All5Straight
  '31': new BoardConfig({
    ballMin: 0,
    ballMax: 9,
    ballDigit: 1,
    betDigits: [TEN_THOUSANDS, THOUSANDS, HUNDREDS, TENS, ONES],
    formula: 'straight'
  }),
  // Last3Straight
  '21': new BoardConfig({
    ballMin: 0,
    ballMax: 9,
    ballDigit: 1,
    betDigits: [HUNDREDS, TENS, ONES],
    formula: 'straight'
  }),
  // All5All
  '32': new BoardConfig({
    ballMin: 0,
    ballMax: 9,
    ballDigit: 1,
    betDigits: [TEN_THOUSANDS, THOUSANDS, HUNDREDS, TENS, ONES],
    isShowToolbar: false,
    formula: 'oneNum',
    multi: false
  }),
  // All5Join
  '33': new BoardConfig({
    ballMin: 0,
    ballMax: 9,
    ballDigit: 1,
    betDigits: [TEN_THOUSANDS, THOUSANDS, HUNDREDS, TENS, ONES],
    formula: 'continuousChoose'
  }),
  // AllCom120
  '1601': new BoardConfig({
    ballMin: 0,
    ballMax: 9,
    ballDigit: 1,
    isShowHotGap: false,
    betDigits: [COM],
    formula: 'combine120'
  }),
  // AllCom60
  '1602': new BoardConfig({
    ballMin: 0,
    ballMax: 9,
    ballDigit: 1,
    isShowHotGap: false,
    betDigits: [REPEAT2, SINGLE],
    formula: 'combine60'
  }),
  // AllCom30
  '1603': new BoardConfig({
    ballMin: 0,
    ballMax: 9,
    ballDigit: 1,
    isShowHotGap: false,
    betDigits: [REPEAT2, SINGLE],
    formula: 'combine30'
  }),
  //  AllCom20
  '1604': new BoardConfig({
    ballMin: 0,
    ballMax: 9,
    ballDigit: 1,
    isShowHotGap: false,
    betDigits: [REPEAT3, SINGLE],
    formula: 'combine20'
  }),
  //  AllCom10
  '1605': new BoardConfig({
    ballMin: 0,
    ballMax: 9,
    ballDigit: 1,
    isShowHotGap: false,
    betDigits: [REPEAT3, REPEAT2],
    formula: 'combine10'
  }),
  //  AllCom5
  '1606': new BoardConfig({
    ballMin: 0,
    ballMax: 9,
    ballDigit: 1,
    isShowHotGap: false,
    betDigits: [REPEAT4, SINGLE],
    formula: 'combine5'
  })

};