
/**
 * 函数节流，函数执行一次后，只有大于设定的执行周期后才会执行第二次
 * @param {Function} callback 
 * @param {等待时长} time 
 * @returns Function
 */
export default function throttle(callback,time) {
  // 定义开始时间
  let start = 0;
  // 返回的结果是一个函数
  /**
   * @param {事件源对象} e 
   */
  return function(e) {
    // 获取当前时间戳
    let now = Date.now()
    // 判断
    if(now - start >= wait) {
      callback.call(this,e);
      start = now;
    }
  }
}