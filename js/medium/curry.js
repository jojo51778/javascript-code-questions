const  join = (a, b, c) => {
  console.log(`${a}_${b}_${c}`)
}
function curry(fn) {
  return function curryInner(...args) {
    const complete = args.length >= fn.length && !args.includes(curry.placeholder);
    if(complete) return fn(...args);
    return (...args2) => {
      const res = args.map(arg => arg === curry.placeholder && args2.length ? args2.shift() : arg);
      return curryInner(...res, ...args2)
    };
  }
}
const curriedJoin = curry(join)
const _ = curry.placeholder

curriedJoin(1, 2, 3) // '1_2_3'

curriedJoin(_, 2)(1, 3) // '1_2_3'

curriedJoin(_, _, _)(1)(_, 3)(2) // '1_2_3'