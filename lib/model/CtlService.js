"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CtlPeer = _interopRequireDefault(require("./CtlPeer"));

var _CtlServiceStatus = _interopRequireDefault(require("./CtlServiceStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The CtlService model module.
* @module model/CtlService
* @version 1.0
*/
var CtlService = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>CtlService</code>.
  * @alias module:model/CtlService
  * @class
  */
  function CtlService() {
    _classCallCheck(this, CtlService);

    _defineProperty(this, "Name", undefined);

    _defineProperty(this, "Version", undefined);

    _defineProperty(this, "Description", undefined);

    _defineProperty(this, "Tag", undefined);

    _defineProperty(this, "Controllable", undefined);

    _defineProperty(this, "Status", undefined);

    _defineProperty(this, "RunningPeers", undefined);
  }
  /**
  * Constructs a <code>CtlService</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/CtlService} obj Optional instance to populate.
  * @return {module:model/CtlService} The populated <code>CtlService</code> instance.
  */


  _createClass(CtlService, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CtlService();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Version')) {
          obj['Version'] = _ApiClient["default"].convertToType(data['Version'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('Tag')) {
          obj['Tag'] = _ApiClient["default"].convertToType(data['Tag'], 'String');
        }

        if (data.hasOwnProperty('Controllable')) {
          obj['Controllable'] = _ApiClient["default"].convertToType(data['Controllable'], 'Boolean');
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _CtlServiceStatus["default"].constructFromObject(data['Status']);
        }

        if (data.hasOwnProperty('RunningPeers')) {
          obj['RunningPeers'] = _ApiClient["default"].convertToType(data['RunningPeers'], [_CtlPeer["default"]]);
        }
      }

      return obj;
    }
    /**
    * @member {String} Name
    */

  }]);

  return CtlService;
}();

exports["default"] = CtlService;
//# sourceMappingURL=CtlService.js.map
