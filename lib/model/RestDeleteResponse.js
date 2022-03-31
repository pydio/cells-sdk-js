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
 * The RestDeleteResponse model module.
 * @module model/RestDeleteResponse
 * @version 4.0
 */
var RestDeleteResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestDeleteResponse</code>.
   * @alias module:model/RestDeleteResponse
   */
  function RestDeleteResponse() {
    _classCallCheck(this, RestDeleteResponse);

    RestDeleteResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestDeleteResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestDeleteResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestDeleteResponse} obj Optional instance to populate.
     * @return {module:model/RestDeleteResponse} The populated <code>RestDeleteResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestDeleteResponse();

        if (data.hasOwnProperty('NumRows')) {
          obj['NumRows'] = _ApiClient["default"].convertToType(data['NumRows'], 'String');
        }

        if (data.hasOwnProperty('Success')) {
          obj['Success'] = _ApiClient["default"].convertToType(data['Success'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return RestDeleteResponse;
}();
/**
 * @member {String} NumRows
 */


RestDeleteResponse.prototype['NumRows'] = undefined;
/**
 * @member {Boolean} Success
 */

RestDeleteResponse.prototype['Success'] = undefined;
var _default = RestDeleteResponse;
exports["default"] = _default;
//# sourceMappingURL=RestDeleteResponse.js.map
