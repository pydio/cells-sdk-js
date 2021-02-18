"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ServiceResourcePolicyAction = _interopRequireDefault(require("./ServiceResourcePolicyAction"));

var _ServiceResourcePolicyPolicyEffect = _interopRequireDefault(require("./ServiceResourcePolicyPolicyEffect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The ServiceResourcePolicy model module.
* @module model/ServiceResourcePolicy
* @version 1.0
*/
var ServiceResourcePolicy = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>ServiceResourcePolicy</code>.
  * @alias module:model/ServiceResourcePolicy
  * @class
  */
  function ServiceResourcePolicy() {
    _classCallCheck(this, ServiceResourcePolicy);

    _defineProperty(this, "id", undefined);

    _defineProperty(this, "Resource", undefined);

    _defineProperty(this, "Action", undefined);

    _defineProperty(this, "Subject", undefined);

    _defineProperty(this, "Effect", undefined);

    _defineProperty(this, "JsonConditions", undefined);
  }
  /**
  * Constructs a <code>ServiceResourcePolicy</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/ServiceResourcePolicy} obj Optional instance to populate.
  * @return {module:model/ServiceResourcePolicy} The populated <code>ServiceResourcePolicy</code> instance.
  */


  _createClass(ServiceResourcePolicy, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServiceResourcePolicy();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('Resource')) {
          obj['Resource'] = _ApiClient["default"].convertToType(data['Resource'], 'String');
        }

        if (data.hasOwnProperty('Action')) {
          obj['Action'] = _ServiceResourcePolicyAction["default"].constructFromObject(data['Action']);
        }

        if (data.hasOwnProperty('Subject')) {
          obj['Subject'] = _ApiClient["default"].convertToType(data['Subject'], 'String');
        }

        if (data.hasOwnProperty('Effect')) {
          obj['Effect'] = _ServiceResourcePolicyPolicyEffect["default"].constructFromObject(data['Effect']);
        }

        if (data.hasOwnProperty('JsonConditions')) {
          obj['JsonConditions'] = _ApiClient["default"].convertToType(data['JsonConditions'], 'String');
        }
      }

      return obj;
    }
    /**
    * @member {String} id
    */

  }]);

  return ServiceResourcePolicy;
}();

exports["default"] = ServiceResourcePolicy;
//# sourceMappingURL=ServiceResourcePolicy.js.map
