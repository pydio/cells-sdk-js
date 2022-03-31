"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CtlPeer = _interopRequireDefault(require("./CtlPeer"));

var _CtlServiceStatus = _interopRequireDefault(require("./CtlServiceStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CtlService model module.
 * @module model/CtlService
 * @version 4.0
 */
var CtlService = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CtlService</code>.
   * @alias module:model/CtlService
   */
  function CtlService() {
    _classCallCheck(this, CtlService);

    CtlService.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CtlService, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CtlService</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CtlService} obj Optional instance to populate.
     * @return {module:model/CtlService} The populated <code>CtlService</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CtlService();

        if (data.hasOwnProperty('Controllable')) {
          obj['Controllable'] = _ApiClient["default"].convertToType(data['Controllable'], 'Boolean');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('RunningPeers')) {
          obj['RunningPeers'] = _ApiClient["default"].convertToType(data['RunningPeers'], [_CtlPeer["default"]]);
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _CtlServiceStatus["default"].constructFromObject(data['Status']);
        }

        if (data.hasOwnProperty('Tag')) {
          obj['Tag'] = _ApiClient["default"].convertToType(data['Tag'], 'String');
        }

        if (data.hasOwnProperty('Version')) {
          obj['Version'] = _ApiClient["default"].convertToType(data['Version'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CtlService;
}();
/**
 * @member {Boolean} Controllable
 */


CtlService.prototype['Controllable'] = undefined;
/**
 * @member {String} Description
 */

CtlService.prototype['Description'] = undefined;
/**
 * @member {String} Name
 */

CtlService.prototype['Name'] = undefined;
/**
 * @member {Array.<module:model/CtlPeer>} RunningPeers
 */

CtlService.prototype['RunningPeers'] = undefined;
/**
 * @member {module:model/CtlServiceStatus} Status
 */

CtlService.prototype['Status'] = undefined;
/**
 * @member {String} Tag
 */

CtlService.prototype['Tag'] = undefined;
/**
 * @member {String} Version
 */

CtlService.prototype['Version'] = undefined;
var _default = CtlService;
exports["default"] = _default;
//# sourceMappingURL=CtlService.js.map
