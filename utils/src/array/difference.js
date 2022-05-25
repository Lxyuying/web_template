/**
 * 取arr1与arr2的差集(arr1-arr2)
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @returns Array
 */
export default function difference(arr1,arr2 = []) {
  if (arr1.length === 0) {
    return [];
  }
  if (arr2.length === 0) {
    return arr1.slice();
  }
  return arr1.filter(item => !arr2.includes(item));
}