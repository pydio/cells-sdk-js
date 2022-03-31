"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RestProcess = _interopRequireDefault(require("./RestProcess"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RestListProcessesResponse model module.
 * @module model/RestListProcessesResponse
 * @version 4.0
 */
var RestListProcessesResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestListProcessesResponse</code>.
   * @alias module:model/RestListProcessesResponse
   */
  function RestListProcessesResponse() {
    _classCallCheck(this, RestListProcessesResponse);

    RestListProcessesResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestListProcessesResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestListProcessesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestListProcessesResponse} obj Optional instance to populate.
     * @return {module:model/RestListProcessesResponse} The populated <code>RestListProcessesResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestListProcessesResponse();

        if (data.hasOwnProperty('Processes')) {
          obj['Processes'] = _ApiClient["default"].convertToType(data['Processes'], [_RestProcess["default"]]);
        }
      }

      return obj;
    }
  }]);

  return RestListProcessesResponse;
}();
/**
 * @member {Array.<module:model/RestProcess>} Processes
 */


RestListProcessesResponse.prototype['Processes'] = undefined;
var _default = RestListProcessesResponse;
exports["default"] = _default;
//# sourceMappingURL=RestListProcessesResponse.js.map
