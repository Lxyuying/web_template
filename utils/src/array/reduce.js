/**
 * 从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值
 * @param {Array} array 
 * @param {Function} callback 
 * @param {初始值} initValue 
 * @returns 累计值
 */
export default function reduce(array,callback,initValue) {
  let result = initValue;
  for (let i = 0; i < array.length; i++) {
    result =  callback(result,array[i],i)
  }
  return result;
}