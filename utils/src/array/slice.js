/**
 * 返回一个由 [begin,end) 决定的原数组的浅拷贝, 原始数组不会被改变
 * @param {Array} array 
 * @param {Number} begin 
 * @param {Number} end 
 * @returns Array
 */
 export default function slice(array,begin,end) {
   if (array.length === 0) return [];

   begin = begin || 0;
   if (begin >= array.length) return [];

   end = end || array.length;
   if (end < begin) {
     end = array.length
   }

    const result = [];
    for (let i = 0; i < array.length; i++) {
      if(i >= begin && i < end) {
        result.push(array[i])
      }
    }
    return result
 }