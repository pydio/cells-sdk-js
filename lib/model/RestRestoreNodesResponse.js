"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RestBackgroundJobResult = _interopRequireDefault(require("./RestBackgroundJobResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RestRestoreNodesResponse model module.
 * @module model/RestRestoreNodesResponse
 * @version 4.0
 */
var RestRestoreNodesResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestRestoreNodesResponse</code>.
   * @alias module:model/RestRestoreNodesResponse
   */
  function RestRestoreNodesResponse() {
    _classCallCheck(this, RestRestoreNodesResponse);

    RestRestoreNodesResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestRestoreNodesResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestRestoreNodesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestRestoreNodesResponse} obj Optional instance to populate.
     * @return {module:model/RestRestoreNodesResponse} The populated <code>RestRestoreNodesResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestRestoreNodesResponse();

        if (data.hasOwnProperty('RestoreJobs')) {
          obj['RestoreJobs'] = _ApiClient["default"].convertToType(data['RestoreJobs'], [_RestBackgroundJobResult["default"]]);
        }
      }

      return obj;
    }
  }]);

  return RestRestoreNodesResponse;
}();
/**
 * @member {Array.<module:model/RestBackgroundJobResult>} RestoreJobs
 */


RestRestoreNodesResponse.prototype['RestoreJobs'] = undefined;
var _default = RestRestoreNodesResponse;
exports["default"] = _default;
//# sourceMappingURL=RestRestoreNodesResponse.js.map
