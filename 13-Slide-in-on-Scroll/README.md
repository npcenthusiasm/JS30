# 簡介

scroll to slide img

## 思路

1. 如何知道滑入的時機點？

    算出 scrollY 到圖片高度的一半時的位置

    ```javascript
    const slideInAt = (window.scrollY + window.innerHeight) - img.height / 2
    ```

2. 圖片距離頂部高度多少？

    ```javascript
    const imgBottom = img.offsetTop + img.height
    ```

3. 上面兩個必要的依據都有了，就可以來實作判斷邏輯了

    ```javascript
      // 已經滑超過圖片的一半高了
      const isHalfShown = slideInAt > img.offsetTop

      // 還沒有超滑過圖片底部
      const isNotScrollPast = window.scrollY < imgBottom

      // 透過兩個判斷 確保是否在滑入區域的條件之內
      if (isHalfShown && isNotScrollPast) {
        img.classList.add('active')
      } else {
        img.classList.remove('active')
      }
    ```

4. 優化 performance

    監聽 window scroll 時，會不斷觸發 scroll event，為了不要這麼頻繁的觸發 event，我們可以透過 `debounce` 來幫助我們限制事件觸發的頻率

    ```javascript
    window.addEventListener('scroll', debounce(checkSlide))
    ```

## 程式碼完整部分

```javascript

const slideImgs = document.querySelectorAll('.slide-in')

function checkSlide (e) {

  slideImgs.forEach(img => {

    // 算出 要 slideIn img 時的高度位置 (算出來會是當scrollY 到圖片高度的一半時的位置)
    const slideInAt = (window.scrollY + window.innerHeight) - img.height / 2

    // 圖片底部距離頂部的高
    const imgBottom = img.offsetTop + img.height

    // 已經滑超過圖片的一半高了
    const isHalfShown = slideInAt > img.offsetTop

    // 還沒有超滑過圖片底部
    const isNotScrollPast = window.scrollY < imgBottom

    // 透過兩個判斷 確保是否在滑入區域的條件之內
    if (isHalfShown && isNotScrollPast) {
      img.classList.add('active')
    } else {
      img.classList.remove('active')
    }
  })
}

window.addEventListener('scroll', debounce(checkSlide))

```
