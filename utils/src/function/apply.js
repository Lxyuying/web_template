/**
 * 为函数调用指定this
 * @param {Function} fn 
 * @param {Object} obj 
 * @param  {传递给fn数组形式n个参数} args 
 * @returns this.fn()
 */
export default function apply (fn, obj, args) {
  // 判断
  if (obj === undefined || obj === null) {
    obj = globalThis; // es11 全局对象
  }
  // 为 obj 添加临时方法
  obj.temp = fn;
  // 执行方法
  let result = obj.temp(...args);
  // 删除临时属性
  delete obj.temp;
  // 返回结束
  return result;
}