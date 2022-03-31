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
 * The IdmACL model module.
 * @module model/IdmACL
 * @version 4.0
 */
var IdmACL = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IdmACL</code>.
   * ACL are the basic flags that can be put anywhere in the tree to provide some specific rights to a given role. The context of how they apply can be fine-tuned by workspace.
   * @alias module:model/IdmACL
   */
  function IdmACL() {
    _classCallCheck(this, IdmACL);

    IdmACL.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IdmACL, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IdmACL</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IdmACL} obj Optional instance to populate.
     * @return {module:model/IdmACL} The populated <code>IdmACL</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IdmACL();

        if (data.hasOwnProperty('Action')) {
          obj['Action'] = _IdmACLAction["default"].constructFromObject(data['Action']);
        }

        if (data.hasOwnProperty('ID')) {
          obj['ID'] = _ApiClient["default"].convertToType(data['ID'], 'String');
        }

        if (data.hasOwnProperty('NodeID')) {
          obj['NodeID'] = _ApiClient["default"].convertToType(data['NodeID'], 'String');
        }

        if (data.hasOwnProperty('RoleID')) {
          obj['RoleID'] = _ApiClient["default"].convertToType(data['RoleID'], 'String');
        }

        if (data.hasOwnProperty('WorkspaceID')) {
          obj['WorkspaceID'] = _ApiClient["default"].convertToType(data['WorkspaceID'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IdmACL;
}();
/**
 * @member {module:model/IdmACLAction} Action
 */


IdmACL.prototype['Action'] = undefined;
/**
 * @member {String} ID
 */

IdmACL.prototype['ID'] = undefined;
/**
 * @member {String} NodeID
 */

IdmACL.prototype['NodeID'] = undefined;
/**
 * @member {String} RoleID
 */

IdmACL.prototype['RoleID'] = undefined;
/**
 * @member {String} WorkspaceID
 */

IdmACL.prototype['WorkspaceID'] = undefined;
var _default = IdmACL;
exports["default"] = _default;
//# sourceMappingURL=IdmACL.js.map
