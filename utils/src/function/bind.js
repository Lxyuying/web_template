import call from "./call"
/**
 * 给fn绑定this为obj
 * @param {Function} fn 
 * @param {Object} obj 
 * @param  {传递给fn的n个参数} args 
 * @returns Function
 */
export default function bind(fn,obj, ...args) {
  return function(...args2) {
    return call(fn,obj, ...args,...args2)
  }
}