/**
 * 合并多个对象, 返回一个合并后对象(不改变原对象)
 * @param  {...any} args 多个对象
 * @returns 
 */
export default function mergeObject(...args ) { 
    const result = {}
    args.forEach(obj => {
      Object.keys(obj).forEach(key => {
     
        if (result.hasOwnProperty(key)) {
          result[key] = [].concat(result[key], obj[key]);
        } else {
          result[key] =  obj[key]
        }
      })
    })
    return result
 }