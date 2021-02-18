"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdmRole = _interopRequireDefault(require("./IdmRole"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The RestRolesCollection model module.
* @module model/RestRolesCollection
* @version 1.0
*/
var RestRolesCollection = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestRolesCollection</code>.
  * @alias module:model/RestRolesCollection
  * @class
  */
  function RestRolesCollection() {
    _classCallCheck(this, RestRolesCollection);

    _defineProperty(this, "Roles", undefined);
  }
  /**
  * Constructs a <code>RestRolesCollection</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestRolesCollection} obj Optional instance to populate.
  * @return {module:model/RestRolesCollection} The populated <code>RestRolesCollection</code> instance.
  */


  _createClass(RestRolesCollection, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestRolesCollection();

        if (data.hasOwnProperty('Roles')) {
          obj['Roles'] = _ApiClient["default"].convertToType(data['Roles'], [_IdmRole["default"]]);
        }
      }

      return obj;
    }
    /**
    * @member {Array.<module:model/IdmRole>} Roles
    */

  }]);

  return RestRolesCollection;
}();

exports["default"] = RestRolesCollection;
//# sourceMappingURL=RestRolesCollection.js.map
