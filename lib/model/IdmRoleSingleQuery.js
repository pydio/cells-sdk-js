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

/**
 * The IdmRoleSingleQuery model module.
 * @module model/IdmRoleSingleQuery
 * @version 4.0
 */
var IdmRoleSingleQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IdmRoleSingleQuery</code>.
   * RoleSingleQuery is the basic unit for building queries to Roles.
   * @alias module:model/IdmRoleSingleQuery
   */
  function IdmRoleSingleQuery() {
    _classCallCheck(this, IdmRoleSingleQuery);

    IdmRoleSingleQuery.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IdmRoleSingleQuery, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IdmRoleSingleQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IdmRoleSingleQuery} obj Optional instance to populate.
     * @return {module:model/IdmRoleSingleQuery} The populated <code>IdmRoleSingleQuery</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IdmRoleSingleQuery();

        if (data.hasOwnProperty('HasAutoApply')) {
          obj['HasAutoApply'] = _ApiClient["default"].convertToType(data['HasAutoApply'], 'Boolean');
        }

        if (data.hasOwnProperty('IsGroupRole')) {
          obj['IsGroupRole'] = _ApiClient["default"].convertToType(data['IsGroupRole'], 'Boolean');
        }

        if (data.hasOwnProperty('IsTeam')) {
          obj['IsTeam'] = _ApiClient["default"].convertToType(data['IsTeam'], 'Boolean');
        }

        if (data.hasOwnProperty('IsUserRole')) {
          obj['IsUserRole'] = _ApiClient["default"].convertToType(data['IsUserRole'], 'Boolean');
        }

        if (data.hasOwnProperty('Label')) {
          obj['Label'] = _ApiClient["default"].convertToType(data['Label'], 'String');
        }

        if (data.hasOwnProperty('Uuid')) {
          obj['Uuid'] = _ApiClient["default"].convertToType(data['Uuid'], ['String']);
        }

        if (data.hasOwnProperty('not')) {
          obj['not'] = _ApiClient["default"].convertToType(data['not'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return IdmRoleSingleQuery;
}();
/**
 * @member {Boolean} HasAutoApply
 */


IdmRoleSingleQuery.prototype['HasAutoApply'] = undefined;
/**
 * @member {Boolean} IsGroupRole
 */

IdmRoleSingleQuery.prototype['IsGroupRole'] = undefined;
/**
 * @member {Boolean} IsTeam
 */

IdmRoleSingleQuery.prototype['IsTeam'] = undefined;
/**
 * @member {Boolean} IsUserRole
 */

IdmRoleSingleQuery.prototype['IsUserRole'] = undefined;
/**
 * @member {String} Label
 */

IdmRoleSingleQuery.prototype['Label'] = undefined;
/**
 * @member {Array.<String>} Uuid
 */

IdmRoleSingleQuery.prototype['Uuid'] = undefined;
/**
 * @member {Boolean} not
 */

IdmRoleSingleQuery.prototype['not'] = undefined;
var _default = IdmRoleSingleQuery;
exports["default"] = _default;
//# sourceMappingURL=IdmRoleSingleQuery.js.map
