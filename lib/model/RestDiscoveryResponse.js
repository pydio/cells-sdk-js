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
* The RestDiscoveryResponse model module.
* @module model/RestDiscoveryResponse
* @version 1.0
*/
var RestDiscoveryResponse = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestDiscoveryResponse</code>.
  * @alias module:model/RestDiscoveryResponse
  * @class
  */
  function RestDiscoveryResponse() {
    _classCallCheck(this, RestDiscoveryResponse);

    _defineProperty(this, "PackageType", undefined);

    _defineProperty(this, "PackageLabel", undefined);

    _defineProperty(this, "Version", undefined);

    _defineProperty(this, "BuildStamp", undefined);

    _defineProperty(this, "BuildRevision", undefined);

    _defineProperty(this, "Endpoints", undefined);
  }
  /**
  * Constructs a <code>RestDiscoveryResponse</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestDiscoveryResponse} obj Optional instance to populate.
  * @return {module:model/RestDiscoveryResponse} The populated <code>RestDiscoveryResponse</code> instance.
  */


  _createClass(RestDiscoveryResponse, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestDiscoveryResponse();

        if (data.hasOwnProperty('PackageType')) {
          obj['PackageType'] = _ApiClient["default"].convertToType(data['PackageType'], 'String');
        }

        if (data.hasOwnProperty('PackageLabel')) {
          obj['PackageLabel'] = _ApiClient["default"].convertToType(data['PackageLabel'], 'String');
        }

        if (data.hasOwnProperty('Version')) {
          obj['Version'] = _ApiClient["default"].convertToType(data['Version'], 'String');
        }

        if (data.hasOwnProperty('BuildStamp')) {
          obj['BuildStamp'] = _ApiClient["default"].convertToType(data['BuildStamp'], 'Number');
        }

        if (data.hasOwnProperty('BuildRevision')) {
          obj['BuildRevision'] = _ApiClient["default"].convertToType(data['BuildRevision'], 'String');
        }

        if (data.hasOwnProperty('Endpoints')) {
          obj['Endpoints'] = _ApiClient["default"].convertToType(data['Endpoints'], {
            'String': 'String'
          });
        }
      }

      return obj;
    }
    /**
    * @member {String} PackageType
    */

  }]);

  return RestDiscoveryResponse;
}();

exports["default"] = RestDiscoveryResponse;
//# sourceMappingURL=RestDiscoveryResponse.js.map
