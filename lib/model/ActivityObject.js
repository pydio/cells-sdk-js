"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ActivityObjectType = _interopRequireDefault(require("./ActivityObjectType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ActivityObject model module.
 * @module model/ActivityObject
 * @version 4.0
 */
var ActivityObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ActivityObject</code>.
   * @alias module:model/ActivityObject
   */
  function ActivityObject() {
    _classCallCheck(this, ActivityObject);

    ActivityObject.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ActivityObject, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ActivityObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActivityObject} obj Optional instance to populate.
     * @return {module:model/ActivityObject} The populated <code>ActivityObject</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActivityObject();

        if (data.hasOwnProperty('@context')) {
          obj['@context'] = _ApiClient["default"].convertToType(data['@context'], 'String');
        }

        if (data.hasOwnProperty('accuracy')) {
          obj['accuracy'] = _ApiClient["default"].convertToType(data['accuracy'], 'Number');
        }

        if (data.hasOwnProperty('actor')) {
          obj['actor'] = ActivityObject.constructFromObject(data['actor']);
        }

        if (data.hasOwnProperty('altitude')) {
          obj['altitude'] = _ApiClient["default"].convertToType(data['altitude'], 'Number');
        }

        if (data.hasOwnProperty('anyOf')) {
          obj['anyOf'] = ActivityObject.constructFromObject(data['anyOf']);
        }

        if (data.hasOwnProperty('attachment')) {
          obj['attachment'] = ActivityObject.constructFromObject(data['attachment']);
        }

        if (data.hasOwnProperty('attributedTo')) {
          obj['attributedTo'] = ActivityObject.constructFromObject(data['attributedTo']);
        }

        if (data.hasOwnProperty('audience')) {
          obj['audience'] = ActivityObject.constructFromObject(data['audience']);
        }

        if (data.hasOwnProperty('bcc')) {
          obj['bcc'] = ActivityObject.constructFromObject(data['bcc']);
        }

        if (data.hasOwnProperty('bto')) {
          obj['bto'] = ActivityObject.constructFromObject(data['bto']);
        }

        if (data.hasOwnProperty('cc')) {
          obj['cc'] = ActivityObject.constructFromObject(data['cc']);
        }

        if (data.hasOwnProperty('closed')) {
          obj['closed'] = _ApiClient["default"].convertToType(data['closed'], 'Date');
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = ActivityObject.constructFromObject(data['content']);
        }

        if (data.hasOwnProperty('context')) {
          obj['context'] = ActivityObject.constructFromObject(data['context']);
        }

        if (data.hasOwnProperty('current')) {
          obj['current'] = ActivityObject.constructFromObject(data['current']);
        }

        if (data.hasOwnProperty('deleted')) {
          obj['deleted'] = _ApiClient["default"].convertToType(data['deleted'], 'Date');
        }

        if (data.hasOwnProperty('duration')) {
          obj['duration'] = _ApiClient["default"].convertToType(data['duration'], 'Date');
        }

        if (data.hasOwnProperty('endTime')) {
          obj['endTime'] = _ApiClient["default"].convertToType(data['endTime'], 'Date');
        }

        if (data.hasOwnProperty('first')) {
          obj['first'] = ActivityObject.constructFromObject(data['first']);
        }

        if (data.hasOwnProperty('formerType')) {
          obj['formerType'] = _ActivityObjectType["default"].constructFromObject(data['formerType']);
        }

        if (data.hasOwnProperty('generator')) {
          obj['generator'] = ActivityObject.constructFromObject(data['generator']);
        }

        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], 'Number');
        }

        if (data.hasOwnProperty('href')) {
          obj['href'] = _ApiClient["default"].convertToType(data['href'], 'String');
        }

        if (data.hasOwnProperty('hreflang')) {
          obj['hreflang'] = _ApiClient["default"].convertToType(data['hreflang'], 'String');
        }

        if (data.hasOwnProperty('icon')) {
          obj['icon'] = ActivityObject.constructFromObject(data['icon']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('image')) {
          obj['image'] = ActivityObject.constructFromObject(data['image']);
        }

        if (data.hasOwnProperty('inReplyTo')) {
          obj['inReplyTo'] = ActivityObject.constructFromObject(data['inReplyTo']);
        }

        if (data.hasOwnProperty('instrument')) {
          obj['instrument'] = ActivityObject.constructFromObject(data['instrument']);
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [ActivityObject]);
        }

        if (data.hasOwnProperty('last')) {
          obj['last'] = ActivityObject.constructFromObject(data['last']);
        }

        if (data.hasOwnProperty('latitude')) {
          obj['latitude'] = _ApiClient["default"].convertToType(data['latitude'], 'Number');
        }

        if (data.hasOwnProperty('location')) {
          obj['location'] = ActivityObject.constructFromObject(data['location']);
        }

        if (data.hasOwnProperty('longitude')) {
          obj['longitude'] = _ApiClient["default"].convertToType(data['longitude'], 'Number');
        }

        if (data.hasOwnProperty('markdown')) {
          obj['markdown'] = _ApiClient["default"].convertToType(data['markdown'], 'String');
        }

        if (data.hasOwnProperty('mediaType')) {
          obj['mediaType'] = _ApiClient["default"].convertToType(data['mediaType'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('next')) {
          obj['next'] = ActivityObject.constructFromObject(data['next']);
        }

        if (data.hasOwnProperty('object')) {
          obj['object'] = ActivityObject.constructFromObject(data['object']);
        }

        if (data.hasOwnProperty('oneOf')) {
          obj['oneOf'] = ActivityObject.constructFromObject(data['oneOf']);
        }

        if (data.hasOwnProperty('origin')) {
          obj['origin'] = ActivityObject.constructFromObject(data['origin']);
        }

        if (data.hasOwnProperty('partOf')) {
          obj['partOf'] = ActivityObject.constructFromObject(data['partOf']);
        }

        if (data.hasOwnProperty('prev')) {
          obj['prev'] = ActivityObject.constructFromObject(data['prev']);
        }

        if (data.hasOwnProperty('preview')) {
          obj['preview'] = ActivityObject.constructFromObject(data['preview']);
        }

        if (data.hasOwnProperty('published')) {
          obj['published'] = _ApiClient["default"].convertToType(data['published'], 'Date');
        }

        if (data.hasOwnProperty('radius')) {
          obj['radius'] = _ApiClient["default"].convertToType(data['radius'], 'Number');
        }

        if (data.hasOwnProperty('rel')) {
          obj['rel'] = _ApiClient["default"].convertToType(data['rel'], 'String');
        }

        if (data.hasOwnProperty('relationship')) {
          obj['relationship'] = ActivityObject.constructFromObject(data['relationship']);
        }

        if (data.hasOwnProperty('replies')) {
          obj['replies'] = ActivityObject.constructFromObject(data['replies']);
        }

        if (data.hasOwnProperty('result')) {
          obj['result'] = ActivityObject.constructFromObject(data['result']);
        }

        if (data.hasOwnProperty('startTime')) {
          obj['startTime'] = _ApiClient["default"].convertToType(data['startTime'], 'Date');
        }

        if (data.hasOwnProperty('subject')) {
          obj['subject'] = ActivityObject.constructFromObject(data['subject']);
        }

        if (data.hasOwnProperty('summary')) {
          obj['summary'] = _ApiClient["default"].convertToType(data['summary'], 'String');
        }

        if (data.hasOwnProperty('tag')) {
          obj['tag'] = ActivityObject.constructFromObject(data['tag']);
        }

        if (data.hasOwnProperty('target')) {
          obj['target'] = ActivityObject.constructFromObject(data['target']);
        }

        if (data.hasOwnProperty('to')) {
          obj['to'] = ActivityObject.constructFromObject(data['to']);
        }

        if (data.hasOwnProperty('totalItems')) {
          obj['totalItems'] = _ApiClient["default"].convertToType(data['totalItems'], 'Number');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ActivityObjectType["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('units')) {
          obj['units'] = _ApiClient["default"].convertToType(data['units'], 'String');
        }

        if (data.hasOwnProperty('updated')) {
          obj['updated'] = _ApiClient["default"].convertToType(data['updated'], 'Date');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = ActivityObject.constructFromObject(data['url']);
        }

        if (data.hasOwnProperty('width')) {
          obj['width'] = _ApiClient["default"].convertToType(data['width'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ActivityObject;
}();
/**
 * @member {String} @context
 */


ActivityObject.prototype['@context'] = undefined;
/**
 * @member {Number} accuracy
 */

ActivityObject.prototype['accuracy'] = undefined;
/**
 * @member {module:model/ActivityObject} actor
 */

ActivityObject.prototype['actor'] = undefined;
/**
 * @member {Number} altitude
 */

ActivityObject.prototype['altitude'] = undefined;
/**
 * @member {module:model/ActivityObject} anyOf
 */

ActivityObject.prototype['anyOf'] = undefined;
/**
 * @member {module:model/ActivityObject} attachment
 */

ActivityObject.prototype['attachment'] = undefined;
/**
 * @member {module:model/ActivityObject} attributedTo
 */

ActivityObject.prototype['attributedTo'] = undefined;
/**
 * @member {module:model/ActivityObject} audience
 */

ActivityObject.prototype['audience'] = undefined;
/**
 * @member {module:model/ActivityObject} bcc
 */

ActivityObject.prototype['bcc'] = undefined;
/**
 * @member {module:model/ActivityObject} bto
 */

ActivityObject.prototype['bto'] = undefined;
/**
 * @member {module:model/ActivityObject} cc
 */

ActivityObject.prototype['cc'] = undefined;
/**
 * @member {Date} closed
 */

ActivityObject.prototype['closed'] = undefined;
/**
 * @member {module:model/ActivityObject} content
 */

ActivityObject.prototype['content'] = undefined;
/**
 * @member {module:model/ActivityObject} context
 */

ActivityObject.prototype['context'] = undefined;
/**
 * @member {module:model/ActivityObject} current
 */

ActivityObject.prototype['current'] = undefined;
/**
 * @member {Date} deleted
 */

ActivityObject.prototype['deleted'] = undefined;
/**
 * @member {Date} duration
 */

ActivityObject.prototype['duration'] = undefined;
/**
 * @member {Date} endTime
 */

ActivityObject.prototype['endTime'] = undefined;
/**
 * @member {module:model/ActivityObject} first
 */

ActivityObject.prototype['first'] = undefined;
/**
 * @member {module:model/ActivityObjectType} formerType
 */

ActivityObject.prototype['formerType'] = undefined;
/**
 * @member {module:model/ActivityObject} generator
 */

ActivityObject.prototype['generator'] = undefined;
/**
 * @member {Number} height
 */

ActivityObject.prototype['height'] = undefined;
/**
 * @member {String} href
 */

ActivityObject.prototype['href'] = undefined;
/**
 * @member {String} hreflang
 */

ActivityObject.prototype['hreflang'] = undefined;
/**
 * @member {module:model/ActivityObject} icon
 */

ActivityObject.prototype['icon'] = undefined;
/**
 * @member {String} id
 */

ActivityObject.prototype['id'] = undefined;
/**
 * @member {module:model/ActivityObject} image
 */

ActivityObject.prototype['image'] = undefined;
/**
 * @member {module:model/ActivityObject} inReplyTo
 */

ActivityObject.prototype['inReplyTo'] = undefined;
/**
 * @member {module:model/ActivityObject} instrument
 */

ActivityObject.prototype['instrument'] = undefined;
/**
 * @member {Array.<module:model/ActivityObject>} items
 */

ActivityObject.prototype['items'] = undefined;
/**
 * @member {module:model/ActivityObject} last
 */

ActivityObject.prototype['last'] = undefined;
/**
 * @member {Number} latitude
 */

ActivityObject.prototype['latitude'] = undefined;
/**
 * @member {module:model/ActivityObject} location
 */

ActivityObject.prototype['location'] = undefined;
/**
 * @member {Number} longitude
 */

ActivityObject.prototype['longitude'] = undefined;
/**
 * @member {String} markdown
 */

ActivityObject.prototype['markdown'] = undefined;
/**
 * @member {String} mediaType
 */

ActivityObject.prototype['mediaType'] = undefined;
/**
 * @member {String} name
 */

ActivityObject.prototype['name'] = undefined;
/**
 * @member {module:model/ActivityObject} next
 */

ActivityObject.prototype['next'] = undefined;
/**
 * @member {module:model/ActivityObject} object
 */

ActivityObject.prototype['object'] = undefined;
/**
 * @member {module:model/ActivityObject} oneOf
 */

ActivityObject.prototype['oneOf'] = undefined;
/**
 * @member {module:model/ActivityObject} origin
 */

ActivityObject.prototype['origin'] = undefined;
/**
 * @member {module:model/ActivityObject} partOf
 */

ActivityObject.prototype['partOf'] = undefined;
/**
 * @member {module:model/ActivityObject} prev
 */

ActivityObject.prototype['prev'] = undefined;
/**
 * @member {module:model/ActivityObject} preview
 */

ActivityObject.prototype['preview'] = undefined;
/**
 * @member {Date} published
 */

ActivityObject.prototype['published'] = undefined;
/**
 * @member {Number} radius
 */

ActivityObject.prototype['radius'] = undefined;
/**
 * @member {String} rel
 */

ActivityObject.prototype['rel'] = undefined;
/**
 * @member {module:model/ActivityObject} relationship
 */

ActivityObject.prototype['relationship'] = undefined;
/**
 * @member {module:model/ActivityObject} replies
 */

ActivityObject.prototype['replies'] = undefined;
/**
 * @member {module:model/ActivityObject} result
 */

ActivityObject.prototype['result'] = undefined;
/**
 * @member {Date} startTime
 */

ActivityObject.prototype['startTime'] = undefined;
/**
 * @member {module:model/ActivityObject} subject
 */

ActivityObject.prototype['subject'] = undefined;
/**
 * @member {String} summary
 */

ActivityObject.prototype['summary'] = undefined;
/**
 * @member {module:model/ActivityObject} tag
 */

ActivityObject.prototype['tag'] = undefined;
/**
 * @member {module:model/ActivityObject} target
 */

ActivityObject.prototype['target'] = undefined;
/**
 * @member {module:model/ActivityObject} to
 */

ActivityObject.prototype['to'] = undefined;
/**
 * @member {Number} totalItems
 */

ActivityObject.prototype['totalItems'] = undefined;
/**
 * @member {module:model/ActivityObjectType} type
 */

ActivityObject.prototype['type'] = undefined;
/**
 * @member {String} units
 */

ActivityObject.prototype['units'] = undefined;
/**
 * @member {Date} updated
 */

ActivityObject.prototype['updated'] = undefined;
/**
 * @member {module:model/ActivityObject} url
 */

ActivityObject.prototype['url'] = undefined;
/**
 * @member {Number} width
 */

ActivityObject.prototype['width'] = undefined;
var _default = ActivityObject;
exports["default"] = _default;
//# sourceMappingURL=ActivityObject.js.map
