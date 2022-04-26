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
 * The RegistryDao model module.
 * @module model/RegistryDao
 * @version 4.0
 */
var RegistryDao = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RegistryDao</code>.
   * @alias module:model/RegistryDao
   */
  function RegistryDao() {
    _classCallCheck(this, RegistryDao);

    RegistryDao.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RegistryDao, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RegistryDao</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegistryDao} obj Optional instance to populate.
     * @return {module:model/RegistryDao} The populated <code>RegistryDao</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RegistryDao();

        if (data.hasOwnProperty('driver')) {
          obj['driver'] = _ApiClient["default"].convertToType(data['driver'], 'String');
        }

        if (data.hasOwnProperty('dsn')) {
          obj['dsn'] = _ApiClient["default"].convertToType(data['dsn'], 'String');
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

  return RegistryDao;
}();
/**
 * @member {String} driver
 */


RegistryDao.prototype['driver'] = undefined;
/**
 * @member {String} dsn
 */

RegistryDao.prototype['dsn'] = undefined;
/**
 * @member {String} id
 */

RegistryDao.prototype['id'] = undefined;
/**
 * @member {Object.<String, String>} metadata
 */

RegistryDao.prototype['metadata'] = undefined;
/**
 * @member {String} name
 */

RegistryDao.prototype['name'] = undefined;
var _default = RegistryDao;
exports["default"] = _default;
//# sourceMappingURL=RegistryDao.js.map
