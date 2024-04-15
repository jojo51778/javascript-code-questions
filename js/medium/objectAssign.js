function objectAssign(target, ...sources) {
  if(target == null) {
    throw Error();
  }
  
  target = Object(target);

  for (let source of sources) {
    if(source == null) continue;

    merge(Object.keys(source), source);
    merge(Object.getOwnPropertySymbols(source), source);
  }

  function merge(keys = [], currSource) {
    for (let key of keys) {
      target[key] = currSource[key];
      if(target[key] !== currSource[key]) {
        throw Error();
      }
    }
  }

  return target;
}