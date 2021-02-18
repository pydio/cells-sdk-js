"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdmWorkspaceScope = _interopRequireDefault(require("./IdmWorkspaceScope"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The IdmWorkspaceSingleQuery model module.
* @module model/IdmWorkspaceSingleQuery
* @version 1.0
*/
var IdmWorkspaceSingleQuery = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>IdmWorkspaceSingleQuery</code>.
  * @alias module:model/IdmWorkspaceSingleQuery
  * @class
  */
  function IdmWorkspaceSingleQuery() {
    _classCallCheck(this, IdmWorkspaceSingleQuery);

    _defineProperty(this, "uuid", undefined);

    _defineProperty(this, "label", undefined);

    _defineProperty(this, "description", undefined);

    _defineProperty(this, "slug", undefined);

    _defineProperty(this, "scope", undefined);

    _defineProperty(this, "LastUpdated", undefined);

    _defineProperty(this, "HasAttribute", undefined);

    _defineProperty(this, "AttributeName", undefined);

    _defineProperty(this, "AttributeValue", undefined);

    _defineProperty(this, "not", undefined);
  }
  /**
  * Constructs a <code>IdmWorkspaceSingleQuery</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/IdmWorkspaceSingleQuery} obj Optional instance to populate.
  * @return {module:model/IdmWorkspaceSingleQuery} The populated <code>IdmWorkspaceSingleQuery</code> instance.
  */


  _createClass(IdmWorkspaceSingleQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IdmWorkspaceSingleQuery();

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }

        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('slug')) {
          obj['slug'] = _ApiClient["default"].convertToType(data['slug'], 'String');
        }

        if (data.hasOwnProperty('scope')) {
          obj['scope'] = _IdmWorkspaceScope["default"].constructFromObject(data['scope']);
        }

        if (data.hasOwnProperty('LastUpdated')) {
          obj['LastUpdated'] = _ApiClient["default"].convertToType(data['LastUpdated'], 'String');
        }

        if (data.hasOwnProperty('HasAttribute')) {
          obj['HasAttribute'] = _ApiClient["default"].convertToType(data['HasAttribute'], 'String');
        }

        if (data.hasOwnProperty('AttributeName')) {
          obj['AttributeName'] = _ApiClient["default"].convertToType(data['AttributeName'], 'String');
        }

        if (data.hasOwnProperty('AttributeValue')) {
          obj['AttributeValue'] = _ApiClient["default"].convertToType(data['AttributeValue'], 'String');
        }

        if (data.hasOwnProperty('not')) {
          obj['not'] = _ApiClient["default"].convertToType(data['not'], 'Boolean');
        }
      }

      return obj;
    }
    /**
    * @member {String} uuid
    */

  }]);

  return IdmWorkspaceSingleQuery;
}();

exports["default"] = IdmWorkspaceSingleQuery;
//# sourceMappingURL=IdmWorkspaceSingleQuery.js.map
