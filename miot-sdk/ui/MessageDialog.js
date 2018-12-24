/**
 * @export
 * @module miot/ui/MessageDialog
 * @description 消息对话框
 * @mark andr done
 */
import React, {Component} from 'react';
import {
  requireNativeComponent,
  ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';
export default class MessageDialog extends Component {
  static propTypes = {
    /**
     *
     * @member {bool}
     */
    visible: PropTypes.bool,
    /**
     *
     * @member {bool}
     */
    cancelable: PropTypes.bool,
    /**
     *
     * @member {string}
     */
    title: PropTypes.string,
    /**
     *
     * @member {string}
     */
    message: PropTypes.string,
    /**
     * 超时自动隐藏，设置0或者不设置不会自动隐藏
     * @member {number}
     */
    timeout: PropTypes.number,
    /**
     *
     * @member {string}
     */
    cancel: PropTypes.string,
    /**
     *
     * @member {string}
     */
    confirm: PropTypes.string,
    /**
     *
     * @member {func}
     */
    onConfirm: PropTypes.func,
    /**
     *
     * @member {func}
     */
    onCancel: PropTypes.func,
    /**
     *
     * @member {func}
     */
    onDismiss: PropTypes.func,
    ...ViewPropTypes,
  };
  render() {
     return null
  }
}