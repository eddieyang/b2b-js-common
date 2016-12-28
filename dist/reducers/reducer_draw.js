"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INIT_STATE;
  var action = arguments[1];


  switch (action.type) {
    case _index.FETCH_DRAW:
      if (action.payload.data) {
        return action.payload.data.content || INIT_STATE;
      }
    case _index.ADD_DRAW:
      var _action$payload = action.payload,
          gameCode = _action$payload.gameCode,
          numero = _action$payload.numero,
          winNo = _action$payload.winningNumber;

      if (state.length && state[0].gameCode === gameCode) {
        return [{ gameCode: gameCode, numero: numero, winNo: winNo }].concat(_toConsumableArray(state));
      }
  }

  return state;
};

var _index = require("../actions/index");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var INIT_STATE = [];