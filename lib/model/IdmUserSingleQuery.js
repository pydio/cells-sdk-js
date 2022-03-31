"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdmNodeType = _interopRequireDefault(require("./IdmNodeType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IdmUserSingleQuery model module.
 * @module model/IdmUserSingleQuery
 * @version 4.0
 */
var IdmUserSingleQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IdmUserSingleQuery</code>.
   * @alias module:model/IdmUserSingleQuery
   */
  function IdmUserSingleQuery() {
    _classCallCheck(this, IdmUserSingleQuery);

    IdmUserSingleQuery.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IdmUserSingleQuery, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IdmUserSingleQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IdmUserSingleQuery} obj Optional instance to populate.
     * @return {module:model/IdmUserSingleQuery} The populated <code>IdmUserSingleQuery</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IdmUserSingleQuery();

        if (data.hasOwnProperty('AttributeAnyValue')) {
          obj['AttributeAnyValue'] = _ApiClient["default"].convertToType(data['AttributeAnyValue'], 'Boolean');
        }

        if (data.hasOwnProperty('AttributeName')) {
          obj['AttributeName'] = _ApiClient["default"].convertToType(data['AttributeName'], 'String');
        }

        if (data.hasOwnProperty('AttributeValue')) {
          obj['AttributeValue'] = _ApiClient["default"].convertToType(data['AttributeValue'], 'String');
        }

        if (data.hasOwnProperty('ConnectedSince')) {
          obj['ConnectedSince'] = _ApiClient["default"].convertToType(data['ConnectedSince'], 'String');
        }

        if (data.hasOwnProperty('FullPath')) {
          obj['FullPath'] = _ApiClient["default"].convertToType(data['FullPath'], 'String');
        }

        if (data.hasOwnProperty('GroupPath')) {
          obj['GroupPath'] = _ApiClient["default"].convertToType(data['GroupPath'], 'String');
        }

        if (data.hasOwnProperty('HasProfile')) {
          obj['HasProfile'] = _ApiClient["default"].convertToType(data['HasProfile'], 'String');
        }

        if (data.hasOwnProperty('HasRole')) {
          obj['HasRole'] = _ApiClient["default"].convertToType(data['HasRole'], 'String');
        }

        if (data.hasOwnProperty('Login')) {
          obj['Login'] = _ApiClient["default"].convertToType(data['Login'], 'String');
        }

        if (data.hasOwnProperty('NodeType')) {
          obj['NodeType'] = _IdmNodeType["default"].constructFromObject(data['NodeType']);
        }

        if (data.hasOwnProperty('Password')) {
          obj['Password'] = _ApiClient["default"].convertToType(data['Password'], 'String');
        }

        if (data.hasOwnProperty('Recursive')) {
          obj['Recursive'] = _ApiClient["default"].convertToType(data['Recursive'], 'Boolean');
        }

        if (data.hasOwnProperty('Uuid')) {
          obj['Uuid'] = _ApiClient["default"].convertToType(data['Uuid'], 'String');
        }

        if (data.hasOwnProperty('not')) {
          obj['not'] = _ApiClient["default"].convertToType(data['not'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return IdmUserSingleQuery;
}();
/**
 * @member {Boolean} AttributeAnyValue
 */


IdmUserSingleQuery.prototype['AttributeAnyValue'] = undefined;
/**
 * @member {String} AttributeName
 */

IdmUserSingleQuery.prototype['AttributeName'] = undefined;
/**
 * @member {String} AttributeValue
 */

IdmUserSingleQuery.prototype['AttributeValue'] = undefined;
/**
 * @member {String} ConnectedSince
 */

IdmUserSingleQuery.prototype['ConnectedSince'] = undefined;
/**
 * @member {String} FullPath
 */

IdmUserSingleQuery.prototype['FullPath'] = undefined;
/**
 * @member {String} GroupPath
 */

IdmUserSingleQuery.prototype['GroupPath'] = undefined;
/**
 * @member {String} HasProfile
 */

IdmUserSingleQuery.prototype['HasProfile'] = undefined;
/**
 * @member {String} HasRole
 */

IdmUserSingleQuery.prototype['HasRole'] = undefined;
/**
 * @member {String} Login
 */

IdmUserSingleQuery.prototype['Login'] = undefined;
/**
 * @member {module:model/IdmNodeType} NodeType
 */

IdmUserSingleQuery.prototype['NodeType'] = undefined;
/**
 * @member {String} Password
 */

IdmUserSingleQuery.prototype['Password'] = undefined;
/**
 * @member {Boolean} Recursive
 */

IdmUserSingleQuery.prototype['Recursive'] = undefined;
/**
 * @member {String} Uuid
 */

IdmUserSingleQuery.prototype['Uuid'] = undefined;
/**
 * @member {Boolean} not
 */

IdmUserSingleQuery.prototype['not'] = undefined;
var _default = IdmUserSingleQuery;
exports["default"] = _default;
//# sourceMappingURL=IdmUserSingleQuery.js.map
