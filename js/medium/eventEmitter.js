class EventEmitter {
  event = {};
  subscribe(eventName, callback) {
    if (!this.event[eventName]) {
      this.event[eventName] = new Set();
    }
    const callbackObj = { callback }
    this.event[eventName].add(callbackObj);
    return {
      release: () => {
        this.event[eventName].delete(callbackObj);
        if (this.event[eventName].size === 0) {
          delete this.event[eventName]
        }
      }
    }
  }
  emit(eventName, ...args) {
    if (this.event[eventName]) {
      this.event[eventName].forEach(cbObj => {
        cbObj.callback.apply(this, args);
      })
    }
  }
}