/**
 * 找到第一个满足测试函数的元素并返回那个元素的索引，如果找不到，则返回 -1
 * @param {Array} array 
 * @param {Function} callback 
 * @returns index/-1
 */
 export default function findIndex(array,callback) {
  for (let i = 0; i < array.length; i++) {
    let res = callback(array[i],i);
    if (res) {
      return i
    }
  }
  return -1;
}