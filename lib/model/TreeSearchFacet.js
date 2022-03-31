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

/**
 * The TreeSearchFacet model module.
 * @module model/TreeSearchFacet
 * @version 4.0
 */
var TreeSearchFacet = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TreeSearchFacet</code>.
   * @alias module:model/TreeSearchFacet
   */
  function TreeSearchFacet() {
    _classCallCheck(this, TreeSearchFacet);

    TreeSearchFacet.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TreeSearchFacet, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TreeSearchFacet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TreeSearchFacet} obj Optional instance to populate.
     * @return {module:model/TreeSearchFacet} The populated <code>TreeSearchFacet</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TreeSearchFacet();

        if (data.hasOwnProperty('Count')) {
          obj['Count'] = _ApiClient["default"].convertToType(data['Count'], 'Number');
        }

        if (data.hasOwnProperty('End')) {
          obj['End'] = _ApiClient["default"].convertToType(data['End'], 'Number');
        }

        if (data.hasOwnProperty('FieldName')) {
          obj['FieldName'] = _ApiClient["default"].convertToType(data['FieldName'], 'String');
        }

        if (data.hasOwnProperty('Label')) {
          obj['Label'] = _ApiClient["default"].convertToType(data['Label'], 'String');
        }

        if (data.hasOwnProperty('Max')) {
          obj['Max'] = _ApiClient["default"].convertToType(data['Max'], 'String');
        }

        if (data.hasOwnProperty('Min')) {
          obj['Min'] = _ApiClient["default"].convertToType(data['Min'], 'String');
        }

        if (data.hasOwnProperty('Start')) {
          obj['Start'] = _ApiClient["default"].convertToType(data['Start'], 'Number');
        }

        if (data.hasOwnProperty('Term')) {
          obj['Term'] = _ApiClient["default"].convertToType(data['Term'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TreeSearchFacet;
}();
/**
 * @member {Number} Count
 */


TreeSearchFacet.prototype['Count'] = undefined;
/**
 * @member {Number} End
 */

TreeSearchFacet.prototype['End'] = undefined;
/**
 * @member {String} FieldName
 */

TreeSearchFacet.prototype['FieldName'] = undefined;
/**
 * @member {String} Label
 */

TreeSearchFacet.prototype['Label'] = undefined;
/**
 * @member {String} Max
 */

TreeSearchFacet.prototype['Max'] = undefined;
/**
 * @member {String} Min
 */

TreeSearchFacet.prototype['Min'] = undefined;
/**
 * @member {Number} Start
 */

TreeSearchFacet.prototype['Start'] = undefined;
/**
 * @member {String} Term
 */

TreeSearchFacet.prototype['Term'] = undefined;
var _default = TreeSearchFacet;
exports["default"] = _default;
//# sourceMappingURL=TreeSearchFacet.js.map
