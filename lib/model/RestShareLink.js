"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RestShareLinkAccessType = _interopRequireDefault(require("./RestShareLinkAccessType"));

var _RestShareLinkTargetUser = _interopRequireDefault(require("./RestShareLinkTargetUser"));

var _ServiceResourcePolicy = _interopRequireDefault(require("./ServiceResourcePolicy"));

var _TreeNode = _interopRequireDefault(require("./TreeNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The RestShareLink model module.
* @module model/RestShareLink
* @version 1.0
*/
var RestShareLink = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestShareLink</code>.
  * @alias module:model/RestShareLink
  * @class
  */
  function RestShareLink() {
    _classCallCheck(this, RestShareLink);

    _defineProperty(this, "Uuid", undefined);

    _defineProperty(this, "LinkHash", undefined);

    _defineProperty(this, "LinkUrl", undefined);

    _defineProperty(this, "Label", undefined);

    _defineProperty(this, "Description", undefined);

    _defineProperty(this, "UserUuid", undefined);

    _defineProperty(this, "UserLogin", undefined);

    _defineProperty(this, "PasswordRequired", undefined);

    _defineProperty(this, "AccessStart", undefined);

    _defineProperty(this, "AccessEnd", undefined);

    _defineProperty(this, "MaxDownloads", undefined);

    _defineProperty(this, "CurrentDownloads", undefined);

    _defineProperty(this, "ViewTemplateName", undefined);

    _defineProperty(this, "TargetUsers", undefined);

    _defineProperty(this, "RestrictToTargetUsers", undefined);

    _defineProperty(this, "RootNodes", undefined);

    _defineProperty(this, "Permissions", undefined);

    _defineProperty(this, "Policies", undefined);

    _defineProperty(this, "PoliciesContextEditable", undefined);
  }
  /**
  * Constructs a <code>RestShareLink</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestShareLink} obj Optional instance to populate.
  * @return {module:model/RestShareLink} The populated <code>RestShareLink</code> instance.
  */


  _createClass(RestShareLink, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestShareLink();

        if (data.hasOwnProperty('Uuid')) {
          obj['Uuid'] = _ApiClient["default"].convertToType(data['Uuid'], 'String');
        }

        if (data.hasOwnProperty('LinkHash')) {
          obj['LinkHash'] = _ApiClient["default"].convertToType(data['LinkHash'], 'String');
        }

        if (data.hasOwnProperty('LinkUrl')) {
          obj['LinkUrl'] = _ApiClient["default"].convertToType(data['LinkUrl'], 'String');
        }

        if (data.hasOwnProperty('Label')) {
          obj['Label'] = _ApiClient["default"].convertToType(data['Label'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('UserUuid')) {
          obj['UserUuid'] = _ApiClient["default"].convertToType(data['UserUuid'], 'String');
        }

        if (data.hasOwnProperty('UserLogin')) {
          obj['UserLogin'] = _ApiClient["default"].convertToType(data['UserLogin'], 'String');
        }

        if (data.hasOwnProperty('PasswordRequired')) {
          obj['PasswordRequired'] = _ApiClient["default"].convertToType(data['PasswordRequired'], 'Boolean');
        }

        if (data.hasOwnProperty('AccessStart')) {
          obj['AccessStart'] = _ApiClient["default"].convertToType(data['AccessStart'], 'String');
        }

        if (data.hasOwnProperty('AccessEnd')) {
          obj['AccessEnd'] = _ApiClient["default"].convertToType(data['AccessEnd'], 'String');
        }

        if (data.hasOwnProperty('MaxDownloads')) {
          obj['MaxDownloads'] = _ApiClient["default"].convertToType(data['MaxDownloads'], 'String');
        }

        if (data.hasOwnProperty('CurrentDownloads')) {
          obj['CurrentDownloads'] = _ApiClient["default"].convertToType(data['CurrentDownloads'], 'String');
        }

        if (data.hasOwnProperty('ViewTemplateName')) {
          obj['ViewTemplateName'] = _ApiClient["default"].convertToType(data['ViewTemplateName'], 'String');
        }

        if (data.hasOwnProperty('TargetUsers')) {
          obj['TargetUsers'] = _ApiClient["default"].convertToType(data['TargetUsers'], {
            'String': _RestShareLinkTargetUser["default"]
          });
        }

        if (data.hasOwnProperty('RestrictToTargetUsers')) {
          obj['RestrictToTargetUsers'] = _ApiClient["default"].convertToType(data['RestrictToTargetUsers'], 'Boolean');
        }

        if (data.hasOwnProperty('RootNodes')) {
          obj['RootNodes'] = _ApiClient["default"].convertToType(data['RootNodes'], [_TreeNode["default"]]);
        }

        if (data.hasOwnProperty('Permissions')) {
          obj['Permissions'] = _ApiClient["default"].convertToType(data['Permissions'], [_RestShareLinkAccessType["default"]]);
        }

        if (data.hasOwnProperty('Policies')) {
          obj['Policies'] = _ApiClient["default"].convertToType(data['Policies'], [_ServiceResourcePolicy["default"]]);
        }

        if (data.hasOwnProperty('PoliciesContextEditable')) {
          obj['PoliciesContextEditable'] = _ApiClient["default"].convertToType(data['PoliciesContextEditable'], 'Boolean');
        }
      }

      return obj;
    }
    /**
    * @member {String} Uuid
    */

  }]);

  return RestShareLink;
}();

exports["default"] = RestShareLink;
//# sourceMappingURL=RestShareLink.js.map
