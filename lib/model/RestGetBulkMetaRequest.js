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
 * The RestGetBulkMetaRequest model module.
 * @module model/RestGetBulkMetaRequest
 * @version 4.0
 */
var RestGetBulkMetaRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestGetBulkMetaRequest</code>.
   * @alias module:model/RestGetBulkMetaRequest
   */
  function RestGetBulkMetaRequest() {
    _classCallCheck(this, RestGetBulkMetaRequest);

    RestGetBulkMetaRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestGetBulkMetaRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestGetBulkMetaRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestGetBulkMetaRequest} obj Optional instance to populate.
     * @return {module:model/RestGetBulkMetaRequest} The populated <code>RestGetBulkMetaRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestGetBulkMetaRequest();

        if (data.hasOwnProperty('AllMetaProviders')) {
          obj['AllMetaProviders'] = _ApiClient["default"].convertToType(data['AllMetaProviders'], 'Boolean');
        }

        if (data.hasOwnProperty('Limit')) {
          obj['Limit'] = _ApiClient["default"].convertToType(data['Limit'], 'Number');
        }

        if (data.hasOwnProperty('NodePaths')) {
          obj['NodePaths'] = _ApiClient["default"].convertToType(data['NodePaths'], ['String']);
        }

        if (data.hasOwnProperty('Offset')) {
          obj['Offset'] = _ApiClient["default"].convertToType(data['Offset'], 'Number');
        }

        if (data.hasOwnProperty('SortDirDesc')) {
          obj['SortDirDesc'] = _ApiClient["default"].convertToType(data['SortDirDesc'], 'Boolean');
        }

        if (data.hasOwnProperty('SortField')) {
          obj['SortField'] = _ApiClient["default"].convertToType(data['SortField'], 'String');
        }

        if (data.hasOwnProperty('Versions')) {
          obj['Versions'] = _ApiClient["default"].convertToType(data['Versions'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return RestGetBulkMetaRequest;
}();
/**
 * @member {Boolean} AllMetaProviders
 */


RestGetBulkMetaRequest.prototype['AllMetaProviders'] = undefined;
/**
 * @member {Number} Limit
 */

RestGetBulkMetaRequest.prototype['Limit'] = undefined;
/**
 * @member {Array.<String>} NodePaths
 */

RestGetBulkMetaRequest.prototype['NodePaths'] = undefined;
/**
 * @member {Number} Offset
 */

RestGetBulkMetaRequest.prototype['Offset'] = undefined;
/**
 * @member {Boolean} SortDirDesc
 */

RestGetBulkMetaRequest.prototype['SortDirDesc'] = undefined;
/**
 * @member {String} SortField
 */

RestGetBulkMetaRequest.prototype['SortField'] = undefined;
/**
 * @member {Boolean} Versions
 */

RestGetBulkMetaRequest.prototype['Versions'] = undefined;
var _default = RestGetBulkMetaRequest;
exports["default"] = _default;
//# sourceMappingURL=RestGetBulkMetaRequest.js.map
