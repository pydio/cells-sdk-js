"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdmACLAction = _interopRequireDefault(require("./IdmACLAction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IdmACLSingleQuery model module.
 * @module model/IdmACLSingleQuery
 * @version 4.0
 */
var IdmACLSingleQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IdmACLSingleQuery</code>.
   * @alias module:model/IdmACLSingleQuery
   */
  function IdmACLSingleQuery() {
    _classCallCheck(this, IdmACLSingleQuery);

    IdmACLSingleQuery.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IdmACLSingleQuery, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IdmACLSingleQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IdmACLSingleQuery} obj Optional instance to populate.
     * @return {module:model/IdmACLSingleQuery} The populated <code>IdmACLSingleQuery</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IdmACLSingleQuery();

        if (data.hasOwnProperty('Actions')) {
          obj['Actions'] = _ApiClient["default"].convertToType(data['Actions'], [_IdmACLAction["default"]]);
        }

        if (data.hasOwnProperty('NodeIDs')) {
          obj['NodeIDs'] = _ApiClient["default"].convertToType(data['NodeIDs'], ['String']);
        }

        if (data.hasOwnProperty('RoleIDs')) {
          obj['RoleIDs'] = _ApiClient["default"].convertToType(data['RoleIDs'], ['String']);
        }

        if (data.hasOwnProperty('WorkspaceIDs')) {
          obj['WorkspaceIDs'] = _ApiClient["default"].convertToType(data['WorkspaceIDs'], ['String']);
        }

        if (data.hasOwnProperty('not')) {
          obj['not'] = _ApiClient["default"].convertToType(data['not'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return IdmACLSingleQuery;
}();
/**
 * @member {Array.<module:model/IdmACLAction>} Actions
 */


IdmACLSingleQuery.prototype['Actions'] = undefined;
/**
 * @member {Array.<String>} NodeIDs
 */

IdmACLSingleQuery.prototype['NodeIDs'] = undefined;
/**
 * @member {Array.<String>} RoleIDs
 */

IdmACLSingleQuery.prototype['RoleIDs'] = undefined;
/**
 * @member {Array.<String>} WorkspaceIDs
 */

IdmACLSingleQuery.prototype['WorkspaceIDs'] = undefined;
/**
 * @member {Boolean} not
 */

IdmACLSingleQuery.prototype['not'] = undefined;
var _default = IdmACLSingleQuery;
exports["default"] = _default;
//# sourceMappingURL=IdmACLSingleQuery.js.map
