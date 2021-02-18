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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The IdmUserSingleQuery model module.
* @module model/IdmUserSingleQuery
* @version 1.0
*/
var IdmUserSingleQuery = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>IdmUserSingleQuery</code>.
  * @alias module:model/IdmUserSingleQuery
  * @class
  */
  function IdmUserSingleQuery() {
    _classCallCheck(this, IdmUserSingleQuery);

    _defineProperty(this, "Uuid", undefined);

    _defineProperty(this, "Login", undefined);

    _defineProperty(this, "Password", undefined);

    _defineProperty(this, "GroupPath", undefined);

    _defineProperty(this, "Recursive", undefined);

    _defineProperty(this, "FullPath", undefined);

    _defineProperty(this, "AttributeName", undefined);

    _defineProperty(this, "AttributeValue", undefined);

    _defineProperty(this, "AttributeAnyValue", undefined);

    _defineProperty(this, "HasRole", undefined);

    _defineProperty(this, "NodeType", undefined);

    _defineProperty(this, "HasProfile", undefined);

    _defineProperty(this, "ConnectedSince", undefined);

    _defineProperty(this, "not", undefined);
  }
  /**
  * Constructs a <code>IdmUserSingleQuery</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/IdmUserSingleQuery} obj Optional instance to populate.
  * @return {module:model/IdmUserSingleQuery} The populated <code>IdmUserSingleQuery</code> instance.
  */


  _createClass(IdmUserSingleQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IdmUserSingleQuery();

        if (data.hasOwnProperty('Uuid')) {
          obj['Uuid'] = _ApiClient["default"].convertToType(data['Uuid'], 'String');
        }

        if (data.hasOwnProperty('Login')) {
          obj['Login'] = _ApiClient["default"].convertToType(data['Login'], 'String');
        }

        if (data.hasOwnProperty('Password')) {
          obj['Password'] = _ApiClient["default"].convertToType(data['Password'], 'String');
        }

        if (data.hasOwnProperty('GroupPath')) {
          obj['GroupPath'] = _ApiClient["default"].convertToType(data['GroupPath'], 'String');
        }

        if (data.hasOwnProperty('Recursive')) {
          obj['Recursive'] = _ApiClient["default"].convertToType(data['Recursive'], 'Boolean');
        }

        if (data.hasOwnProperty('FullPath')) {
          obj['FullPath'] = _ApiClient["default"].convertToType(data['FullPath'], 'String');
        }

        if (data.hasOwnProperty('AttributeName')) {
          obj['AttributeName'] = _ApiClient["default"].convertToType(data['AttributeName'], 'String');
        }

        if (data.hasOwnProperty('AttributeValue')) {
          obj['AttributeValue'] = _ApiClient["default"].convertToType(data['AttributeValue'], 'String');
        }

        if (data.hasOwnProperty('AttributeAnyValue')) {
          obj['AttributeAnyValue'] = _ApiClient["default"].convertToType(data['AttributeAnyValue'], 'Boolean');
        }

        if (data.hasOwnProperty('HasRole')) {
          obj['HasRole'] = _ApiClient["default"].convertToType(data['HasRole'], 'String');
        }

        if (data.hasOwnProperty('NodeType')) {
          obj['NodeType'] = _IdmNodeType["default"].constructFromObject(data['NodeType']);
        }

        if (data.hasOwnProperty('HasProfile')) {
          obj['HasProfile'] = _ApiClient["default"].convertToType(data['HasProfile'], 'String');
        }

        if (data.hasOwnProperty('ConnectedSince')) {
          obj['ConnectedSince'] = _ApiClient["default"].convertToType(data['ConnectedSince'], 'String');
        }

        if (data.hasOwnProperty('not')) {
          obj['not'] = _ApiClient["default"].convertToType(data['not'], 'Boolean');
        }
      }

      return obj;
    }
    /**
    * @member {String} Uuid
    */

  }]);

  return IdmUserSingleQuery;
}();

exports["default"] = IdmUserSingleQuery;
//# sourceMappingURL=IdmUserSingleQuery.js.map
