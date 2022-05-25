/**
 * 将数组拆分成多个 size 长度的区块，每个区块组成小数组,整体组成一个二维数组
 * @param {Array} array 
 * @param {Number} size 
 * @returns Array
 */
export default function chunk(array,size = 1) {
  if (array.length === 0) {
    return [];
  }
  let result = [];
  let temp = [];
  array.forEach(element => {
    if (temp.length === 0) {
      result.push(temp);
    }

    temp.push(element);

    if (temp.length === size) {
      temp = [];
    }
  });

  return result;
}