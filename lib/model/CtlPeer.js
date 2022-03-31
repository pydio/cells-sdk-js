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
 * The CtlPeer model module.
 * @module model/CtlPeer
 * @version 4.0
 */
var CtlPeer = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CtlPeer</code>.
   * @alias module:model/CtlPeer
   */
  function CtlPeer() {
    _classCallCheck(this, CtlPeer);

    CtlPeer.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CtlPeer, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CtlPeer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CtlPeer} obj Optional instance to populate.
     * @return {module:model/CtlPeer} The populated <code>CtlPeer</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CtlPeer();

        if (data.hasOwnProperty('Address')) {
          obj['Address'] = _ApiClient["default"].convertToType(data['Address'], 'String');
        }

        if (data.hasOwnProperty('Id')) {
          obj['Id'] = _ApiClient["default"].convertToType(data['Id'], 'String');
        }

        if (data.hasOwnProperty('Metadata')) {
          obj['Metadata'] = _ApiClient["default"].convertToType(data['Metadata'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('Port')) {
          obj['Port'] = _ApiClient["default"].convertToType(data['Port'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CtlPeer;
}();
/**
 * @member {String} Address
 */


CtlPeer.prototype['Address'] = undefined;
/**
 * @member {String} Id
 */

CtlPeer.prototype['Id'] = undefined;
/**
 * @member {Object.<String, String>} Metadata
 */

CtlPeer.prototype['Metadata'] = undefined;
/**
 * @member {Number} Port
 */

CtlPeer.prototype['Port'] = undefined;
var _default = CtlPeer;
exports["default"] = _default;
//# sourceMappingURL=CtlPeer.js.map
