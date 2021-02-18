"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MailerUser = _interopRequireDefault(require("./MailerUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The MailerMail model module.
* @module model/MailerMail
* @version 1.0
*/
var MailerMail = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>MailerMail</code>.
  * @alias module:model/MailerMail
  * @class
  */
  function MailerMail() {
    _classCallCheck(this, MailerMail);

    _defineProperty(this, "From", undefined);

    _defineProperty(this, "To", undefined);

    _defineProperty(this, "Cc", undefined);

    _defineProperty(this, "DateSent", undefined);

    _defineProperty(this, "Subject", undefined);

    _defineProperty(this, "ContentPlain", undefined);

    _defineProperty(this, "ContentHtml", undefined);

    _defineProperty(this, "ContentMarkdown", undefined);

    _defineProperty(this, "Attachments", undefined);

    _defineProperty(this, "ThreadUuid", undefined);

    _defineProperty(this, "ThreadIndex", undefined);

    _defineProperty(this, "TemplateId", undefined);

    _defineProperty(this, "TemplateData", undefined);

    _defineProperty(this, "Retries", undefined);

    _defineProperty(this, "sendErrors", undefined);

    _defineProperty(this, "Sender", undefined);
  }
  /**
  * Constructs a <code>MailerMail</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/MailerMail} obj Optional instance to populate.
  * @return {module:model/MailerMail} The populated <code>MailerMail</code> instance.
  */


  _createClass(MailerMail, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MailerMail();

        if (data.hasOwnProperty('From')) {
          obj['From'] = _MailerUser["default"].constructFromObject(data['From']);
        }

        if (data.hasOwnProperty('To')) {
          obj['To'] = _ApiClient["default"].convertToType(data['To'], [_MailerUser["default"]]);
        }

        if (data.hasOwnProperty('Cc')) {
          obj['Cc'] = _ApiClient["default"].convertToType(data['Cc'], [_MailerUser["default"]]);
        }

        if (data.hasOwnProperty('DateSent')) {
          obj['DateSent'] = _ApiClient["default"].convertToType(data['DateSent'], 'String');
        }

        if (data.hasOwnProperty('Subject')) {
          obj['Subject'] = _ApiClient["default"].convertToType(data['Subject'], 'String');
        }

        if (data.hasOwnProperty('ContentPlain')) {
          obj['ContentPlain'] = _ApiClient["default"].convertToType(data['ContentPlain'], 'String');
        }

        if (data.hasOwnProperty('ContentHtml')) {
          obj['ContentHtml'] = _ApiClient["default"].convertToType(data['ContentHtml'], 'String');
        }

        if (data.hasOwnProperty('ContentMarkdown')) {
          obj['ContentMarkdown'] = _ApiClient["default"].convertToType(data['ContentMarkdown'], 'String');
        }

        if (data.hasOwnProperty('Attachments')) {
          obj['Attachments'] = _ApiClient["default"].convertToType(data['Attachments'], ['String']);
        }

        if (data.hasOwnProperty('ThreadUuid')) {
          obj['ThreadUuid'] = _ApiClient["default"].convertToType(data['ThreadUuid'], 'String');
        }

        if (data.hasOwnProperty('ThreadIndex')) {
          obj['ThreadIndex'] = _ApiClient["default"].convertToType(data['ThreadIndex'], 'String');
        }

        if (data.hasOwnProperty('TemplateId')) {
          obj['TemplateId'] = _ApiClient["default"].convertToType(data['TemplateId'], 'String');
        }

        if (data.hasOwnProperty('TemplateData')) {
          obj['TemplateData'] = _ApiClient["default"].convertToType(data['TemplateData'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('Retries')) {
          obj['Retries'] = _ApiClient["default"].convertToType(data['Retries'], 'Number');
        }

        if (data.hasOwnProperty('sendErrors')) {
          obj['sendErrors'] = _ApiClient["default"].convertToType(data['sendErrors'], ['String']);
        }

        if (data.hasOwnProperty('Sender')) {
          obj['Sender'] = _MailerUser["default"].constructFromObject(data['Sender']);
        }
      }

      return obj;
    }
    /**
    * @member {module:model/MailerUser} From
    */

  }]);

  return MailerMail;
}();

exports["default"] = MailerMail;
//# sourceMappingURL=MailerMail.js.map
