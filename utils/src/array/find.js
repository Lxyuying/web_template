/**
 * 找到第一个满足测试函数的元素并返回那个元素的值，如果找不到，则返回 undefined
 * @param {Array} array 
 * @param {Function} callback
 * @returns value/undefined
 */
 export default function find(array,callback) {
  for (let i = 0; i < array.length; i++) {
    let res = callback(array[i],i);
    if (res) {
      return array[i]
    }
  }
  return undefined;
}