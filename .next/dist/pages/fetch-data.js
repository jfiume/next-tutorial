'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('isomorphic-fetch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, null, [{
    key: 'getInitialProps',

    // static async getInitialProps () {
    //   const res = await fetch('https://api.comany.com/user/123')
    //   const data = await res.json()
    //   return { username: data.profile.username }
    // }
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var res = _ref.res;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', res ? { userAgent: res.headers['user-agent'] } : { userAgent: navigator.userAgent });

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2ZldGNoLWRhdGEuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJyZXMiLCJ1c2VyQWdlbnQiLCJoZWFkZXJzIiwibmF2aWdhdG9yIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O1NBR0U7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7WUFDZ0MsQSxXQUFBLEE7Ozs7O2lEQUN2QixNQUNMLEVBQUUsV0FBVyxJQUFJLEFBQUosUUFBWSxBQUFaLEFBQWIsQUFESyxrQkFFTCxFQUFFLFdBQVcsVUFBVSxBQUF2QixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBVHVCLGdCQUFNLEEiLCJmaWxlIjoiZmV0Y2gtZGF0YS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam9lL0RvY3VtZW50cy9uZXh0X3R1dG9yaWFsIn0=