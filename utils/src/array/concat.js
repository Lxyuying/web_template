/**
 * 将n个数组或值与当前数组合并生成一个新数组, 原始数组不会被改变
 * @param {Array} array 
 * @param  {...any} args 
 * @returns Array
 */
export default function concat(array,...args) {
  const result = [...array]
  args.forEach(item => {
    if(Array.isArray(item)) result.push(...item)
    else result.push(item)
  })
  return result
}