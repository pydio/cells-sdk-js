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
 * The RestFrontSessionRequest model module.
 * @module model/RestFrontSessionRequest
 * @version 4.0
 */
var RestFrontSessionRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestFrontSessionRequest</code>.
   * @alias module:model/RestFrontSessionRequest
   */
  function RestFrontSessionRequest() {
    _classCallCheck(this, RestFrontSessionRequest);

    RestFrontSessionRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestFrontSessionRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestFrontSessionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestFrontSessionRequest} obj Optional instance to populate.
     * @return {module:model/RestFrontSessionRequest} The populated <code>RestFrontSessionRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestFrontSessionRequest();

        if (data.hasOwnProperty('AuthInfo')) {
          obj['AuthInfo'] = _ApiClient["default"].convertToType(data['AuthInfo'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('ClientTime')) {
          obj['ClientTime'] = _ApiClient["default"].convertToType(data['ClientTime'], 'Number');
        }

        if (data.hasOwnProperty('Logout')) {
          obj['Logout'] = _ApiClient["default"].convertToType(data['Logout'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return RestFrontSessionRequest;
}();
/**
 * @member {Object.<String, String>} AuthInfo
 */


RestFrontSessionRequest.prototype['AuthInfo'] = undefined;
/**
 * @member {Number} ClientTime
 */

RestFrontSessionRequest.prototype['ClientTime'] = undefined;
/**
 * @member {Boolean} Logout
 */

RestFrontSessionRequest.prototype['Logout'] = undefined;
var _default = RestFrontSessionRequest;
exports["default"] = _default;
//# sourceMappingURL=RestFrontSessionRequest.js.map
