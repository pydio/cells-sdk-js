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
 * The RegistryNode model module.
 * @module model/RegistryNode
 * @version 4.0
 */
var RegistryNode = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RegistryNode</code>.
   * @alias module:model/RegistryNode
   */
  function RegistryNode() {
    _classCallCheck(this, RegistryNode);

    RegistryNode.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RegistryNode, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RegistryNode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegistryNode} obj Optional instance to populate.
     * @return {module:model/RegistryNode} The populated <code>RegistryNode</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RegistryNode();

        if (data.hasOwnProperty('advertiseIp')) {
          obj['advertiseIp'] = _ApiClient["default"].convertToType(data['advertiseIp'], 'String');
        }

        if (data.hasOwnProperty('hostname')) {
          obj['hostname'] = _ApiClient["default"].convertToType(data['hostname'], 'String');
        }

        if (data.hasOwnProperty('ips')) {
          obj['ips'] = _ApiClient["default"].convertToType(data['ips'], ['String']);
        }

        if (data.hasOwnProperty('machine')) {
          obj['machine'] = _ApiClient["default"].convertToType(data['machine'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RegistryNode;
}();
/**
 * @member {String} advertiseIp
 */


RegistryNode.prototype['advertiseIp'] = undefined;
/**
 * @member {String} hostname
 */

RegistryNode.prototype['hostname'] = undefined;
/**
 * @member {Array.<String>} ips
 */

RegistryNode.prototype['ips'] = undefined;
/**
 * @member {String} machine
 */

RegistryNode.prototype['machine'] = undefined;
var _default = RegistryNode;
exports["default"] = _default;
//# sourceMappingURL=RegistryNode.js.map
