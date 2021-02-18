"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The AuthToken model module.
* @module model/AuthToken
* @version 1.0
*/
var AuthToken = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>AuthToken</code>.
  * @alias module:model/AuthToken
  * @class
  */
  function AuthToken() {
    _classCallCheck(this, AuthToken);

    _defineProperty(this, "AccessToken", undefined);

    _defineProperty(this, "IDToken", undefined);

    _defineProperty(this, "RefreshToken", undefined);

    _defineProperty(this, "ExpiresAt", undefined);
  }
  /**
  * Constructs a <code>AuthToken</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/AuthToken} obj Optional instance to populate.
  * @return {module:model/AuthToken} The populated <code>AuthToken</code> instance.
  */


  _createClass(AuthToken, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthToken();

        if (data.hasOwnProperty('AccessToken')) {
          obj['AccessToken'] = _ApiClient["default"].convertToType(data['AccessToken'], 'String');
        }

        if (data.hasOwnProperty('IDToken')) {
          obj['IDToken'] = _ApiClient["default"].convertToType(data['IDToken'], 'String');
        }

        if (data.hasOwnProperty('RefreshToken')) {
          obj['RefreshToken'] = _ApiClient["default"].convertToType(data['RefreshToken'], 'String');
        }

        if (data.hasOwnProperty('ExpiresAt')) {
          obj['ExpiresAt'] = _ApiClient["default"].convertToType(data['ExpiresAt'], 'String');
        }
      }

      return obj;
    }
    /**
    * @member {String} AccessToken
    */

  }]);

  return AuthToken;
}();

exports["default"] = AuthToken;
//# sourceMappingURL=AuthToken.js.map
