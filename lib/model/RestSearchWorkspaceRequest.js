"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdmWorkspaceSingleQuery = _interopRequireDefault(require("./IdmWorkspaceSingleQuery"));

var _RestResourcePolicyQuery = _interopRequireDefault(require("./RestResourcePolicyQuery"));

var _ServiceOperationType = _interopRequireDefault(require("./ServiceOperationType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The RestSearchWorkspaceRequest model module.
* @module model/RestSearchWorkspaceRequest
* @version 1.0
*/
var RestSearchWorkspaceRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestSearchWorkspaceRequest</code>.
  * @alias module:model/RestSearchWorkspaceRequest
  * @class
  */
  function RestSearchWorkspaceRequest() {
    _classCallCheck(this, RestSearchWorkspaceRequest);

    _defineProperty(this, "Queries", undefined);

    _defineProperty(this, "ResourcePolicyQuery", undefined);

    _defineProperty(this, "Offset", undefined);

    _defineProperty(this, "Limit", undefined);

    _defineProperty(this, "GroupBy", undefined);

    _defineProperty(this, "CountOnly", undefined);

    _defineProperty(this, "Operation", undefined);
  }
  /**
  * Constructs a <code>RestSearchWorkspaceRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestSearchWorkspaceRequest} obj Optional instance to populate.
  * @return {module:model/RestSearchWorkspaceRequest} The populated <code>RestSearchWorkspaceRequest</code> instance.
  */


  _createClass(RestSearchWorkspaceRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestSearchWorkspaceRequest();

        if (data.hasOwnProperty('Queries')) {
          obj['Queries'] = _ApiClient["default"].convertToType(data['Queries'], [_IdmWorkspaceSingleQuery["default"]]);
        }

        if (data.hasOwnProperty('ResourcePolicyQuery')) {
          obj['ResourcePolicyQuery'] = _RestResourcePolicyQuery["default"].constructFromObject(data['ResourcePolicyQuery']);
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
    * @member {Array.<module:model/IdmWorkspaceSingleQuery>} Queries
    */

  }]);

  return RestSearchWorkspaceRequest;
}();

exports["default"] = RestSearchWorkspaceRequest;
//# sourceMappingURL=RestSearchWorkspaceRequest.js.map
