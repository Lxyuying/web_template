/**
 * 数组扁平化,取出嵌套数组(多维)中的所有元素放到一个新数组(一维)中
 * @param {Array} array 
 * @returns Array
 */
export default function faltten(array) {
  let result = [];
  array.forEach(element => {
    if(Array.isArray(element)) {
      result = result.concat(faltten(element));
    } else {
      result = result.concat(element);
    }
  });
  return result;
}