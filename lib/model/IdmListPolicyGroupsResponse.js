"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdmPolicyGroup = _interopRequireDefault(require("./IdmPolicyGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The IdmListPolicyGroupsResponse model module.
* @module model/IdmListPolicyGroupsResponse
* @version 1.0
*/
var IdmListPolicyGroupsResponse = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>IdmListPolicyGroupsResponse</code>.
  * @alias module:model/IdmListPolicyGroupsResponse
  * @class
  */
  function IdmListPolicyGroupsResponse() {
    _classCallCheck(this, IdmListPolicyGroupsResponse);

    _defineProperty(this, "PolicyGroups", undefined);

    _defineProperty(this, "Total", undefined);
  }
  /**
  * Constructs a <code>IdmListPolicyGroupsResponse</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/IdmListPolicyGroupsResponse} obj Optional instance to populate.
  * @return {module:model/IdmListPolicyGroupsResponse} The populated <code>IdmListPolicyGroupsResponse</code> instance.
  */


  _createClass(IdmListPolicyGroupsResponse, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IdmListPolicyGroupsResponse();

        if (data.hasOwnProperty('PolicyGroups')) {
          obj['PolicyGroups'] = _ApiClient["default"].convertToType(data['PolicyGroups'], [_IdmPolicyGroup["default"]]);
        }

        if (data.hasOwnProperty('Total')) {
          obj['Total'] = _ApiClient["default"].convertToType(data['Total'], 'Number');
        }
      }

      return obj;
    }
    /**
    * @member {Array.<module:model/IdmPolicyGroup>} PolicyGroups
    */

  }]);

  return IdmListPolicyGroupsResponse;
}();

exports["default"] = IdmListPolicyGroupsResponse;
//# sourceMappingURL=IdmListPolicyGroupsResponse.js.map
