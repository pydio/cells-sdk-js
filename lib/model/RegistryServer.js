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
 * The RegistryServer model module.
 * @module model/RegistryServer
 * @version 4.0
 */
var RegistryServer = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RegistryServer</code>.
   * @alias module:model/RegistryServer
   */
  function RegistryServer() {
    _classCallCheck(this, RegistryServer);

    RegistryServer.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RegistryServer, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RegistryServer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegistryServer} obj Optional instance to populate.
     * @return {module:model/RegistryServer} The populated <code>RegistryServer</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RegistryServer();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], ['String']);
        }

        if (data.hasOwnProperty('endpoints')) {
          obj['endpoints'] = _ApiClient["default"].convertToType(data['endpoints'], ['String']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ApiClient["default"].convertToType(data['metadata'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RegistryServer;
}();
/**
 * @member {Array.<String>} address
 */


RegistryServer.prototype['address'] = undefined;
/**
 * @member {Array.<String>} endpoints
 */

RegistryServer.prototype['endpoints'] = undefined;
/**
 * @member {String} id
 */

RegistryServer.prototype['id'] = undefined;
/**
 * @member {Object.<String, String>} metadata
 */

RegistryServer.prototype['metadata'] = undefined;
/**
 * @member {String} name
 */

RegistryServer.prototype['name'] = undefined;
var _default = RegistryServer;
exports["default"] = _default;
//# sourceMappingURL=RegistryServer.js.map
