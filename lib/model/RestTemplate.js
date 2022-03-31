"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RestTemplateNode = _interopRequireDefault(require("./RestTemplateNode"));

var _ServiceResourcePolicy = _interopRequireDefault(require("./ServiceResourcePolicy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RestTemplate model module.
 * @module model/RestTemplate
 * @version 4.0
 */
var RestTemplate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestTemplate</code>.
   * @alias module:model/RestTemplate
   */
  function RestTemplate() {
    _classCallCheck(this, RestTemplate);

    RestTemplate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestTemplate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestTemplate} obj Optional instance to populate.
     * @return {module:model/RestTemplate} The populated <code>RestTemplate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestTemplate();

        if (data.hasOwnProperty('Editable')) {
          obj['Editable'] = _ApiClient["default"].convertToType(data['Editable'], 'Boolean');
        }

        if (data.hasOwnProperty('Label')) {
          obj['Label'] = _ApiClient["default"].convertToType(data['Label'], 'String');
        }

        if (data.hasOwnProperty('Node')) {
          obj['Node'] = _RestTemplateNode["default"].constructFromObject(data['Node']);
        }

        if (data.hasOwnProperty('Policies')) {
          obj['Policies'] = _ApiClient["default"].convertToType(data['Policies'], [_ServiceResourcePolicy["default"]]);
        }

        if (data.hasOwnProperty('UUID')) {
          obj['UUID'] = _ApiClient["default"].convertToType(data['UUID'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RestTemplate;
}();
/**
 * @member {Boolean} Editable
 */


RestTemplate.prototype['Editable'] = undefined;
/**
 * @member {String} Label
 */

RestTemplate.prototype['Label'] = undefined;
/**
 * @member {module:model/RestTemplateNode} Node
 */

RestTemplate.prototype['Node'] = undefined;
/**
 * @member {Array.<module:model/ServiceResourcePolicy>} Policies
 */

RestTemplate.prototype['Policies'] = undefined;
/**
 * @member {String} UUID
 */

RestTemplate.prototype['UUID'] = undefined;
var _default = RestTemplate;
exports["default"] = _default;
//# sourceMappingURL=RestTemplate.js.map
