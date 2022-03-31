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

/**
 * The IdmWorkspaceSingleQuery model module.
 * @module model/IdmWorkspaceSingleQuery
 * @version 4.0
 */
var IdmWorkspaceSingleQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IdmWorkspaceSingleQuery</code>.
   * @alias module:model/IdmWorkspaceSingleQuery
   */
  function IdmWorkspaceSingleQuery() {
    _classCallCheck(this, IdmWorkspaceSingleQuery);

    IdmWorkspaceSingleQuery.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IdmWorkspaceSingleQuery, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IdmWorkspaceSingleQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IdmWorkspaceSingleQuery} obj Optional instance to populate.
     * @return {module:model/IdmWorkspaceSingleQuery} The populated <code>IdmWorkspaceSingleQuery</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IdmWorkspaceSingleQuery();

        if (data.hasOwnProperty('AttributeName')) {
          obj['AttributeName'] = _ApiClient["default"].convertToType(data['AttributeName'], 'String');
        }

        if (data.hasOwnProperty('AttributeValue')) {
          obj['AttributeValue'] = _ApiClient["default"].convertToType(data['AttributeValue'], 'String');
        }

        if (data.hasOwnProperty('HasAttribute')) {
          obj['HasAttribute'] = _ApiClient["default"].convertToType(data['HasAttribute'], 'String');
        }

        if (data.hasOwnProperty('LastUpdated')) {
          obj['LastUpdated'] = _ApiClient["default"].convertToType(data['LastUpdated'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }

        if (data.hasOwnProperty('not')) {
          obj['not'] = _ApiClient["default"].convertToType(data['not'], 'Boolean');
        }

        if (data.hasOwnProperty('scope')) {
          obj['scope'] = _IdmWorkspaceScope["default"].constructFromObject(data['scope']);
        }

        if (data.hasOwnProperty('slug')) {
          obj['slug'] = _ApiClient["default"].convertToType(data['slug'], 'String');
        }

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IdmWorkspaceSingleQuery;
}();
/**
 * @member {String} AttributeName
 */


IdmWorkspaceSingleQuery.prototype['AttributeName'] = undefined;
/**
 * @member {String} AttributeValue
 */

IdmWorkspaceSingleQuery.prototype['AttributeValue'] = undefined;
/**
 * @member {String} HasAttribute
 */

IdmWorkspaceSingleQuery.prototype['HasAttribute'] = undefined;
/**
 * @member {String} LastUpdated
 */

IdmWorkspaceSingleQuery.prototype['LastUpdated'] = undefined;
/**
 * @member {String} description
 */

IdmWorkspaceSingleQuery.prototype['description'] = undefined;
/**
 * @member {String} label
 */

IdmWorkspaceSingleQuery.prototype['label'] = undefined;
/**
 * @member {Boolean} not
 */

IdmWorkspaceSingleQuery.prototype['not'] = undefined;
/**
 * @member {module:model/IdmWorkspaceScope} scope
 */

IdmWorkspaceSingleQuery.prototype['scope'] = undefined;
/**
 * @member {String} slug
 */

IdmWorkspaceSingleQuery.prototype['slug'] = undefined;
/**
 * @member {String} uuid
 */

IdmWorkspaceSingleQuery.prototype['uuid'] = undefined;
var _default = IdmWorkspaceSingleQuery;
exports["default"] = _default;
//# sourceMappingURL=IdmWorkspaceSingleQuery.js.map
