"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withoutProps;

/**
 * remove unused props, same as es6 object destructing
 *
 * @param obj {object} - native object
 * @param keys {string[]} - list of object members that will be removed
 *
 * @example
 *  const { className, prefixCls, ...restProps } = withoutProps(this.props, [
 *  'isPlaying',
 *  'renderPlay',
 *  'renderPause',
 *  'rotationInPlay',
 *  'rotationInPause'
 *  ]);
 *
 * @return {object}
 */
function withoutProps(obj, keys) {
  var target = {};

  for (var i in obj) {
    // noinspection JSUnfilteredForInLoop
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}
