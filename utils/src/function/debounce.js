/**
 * 函数防抖，在规定时间内，只让最后一次生效，前面的不生效。
 * @param {Function} callback 
 * @param {执行间隔时长} time 
 * @returns Function
 */
export default function debounce(callback,time) {
  let timeId = null;
  return function(e) {
    if(timeId !== null) {
      clearTimeout(timeId);
    }
    timeId = setTimeout(()=> {
      callback.call(this,e);
      timeId = null;
    },time)
  }
}