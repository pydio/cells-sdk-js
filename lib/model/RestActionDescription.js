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

/**
 * The RestActionDescription model module.
 * @module model/RestActionDescription
 * @version 4.0
 */
var RestActionDescription = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestActionDescription</code>.
   * @alias module:model/RestActionDescription
   */
  function RestActionDescription() {
    _classCallCheck(this, RestActionDescription);

    RestActionDescription.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestActionDescription, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestActionDescription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestActionDescription} obj Optional instance to populate.
     * @return {module:model/RestActionDescription} The populated <code>RestActionDescription</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestActionDescription();

        if (data.hasOwnProperty('Category')) {
          obj['Category'] = _ApiClient["default"].convertToType(data['Category'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('FormModule')) {
          obj['FormModule'] = _ApiClient["default"].convertToType(data['FormModule'], 'String');
        }

        if (data.hasOwnProperty('FormModuleProps')) {
          obj['FormModuleProps'] = _ApiClient["default"].convertToType(data['FormModuleProps'], 'String');
        }

        if (data.hasOwnProperty('HasForm')) {
          obj['HasForm'] = _ApiClient["default"].convertToType(data['HasForm'], 'Boolean');
        }

        if (data.hasOwnProperty('Icon')) {
          obj['Icon'] = _ApiClient["default"].convertToType(data['Icon'], 'String');
        }

        if (data.hasOwnProperty('InputDescription')) {
          obj['InputDescription'] = _ApiClient["default"].convertToType(data['InputDescription'], 'String');
        }

        if (data.hasOwnProperty('IsInternal')) {
          obj['IsInternal'] = _ApiClient["default"].convertToType(data['IsInternal'], 'Boolean');
        }

        if (data.hasOwnProperty('Label')) {
          obj['Label'] = _ApiClient["default"].convertToType(data['Label'], 'String');
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('OutputDescription')) {
          obj['OutputDescription'] = _ApiClient["default"].convertToType(data['OutputDescription'], 'String');
        }

        if (data.hasOwnProperty('SummaryTemplate')) {
          obj['SummaryTemplate'] = _ApiClient["default"].convertToType(data['SummaryTemplate'], 'String');
        }

        if (data.hasOwnProperty('Tint')) {
          obj['Tint'] = _ApiClient["default"].convertToType(data['Tint'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RestActionDescription;
}();
/**
 * @member {String} Category
 */


RestActionDescription.prototype['Category'] = undefined;
/**
 * @member {String} Description
 */

RestActionDescription.prototype['Description'] = undefined;
/**
 * @member {String} FormModule
 */

RestActionDescription.prototype['FormModule'] = undefined;
/**
 * @member {String} FormModuleProps
 */

RestActionDescription.prototype['FormModuleProps'] = undefined;
/**
 * @member {Boolean} HasForm
 */

RestActionDescription.prototype['HasForm'] = undefined;
/**
 * @member {String} Icon
 */

RestActionDescription.prototype['Icon'] = undefined;
/**
 * @member {String} InputDescription
 */

RestActionDescription.prototype['InputDescription'] = undefined;
/**
 * If action is declared internal, it is hidden to avoid polluting the list.
 * @member {Boolean} IsInternal
 */

RestActionDescription.prototype['IsInternal'] = undefined;
/**
 * @member {String} Label
 */

RestActionDescription.prototype['Label'] = undefined;
/**
 * @member {String} Name
 */

RestActionDescription.prototype['Name'] = undefined;
/**
 * @member {String} OutputDescription
 */

RestActionDescription.prototype['OutputDescription'] = undefined;
/**
 * @member {String} SummaryTemplate
 */

RestActionDescription.prototype['SummaryTemplate'] = undefined;
/**
 * @member {String} Tint
 */

RestActionDescription.prototype['Tint'] = undefined;
var _default = RestActionDescription;
exports["default"] = _default;
//# sourceMappingURL=RestActionDescription.js.map
