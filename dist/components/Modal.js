'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _index = require('../index');

var _reactRedux = require('react-redux');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('jquery-ui/ui/core');

require('jquery-ui/ui/widgets/draggable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
  }

  _createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.modalOverlay = document.createElement('div');
      this.modalOverlay.className = 'modal-overlay';
      document.body.appendChild(this.modalOverlay);

      this.modalTarget = document.createElement('div');
      this.modalTarget.className = 'modal';
      document.body.appendChild(this.modalTarget);

      (0, _jquery2.default)(this.modalTarget).draggable({ handle: "div.dialog_box_title" });

      if (this.props.width) {
        (0, _jquery2.default)(this.modalTarget).css('width', this.props.width + 'px');
      }

      this._render();
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
      this._render();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _reactDom2.default.unmountComponentAtNode(this.modalTarget);
      document.body.removeChild(this.modalTarget);
      document.body.removeChild(this.modalOverlay);
    }
  }, {
    key: '_render',
    value: function _render() {
      _reactDom2.default.render(_react2.default.createElement(
        _reactRedux.Provider,
        { store: _index.store },
        _react2.default.createElement(
          'div',
          null,
          this.props.children,
          _react2.default.createElement(
            'div',
            { className: 'dialog_box_button customChBtn' },
            _react2.default.createElement('input', { type: 'button', value: '\u786E\u5B9A', className: 'dialog_box_ok', onClick: this.onClickConfirm.bind(this) }),
            this.props.isShowCancel ? _react2.default.createElement('input', { type: 'button', value: '\u53D6\u6D88', className: 'dialog_box_cancel', onClick: this.onClickCancel.bind(this) }) : ""
          )
        )
      ), this.modalTarget);
    }
  }, {
    key: 'onClickConfirm',
    value: function onClickConfirm(e) {
      if (typeof this.props.onClickConfirm === 'function') {
        this.props.onClickConfirm();
      }
    }
  }, {
    key: 'onClickCancel',
    value: function onClickCancel(e) {
      if (typeof this.props.onClickCancel === 'function') {
        this.props.onClickCancel();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('noscript', null);
    }
  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  width: _react2.default.PropTypes.number,
  isShowCancel: _react2.default.PropTypes.bool,
  onClickCancel: _react2.default.PropTypes.func,
  onClickConfirm: _react2.default.PropTypes.func
};

exports.default = Modal;