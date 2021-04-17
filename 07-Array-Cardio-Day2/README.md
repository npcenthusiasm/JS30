## 簡介

### JS array 的方法(some, every, find, findIndex)

1. `some`
2. `every`
3. `find`
4. `findIndex`

### some

[some MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

```javascript
const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);
```

`some` 只需要有資料中有一筆符合條件，就會回傳`true`，若都沒有則回傳`false`

### every

[every MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

```javascript
const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
```

`every` 必須資料中全部都符合條件，才回傳`true`，若有一筆不符合就會回傳`false`

### find

[find MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

```javascript
const comment = comments.find(comment => comment.id === 823423);
```

`find` 用來尋找一個元素是否存在 array 之中，存在就會回傳找到的結果，否則回傳`undefined`
找到一個元素後會立刻停止 loop

### findIndex

[findIndex MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

```javascript
const index = comments.findIndex(comment => comment.id === 823423);
```

`findIndex` 用來尋找一個元素是否存在 array 之中，存在就會回傳元素的 `index`，否則回傳`-1`

`findIndex` 跟 `find` 都是在找元素是否存在，只差在回傳值不一樣，依據需求來決定要使用哪一種方法
