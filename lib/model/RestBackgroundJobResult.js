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
 * The RestBackgroundJobResult model module.
 * @module model/RestBackgroundJobResult
 * @version 4.0
 */
var RestBackgroundJobResult = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestBackgroundJobResult</code>.
   * @alias module:model/RestBackgroundJobResult
   */
  function RestBackgroundJobResult() {
    _classCallCheck(this, RestBackgroundJobResult);

    RestBackgroundJobResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestBackgroundJobResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestBackgroundJobResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestBackgroundJobResult} obj Optional instance to populate.
     * @return {module:model/RestBackgroundJobResult} The populated <code>RestBackgroundJobResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestBackgroundJobResult();

        if (data.hasOwnProperty('Label')) {
          obj['Label'] = _ApiClient["default"].convertToType(data['Label'], 'String');
        }

        if (data.hasOwnProperty('NodeUuid')) {
          obj['NodeUuid'] = _ApiClient["default"].convertToType(data['NodeUuid'], 'String');
        }

        if (data.hasOwnProperty('Uuid')) {
          obj['Uuid'] = _ApiClient["default"].convertToType(data['Uuid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RestBackgroundJobResult;
}();
/**
 * @member {String} Label
 */


RestBackgroundJobResult.prototype['Label'] = undefined;
/**
 * @member {String} NodeUuid
 */

RestBackgroundJobResult.prototype['NodeUuid'] = undefined;
/**
 * @member {String} Uuid
 */

RestBackgroundJobResult.prototype['Uuid'] = undefined;
var _default = RestBackgroundJobResult;
exports["default"] = _default;
//# sourceMappingURL=RestBackgroundJobResult.js.map
