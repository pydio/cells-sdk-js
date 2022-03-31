"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RestCell = _interopRequireDefault(require("./RestCell"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RestPutCellRequest model module.
 * @module model/RestPutCellRequest
 * @version 4.0
 */
var RestPutCellRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestPutCellRequest</code>.
   * @alias module:model/RestPutCellRequest
   */
  function RestPutCellRequest() {
    _classCallCheck(this, RestPutCellRequest);

    RestPutCellRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestPutCellRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestPutCellRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestPutCellRequest} obj Optional instance to populate.
     * @return {module:model/RestPutCellRequest} The populated <code>RestPutCellRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestPutCellRequest();

        if (data.hasOwnProperty('CreateEmptyRoot')) {
          obj['CreateEmptyRoot'] = _ApiClient["default"].convertToType(data['CreateEmptyRoot'], 'Boolean');
        }

        if (data.hasOwnProperty('Room')) {
          obj['Room'] = _RestCell["default"].constructFromObject(data['Room']);
        }
      }

      return obj;
    }
  }]);

  return RestPutCellRequest;
}();
/**
 * @member {Boolean} CreateEmptyRoot
 */


RestPutCellRequest.prototype['CreateEmptyRoot'] = undefined;
/**
 * @member {module:model/RestCell} Room
 */

RestPutCellRequest.prototype['Room'] = undefined;
var _default = RestPutCellRequest;
exports["default"] = _default;
//# sourceMappingURL=RestPutCellRequest.js.map
