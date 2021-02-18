"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdmACLSingleQuery = _interopRequireDefault(require("./IdmACLSingleQuery"));

var _ServiceOperationType = _interopRequireDefault(require("./ServiceOperationType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The RestSearchACLRequest model module.
* @module model/RestSearchACLRequest
* @version 1.0
*/
var RestSearchACLRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestSearchACLRequest</code>.
  * @alias module:model/RestSearchACLRequest
  * @class
  */
  function RestSearchACLRequest() {
    _classCallCheck(this, RestSearchACLRequest);

    _defineProperty(this, "Queries", undefined);

    _defineProperty(this, "Offset", undefined);

    _defineProperty(this, "Limit", undefined);

    _defineProperty(this, "GroupBy", undefined);

    _defineProperty(this, "CountOnly", undefined);

    _defineProperty(this, "Operation", undefined);
  }
  /**
  * Constructs a <code>RestSearchACLRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestSearchACLRequest} obj Optional instance to populate.
  * @return {module:model/RestSearchACLRequest} The populated <code>RestSearchACLRequest</code> instance.
  */


  _createClass(RestSearchACLRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestSearchACLRequest();

        if (data.hasOwnProperty('Queries')) {
          obj['Queries'] = _ApiClient["default"].convertToType(data['Queries'], [_IdmACLSingleQuery["default"]]);
        }

        if (data.hasOwnProperty('Offset')) {
          obj['Offset'] = _ApiClient["default"].convertToType(data['Offset'], 'String');
        }

        if (data.hasOwnProperty('Limit')) {
          obj['Limit'] = _ApiClient["default"].convertToType(data['Limit'], 'String');
        }

        if (data.hasOwnProperty('GroupBy')) {
          obj['GroupBy'] = _ApiClient["default"].convertToType(data['GroupBy'], 'Number');
        }

        if (data.hasOwnProperty('CountOnly')) {
          obj['CountOnly'] = _ApiClient["default"].convertToType(data['CountOnly'], 'Boolean');
        }

        if (data.hasOwnProperty('Operation')) {
          obj['Operation'] = _ServiceOperationType["default"].constructFromObject(data['Operation']);
        }
      }

      return obj;
    }
    /**
    * @member {Array.<module:model/IdmACLSingleQuery>} Queries
    */

  }]);

  return RestSearchACLRequest;
}();

exports["default"] = RestSearchACLRequest;
//# sourceMappingURL=RestSearchACLRequest.js.map
