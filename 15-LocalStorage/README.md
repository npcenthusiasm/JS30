# [LocalStorage](https://developer.mozilla.org/zh-TW/docs/Web/API/Window/localStorage)

LocalStorage 是一種 string 的資料，存放在瀏覽器之中，即使將網頁關閉，資料並不會消失，也就是沒有 expired 時間到資料就消失的限制，除非 user 有手動去清除資料，否則將會永遠存在

不過存放的大小事有限制的，最大能存放 **5 MB** 的 size

與其概念類似的有 [sessionStorage](https://developer.mozilla.org/zh-TW/docs/Web/API/Window/sessionStorage)、[cookies](https://developer.mozilla.org/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/cookies)，但因有些微不同，所以在使用上會根據使用情境，來決定要用什麼方式來存放 data

## 思路

1. addItem by input submit
2. save data to localStorage
3. update html view

### 1. addItem

  ```javascript

  function addItem (e) {
    e.preventDefault()
    const text = document.querySelector('[name=item]').value
    items.push(new Item({ text }))
    save()
    updateView()
    this.reset()
  }
  ```

### 2. updateView

  更新 html

  ```javascript
  function updateView () {
    itemsList.innerHTML = items.map((item, i) => {
      return `
        <li>
          <input type="checkbox" id=item${i} data-index=${i} ${item.done ?  'checked' : ''}>
          <label for=item${i}>${item.text}</label>
        </li>
      `
    }).join('')
  }
  ```

### 3. save

  ```javascript
  function save () {
    localStorage.setItem('items', JSON.stringify(items))
  }
  ```
