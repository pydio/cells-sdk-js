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

/**
 * The AuthToken model module.
 * @module model/AuthToken
 * @version 4.0
 */
var AuthToken = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AuthToken</code>.
   * @alias module:model/AuthToken
   */
  function AuthToken() {
    _classCallCheck(this, AuthToken);

    AuthToken.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AuthToken, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AuthToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthToken} obj Optional instance to populate.
     * @return {module:model/AuthToken} The populated <code>AuthToken</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthToken();

        if (data.hasOwnProperty('AccessToken')) {
          obj['AccessToken'] = _ApiClient["default"].convertToType(data['AccessToken'], 'String');
        }

        if (data.hasOwnProperty('ExpiresAt')) {
          obj['ExpiresAt'] = _ApiClient["default"].convertToType(data['ExpiresAt'], 'String');
        }

        if (data.hasOwnProperty('IDToken')) {
          obj['IDToken'] = _ApiClient["default"].convertToType(data['IDToken'], 'String');
        }

        if (data.hasOwnProperty('RefreshToken')) {
          obj['RefreshToken'] = _ApiClient["default"].convertToType(data['RefreshToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AuthToken;
}();
/**
 * @member {String} AccessToken
 */


AuthToken.prototype['AccessToken'] = undefined;
/**
 * @member {String} ExpiresAt
 */

AuthToken.prototype['ExpiresAt'] = undefined;
/**
 * @member {String} IDToken
 */

AuthToken.prototype['IDToken'] = undefined;
/**
 * @member {String} RefreshToken
 */

AuthToken.prototype['RefreshToken'] = undefined;
var _default = AuthToken;
exports["default"] = _default;
//# sourceMappingURL=AuthToken.js.map
