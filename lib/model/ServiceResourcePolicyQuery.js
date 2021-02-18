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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The ServiceResourcePolicyQuery model module.
* @module model/ServiceResourcePolicyQuery
* @version 1.0
*/
var ServiceResourcePolicyQuery = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>ServiceResourcePolicyQuery</code>.
  * @alias module:model/ServiceResourcePolicyQuery
  * @class
  */
  function ServiceResourcePolicyQuery() {
    _classCallCheck(this, ServiceResourcePolicyQuery);

    _defineProperty(this, "Subjects", undefined);

    _defineProperty(this, "Empty", undefined);

    _defineProperty(this, "Any", undefined);
  }
  /**
  * Constructs a <code>ServiceResourcePolicyQuery</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/ServiceResourcePolicyQuery} obj Optional instance to populate.
  * @return {module:model/ServiceResourcePolicyQuery} The populated <code>ServiceResourcePolicyQuery</code> instance.
  */


  _createClass(ServiceResourcePolicyQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServiceResourcePolicyQuery();

        if (data.hasOwnProperty('Subjects')) {
          obj['Subjects'] = _ApiClient["default"].convertToType(data['Subjects'], ['String']);
        }

        if (data.hasOwnProperty('Empty')) {
          obj['Empty'] = _ApiClient["default"].convertToType(data['Empty'], 'Boolean');
        }

        if (data.hasOwnProperty('Any')) {
          obj['Any'] = _ApiClient["default"].convertToType(data['Any'], 'Boolean');
        }
      }

      return obj;
    }
    /**
    * @member {Array.<String>} Subjects
    */

  }]);

  return ServiceResourcePolicyQuery;
}();

exports["default"] = ServiceResourcePolicyQuery;
//# sourceMappingURL=ServiceResourcePolicyQuery.js.map
