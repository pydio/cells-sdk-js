"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CtlServiceCommand = _interopRequireDefault(require("./CtlServiceCommand"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RestControlServiceRequest model module.
 * @module model/RestControlServiceRequest
 * @version 4.0
 */
var RestControlServiceRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestControlServiceRequest</code>.
   * @alias module:model/RestControlServiceRequest
   */
  function RestControlServiceRequest() {
    _classCallCheck(this, RestControlServiceRequest);

    RestControlServiceRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestControlServiceRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestControlServiceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestControlServiceRequest} obj Optional instance to populate.
     * @return {module:model/RestControlServiceRequest} The populated <code>RestControlServiceRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestControlServiceRequest();

        if (data.hasOwnProperty('Command')) {
          obj['Command'] = _CtlServiceCommand["default"].constructFromObject(data['Command']);
        }

        if (data.hasOwnProperty('NodeName')) {
          obj['NodeName'] = _ApiClient["default"].convertToType(data['NodeName'], 'String');
        }

        if (data.hasOwnProperty('ServiceName')) {
          obj['ServiceName'] = _ApiClient["default"].convertToType(data['ServiceName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RestControlServiceRequest;
}();
/**
 * @member {module:model/CtlServiceCommand} Command
 */


RestControlServiceRequest.prototype['Command'] = undefined;
/**
 * @member {String} NodeName
 */

RestControlServiceRequest.prototype['NodeName'] = undefined;
/**
 * @member {String} ServiceName
 */

RestControlServiceRequest.prototype['ServiceName'] = undefined;
var _default = RestControlServiceRequest;
exports["default"] = _default;
//# sourceMappingURL=RestControlServiceRequest.js.map
