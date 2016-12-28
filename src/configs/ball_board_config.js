import { Record } from "immutable";

// bet digit
const EMPTY = 'EMPTY';
const TEN_THOUSANDS = 'TEN_THOUSANDS';
const THOUSANDS = 'THOUSANDS';
const HUNDREDS = 'HUNDREDS';
const TENS = 'TENS';
const ONES = 'ONES';
const COM = 'COM';

const SINGLE = 'SINGLE';
const REPEAT2 = 'REPEAT2';
const REPEAT3 = 'REPEAT3';
const REPEAT4 = 'REPEAT4';

const BoardConfig = Record({
  ballMin: 0,
  ballMax: 0,
  ballDigit: 1,
  betDigits: [],
  isShowToolbar: true,
  isShowHotGap: true,
  formula: undefined,
  multi: true
});

export const hotGapDigit = {
  ONES: '1',
  TENS: '2',
  HUNDREDS: '3',
  THOUSANDS: '4',
  TEN_THOUSANDS: '5'
};

export const ballBoardConfig = {
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
  }),

};