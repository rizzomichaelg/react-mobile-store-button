"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

const imageLinks = {
  ios: 'http://linkmaker.itunes.apple.com/images/badges/en-us/badge_appstore-lrg.svg',
  android: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Get_it_on_Google_play.svg'
};

class MobileStoreButton extends _react.default.Component {
  render() {
    const _props = this.props,
          {
      store,
      url,
      height,
      width
    } = _props,
          props = _objectWithoutProperties(_props, ["store", "url", "height", "width"]);

    const linkStyles = {
      background: `url(${imageLinks[store]}) no-repeat`,
      backgroundSize: 'contain',
      display: 'inline-block',
      overflow: 'hidden',
      textDecoration: 'none',
      height: '100%',
      width: '100%',
      padding: '5px'
    };
    return _react.default.createElement("div", _extends({
      style: {
        height,
        width,
        display: 'inline-block'
      }
    }, props), _react.default.createElement("a", {
      style: linkStyles,
      href: url,
      target: "_blank",
      rel: "noopener noreferrer"
    }, "\xA0"));
  }

}

Object.defineProperty(MobileStoreButton, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    store: _propTypes.default.oneOf(['ios', 'android']).isRequired,
    url: _propTypes.default.string.isRequired,
    height: _propTypes.default.number,
    width: _propTypes.default.number
  }
});
Object.defineProperty(MobileStoreButton, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    height: 75,
    width: 255
  }
});
var _default = MobileStoreButton;
exports.default = _default;