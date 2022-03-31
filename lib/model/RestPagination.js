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
 * The RestPagination model module.
 * @module model/RestPagination
 * @version 4.0
 */
var RestPagination = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestPagination</code>.
   * @alias module:model/RestPagination
   */
  function RestPagination() {
    _classCallCheck(this, RestPagination);

    RestPagination.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestPagination, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestPagination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestPagination} obj Optional instance to populate.
     * @return {module:model/RestPagination} The populated <code>RestPagination</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestPagination();

        if (data.hasOwnProperty('CurrentOffset')) {
          obj['CurrentOffset'] = _ApiClient["default"].convertToType(data['CurrentOffset'], 'Number');
        }

        if (data.hasOwnProperty('CurrentPage')) {
          obj['CurrentPage'] = _ApiClient["default"].convertToType(data['CurrentPage'], 'Number');
        }

        if (data.hasOwnProperty('Limit')) {
          obj['Limit'] = _ApiClient["default"].convertToType(data['Limit'], 'Number');
        }

        if (data.hasOwnProperty('NextOffset')) {
          obj['NextOffset'] = _ApiClient["default"].convertToType(data['NextOffset'], 'Number');
        }

        if (data.hasOwnProperty('PrevOffset')) {
          obj['PrevOffset'] = _ApiClient["default"].convertToType(data['PrevOffset'], 'Number');
        }

        if (data.hasOwnProperty('Total')) {
          obj['Total'] = _ApiClient["default"].convertToType(data['Total'], 'Number');
        }

        if (data.hasOwnProperty('TotalPages')) {
          obj['TotalPages'] = _ApiClient["default"].convertToType(data['TotalPages'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return RestPagination;
}();
/**
 * @member {Number} CurrentOffset
 */


RestPagination.prototype['CurrentOffset'] = undefined;
/**
 * @member {Number} CurrentPage
 */

RestPagination.prototype['CurrentPage'] = undefined;
/**
 * @member {Number} Limit
 */

RestPagination.prototype['Limit'] = undefined;
/**
 * @member {Number} NextOffset
 */

RestPagination.prototype['NextOffset'] = undefined;
/**
 * @member {Number} PrevOffset
 */

RestPagination.prototype['PrevOffset'] = undefined;
/**
 * @member {Number} Total
 */

RestPagination.prototype['Total'] = undefined;
/**
 * @member {Number} TotalPages
 */

RestPagination.prototype['TotalPages'] = undefined;
var _default = RestPagination;
exports["default"] = _default;
//# sourceMappingURL=RestPagination.js.map
