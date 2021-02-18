"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdmWorkspaceScope = _interopRequireDefault(require("./IdmWorkspaceScope"));

var _ServiceResourcePolicy = _interopRequireDefault(require("./ServiceResourcePolicy"));

var _TreeNode = _interopRequireDefault(require("./TreeNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The IdmWorkspace model module.
* @module model/IdmWorkspace
* @version 1.0
*/
var IdmWorkspace = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>IdmWorkspace</code>.
  * A Workspace is composed of a set of nodes UUIDs and is used to provide accesses to the tree via ACLs.
  * @alias module:model/IdmWorkspace
  * @class
  */
  function IdmWorkspace() {
    _classCallCheck(this, IdmWorkspace);

    _defineProperty(this, "UUID", undefined);

    _defineProperty(this, "Label", undefined);

    _defineProperty(this, "Description", undefined);

    _defineProperty(this, "Slug", undefined);

    _defineProperty(this, "Scope", undefined);

    _defineProperty(this, "LastUpdated", undefined);

    _defineProperty(this, "Policies", undefined);

    _defineProperty(this, "Attributes", undefined);

    _defineProperty(this, "RootUUIDs", undefined);

    _defineProperty(this, "RootNodes", undefined);

    _defineProperty(this, "PoliciesContextEditable", undefined);
  }
  /**
  * Constructs a <code>IdmWorkspace</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/IdmWorkspace} obj Optional instance to populate.
  * @return {module:model/IdmWorkspace} The populated <code>IdmWorkspace</code> instance.
  */


  _createClass(IdmWorkspace, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IdmWorkspace();

        if (data.hasOwnProperty('UUID')) {
          obj['UUID'] = _ApiClient["default"].convertToType(data['UUID'], 'String');
        }

        if (data.hasOwnProperty('Label')) {
          obj['Label'] = _ApiClient["default"].convertToType(data['Label'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('Slug')) {
          obj['Slug'] = _ApiClient["default"].convertToType(data['Slug'], 'String');
        }

        if (data.hasOwnProperty('Scope')) {
          obj['Scope'] = _IdmWorkspaceScope["default"].constructFromObject(data['Scope']);
        }

        if (data.hasOwnProperty('LastUpdated')) {
          obj['LastUpdated'] = _ApiClient["default"].convertToType(data['LastUpdated'], 'Number');
        }

        if (data.hasOwnProperty('Policies')) {
          obj['Policies'] = _ApiClient["default"].convertToType(data['Policies'], [_ServiceResourcePolicy["default"]]);
        }

        if (data.hasOwnProperty('Attributes')) {
          obj['Attributes'] = _ApiClient["default"].convertToType(data['Attributes'], 'String');
        }

        if (data.hasOwnProperty('RootUUIDs')) {
          obj['RootUUIDs'] = _ApiClient["default"].convertToType(data['RootUUIDs'], ['String']);
        }

        if (data.hasOwnProperty('RootNodes')) {
          obj['RootNodes'] = _ApiClient["default"].convertToType(data['RootNodes'], {
            'String': _TreeNode["default"]
          });
        }

        if (data.hasOwnProperty('PoliciesContextEditable')) {
          obj['PoliciesContextEditable'] = _ApiClient["default"].convertToType(data['PoliciesContextEditable'], 'Boolean');
        }
      }

      return obj;
    }
    /**
    * @member {String} UUID
    */

  }]);

  return IdmWorkspace;
}();

exports["default"] = IdmWorkspace;
//# sourceMappingURL=IdmWorkspace.js.map
