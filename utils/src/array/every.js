/**
 * 如果数组中的每个元素都满足测试函数，则返回 true，否则返回 false
 * @param {Array} array 
 * @param {Function} callback
 * @returns Boolean
 */
 export default function every(array,callback) {
  for (let i = 0; i < array.length; i++) {
    if(!callback(array[i],i)) {
      return false
    }
  }
  return true;
}