## 簡介

實作 input 搜尋關鍵字時將搜尋結果顯示出來並 highlight

### input 關鍵字搜尋並 highlight

先對 input 監聽 `keyup` 和 `change` event

```javascript
searchInput.addEventListener('change', displayMatches)
searchInput.addEventListener('keyup', displayMatches)
```

將 event 觸發得 callback 給 `displayMatches` 去搜尋結果，將結果組成一個 html，再用 `innerHTML` 將結果顯示出來

### 如何將關鍵字 highlight

使用 [Regex(正則運算式) MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Regular_Expressions)

`new RegExp(this.value, 'gi')`  對 input value 進行比對，將比對到的結果用

```javascript
const cityName = place.city.replace(REGEX_VALUE, `<span class="hight-light">${this.value}</span>`)

const stateName = place.city.replace(REGEX_VALUE, `<span class="hight-light">${this.value}</span>`)

```

### 結語

關鍵字搜尋在實務上很常會用到，不過還是第一次實作將關鍵字用顏色 highlight，真的是很有趣的一部分，感謝 Wes Bos 提供這樣的課程，感覺又進步了一些。
