export default function clone(target) {
  // 如果是对象(不是函数, 也就是可能是object对象或者数组)
  if (target!=null && typeof target==='object') {
    if (target instanceof Array) {
      return [...target]
    } else {
      return {...target}
    } 
  }
  return target
}