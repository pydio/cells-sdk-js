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
* Enum class ActivityObjectType.
* @enum {}
* @readonly
*/
var ActivityObjectType = /*#__PURE__*/function () {
  function ActivityObjectType() {
    _classCallCheck(this, ActivityObjectType);

    _defineProperty(this, "BaseObject", "BaseObject");

    _defineProperty(this, "Activity", "Activity");

    _defineProperty(this, "Link", "Link");

    _defineProperty(this, "Mention", "Mention");

    _defineProperty(this, "Collection", "Collection");

    _defineProperty(this, "OrderedCollection", "OrderedCollection");

    _defineProperty(this, "CollectionPage", "CollectionPage");

    _defineProperty(this, "OrderedCollectionPage", "OrderedCollectionPage");

    _defineProperty(this, "Application", "Application");

    _defineProperty(this, "Group", "Group");

    _defineProperty(this, "Organization", "Organization");

    _defineProperty(this, "Person", "Person");

    _defineProperty(this, "Service", "Service");

    _defineProperty(this, "Article", "Article");

    _defineProperty(this, "Audio", "Audio");

    _defineProperty(this, "Document", "Document");

    _defineProperty(this, "Event", "Event");

    _defineProperty(this, "Image", "Image");

    _defineProperty(this, "Note", "Note");

    _defineProperty(this, "Page", "Page");

    _defineProperty(this, "Place", "Place");

    _defineProperty(this, "Profile", "Profile");

    _defineProperty(this, "Relationship", "Relationship");

    _defineProperty(this, "Tombstone", "Tombstone");

    _defineProperty(this, "Video", "Video");

    _defineProperty(this, "Accept", "Accept");

    _defineProperty(this, "Add", "Add");

    _defineProperty(this, "Announce", "Announce");

    _defineProperty(this, "Arrive", "Arrive");

    _defineProperty(this, "Block", "Block");

    _defineProperty(this, "Create", "Create");

    _defineProperty(this, "Delete", "Delete");

    _defineProperty(this, "Dislike", "Dislike");

    _defineProperty(this, "Flag", "Flag");

    _defineProperty(this, "Follow", "Follow");

    _defineProperty(this, "Ignore", "Ignore");

    _defineProperty(this, "Invite", "Invite");

    _defineProperty(this, "Join", "Join");

    _defineProperty(this, "Leave", "Leave");

    _defineProperty(this, "Like", "Like");

    _defineProperty(this, "Listen", "Listen");

    _defineProperty(this, "Move", "Move");

    _defineProperty(this, "Offer", "Offer");

    _defineProperty(this, "Question", "Question");

    _defineProperty(this, "Reject", "Reject");

    _defineProperty(this, "Read", "Read");

    _defineProperty(this, "Remove", "Remove");

    _defineProperty(this, "TentativeReject", "TentativeReject");

    _defineProperty(this, "TentativeAccept", "TentativeAccept");

    _defineProperty(this, "Travel", "Travel");

    _defineProperty(this, "Undo", "Undo");

    _defineProperty(this, "Update", "Update");

    _defineProperty(this, "UpdateComment", "UpdateComment");

    _defineProperty(this, "UpdateMeta", "UpdateMeta");

    _defineProperty(this, "View", "View");

    _defineProperty(this, "Workspace", "Workspace");

    _defineProperty(this, "Digest", "Digest");

    _defineProperty(this, "Folder", "Folder");

    _defineProperty(this, "Cell", "Cell");

    _defineProperty(this, "Share", "Share");
  }

  _createClass(ActivityObjectType, null, [{
    key: "constructFromObject",
    value:
    /**
    * Returns a <code>ActivityObjectType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ActivityObjectType} The enum <code>ActivityObjectType</code> value.
    */
    function constructFromObject(object) {
      return object;
    }
  }]);

  return ActivityObjectType;
}();

exports["default"] = ActivityObjectType;
//# sourceMappingURL=ActivityObjectType.js.map
