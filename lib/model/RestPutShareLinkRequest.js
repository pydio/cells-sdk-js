"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RestShareLink = _interopRequireDefault(require("./RestShareLink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RestPutShareLinkRequest model module.
 * @module model/RestPutShareLinkRequest
 * @version 4.0
 */
var RestPutShareLinkRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestPutShareLinkRequest</code>.
   * @alias module:model/RestPutShareLinkRequest
   */
  function RestPutShareLinkRequest() {
    _classCallCheck(this, RestPutShareLinkRequest);

    RestPutShareLinkRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestPutShareLinkRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestPutShareLinkRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestPutShareLinkRequest} obj Optional instance to populate.
     * @return {module:model/RestPutShareLinkRequest} The populated <code>RestPutShareLinkRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestPutShareLinkRequest();

        if (data.hasOwnProperty('CreatePassword')) {
          obj['CreatePassword'] = _ApiClient["default"].convertToType(data['CreatePassword'], 'String');
        }

        if (data.hasOwnProperty('PasswordEnabled')) {
          obj['PasswordEnabled'] = _ApiClient["default"].convertToType(data['PasswordEnabled'], 'Boolean');
        }

        if (data.hasOwnProperty('ShareLink')) {
          obj['ShareLink'] = _RestShareLink["default"].constructFromObject(data['ShareLink']);
        }

        if (data.hasOwnProperty('UpdateCustomHash')) {
          obj['UpdateCustomHash'] = _ApiClient["default"].convertToType(data['UpdateCustomHash'], 'String');
        }

        if (data.hasOwnProperty('UpdatePassword')) {
          obj['UpdatePassword'] = _ApiClient["default"].convertToType(data['UpdatePassword'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RestPutShareLinkRequest;
}();
/**
 * @member {String} CreatePassword
 */


RestPutShareLinkRequest.prototype['CreatePassword'] = undefined;
/**
 * @member {Boolean} PasswordEnabled
 */

RestPutShareLinkRequest.prototype['PasswordEnabled'] = undefined;
/**
 * @member {module:model/RestShareLink} ShareLink
 */

RestPutShareLinkRequest.prototype['ShareLink'] = undefined;
/**
 * @member {String} UpdateCustomHash
 */

RestPutShareLinkRequest.prototype['UpdateCustomHash'] = undefined;
/**
 * @member {String} UpdatePassword
 */

RestPutShareLinkRequest.prototype['UpdatePassword'] = undefined;
var _default = RestPutShareLinkRequest;
exports["default"] = _default;
//# sourceMappingURL=RestPutShareLinkRequest.js.map
