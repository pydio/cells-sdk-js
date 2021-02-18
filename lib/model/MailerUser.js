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
* The MailerUser model module.
* @module model/MailerUser
* @version 1.0
*/
var MailerUser = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>MailerUser</code>.
  * @alias module:model/MailerUser
  * @class
  */
  function MailerUser() {
    _classCallCheck(this, MailerUser);

    _defineProperty(this, "Uuid", undefined);

    _defineProperty(this, "Address", undefined);

    _defineProperty(this, "Name", undefined);

    _defineProperty(this, "Language", undefined);
  }
  /**
  * Constructs a <code>MailerUser</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/MailerUser} obj Optional instance to populate.
  * @return {module:model/MailerUser} The populated <code>MailerUser</code> instance.
  */


  _createClass(MailerUser, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MailerUser();

        if (data.hasOwnProperty('Uuid')) {
          obj['Uuid'] = _ApiClient["default"].convertToType(data['Uuid'], 'String');
        }

        if (data.hasOwnProperty('Address')) {
          obj['Address'] = _ApiClient["default"].convertToType(data['Address'], 'String');
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Language')) {
          obj['Language'] = _ApiClient["default"].convertToType(data['Language'], 'String');
        }
      }

      return obj;
    }
    /**
    * @member {String} Uuid
    */

  }]);

  return MailerUser;
}();

exports["default"] = MailerUser;
//# sourceMappingURL=MailerUser.js.map
