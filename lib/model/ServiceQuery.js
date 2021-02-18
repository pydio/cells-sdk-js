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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The ServiceQuery model module.
* @module model/ServiceQuery
* @version 1.0
*/
var ServiceQuery = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>ServiceQuery</code>.
  * @alias module:model/ServiceQuery
  * @class
  */
  function ServiceQuery() {
    _classCallCheck(this, ServiceQuery);

    _defineProperty(this, "SubQueries", undefined);

    _defineProperty(this, "Operation", undefined);

    _defineProperty(this, "ResourcePolicyQuery", undefined);

    _defineProperty(this, "Offset", undefined);

    _defineProperty(this, "Limit", undefined);

    _defineProperty(this, "groupBy", undefined);
  }
  /**
  * Constructs a <code>ServiceQuery</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/ServiceQuery} obj Optional instance to populate.
  * @return {module:model/ServiceQuery} The populated <code>ServiceQuery</code> instance.
  */


  _createClass(ServiceQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServiceQuery();

        if (data.hasOwnProperty('SubQueries')) {
          obj['SubQueries'] = _ApiClient["default"].convertToType(data['SubQueries'], [_ProtobufAny["default"]]);
        }

        if (data.hasOwnProperty('Operation')) {
          obj['Operation'] = _ServiceOperationType["default"].constructFromObject(data['Operation']);
        }

        if (data.hasOwnProperty('ResourcePolicyQuery')) {
          obj['ResourcePolicyQuery'] = _ServiceResourcePolicyQuery["default"].constructFromObject(data['ResourcePolicyQuery']);
        }

        if (data.hasOwnProperty('Offset')) {
          obj['Offset'] = _ApiClient["default"].convertToType(data['Offset'], 'String');
        }

        if (data.hasOwnProperty('Limit')) {
          obj['Limit'] = _ApiClient["default"].convertToType(data['Limit'], 'String');
        }

        if (data.hasOwnProperty('groupBy')) {
          obj['groupBy'] = _ApiClient["default"].convertToType(data['groupBy'], 'Number');
        }
      }

      return obj;
    }
    /**
    * @member {Array.<module:model/ProtobufAny>} SubQueries
    */

  }]);

  return ServiceQuery;
}();

exports["default"] = ServiceQuery;
//# sourceMappingURL=ServiceQuery.js.map
