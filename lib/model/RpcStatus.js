"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ProtobufAny = _interopRequireDefault(require("./ProtobufAny"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RpcStatus model module.
 * @module model/RpcStatus
 * @version 4.0
 */
var RpcStatus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RpcStatus</code>.
   * @alias module:model/RpcStatus
   */
  function RpcStatus() {
    _classCallCheck(this, RpcStatus);

    RpcStatus.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RpcStatus, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RpcStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RpcStatus} obj Optional instance to populate.
     * @return {module:model/RpcStatus} The populated <code>RpcStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RpcStatus();

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'Number');
        }

        if (data.hasOwnProperty('details')) {
          obj['details'] = _ApiClient["default"].convertToType(data['details'], [_ProtobufAny["default"]]);
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RpcStatus;
}();
/**
 * @member {Number} code
 */


RpcStatus.prototype['code'] = undefined;
/**
 * @member {Array.<module:model/ProtobufAny>} details
 */

RpcStatus.prototype['details'] = undefined;
/**
 * @member {String} message
 */

RpcStatus.prototype['message'] = undefined;
var _default = RpcStatus;
exports["default"] = _default;
//# sourceMappingURL=RpcStatus.js.map
