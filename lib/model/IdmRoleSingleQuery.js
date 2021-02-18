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
* The IdmRoleSingleQuery model module.
* @module model/IdmRoleSingleQuery
* @version 1.0
*/
var IdmRoleSingleQuery = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>IdmRoleSingleQuery</code>.
  * RoleSingleQuery is the basic unit for building queries to Roles.
  * @alias module:model/IdmRoleSingleQuery
  * @class
  */
  function IdmRoleSingleQuery() {
    _classCallCheck(this, IdmRoleSingleQuery);

    _defineProperty(this, "Uuid", undefined);

    _defineProperty(this, "Label", undefined);

    _defineProperty(this, "IsTeam", undefined);

    _defineProperty(this, "IsGroupRole", undefined);

    _defineProperty(this, "IsUserRole", undefined);

    _defineProperty(this, "HasAutoApply", undefined);

    _defineProperty(this, "not", undefined);
  }
  /**
  * Constructs a <code>IdmRoleSingleQuery</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/IdmRoleSingleQuery} obj Optional instance to populate.
  * @return {module:model/IdmRoleSingleQuery} The populated <code>IdmRoleSingleQuery</code> instance.
  */


  _createClass(IdmRoleSingleQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IdmRoleSingleQuery();

        if (data.hasOwnProperty('Uuid')) {
          obj['Uuid'] = _ApiClient["default"].convertToType(data['Uuid'], ['String']);
        }

        if (data.hasOwnProperty('Label')) {
          obj['Label'] = _ApiClient["default"].convertToType(data['Label'], 'String');
        }

        if (data.hasOwnProperty('IsTeam')) {
          obj['IsTeam'] = _ApiClient["default"].convertToType(data['IsTeam'], 'Boolean');
        }

        if (data.hasOwnProperty('IsGroupRole')) {
          obj['IsGroupRole'] = _ApiClient["default"].convertToType(data['IsGroupRole'], 'Boolean');
        }

        if (data.hasOwnProperty('IsUserRole')) {
          obj['IsUserRole'] = _ApiClient["default"].convertToType(data['IsUserRole'], 'Boolean');
        }

        if (data.hasOwnProperty('HasAutoApply')) {
          obj['HasAutoApply'] = _ApiClient["default"].convertToType(data['HasAutoApply'], 'Boolean');
        }

        if (data.hasOwnProperty('not')) {
          obj['not'] = _ApiClient["default"].convertToType(data['not'], 'Boolean');
        }
      }

      return obj;
    }
    /**
    * @member {Array.<String>} Uuid
    */

  }]);

  return IdmRoleSingleQuery;
}();

exports["default"] = IdmRoleSingleQuery;
//# sourceMappingURL=IdmRoleSingleQuery.js.map
