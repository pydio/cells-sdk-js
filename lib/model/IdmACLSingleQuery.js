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
* The IdmACLSingleQuery model module.
* @module model/IdmACLSingleQuery
* @version 1.0
*/
var IdmACLSingleQuery = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>IdmACLSingleQuery</code>.
  * @alias module:model/IdmACLSingleQuery
  * @class
  */
  function IdmACLSingleQuery() {
    _classCallCheck(this, IdmACLSingleQuery);

    _defineProperty(this, "Actions", undefined);

    _defineProperty(this, "RoleIDs", undefined);

    _defineProperty(this, "WorkspaceIDs", undefined);

    _defineProperty(this, "NodeIDs", undefined);

    _defineProperty(this, "not", undefined);
  }
  /**
  * Constructs a <code>IdmACLSingleQuery</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/IdmACLSingleQuery} obj Optional instance to populate.
  * @return {module:model/IdmACLSingleQuery} The populated <code>IdmACLSingleQuery</code> instance.
  */


  _createClass(IdmACLSingleQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IdmACLSingleQuery();

        if (data.hasOwnProperty('Actions')) {
          obj['Actions'] = _ApiClient["default"].convertToType(data['Actions'], [_IdmACLAction["default"]]);
        }

        if (data.hasOwnProperty('RoleIDs')) {
          obj['RoleIDs'] = _ApiClient["default"].convertToType(data['RoleIDs'], ['String']);
        }

        if (data.hasOwnProperty('WorkspaceIDs')) {
          obj['WorkspaceIDs'] = _ApiClient["default"].convertToType(data['WorkspaceIDs'], ['String']);
        }

        if (data.hasOwnProperty('NodeIDs')) {
          obj['NodeIDs'] = _ApiClient["default"].convertToType(data['NodeIDs'], ['String']);
        }

        if (data.hasOwnProperty('not')) {
          obj['not'] = _ApiClient["default"].convertToType(data['not'], 'Boolean');
        }
      }

      return obj;
    }
    /**
    * @member {Array.<module:model/IdmACLAction>} Actions
    */

  }]);

  return IdmACLSingleQuery;
}();

exports["default"] = IdmACLSingleQuery;
//# sourceMappingURL=IdmACLSingleQuery.js.map
