function pipe(funcs) {
  return (arg) => {
    return funcs.reduce((acc, cur) => cur(acc), arg)
  }
}

const times = (y) =>  (x) => x * y
const plus = (y) => (x) => x + y
const subtract = (y) =>  (x) => x - y
const divide = (y) => (x) => x / y

console.log(pipe([
  times(2),
  times(3)
])(3));