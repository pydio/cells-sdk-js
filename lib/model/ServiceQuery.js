"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ProtobufAny = _interopRequireDefault(require("./ProtobufAny"));

var _ServiceOperationType = _interopRequireDefault(require("./ServiceOperationType"));

var _ServiceResourcePolicyQuery = _interopRequireDefault(require("./ServiceResourcePolicyQuery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ServiceQuery model module.
 * @module model/ServiceQuery
 * @version 4.0
 */
var ServiceQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ServiceQuery</code>.
   * @alias module:model/ServiceQuery
   */
  function ServiceQuery() {
    _classCallCheck(this, ServiceQuery);

    ServiceQuery.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ServiceQuery, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ServiceQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceQuery} obj Optional instance to populate.
     * @return {module:model/ServiceQuery} The populated <code>ServiceQuery</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServiceQuery();

        if (data.hasOwnProperty('Limit')) {
          obj['Limit'] = _ApiClient["default"].convertToType(data['Limit'], 'String');
        }

        if (data.hasOwnProperty('Offset')) {
          obj['Offset'] = _ApiClient["default"].convertToType(data['Offset'], 'String');
        }

        if (data.hasOwnProperty('Operation')) {
          obj['Operation'] = _ServiceOperationType["default"].constructFromObject(data['Operation']);
        }

        if (data.hasOwnProperty('ResourcePolicyQuery')) {
          obj['ResourcePolicyQuery'] = _ServiceResourcePolicyQuery["default"].constructFromObject(data['ResourcePolicyQuery']);
        }

        if (data.hasOwnProperty('SortDesc')) {
          obj['SortDesc'] = _ApiClient["default"].convertToType(data['SortDesc'], 'Boolean');
        }

        if (data.hasOwnProperty('SortField')) {
          obj['SortField'] = _ApiClient["default"].convertToType(data['SortField'], 'String');
        }

        if (data.hasOwnProperty('SubQueries')) {
          obj['SubQueries'] = _ApiClient["default"].convertToType(data['SubQueries'], [_ProtobufAny["default"]]);
        }

        if (data.hasOwnProperty('groupBy')) {
          obj['groupBy'] = _ApiClient["default"].convertToType(data['groupBy'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ServiceQuery;
}();
/**
 * @member {String} Limit
 */


ServiceQuery.prototype['Limit'] = undefined;
/**
 * @member {String} Offset
 */

ServiceQuery.prototype['Offset'] = undefined;
/**
 * @member {module:model/ServiceOperationType} Operation
 */

ServiceQuery.prototype['Operation'] = undefined;
/**
 * @member {module:model/ServiceResourcePolicyQuery} ResourcePolicyQuery
 */

ServiceQuery.prototype['ResourcePolicyQuery'] = undefined;
/**
 * @member {Boolean} SortDesc
 */

ServiceQuery.prototype['SortDesc'] = undefined;
/**
 * @member {String} SortField
 */

ServiceQuery.prototype['SortField'] = undefined;
/**
 * @member {Array.<module:model/ProtobufAny>} SubQueries
 */

ServiceQuery.prototype['SubQueries'] = undefined;
/**
 * @member {Number} groupBy
 */

ServiceQuery.prototype['groupBy'] = undefined;
var _default = ServiceQuery;
exports["default"] = _default;
//# sourceMappingURL=ServiceQuery.js.map
