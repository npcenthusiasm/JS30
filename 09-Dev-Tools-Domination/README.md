## 簡介

console dev tool 介紹

### `console.log()` 其他語法

我們最常用的 console.log()，除了基本用法之外還有其他語法可以用

```javascript
// 基本用法
console.log('hello i am console log ')
// 替換文字
console.log('hello i am %s ', 'apple') // hello i am apple
// 帶有 style 的文字
console.log('%c color string', 'color: blue; background-color: yellow; font-size: 36px;')

```

### 除了一般顯示之外，還帶顯示資訊的 log

```javascript
// warning!
console.warn('i am warn message')
// Error :|
console.error('i am error message')
// Info
console.info('i am Info message')
```

### 將資料變成表格

```javascript
console.table(dogs)
```

### asset 測試 log

```javascript
// 第一個個參數為 true，就會輸出第二個參數的內容
console.assert(1==='1', 'test message, 1 !== "1"')
```

### 查看 DOM 元素的詳細內容

```javascript
const p = document.querySelector('p')
console.dir(p)
```

### 把 log 給 Group 起來

```javascript
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`)
  console.log(`${dog.name} is ${dog.age} years old`)
  console.groupEnd(`${dog.name}`)
})
```

### 計算參數 log 的次數

```javascript
console.count('a') // a: 1
console.count('a') // a: 2
console.count('b') // b: 1
```

### 計算執行時間

- `console.time()` 開始計算
- `console.timeEmd()` 停止計算

```javascript
console.time('fetch data')
fetch('https://api.github.com/users/npcenthusiasm')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetch data')
  })

  // fetch data: 326.078857421875 ms
```
