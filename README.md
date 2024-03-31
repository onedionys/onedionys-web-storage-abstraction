<h1 align="center">Welcome to One Dionys - Web Storage Abstraction! 👋 </h1>

<p align="center">A set of functions to manage web storage including local storage, session storage, and cookies. 💖 </p>

<p align="center">
<img src="https://img.shields.io/github/contributors/onedionys/onedionys-web-storage-abstraction?style=flat-square">
<img src="https://img.shields.io/github/issues/onedionys/onedionys-web-storage-abstraction?style=flat-square">
<img src="https://img.shields.io/github/stars/onedionys/onedionys-web-storage-abstraction?style=flat-square"> 
<img src="https://img.shields.io/github/forks/onedionys/onedionys-web-storage-abstraction?style=flat-square">
<img src="https://img.shields.io/github/last-commit/onedionys/onedionys-web-storage-abstraction.svg?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/onedionys/onedionys-web-storage-abstraction?style=flat-square">
<img src="https://img.shields.io/github/license/onedionys/onedionys-web-storage-abstraction?style=flat-square">
</p>

## 💾 Requirements

* `Web Browser` - Can be used as an emulator to build applications. Example [Chrome, Firefox, Safari & Opera].
* `Internet` - Because many use CDN and to make it easier to find solutions to all problems.

## 🎯 How To Use

#### Example Syntax

```javascript
const WebStorage = require('./src/webStorage');

// Create a new instance with localStorage
const localStorageWrapper = new WebStorage('localStorage');

// Set an item
localStorageWrapper.setItem('key', 'value');

// Get an item
const value = localStorageWrapper.getItem('key');
console.log(value); // Output: value

// Remove an item
localStorageWrapper.removeItem('key');

// Clear all items
localStorageWrapper.clear();
```

#### Explanation

* This package provides a simple abstraction layer for working with web storage (localStorage or sessionStorage). It allows you to easily set, get, remove, or clear items from the storage.

#### Return Value

* `setItem(key, value)`: Sets the value for the specified key in the storage.
* `getItem(key)`: Retrieves the value for the specified key from the storage.
* `removeItem(key)`: Removes the item with the specified key from the storage.
* `clear()`: Removes all items from the storage.

## 📆 Release Date

* v1.0.0 : 08 March 2024
* v1.0.1 : 11 March 2024
* v4.0.0 : 11 March 2024
* v4.0.1 : 13 March 2024
* v4.0.2 : 18 March 2024
* v5.0.0 : 31 March 2024

## 🧑 Author

* Facebook : <a href="https://www.facebook.com/theonedionys"> Oned Ionys</a>
* Instagram : <a href="https://www.instagram.com/onedionys/"> @onedionys</a>
* Twitter : <a href="https://twitter.com/onedionys"> @onedionys</a>
* LinkedIn :  <a href="https://www.linkedin.com/in/onedionys/"> @onedionys</a>

## 📝 License

* Copyright © 2024 One Dionys
* **One Dionys - Web Storage Abstraction is an open source project licensed under the MIT license**

## ☕️ Suppport & Donation

Love One Dionys - Web Storage Abstraction? Support this project by donating or sharing with others in need.

<a href="https://www.buymeacoffee.com/onedionys"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**
