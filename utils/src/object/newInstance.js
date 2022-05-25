
/**
 * 创建fn构造函数的实例对象
 * @param {Function} fn 
 * @param  {...any} args 
 * @returns Object 
 */
export default function newInstance(fn,...args) {
  const obj = {};
  const result = fn.call(obj,...args);
  obj.__proto__ = fn.prototype;
  return result instanceof Object ? result : obj;
}