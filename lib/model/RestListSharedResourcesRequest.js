"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListSharedResourcesRequestListShareType = _interopRequireDefault(require("./ListSharedResourcesRequestListShareType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The RestListSharedResourcesRequest model module.
* @module model/RestListSharedResourcesRequest
* @version 1.0
*/
var RestListSharedResourcesRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestListSharedResourcesRequest</code>.
  * @alias module:model/RestListSharedResourcesRequest
  * @class
  */
  function RestListSharedResourcesRequest() {
    _classCallCheck(this, RestListSharedResourcesRequest);

    _defineProperty(this, "ShareType", undefined);

    _defineProperty(this, "Subject", undefined);

    _defineProperty(this, "OwnedBySubject", undefined);

    _defineProperty(this, "Offset", undefined);

    _defineProperty(this, "Limit", undefined);
  }
  /**
  * Constructs a <code>RestListSharedResourcesRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestListSharedResourcesRequest} obj Optional instance to populate.
  * @return {module:model/RestListSharedResourcesRequest} The populated <code>RestListSharedResourcesRequest</code> instance.
  */


  _createClass(RestListSharedResourcesRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestListSharedResourcesRequest();

        if (data.hasOwnProperty('ShareType')) {
          obj['ShareType'] = _ListSharedResourcesRequestListShareType["default"].constructFromObject(data['ShareType']);
        }

        if (data.hasOwnProperty('Subject')) {
          obj['Subject'] = _ApiClient["default"].convertToType(data['Subject'], 'String');
        }

        if (data.hasOwnProperty('OwnedBySubject')) {
          obj['OwnedBySubject'] = _ApiClient["default"].convertToType(data['OwnedBySubject'], 'Boolean');
        }

        if (data.hasOwnProperty('Offset')) {
          obj['Offset'] = _ApiClient["default"].convertToType(data['Offset'], 'Number');
        }

        if (data.hasOwnProperty('Limit')) {
          obj['Limit'] = _ApiClient["default"].convertToType(data['Limit'], 'Number');
        }
      }

      return obj;
    }
    /**
    * @member {module:model/ListSharedResourcesRequestListShareType} ShareType
    */

  }]);

  return RestListSharedResourcesRequest;
}();

exports["default"] = RestListSharedResourcesRequest;
//# sourceMappingURL=RestListSharedResourcesRequest.js.map
