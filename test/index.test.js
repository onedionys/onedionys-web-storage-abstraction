const assert = require('assert');
const WebStorage = require('../src/webStorage');

describe('WebStorage', function () {
  beforeEach(function () {
    // Set up a fake localStorage for testing
    const localStorage = {};
    this.webStorage = new WebStorage('localStorage');
    this.webStorage.storage = {
      setItem: (key, value) => {
        localStorage[key] = value;
      },
      getItem: (key) => {
        return localStorage[key];
      },
      removeItem: (key) => {
        delete localStorage[key];
      },
      clear: () => {
        localStorage = {};
      }
    };
  });

  describe('#setItem()', function () {
    it('should set an item in the localStorage', function () {
      this.webStorage.setItem('testKey', 'testValue');
      assert.equal(localStorage['testKey'], JSON.stringify('testValue'));
    });
  });

  describe('#getItem()', function () {
    it('should get an item from the localStorage', function () {
      localStorage['testKey'] = JSON.stringify('testValue');
      const value = this.webStorage.getItem('testKey');
      assert.equal(value, 'testValue');
    });
  });

  describe('#removeItem()', function () {
    it('should remove an item from the localStorage', function () {
      localStorage['testKey'] = JSON.stringify('testValue');
      this.webStorage.removeItem('testKey');
      assert.equal(localStorage['testKey'], undefined);
    });
  });

  describe('#clear()', function () {
    it('should clear the localStorage', function () {
      localStorage['testKey1'] = JSON.stringify('testValue1');
      localStorage['testKey2'] = JSON.stringify('testValue2');
      this.webStorage.clear();
      assert.equal(Object.keys(localStorage).length, 0);
    });
  });
});
