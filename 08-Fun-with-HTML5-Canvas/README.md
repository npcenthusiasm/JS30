## 簡介

### [Canvas](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API) 彩虹畫筆

先建立一張畫布

```javascript
const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d')
```

設定 `canvas` 初始參數

```javascript
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.strokeStyle = '#BADA55' // 線條顏色
  ctx.lineJoin = 'round' // 線條連接方式
  ctx.lineCap = 'round' // 線條形狀
  ctx.lineWidth = 100 // 線條寬度
```

### 監聽滑鼠事件

利用 `mousedown` 、`mousemove`、`mouseup`、`mouseout`

- `mousedown` 控制下筆事件
- `mousemove` 真正 draw 的事件
- `mouseup`、`mouseout` 控制停筆事件

```javascript
 canvas.addEventListener('mousedown', (e) => {
    isDrawing = true

    lastX = e.offsetX
    lastY = e.offsetY
  })
  canvas.addEventListener('mousemove', draw)
  canvas.addEventListener('mouseup', () => isDrawing = false)
  canvas.addEventListener('mouseout', () => isDrawing = false)
```

### 如何畫出現條

- `ctx.beginPath()` 新建一條路徑
- `ctx.moveTo(x, y)` 將筆觸移動到指定的坐標x以及y上
- `ctx.lineTo(x, y)` 繪製一條從當前位置到指定x以及y位置的直線
- `ctx.stroke()` 畫上去

```javascript
  function draw (e) {
      if (!isDrawing) return

      ctx.strokeStyle = `hsl(${hue}, 100%, 50%)` // 改變顏色
      ctx.beginPath()
      ctx.moveTo(lastX, lastY)
      ctx.lineTo(e.offsetX, e.offsetY)
      ctx.stroke();

      lastX = e.offsetX
      lastY = e.offsetY
    }
```
