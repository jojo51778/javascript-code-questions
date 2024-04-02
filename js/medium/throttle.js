function throttle(func, wait) {
  let timeout = null;
  let lastArgs = null;
  return (...args) => {
    if (!timeout) {
      func.apply(this, args)
      timeout = setTimeout(() => {
        lastArgs && func.apply(this, lastArgs)
        timeout = null;
        lastArgs = null;
      }, wait);
    } else {
      lastArgs = args;
    }
  }
}
