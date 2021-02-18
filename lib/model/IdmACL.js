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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The IdmACL model module.
* @module model/IdmACL
* @version 1.0
*/
var IdmACL = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>IdmACL</code>.
  * ACL are the basic flags that can be put anywhere in the tree to provide some specific rights to a given role. The context of how they apply can be fine-tuned by workspace.
  * @alias module:model/IdmACL
  * @class
  */
  function IdmACL() {
    _classCallCheck(this, IdmACL);

    _defineProperty(this, "ID", undefined);

    _defineProperty(this, "Action", undefined);

    _defineProperty(this, "RoleID", undefined);

    _defineProperty(this, "WorkspaceID", undefined);

    _defineProperty(this, "NodeID", undefined);
  }
  /**
  * Constructs a <code>IdmACL</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/IdmACL} obj Optional instance to populate.
  * @return {module:model/IdmACL} The populated <code>IdmACL</code> instance.
  */


  _createClass(IdmACL, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IdmACL();

        if (data.hasOwnProperty('ID')) {
          obj['ID'] = _ApiClient["default"].convertToType(data['ID'], 'String');
        }

        if (data.hasOwnProperty('Action')) {
          obj['Action'] = _IdmACLAction["default"].constructFromObject(data['Action']);
        }

        if (data.hasOwnProperty('RoleID')) {
          obj['RoleID'] = _ApiClient["default"].convertToType(data['RoleID'], 'String');
        }

        if (data.hasOwnProperty('WorkspaceID')) {
          obj['WorkspaceID'] = _ApiClient["default"].convertToType(data['WorkspaceID'], 'String');
        }

        if (data.hasOwnProperty('NodeID')) {
          obj['NodeID'] = _ApiClient["default"].convertToType(data['NodeID'], 'String');
        }
      }

      return obj;
    }
    /**
    * @member {String} ID
    */

  }]);

  return IdmACL;
}();

exports["default"] = IdmACL;
//# sourceMappingURL=IdmACL.js.map
