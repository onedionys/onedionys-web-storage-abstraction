class WebStorage {
    constructor(storageType = 'localStorage') {
      this.storage = window[storageType];
    }
  
    setItem(key, value) {
      this.storage.setItem(key, JSON.stringify(value));
    }
  
    getItem(key) {
      const item = this.storage.getItem(key);
      return item ? JSON.parse(item) : null;
    }
  
    removeItem(key) {
      this.storage.removeItem(key);
    }
  
    clear() {
      this.storage.clear();
    }
  }
  
  module.exports = WebStorage;
  