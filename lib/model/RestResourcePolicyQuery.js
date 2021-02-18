"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ResourcePolicyQueryQueryType = _interopRequireDefault(require("./ResourcePolicyQueryQueryType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The RestResourcePolicyQuery model module.
* @module model/RestResourcePolicyQuery
* @version 1.0
*/
var RestResourcePolicyQuery = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestResourcePolicyQuery</code>.
  * @alias module:model/RestResourcePolicyQuery
  * @class
  */
  function RestResourcePolicyQuery() {
    _classCallCheck(this, RestResourcePolicyQuery);

    _defineProperty(this, "Type", undefined);

    _defineProperty(this, "UserId", undefined);
  }
  /**
  * Constructs a <code>RestResourcePolicyQuery</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestResourcePolicyQuery} obj Optional instance to populate.
  * @return {module:model/RestResourcePolicyQuery} The populated <code>RestResourcePolicyQuery</code> instance.
  */


  _createClass(RestResourcePolicyQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestResourcePolicyQuery();

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _ResourcePolicyQueryQueryType["default"].constructFromObject(data['Type']);
        }

        if (data.hasOwnProperty('UserId')) {
          obj['UserId'] = _ApiClient["default"].convertToType(data['UserId'], 'String');
        }
      }

      return obj;
    }
    /**
    * @member {module:model/ResourcePolicyQueryQueryType} Type
    */

  }]);

  return RestResourcePolicyQuery;
}();

exports["default"] = RestResourcePolicyQuery;
//# sourceMappingURL=RestResourcePolicyQuery.js.map
