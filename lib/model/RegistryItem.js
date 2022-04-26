"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RegistryDao = _interopRequireDefault(require("./RegistryDao"));

var _RegistryEdge = _interopRequireDefault(require("./RegistryEdge"));

var _RegistryGeneric = _interopRequireDefault(require("./RegistryGeneric"));

var _RegistryServer = _interopRequireDefault(require("./RegistryServer"));

var _RegistryService = _interopRequireDefault(require("./RegistryService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RegistryItem model module.
 * @module model/RegistryItem
 * @version 4.0
 */
var RegistryItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RegistryItem</code>.
   * @alias module:model/RegistryItem
   */
  function RegistryItem() {
    _classCallCheck(this, RegistryItem);

    RegistryItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RegistryItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RegistryItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegistryItem} obj Optional instance to populate.
     * @return {module:model/RegistryItem} The populated <code>RegistryItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RegistryItem();

        if (data.hasOwnProperty('adjacents')) {
          obj['adjacents'] = _ApiClient["default"].convertToType(data['adjacents'], [RegistryItem]);
        }

        if (data.hasOwnProperty('dao')) {
          obj['dao'] = _RegistryDao["default"].constructFromObject(data['dao']);
        }

        if (data.hasOwnProperty('edge')) {
          obj['edge'] = _RegistryEdge["default"].constructFromObject(data['edge']);
        }

        if (data.hasOwnProperty('generic')) {
          obj['generic'] = _RegistryGeneric["default"].constructFromObject(data['generic']);
        }

        if (data.hasOwnProperty('server')) {
          obj['server'] = _RegistryServer["default"].constructFromObject(data['server']);
        }

        if (data.hasOwnProperty('service')) {
          obj['service'] = _RegistryService["default"].constructFromObject(data['service']);
        }
      }

      return obj;
    }
  }]);

  return RegistryItem;
}();
/**
 * @member {Array.<module:model/RegistryItem>} adjacents
 */


RegistryItem.prototype['adjacents'] = undefined;
/**
 * @member {module:model/RegistryDao} dao
 */

RegistryItem.prototype['dao'] = undefined;
/**
 * @member {module:model/RegistryEdge} edge
 */

RegistryItem.prototype['edge'] = undefined;
/**
 * @member {module:model/RegistryGeneric} generic
 */

RegistryItem.prototype['generic'] = undefined;
/**
 * @member {module:model/RegistryServer} server
 */

RegistryItem.prototype['server'] = undefined;
/**
 * @member {module:model/RegistryService} service
 */

RegistryItem.prototype['service'] = undefined;
var _default = RegistryItem;
exports["default"] = _default;
//# sourceMappingURL=RegistryItem.js.map
