## 簡介

用 `shift` 複數選取 checkbox

### 實作 `shift` 複數選取 checkbox 方法

先監聽 click event

```javascript
const checkboxes = document.querySelectorAll('.inbox .item input[type="checkbox"]')
checkboxes.forEach(el => el.addEventListener('click', handleCheck))
```

邏輯思路

- 如何判斷多選
  - 點擊的`checkbox`是(未勾選 => 已勾選)時且透過`shiftKey`判定是否按下shift
- 如何判斷要選取的範圍？
  - 先定義一個變數存下`lastChecked` 存下最後選取的 dom元素，用`inBetween`變數判斷是否在兩個`checkbox` 之間，若在兩個之間則為`true`, 不再則為`false`，最後只需對 checkboxes for loop 判斷 `inBetween` 為 `true` 時將狀態改為 `checked`即可

```javascript
    let lastChecked

    function handleCheck (e) {
      if (e.shiftKey && this.checked) {

        let inBetween = false
        checkboxes.forEach(checkbox => {
          if (checkbox === this || checkbox === lastChecked) {
            inBetween = !inBetween
          }

          if (inBetween) {
            checkbox.checked = true
          }
        })
      }
      lastChecked = this
    }
```
