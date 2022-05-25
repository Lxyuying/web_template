/**
 * 为函数调用指定this
 * @param {Function} fn 
 * @param {Object} obj 
 * @param  {传递给fn的n个参数} args 
 * @returns this.fn()
 */
 export default function call(fn,obj,...args) {
  // 判断
  if (obj === undefined || obj === null) {
    obj = globalThis; // es11 全局对象
  }
  // 为 obj 添加临时方法
  obj.temp = fn;
  // 调用 temp 方法
  let result = obj.temp(...args);
  // 删除 temp 方法
  delete obj.temp;
  // 返回执行结果
  return result;
}