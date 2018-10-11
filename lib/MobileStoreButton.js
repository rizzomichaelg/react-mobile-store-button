"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var imageLinks = {
  ios: 'https://linkmaker.itunes.apple.com/images/badges/en-us/badge_appstore-lrg.svg',
  android: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Get_it_on_Google_play.svg'
};

var MobileStoreButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MobileStoreButton, _React$Component);

  function MobileStoreButton() {
    _classCallCheck(this, MobileStoreButton);

    return _possibleConstructorReturn(this, (MobileStoreButton.__proto__ || Object.getPrototypeOf(MobileStoreButton)).apply(this, arguments));
  }

  _createClass(MobileStoreButton, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          store = _props.store,
          url = _props.url,
          height = _props.height,
          width = _props.width,
          linkProps = _props.linkProps,
          props = _objectWithoutProperties(_props, ["store", "url", "height", "width", "linkProps"]);

      var linkStyles = {
        background: "url(".concat(imageLinks[store], ") no-repeat"),
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
          height: height,
          width: width,
          display: 'inline-block'
        }
      }, props), _react.default.createElement("a", {
        style: linkStyles,
        href: url,
        target: "_blank",
        rel: "noopener noreferrer"
      }, linkProps));
    }
  }]);

  return MobileStoreButton;
}(_react.default.Component);

Object.defineProperty(MobileStoreButton, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    store: _propTypes.default.oneOf(['ios', 'android']).isRequired,
    url: _propTypes.default.string.isRequired,
    height: _propTypes.default.number,
    width: _propTypes.default.numberm
    linkProps: _propTypes.default.object
  }
});
Object.defineProperty(MobileStoreButton, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    height: 75,
    width: 255
  },
  linkProps: {}
});
var _default = MobileStoreButton;
exports.default = _default;