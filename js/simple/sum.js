function sum(num) {
  const fn = (num2) => sum(num + num2);
  fn.valueOf = () => num;
  return fn;
}


const sum1 = sum(1)
console.log("🚀 ~ sum1(2) == 3:", sum1(2) == 3)
console.log("🚀 ~ sum1(3) == 4:", sum1(3) == 4)
console.log("🚀 ~ sum(1)(2)(3) == 6:", sum(1)(2)(3) == 6)
console.log("🚀 ~ sum(5)(-1)(2) == 6:", sum(5)(-1)(2) == 6)
