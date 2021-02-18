"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdmUserMeta = _interopRequireDefault(require("./IdmUserMeta"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The IdmUpdateUserMetaResponse model module.
* @module model/IdmUpdateUserMetaResponse
* @version 1.0
*/
var IdmUpdateUserMetaResponse = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>IdmUpdateUserMetaResponse</code>.
  * @alias module:model/IdmUpdateUserMetaResponse
  * @class
  */
  function IdmUpdateUserMetaResponse() {
    _classCallCheck(this, IdmUpdateUserMetaResponse);

    _defineProperty(this, "MetaDatas", undefined);
  }
  /**
  * Constructs a <code>IdmUpdateUserMetaResponse</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/IdmUpdateUserMetaResponse} obj Optional instance to populate.
  * @return {module:model/IdmUpdateUserMetaResponse} The populated <code>IdmUpdateUserMetaResponse</code> instance.
  */


  _createClass(IdmUpdateUserMetaResponse, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IdmUpdateUserMetaResponse();

        if (data.hasOwnProperty('MetaDatas')) {
          obj['MetaDatas'] = _ApiClient["default"].convertToType(data['MetaDatas'], [_IdmUserMeta["default"]]);
        }
      }

      return obj;
    }
    /**
    * @member {Array.<module:model/IdmUserMeta>} MetaDatas
    */

  }]);

  return IdmUpdateUserMetaResponse;
}();

exports["default"] = IdmUpdateUserMetaResponse;
//# sourceMappingURL=IdmUpdateUserMetaResponse.js.map
