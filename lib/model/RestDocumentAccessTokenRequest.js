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
 * The RestDocumentAccessTokenRequest model module.
 * @module model/RestDocumentAccessTokenRequest
 * @version 4.0
 */
var RestDocumentAccessTokenRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestDocumentAccessTokenRequest</code>.
   * @alias module:model/RestDocumentAccessTokenRequest
   */
  function RestDocumentAccessTokenRequest() {
    _classCallCheck(this, RestDocumentAccessTokenRequest);

    RestDocumentAccessTokenRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestDocumentAccessTokenRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestDocumentAccessTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestDocumentAccessTokenRequest} obj Optional instance to populate.
     * @return {module:model/RestDocumentAccessTokenRequest} The populated <code>RestDocumentAccessTokenRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestDocumentAccessTokenRequest();

        if (data.hasOwnProperty('ClientID')) {
          obj['ClientID'] = _ApiClient["default"].convertToType(data['ClientID'], 'String');
        }

        if (data.hasOwnProperty('Path')) {
          obj['Path'] = _ApiClient["default"].convertToType(data['Path'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RestDocumentAccessTokenRequest;
}();
/**
 * @member {String} ClientID
 */


RestDocumentAccessTokenRequest.prototype['ClientID'] = undefined;
/**
 * @member {String} Path
 */

RestDocumentAccessTokenRequest.prototype['Path'] = undefined;
var _default = RestDocumentAccessTokenRequest;
exports["default"] = _default;
//# sourceMappingURL=RestDocumentAccessTokenRequest.js.map
