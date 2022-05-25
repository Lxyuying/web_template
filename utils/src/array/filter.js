/**
 * 将所有在过滤函数中返回 true 的数组元素放进一个新数组中并返回
 * @param {Array} array 
 * @param {Function} callback 
 * @returns Array
 */
export default function filter(array,callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let res = callback(array[i],i)
    if(res) {
      result.push(array[i]);
    }
  }
  return result;
}