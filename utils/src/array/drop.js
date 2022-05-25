/**
 * 得到当前数组过滤掉count个后剩余元素组成的数组
 * @param {Array} array 需要过滤的数组
 * @param {Number} size 过滤的个数 
 * @param {Number} begin 开始的位置，如果为负数则从末尾开始
 * @returns {Array} 新数组
 */
export default function drop(array,size = 1,begin = 0) {
  if (array.length === 0) {
    return [];
  }
  if (begin < 0) {
    size = array.length + begin + 1 - size
    return array.filter((value,index) => index < size)
  } else {
    size = size + begin
  }
  
  return array.filter((value,index) => index >= size)
}