# 簡介

Key Detection

## 將輸入值鎖定在一個區塊內

```javascript
const pressed = []
const secretCode = 'happy'
window.addEventListener('keyup', (e)=> {
  console.log(e.key)
  pressed.push(e.key)
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)
  if (pressed.join('') === secretCode) {
    cornify_add()
  }
  console.log(pressed)
})
```

```javascript
pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)
```

透過 [splice](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) 對 array 擷取特定的長度，來限制資料的筆數

ex.

`["a", "b", "v", "c", "d"]`

輸入 `f` 經過處理後

`pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)`

得到結果為

`["b", "v", "c", "d", "f"]`
