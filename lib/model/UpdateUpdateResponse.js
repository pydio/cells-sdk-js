"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UpdatePackage = _interopRequireDefault(require("./UpdatePackage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The UpdateUpdateResponse model module.
 * @module model/UpdateUpdateResponse
 * @version 4.0
 */
var UpdateUpdateResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateUpdateResponse</code>.
   * @alias module:model/UpdateUpdateResponse
   */
  function UpdateUpdateResponse() {
    _classCallCheck(this, UpdateUpdateResponse);

    UpdateUpdateResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdateUpdateResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UpdateUpdateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateUpdateResponse} obj Optional instance to populate.
     * @return {module:model/UpdateUpdateResponse} The populated <code>UpdateUpdateResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateUpdateResponse();

        if (data.hasOwnProperty('AvailableBinaries')) {
          obj['AvailableBinaries'] = _ApiClient["default"].convertToType(data['AvailableBinaries'], [_UpdatePackage["default"]]);
        }

        if (data.hasOwnProperty('Channel')) {
          obj['Channel'] = _ApiClient["default"].convertToType(data['Channel'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UpdateUpdateResponse;
}();
/**
 * @member {Array.<module:model/UpdatePackage>} AvailableBinaries
 */


UpdateUpdateResponse.prototype['AvailableBinaries'] = undefined;
/**
 * @member {String} Channel
 */

UpdateUpdateResponse.prototype['Channel'] = undefined;
var _default = UpdateUpdateResponse;
exports["default"] = _default;
//# sourceMappingURL=UpdateUpdateResponse.js.map
