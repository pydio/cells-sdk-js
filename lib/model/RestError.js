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
 * The RestError model module.
 * @module model/RestError
 * @version 4.0
 */
var RestError = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestError</code>.
   * @alias module:model/RestError
   */
  function RestError() {
    _classCallCheck(this, RestError);

    RestError.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestError, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestError} obj Optional instance to populate.
     * @return {module:model/RestError} The populated <code>RestError</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestError();

        if (data.hasOwnProperty('Code')) {
          obj['Code'] = _ApiClient["default"].convertToType(data['Code'], 'String');
        }

        if (data.hasOwnProperty('Detail')) {
          obj['Detail'] = _ApiClient["default"].convertToType(data['Detail'], 'String');
        }

        if (data.hasOwnProperty('Meta')) {
          obj['Meta'] = _ApiClient["default"].convertToType(data['Meta'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('Source')) {
          obj['Source'] = _ApiClient["default"].convertToType(data['Source'], 'String');
        }

        if (data.hasOwnProperty('Title')) {
          obj['Title'] = _ApiClient["default"].convertToType(data['Title'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RestError;
}();
/**
 * @member {String} Code
 */


RestError.prototype['Code'] = undefined;
/**
 * @member {String} Detail
 */

RestError.prototype['Detail'] = undefined;
/**
 * @member {Object.<String, String>} Meta
 */

RestError.prototype['Meta'] = undefined;
/**
 * @member {String} Source
 */

RestError.prototype['Source'] = undefined;
/**
 * @member {String} Title
 */

RestError.prototype['Title'] = undefined;
var _default = RestError;
exports["default"] = _default;
//# sourceMappingURL=RestError.js.map
