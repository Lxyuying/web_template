/**
 * 数组去重
 * @param {Array} array
 * @returns Array
 */
export default function unique(array) {
  return [...new Set(array)]
}