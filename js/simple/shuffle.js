function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random()*(i + 1));
    let storeItem = arr[i];
    arr[i] = arr[randomIndex];
    arr[randomIndex] = storeItem;
  }
  return arr
}

const arr = [1, 2, 3, 4]
console.log("🚀 ~ shuffle(arr):", shuffle(arr))
