import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { store } from '../index';
import { Provider } from 'react-redux';

import $ from "jquery";
import "jquery-ui/ui/core";
import "jquery-ui/ui/widgets/draggable";

class Modal extends Component {

  componentDidMount() {
    this.modalOverlay = document.createElement('div');
    this.modalOverlay.className = 'modal-overlay';
    document.body.appendChild(this.modalOverlay);

    this.modalTarget = document.createElement('div');
    this.modalTarget.className = 'modal';
    document.body.appendChild(this.modalTarget);

    $(this.modalTarget).draggable({ handle: "div.dialog_box_title" });

    if (this.props.width) {
      $(this.modalTarget).css('width', `${this.props.width}px`);
    }

    this._render();
  }

  componentWillUpdate() {
    this._render();
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.modalTarget);
    document.body.removeChild(this.modalTarget);
    document.body.removeChild(this.modalOverlay);
  }

  _render() {
    ReactDOM.render(
      <Provider store={store}>

        <div>{this.props.children}
          <div className="dialog_box_button customChBtn">

            <input type="button" value="确定" className="dialog_box_ok" onClick={this.onClickConfirm.bind(this)}/>

            { this.props.isShowCancel ?
              <input type="button" value="取消" className="dialog_box_cancel" onClick={this.onClickCancel.bind(this)}/>
              : ""}

          </div>
        </div>
      </Provider>,
      this.modalTarget
    );
  }

  onClickConfirm(e) {
    if (typeof this.props.onClickConfirm === 'function') {
      this.props.onClickConfirm();
    }
  }

  onClickCancel(e) {
    if (typeof this.props.onClickCancel === 'function') {
      this.props.onClickCancel();
    }
  }

  render() {
    return <noscript />;
  }
}

Modal.propTypes = {
  width: React.PropTypes.number,
  isShowCancel: React.PropTypes.bool,
  onClickCancel: React.PropTypes.func,
  onClickConfirm: React.PropTypes.func
};


export default Modal;
