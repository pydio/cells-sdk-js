"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstallProxyConfig = _interopRequireDefault(require("./InstallProxyConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RestListSitesResponse model module.
 * @module model/RestListSitesResponse
 * @version 4.0
 */
var RestListSitesResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestListSitesResponse</code>.
   * @alias module:model/RestListSitesResponse
   */
  function RestListSitesResponse() {
    _classCallCheck(this, RestListSitesResponse);

    RestListSitesResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestListSitesResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestListSitesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestListSitesResponse} obj Optional instance to populate.
     * @return {module:model/RestListSitesResponse} The populated <code>RestListSitesResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestListSitesResponse();

        if (data.hasOwnProperty('Sites')) {
          obj['Sites'] = _ApiClient["default"].convertToType(data['Sites'], [_InstallProxyConfig["default"]]);
        }
      }

      return obj;
    }
  }]);

  return RestListSitesResponse;
}();
/**
 * @member {Array.<module:model/InstallProxyConfig>} Sites
 */


RestListSitesResponse.prototype['Sites'] = undefined;
var _default = RestListSitesResponse;
exports["default"] = _default;
//# sourceMappingURL=RestListSitesResponse.js.map
