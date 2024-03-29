const join = (a, b, c) => {
  console.log(`${a}_${b}_${c}`)
}
function curry(fn) {
  return function curryInner(...args) {
    if(args.length >= fn.length) return fn(...args);
    return (...args2) => curryInner(...args, ...args2);
  }
}
const curriedJoin = curry(join)

curriedJoin(1, 2, 3) // '1_2_3'

curriedJoin(1)(2, 3) // '1_2_3'

curriedJoin(1, 2)(3) // '1_2_3'