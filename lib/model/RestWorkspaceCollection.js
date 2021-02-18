"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdmWorkspace = _interopRequireDefault(require("./IdmWorkspace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The RestWorkspaceCollection model module.
* @module model/RestWorkspaceCollection
* @version 1.0
*/
var RestWorkspaceCollection = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestWorkspaceCollection</code>.
  * @alias module:model/RestWorkspaceCollection
  * @class
  */
  function RestWorkspaceCollection() {
    _classCallCheck(this, RestWorkspaceCollection);

    _defineProperty(this, "Workspaces", undefined);

    _defineProperty(this, "Total", undefined);
  }
  /**
  * Constructs a <code>RestWorkspaceCollection</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestWorkspaceCollection} obj Optional instance to populate.
  * @return {module:model/RestWorkspaceCollection} The populated <code>RestWorkspaceCollection</code> instance.
  */


  _createClass(RestWorkspaceCollection, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestWorkspaceCollection();

        if (data.hasOwnProperty('Workspaces')) {
          obj['Workspaces'] = _ApiClient["default"].convertToType(data['Workspaces'], [_IdmWorkspace["default"]]);
        }

        if (data.hasOwnProperty('Total')) {
          obj['Total'] = _ApiClient["default"].convertToType(data['Total'], 'Number');
        }
      }

      return obj;
    }
    /**
    * @member {Array.<module:model/IdmWorkspace>} Workspaces
    */

  }]);

  return RestWorkspaceCollection;
}();

exports["default"] = RestWorkspaceCollection;
//# sourceMappingURL=RestWorkspaceCollection.js.map
