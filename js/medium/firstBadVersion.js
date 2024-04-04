/**
 * @param {IsBad} isBad
 * @return {(v: number) => number}
 */
function firstBadVersion(isBad) {
	// firstBadVersion receive a check function isBad
  // and should return a closure which accepts a version number(integer)
  // const check = v => isBad(v) ? check(v-1) : v + 1;
  // return (version) => {
  //   return isBad(version) ? check(version) : -1
  // }
  return (version) => {
    let left = 0, right = version;
    while (left <= right) {
      let middle = Math.floor((left + right) / 2);
      if (isBad(middle)) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
    return left <= version ? left : -1
  }
}

console.log("🚀 ~ firstBadVersion((i) => i >= 4)(100) :", firstBadVersion((i) => i >= 4)(100) )

console.log("🚀 ~ firstBadVersion((i) => i >= 4)(4) :", firstBadVersion((i) => i >= 4)(4) )

console.log("🚀 ~ firstBadVersion((i) => i >= 5)(3) :", firstBadVersion((i) => i >= 5)(3) )

console.log("🚀 ~ firstBadVersion((i) => i >= 1)(1) :", firstBadVersion((i) => i >= 1)(1) )

console.log("🚀 ~ firstBadVersion((i) => i >= 1)(2) :", firstBadVersion((i) => i >= 1)(2) )
