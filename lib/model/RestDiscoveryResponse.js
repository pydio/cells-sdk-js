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
 * The RestDiscoveryResponse model module.
 * @module model/RestDiscoveryResponse
 * @version 4.0
 */
var RestDiscoveryResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestDiscoveryResponse</code>.
   * @alias module:model/RestDiscoveryResponse
   */
  function RestDiscoveryResponse() {
    _classCallCheck(this, RestDiscoveryResponse);

    RestDiscoveryResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestDiscoveryResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestDiscoveryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestDiscoveryResponse} obj Optional instance to populate.
     * @return {module:model/RestDiscoveryResponse} The populated <code>RestDiscoveryResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestDiscoveryResponse();

        if (data.hasOwnProperty('BuildRevision')) {
          obj['BuildRevision'] = _ApiClient["default"].convertToType(data['BuildRevision'], 'String');
        }

        if (data.hasOwnProperty('BuildStamp')) {
          obj['BuildStamp'] = _ApiClient["default"].convertToType(data['BuildStamp'], 'Number');
        }

        if (data.hasOwnProperty('Endpoints')) {
          obj['Endpoints'] = _ApiClient["default"].convertToType(data['Endpoints'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('PackageLabel')) {
          obj['PackageLabel'] = _ApiClient["default"].convertToType(data['PackageLabel'], 'String');
        }

        if (data.hasOwnProperty('PackageType')) {
          obj['PackageType'] = _ApiClient["default"].convertToType(data['PackageType'], 'String');
        }

        if (data.hasOwnProperty('Version')) {
          obj['Version'] = _ApiClient["default"].convertToType(data['Version'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RestDiscoveryResponse;
}();
/**
 * @member {String} BuildRevision
 */


RestDiscoveryResponse.prototype['BuildRevision'] = undefined;
/**
 * @member {Number} BuildStamp
 */

RestDiscoveryResponse.prototype['BuildStamp'] = undefined;
/**
 * @member {Object.<String, String>} Endpoints
 */

RestDiscoveryResponse.prototype['Endpoints'] = undefined;
/**
 * @member {String} PackageLabel
 */

RestDiscoveryResponse.prototype['PackageLabel'] = undefined;
/**
 * @member {String} PackageType
 */

RestDiscoveryResponse.prototype['PackageType'] = undefined;
/**
 * @member {String} Version
 */

RestDiscoveryResponse.prototype['Version'] = undefined;
var _default = RestDiscoveryResponse;
exports["default"] = _default;
//# sourceMappingURL=RestDiscoveryResponse.js.map
