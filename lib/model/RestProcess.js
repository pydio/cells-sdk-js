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
 * The RestProcess model module.
 * @module model/RestProcess
 * @version 4.0
 */
var RestProcess = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestProcess</code>.
   * @alias module:model/RestProcess
   */
  function RestProcess() {
    _classCallCheck(this, RestProcess);

    RestProcess.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestProcess, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestProcess</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestProcess} obj Optional instance to populate.
     * @return {module:model/RestProcess} The populated <code>RestProcess</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestProcess();

        if (data.hasOwnProperty('ID')) {
          obj['ID'] = _ApiClient["default"].convertToType(data['ID'], 'String');
        }

        if (data.hasOwnProperty('MetricsPort')) {
          obj['MetricsPort'] = _ApiClient["default"].convertToType(data['MetricsPort'], 'Number');
        }

        if (data.hasOwnProperty('ParentID')) {
          obj['ParentID'] = _ApiClient["default"].convertToType(data['ParentID'], 'String');
        }

        if (data.hasOwnProperty('PeerAddress')) {
          obj['PeerAddress'] = _ApiClient["default"].convertToType(data['PeerAddress'], 'String');
        }

        if (data.hasOwnProperty('PeerId')) {
          obj['PeerId'] = _ApiClient["default"].convertToType(data['PeerId'], 'String');
        }

        if (data.hasOwnProperty('Services')) {
          obj['Services'] = _ApiClient["default"].convertToType(data['Services'], ['String']);
        }

        if (data.hasOwnProperty('StartTag')) {
          obj['StartTag'] = _ApiClient["default"].convertToType(data['StartTag'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RestProcess;
}();
/**
 * @member {String} ID
 */


RestProcess.prototype['ID'] = undefined;
/**
 * @member {Number} MetricsPort
 */

RestProcess.prototype['MetricsPort'] = undefined;
/**
 * @member {String} ParentID
 */

RestProcess.prototype['ParentID'] = undefined;
/**
 * @member {String} PeerAddress
 */

RestProcess.prototype['PeerAddress'] = undefined;
/**
 * @member {String} PeerId
 */

RestProcess.prototype['PeerId'] = undefined;
/**
 * @member {Array.<String>} Services
 */

RestProcess.prototype['Services'] = undefined;
/**
 * @member {String} StartTag
 */

RestProcess.prototype['StartTag'] = undefined;
var _default = RestProcess;
exports["default"] = _default;
//# sourceMappingURL=RestProcess.js.map
