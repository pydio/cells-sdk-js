"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdmUserMeta = _interopRequireDefault(require("./IdmUserMeta"));

var _UpdateUserMetaRequestUserMetaOp = _interopRequireDefault(require("./UpdateUserMetaRequestUserMetaOp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IdmUpdateUserMetaRequest model module.
 * @module model/IdmUpdateUserMetaRequest
 * @version 4.0
 */
var IdmUpdateUserMetaRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IdmUpdateUserMetaRequest</code>.
   * @alias module:model/IdmUpdateUserMetaRequest
   */
  function IdmUpdateUserMetaRequest() {
    _classCallCheck(this, IdmUpdateUserMetaRequest);

    IdmUpdateUserMetaRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IdmUpdateUserMetaRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IdmUpdateUserMetaRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IdmUpdateUserMetaRequest} obj Optional instance to populate.
     * @return {module:model/IdmUpdateUserMetaRequest} The populated <code>IdmUpdateUserMetaRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IdmUpdateUserMetaRequest();

        if (data.hasOwnProperty('MetaDatas')) {
          obj['MetaDatas'] = _ApiClient["default"].convertToType(data['MetaDatas'], [_IdmUserMeta["default"]]);
        }

        if (data.hasOwnProperty('Operation')) {
          obj['Operation'] = _UpdateUserMetaRequestUserMetaOp["default"].constructFromObject(data['Operation']);
        }
      }

      return obj;
    }
  }]);

  return IdmUpdateUserMetaRequest;
}();
/**
 * @member {Array.<module:model/IdmUserMeta>} MetaDatas
 */


IdmUpdateUserMetaRequest.prototype['MetaDatas'] = undefined;
/**
 * @member {module:model/UpdateUserMetaRequestUserMetaOp} Operation
 */

IdmUpdateUserMetaRequest.prototype['Operation'] = undefined;
var _default = IdmUpdateUserMetaRequest;
exports["default"] = _default;
//# sourceMappingURL=IdmUpdateUserMetaRequest.js.map
