## 簡介

### JS array 的方法(filter, map, sort, reduce)

1. `filter`
2. `map`
3. `sort`
4. `reduce`

### filter

[filter MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

```javascript
const list = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600)
```

`filter` 用來過濾陣列中的資料，會回傳將符合條件`(true)`的結果

### map

[map MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

```javascript
const lastNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
```

利用 `map` 組合原始資料，回傳一個新的 array

### sort

[sort MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

```javascript
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
```

`sort` 排序小排到大，傳入兩個要被比較的參數

- a > b ? 1 : -1
- 如果是 -1 的話 a 會被排到 b 之前
- 如果是 1 的話 b 會被排到 a 之前

特別注意 ! `sort` 會直接影響原本的陣列，不像 `map` 、 `filter` 會先 return 一個新的陣列

### reduce

[reduce MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

```javascript
const totalYears = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0)
```

以往我們計算 total 都會用宣告一個變數(total)，在 for loop，再把每次 loop 的結果加回 total 上

用`reduce` 加總 total，initialValue 設 0，total，initialValue 就是 (total 的初始值)

---

```javascript
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const transportation = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0
  }
  obj[item]++
  return obj
},{})
```

利用 `reduce` 計算 data 中重複的 item 有幾個，預設 initialValue 也可以一個物件，利用`reduce`的特性，剛好可以計算item 的數量
