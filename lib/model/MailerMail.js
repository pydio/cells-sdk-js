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

/**
 * The MailerMail model module.
 * @module model/MailerMail
 * @version 4.0
 */
var MailerMail = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MailerMail</code>.
   * @alias module:model/MailerMail
   */
  function MailerMail() {
    _classCallCheck(this, MailerMail);

    MailerMail.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MailerMail, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MailerMail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MailerMail} obj Optional instance to populate.
     * @return {module:model/MailerMail} The populated <code>MailerMail</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MailerMail();

        if (data.hasOwnProperty('Attachments')) {
          obj['Attachments'] = _ApiClient["default"].convertToType(data['Attachments'], ['String']);
        }

        if (data.hasOwnProperty('Cc')) {
          obj['Cc'] = _ApiClient["default"].convertToType(data['Cc'], [_MailerUser["default"]]);
        }

        if (data.hasOwnProperty('ContentHtml')) {
          obj['ContentHtml'] = _ApiClient["default"].convertToType(data['ContentHtml'], 'String');
        }

        if (data.hasOwnProperty('ContentMarkdown')) {
          obj['ContentMarkdown'] = _ApiClient["default"].convertToType(data['ContentMarkdown'], 'String');
        }

        if (data.hasOwnProperty('ContentPlain')) {
          obj['ContentPlain'] = _ApiClient["default"].convertToType(data['ContentPlain'], 'String');
        }

        if (data.hasOwnProperty('DateSent')) {
          obj['DateSent'] = _ApiClient["default"].convertToType(data['DateSent'], 'String');
        }

        if (data.hasOwnProperty('From')) {
          obj['From'] = _MailerUser["default"].constructFromObject(data['From']);
        }

        if (data.hasOwnProperty('Retries')) {
          obj['Retries'] = _ApiClient["default"].convertToType(data['Retries'], 'Number');
        }

        if (data.hasOwnProperty('Sender')) {
          obj['Sender'] = _MailerUser["default"].constructFromObject(data['Sender']);
        }

        if (data.hasOwnProperty('Subject')) {
          obj['Subject'] = _ApiClient["default"].convertToType(data['Subject'], 'String');
        }

        if (data.hasOwnProperty('TemplateData')) {
          obj['TemplateData'] = _ApiClient["default"].convertToType(data['TemplateData'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('TemplateId')) {
          obj['TemplateId'] = _ApiClient["default"].convertToType(data['TemplateId'], 'String');
        }

        if (data.hasOwnProperty('ThreadIndex')) {
          obj['ThreadIndex'] = _ApiClient["default"].convertToType(data['ThreadIndex'], 'String');
        }

        if (data.hasOwnProperty('ThreadUuid')) {
          obj['ThreadUuid'] = _ApiClient["default"].convertToType(data['ThreadUuid'], 'String');
        }

        if (data.hasOwnProperty('To')) {
          obj['To'] = _ApiClient["default"].convertToType(data['To'], [_MailerUser["default"]]);
        }

        if (data.hasOwnProperty('sendErrors')) {
          obj['sendErrors'] = _ApiClient["default"].convertToType(data['sendErrors'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return MailerMail;
}();
/**
 * @member {Array.<String>} Attachments
 */


MailerMail.prototype['Attachments'] = undefined;
/**
 * @member {Array.<module:model/MailerUser>} Cc
 */

MailerMail.prototype['Cc'] = undefined;
/**
 * @member {String} ContentHtml
 */

MailerMail.prototype['ContentHtml'] = undefined;
/**
 * @member {String} ContentMarkdown
 */

MailerMail.prototype['ContentMarkdown'] = undefined;
/**
 * @member {String} ContentPlain
 */

MailerMail.prototype['ContentPlain'] = undefined;
/**
 * @member {String} DateSent
 */

MailerMail.prototype['DateSent'] = undefined;
/**
 * @member {module:model/MailerUser} From
 */

MailerMail.prototype['From'] = undefined;
/**
 * @member {Number} Retries
 */

MailerMail.prototype['Retries'] = undefined;
/**
 * @member {module:model/MailerUser} Sender
 */

MailerMail.prototype['Sender'] = undefined;
/**
 * @member {String} Subject
 */

MailerMail.prototype['Subject'] = undefined;
/**
 * @member {Object.<String, String>} TemplateData
 */

MailerMail.prototype['TemplateData'] = undefined;
/**
 * @member {String} TemplateId
 */

MailerMail.prototype['TemplateId'] = undefined;
/**
 * @member {String} ThreadIndex
 */

MailerMail.prototype['ThreadIndex'] = undefined;
/**
 * @member {String} ThreadUuid
 */

MailerMail.prototype['ThreadUuid'] = undefined;
/**
 * @member {Array.<module:model/MailerUser>} To
 */

MailerMail.prototype['To'] = undefined;
/**
 * @member {Array.<String>} sendErrors
 */

MailerMail.prototype['sendErrors'] = undefined;
var _default = MailerMail;
exports["default"] = _default;
//# sourceMappingURL=MailerMail.js.map
