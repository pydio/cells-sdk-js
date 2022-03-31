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
 * The RestUserJobRequest model module.
 * @module model/RestUserJobRequest
 * @version 4.0
 */
var RestUserJobRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestUserJobRequest</code>.
   * @alias module:model/RestUserJobRequest
   */
  function RestUserJobRequest() {
    _classCallCheck(this, RestUserJobRequest);

    RestUserJobRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestUserJobRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestUserJobRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestUserJobRequest} obj Optional instance to populate.
     * @return {module:model/RestUserJobRequest} The populated <code>RestUserJobRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestUserJobRequest();

        if (data.hasOwnProperty('JsonParameters')) {
          obj['JsonParameters'] = _ApiClient["default"].convertToType(data['JsonParameters'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RestUserJobRequest;
}();
/**
 * @member {String} JsonParameters
 */


RestUserJobRequest.prototype['JsonParameters'] = undefined;
var _default = RestUserJobRequest;
exports["default"] = _default;
//# sourceMappingURL=RestUserJobRequest.js.map
