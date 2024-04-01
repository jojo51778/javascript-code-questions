const arr = [1, [2], [3, [4]]];
// function flat(arr, depth = 1) {
//   let res = [];
//   arr.forEach(item => {
//     if (Array.isArray(item) && depth > 0) {
//       res = [...res, ...flat(item, depth - 1)];
//     } else {
//       res.push(item)
//     }
//   })
//   return res;
// }
function flat(arr, depth = 1) {
  return depth ? arr.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? flat(cur, depth - 1) : cur), []) : arr;
}
flat(arr)
console.log("🚀 ~ flat(arr):", flat(arr))
// [1, 2, 3, [4]]

flat(arr, 1)
console.log("🚀 ~ flat(arr, 1):", flat(arr, 1))
// [1, 2, 3, [4]]

flat(arr, 2)
console.log("🚀 ~ flat(arr, 2):", flat(arr, 2))
// [1, 2, 3, 4]