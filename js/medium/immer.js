const isObject = (data) => {
  return typeof data === 'object' && data !== null
}
function update(data, command) {
  for (const [key, value] of Object.entries(command)) {
    switch (key) {
      case '$push': 
        return [...data, ...value];
      case '$set': 
        return value;
      case '$merge': 
        if (!isObject(data)) {
          throw Error('bad merge')
        }
        return {...data, ...value};
      case '$apply': 
        return value(data)
      default: 
        if(Array.isArray(data)) {
          const res = [...data];
          res[key] = update(data[key], value);
          return res;
        } else if (isObject(data)) {
          return {
            ...data,
            [key]: update(data[key], value)
          }
        } else {
          throw new Error('not object for complex data')
        }
    }
  }
}

console.log("🚀 ~ update([1], {$push: [2, 3]})  :", update([1], {$push: [2, 3]})  )

console.log("🚀 ~ update({a: [1]}, {a: {$push: [2, 3]}}):", update({a: [1]}, {a: {$push: [2, 3]}}))

console.log("🚀 ~ update([1], {1: {$set: 2}}):", update([1], {1: {$set: 2}}))

console.log("🚀 ~ update({a: {b: 1}}, {a: { b: {$set: 2}}})  :", update({a: {b: 1}}, {a: { b: {$set: 2}}})  )

console.log("🚀 ~ update({a: {b: 1}}, {a: {$merge: {c: 3}}}) :", update({a: {b: 1}}, {a: {$merge: {c: 3}}}) )

console.log("🚀 ~ update({a: {c: 1}}, {a: {$merge: {c: 3}}}) :", update({a: {c: 1}}, {a: {$merge: {c: 3}}}) )

console.log("🚀 ~ update([1], {0: {$apply: (item) => item * 2}}) :", update([1], {0: {$apply: (item) => item * 2}}) )
