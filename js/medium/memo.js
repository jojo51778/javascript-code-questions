function memo (func, resolver = (...args) => args.join('_')) {
  let map = new Map();
  return  (...args) => {
    let key = resolver(...args);
    if (map.has(key)) {
      return map.get(key)
    }
    let value = func.apply(this, args);
    map.set(key, value);
    return value
  }
}
const func = (arg1, arg2) => {
  return arg1 + arg2
}
const memoed = memo(func, () => 'asas')

console.log("🚀 ~ memoed(1, 2):", memoed(1, 5))

console.log("🚀 ~ memoed(1, 2) :", memoed(1, 5) )
