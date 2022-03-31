"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdmRole = _interopRequireDefault(require("./IdmRole"));

var _IdmWorkspace = _interopRequireDefault(require("./IdmWorkspace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RestRelationResponse model module.
 * @module model/RestRelationResponse
 * @version 4.0
 */
var RestRelationResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestRelationResponse</code>.
   * @alias module:model/RestRelationResponse
   */
  function RestRelationResponse() {
    _classCallCheck(this, RestRelationResponse);

    RestRelationResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestRelationResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestRelationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestRelationResponse} obj Optional instance to populate.
     * @return {module:model/RestRelationResponse} The populated <code>RestRelationResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestRelationResponse();

        if (data.hasOwnProperty('BelongsToTeams')) {
          obj['BelongsToTeams'] = _ApiClient["default"].convertToType(data['BelongsToTeams'], [_IdmRole["default"]]);
        }

        if (data.hasOwnProperty('SharedCells')) {
          obj['SharedCells'] = _ApiClient["default"].convertToType(data['SharedCells'], [_IdmWorkspace["default"]]);
        }
      }

      return obj;
    }
  }]);

  return RestRelationResponse;
}();
/**
 * @member {Array.<module:model/IdmRole>} BelongsToTeams
 */


RestRelationResponse.prototype['BelongsToTeams'] = undefined;
/**
 * @member {Array.<module:model/IdmWorkspace>} SharedCells
 */

RestRelationResponse.prototype['SharedCells'] = undefined;
var _default = RestRelationResponse;
exports["default"] = _default;
//# sourceMappingURL=RestRelationResponse.js.map
