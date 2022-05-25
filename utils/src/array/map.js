/**
 * 返回一个由回调函数的返回值组成的新数组
 * @param {Array} array 
 * @param {Function} callback 
 * @returns Array
 */
export default function map(array,callback) {
  let result  = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i],i));
  }
  return result;
}