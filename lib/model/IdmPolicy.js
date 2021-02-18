"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdmPolicyCondition = _interopRequireDefault(require("./IdmPolicyCondition"));

var _IdmPolicyEffect = _interopRequireDefault(require("./IdmPolicyEffect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The IdmPolicy model module.
* @module model/IdmPolicy
* @version 1.0
*/
var IdmPolicy = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>IdmPolicy</code>.
  * @alias module:model/IdmPolicy
  * @class
  */
  function IdmPolicy() {
    _classCallCheck(this, IdmPolicy);

    _defineProperty(this, "id", undefined);

    _defineProperty(this, "description", undefined);

    _defineProperty(this, "subjects", undefined);

    _defineProperty(this, "resources", undefined);

    _defineProperty(this, "actions", undefined);

    _defineProperty(this, "effect", undefined);

    _defineProperty(this, "conditions", undefined);
  }
  /**
  * Constructs a <code>IdmPolicy</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/IdmPolicy} obj Optional instance to populate.
  * @return {module:model/IdmPolicy} The populated <code>IdmPolicy</code> instance.
  */


  _createClass(IdmPolicy, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IdmPolicy();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('subjects')) {
          obj['subjects'] = _ApiClient["default"].convertToType(data['subjects'], ['String']);
        }

        if (data.hasOwnProperty('resources')) {
          obj['resources'] = _ApiClient["default"].convertToType(data['resources'], ['String']);
        }

        if (data.hasOwnProperty('actions')) {
          obj['actions'] = _ApiClient["default"].convertToType(data['actions'], ['String']);
        }

        if (data.hasOwnProperty('effect')) {
          obj['effect'] = _IdmPolicyEffect["default"].constructFromObject(data['effect']);
        }

        if (data.hasOwnProperty('conditions')) {
          obj['conditions'] = _ApiClient["default"].convertToType(data['conditions'], {
            'String': _IdmPolicyCondition["default"]
          });
        }
      }

      return obj;
    }
    /**
    * @member {String} id
    */

  }]);

  return IdmPolicy;
}();

exports["default"] = IdmPolicy;
//# sourceMappingURL=IdmPolicy.js.map
