
function excludeItems(items, excludes) { 
  const excludeMap = {};
  excludes.forEach(exclude => {
    excludeMap[exclude.k] = exclude.v;
  });
  
  return items.filter(item => {
    for (const key in item) {
      if (key in excludeMap && item[key] === excludeMap[key]) {
        return false;
      }
    }
    return true;
  });  
}
// function excludeItems(items, excludes) { 
//   return items.filter(item => 
//     excludes.every(exclude => item[exclude.k] !== exclude.v)
//   );
// }
let items = [
  {color: 'red', type: 'tv', age: 18}, 
  {color: 'silver', type: 'phone', age: 20},
  {color: 'blue', type: 'book', age: 17}
] 

// an exclude array made of key value pair
const excludes = [ 
  {k: 'color', v: 'silver'}, 
  {k: 'type', v: 'tv'}, 
]

console.log("🚀 ~ excludeItems(items, excludes):", excludeItems(items, excludes))
