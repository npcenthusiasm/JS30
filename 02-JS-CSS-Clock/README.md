## 簡介

### JS、CSS 時鐘

### CSS 如何定位指針的位置

`transform-origin` 屬性可以設定元素變化的原點
<https://developer.mozilla.org/zh-TW/docs/Web/CSS/transform-origin>

```
transform-origin: 100%;
```

將指針定位在圓心

利用`transform: rotate();`旋轉，再加上`transition: all 0.05s;` 和 `transition-timing-function: cubic-bezier(0.07, 1.11, 0.58, 1);`讓時針有轉動的效果

### 計算時鐘的刻度

```javascript
function setDate () {
    const date = new Date()
    const seconds = date.getSeconds()
    const secondsDeg = 90 + (seconds / 60) * 360

    const mins = date.getMinutes()
    const minsDeg = 90 + (mins / 60) * 360

    const hours = date.getHours()
    const hoursDeg = 90 + (hours / 12) * 360

    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    minHand.style.transform = `rotate(${minsDeg}deg)`;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
  }
```

仔細看的話會發現每個指針都有+90，為什麼要+90？

因為我用 css 將三個指針的從圓心點的位置指向9點鐘方向，為了指針歸0，也就是指向12點鐘方向，所以將每個指針的各+90度，這樣時鐘的位置才是正確的。

### 讓時鐘每秒轉動

```
setInterval(setDate, 1000);
```
