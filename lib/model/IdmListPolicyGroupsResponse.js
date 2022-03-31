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

/**
 * The IdmListPolicyGroupsResponse model module.
 * @module model/IdmListPolicyGroupsResponse
 * @version 4.0
 */
var IdmListPolicyGroupsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IdmListPolicyGroupsResponse</code>.
   * @alias module:model/IdmListPolicyGroupsResponse
   */
  function IdmListPolicyGroupsResponse() {
    _classCallCheck(this, IdmListPolicyGroupsResponse);

    IdmListPolicyGroupsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IdmListPolicyGroupsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IdmListPolicyGroupsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IdmListPolicyGroupsResponse} obj Optional instance to populate.
     * @return {module:model/IdmListPolicyGroupsResponse} The populated <code>IdmListPolicyGroupsResponse</code> instance.
     */

  }, {
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
  }]);

  return IdmListPolicyGroupsResponse;
}();
/**
 * @member {Array.<module:model/IdmPolicyGroup>} PolicyGroups
 */


IdmListPolicyGroupsResponse.prototype['PolicyGroups'] = undefined;
/**
 * @member {Number} Total
 */

IdmListPolicyGroupsResponse.prototype['Total'] = undefined;
var _default = IdmListPolicyGroupsResponse;
exports["default"] = _default;
//# sourceMappingURL=IdmListPolicyGroupsResponse.js.map
