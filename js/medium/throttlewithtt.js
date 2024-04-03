/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 */
function throttle(func, wait, option = {leading: true, trailing: true}) {
  const {leading, trailing} = option;
  let timer = null;
  let lastArgs = null;
  return (...args) => {
    const waitFunc = () => {
      if(trailing && lastArgs) {
        func.apply(this, lastArgs);
        lastArgs = null;
        timer = setTimeout(waitFunc, wait);
      } else {
        timer = null;
      }
    }
    if(!timer && leading) {
      func.apply(this, args);
    } else {
      lastArgs = args;
    }

    if(!timer) {
      timer = setTimeout(waitFunc, wait);
    }
  }
}