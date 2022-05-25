/**
 * 删除数组中部分元素,改变原数组
 * @param {Array} array 
 * @param  {...any} args 
 * @returns Array
 */
export default function pull(array,...args) {
  const result = [];
  if(array.length === 0) {
    return result;
  }
  if(Array.isArray(args[0])) {
    return pull(array,...args[0]);
  }
  for (let i = 0; i < array.length; i++) {
      if (args.includes(array[i])) {
        result.push(array[i]);
        array.splice(i,1);
        i--;
      }
  }
  return result;
}