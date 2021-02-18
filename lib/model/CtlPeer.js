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
* The CtlPeer model module.
* @module model/CtlPeer
* @version 1.0
*/
var CtlPeer = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>CtlPeer</code>.
  * @alias module:model/CtlPeer
  * @class
  */
  function CtlPeer() {
    _classCallCheck(this, CtlPeer);

    _defineProperty(this, "Id", undefined);

    _defineProperty(this, "Address", undefined);

    _defineProperty(this, "Port", undefined);

    _defineProperty(this, "Metadata", undefined);
  }
  /**
  * Constructs a <code>CtlPeer</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/CtlPeer} obj Optional instance to populate.
  * @return {module:model/CtlPeer} The populated <code>CtlPeer</code> instance.
  */


  _createClass(CtlPeer, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CtlPeer();

        if (data.hasOwnProperty('Id')) {
          obj['Id'] = _ApiClient["default"].convertToType(data['Id'], 'String');
        }

        if (data.hasOwnProperty('Address')) {
          obj['Address'] = _ApiClient["default"].convertToType(data['Address'], 'String');
        }

        if (data.hasOwnProperty('Port')) {
          obj['Port'] = _ApiClient["default"].convertToType(data['Port'], 'Number');
        }

        if (data.hasOwnProperty('Metadata')) {
          obj['Metadata'] = _ApiClient["default"].convertToType(data['Metadata'], {
            'String': 'String'
          });
        }
      }

      return obj;
    }
    /**
    * @member {String} Id
    */

  }]);

  return CtlPeer;
}();

exports["default"] = CtlPeer;
//# sourceMappingURL=CtlPeer.js.map
