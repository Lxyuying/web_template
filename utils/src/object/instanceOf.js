/**
 * 判断obj是否是Type类型的实例
 * @param {Function} obj 
 * @param {Class} fn 类
 * @returns 
 */
export default function instanceOf(obj,fn) {
  if(fn === null) {
    return false
  }
  let prototype = fn.prototype
  let proto =  obj.__proto__
  while(proto) {
    if(prototype === proto) {
      return true
    }
    proto =  proto.__proto__
  }
  return false
}