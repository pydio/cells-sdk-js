"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ServiceResourcePolicy = _interopRequireDefault(require("./ServiceResourcePolicy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The IdmUserMetaNamespace model module.
* @module model/IdmUserMetaNamespace
* @version 1.0
*/
var IdmUserMetaNamespace = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>IdmUserMetaNamespace</code>.
  * @alias module:model/IdmUserMetaNamespace
  * @class
  */
  function IdmUserMetaNamespace() {
    _classCallCheck(this, IdmUserMetaNamespace);

    _defineProperty(this, "Namespace", undefined);

    _defineProperty(this, "Label", undefined);

    _defineProperty(this, "Order", undefined);

    _defineProperty(this, "Indexable", undefined);

    _defineProperty(this, "JsonDefinition", undefined);

    _defineProperty(this, "Policies", undefined);
  }
  /**
  * Constructs a <code>IdmUserMetaNamespace</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/IdmUserMetaNamespace} obj Optional instance to populate.
  * @return {module:model/IdmUserMetaNamespace} The populated <code>IdmUserMetaNamespace</code> instance.
  */


  _createClass(IdmUserMetaNamespace, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IdmUserMetaNamespace();

        if (data.hasOwnProperty('Namespace')) {
          obj['Namespace'] = _ApiClient["default"].convertToType(data['Namespace'], 'String');
        }

        if (data.hasOwnProperty('Label')) {
          obj['Label'] = _ApiClient["default"].convertToType(data['Label'], 'String');
        }

        if (data.hasOwnProperty('Order')) {
          obj['Order'] = _ApiClient["default"].convertToType(data['Order'], 'Number');
        }

        if (data.hasOwnProperty('Indexable')) {
          obj['Indexable'] = _ApiClient["default"].convertToType(data['Indexable'], 'Boolean');
        }

        if (data.hasOwnProperty('JsonDefinition')) {
          obj['JsonDefinition'] = _ApiClient["default"].convertToType(data['JsonDefinition'], 'String');
        }

        if (data.hasOwnProperty('Policies')) {
          obj['Policies'] = _ApiClient["default"].convertToType(data['Policies'], [_ServiceResourcePolicy["default"]]);
        }
      }

      return obj;
    }
    /**
    * @member {String} Namespace
    */

  }]);

  return IdmUserMetaNamespace;
}();

exports["default"] = IdmUserMetaNamespace;
//# sourceMappingURL=IdmUserMetaNamespace.js.map
