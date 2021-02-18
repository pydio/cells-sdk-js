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
* The TreeWorkspaceRelativePath model module.
* @module model/TreeWorkspaceRelativePath
* @version 1.0
*/
var TreeWorkspaceRelativePath = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>TreeWorkspaceRelativePath</code>.
  * @alias module:model/TreeWorkspaceRelativePath
  * @class
  */
  function TreeWorkspaceRelativePath() {
    _classCallCheck(this, TreeWorkspaceRelativePath);

    _defineProperty(this, "WsUuid", undefined);

    _defineProperty(this, "WsLabel", undefined);

    _defineProperty(this, "Path", undefined);

    _defineProperty(this, "WsSlug", undefined);

    _defineProperty(this, "WsScope", undefined);
  }
  /**
  * Constructs a <code>TreeWorkspaceRelativePath</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/TreeWorkspaceRelativePath} obj Optional instance to populate.
  * @return {module:model/TreeWorkspaceRelativePath} The populated <code>TreeWorkspaceRelativePath</code> instance.
  */


  _createClass(TreeWorkspaceRelativePath, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TreeWorkspaceRelativePath();

        if (data.hasOwnProperty('WsUuid')) {
          obj['WsUuid'] = _ApiClient["default"].convertToType(data['WsUuid'], 'String');
        }

        if (data.hasOwnProperty('WsLabel')) {
          obj['WsLabel'] = _ApiClient["default"].convertToType(data['WsLabel'], 'String');
        }

        if (data.hasOwnProperty('Path')) {
          obj['Path'] = _ApiClient["default"].convertToType(data['Path'], 'String');
        }

        if (data.hasOwnProperty('WsSlug')) {
          obj['WsSlug'] = _ApiClient["default"].convertToType(data['WsSlug'], 'String');
        }

        if (data.hasOwnProperty('WsScope')) {
          obj['WsScope'] = _ApiClient["default"].convertToType(data['WsScope'], 'String');
        }
      }

      return obj;
    }
    /**
    * @member {String} WsUuid
    */

  }]);

  return TreeWorkspaceRelativePath;
}();

exports["default"] = TreeWorkspaceRelativePath;
//# sourceMappingURL=TreeWorkspaceRelativePath.js.map
