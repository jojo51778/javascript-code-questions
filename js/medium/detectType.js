function detectType(data) {
  return Object.prototype.toString.call(data).split(' ')[1].slice(0, -1).toLowerCase();
}

console.log("🚀 ~ detectType(1):", detectType(1))
console.log("🚀 ~ detectType(new Map()) :", detectType(new Map()) )
console.log("🚀 ~ detectType([]):", detectType([]))
console.log("🚀 ~ detectType(null):", detectType(null))
