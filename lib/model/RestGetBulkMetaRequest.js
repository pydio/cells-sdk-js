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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The RestGetBulkMetaRequest model module.
* @module model/RestGetBulkMetaRequest
* @version 1.0
*/
var RestGetBulkMetaRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestGetBulkMetaRequest</code>.
  * @alias module:model/RestGetBulkMetaRequest
  * @class
  */
  function RestGetBulkMetaRequest() {
    _classCallCheck(this, RestGetBulkMetaRequest);

    _defineProperty(this, "NodePaths", undefined);

    _defineProperty(this, "AllMetaProviders", undefined);

    _defineProperty(this, "Versions", undefined);

    _defineProperty(this, "Offset", undefined);

    _defineProperty(this, "Limit", undefined);
  }
  /**
  * Constructs a <code>RestGetBulkMetaRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestGetBulkMetaRequest} obj Optional instance to populate.
  * @return {module:model/RestGetBulkMetaRequest} The populated <code>RestGetBulkMetaRequest</code> instance.
  */


  _createClass(RestGetBulkMetaRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestGetBulkMetaRequest();

        if (data.hasOwnProperty('NodePaths')) {
          obj['NodePaths'] = _ApiClient["default"].convertToType(data['NodePaths'], ['String']);
        }

        if (data.hasOwnProperty('AllMetaProviders')) {
          obj['AllMetaProviders'] = _ApiClient["default"].convertToType(data['AllMetaProviders'], 'Boolean');
        }

        if (data.hasOwnProperty('Versions')) {
          obj['Versions'] = _ApiClient["default"].convertToType(data['Versions'], 'Boolean');
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
    * @member {Array.<String>} NodePaths
    */

  }]);

  return RestGetBulkMetaRequest;
}();

exports["default"] = RestGetBulkMetaRequest;
//# sourceMappingURL=RestGetBulkMetaRequest.js.map
