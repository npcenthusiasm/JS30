## 簡介

客製化 video player [Demo](https://npcenthusiasm.github.io/JS30/11-Custom-Video-Player/)

### 影片的播放和暫停

使用 `video.paused`，可以取得當前影片的播放狀態是暫停或播放中，再透過 `video.play()` 和 `video.pause()` 可以控制影片開/暫停播放

```javascript
function togglePlay(e) {

  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
}
```

### 影片的快轉、倒退

直接抓 dom 的 data 屬性，`dataset.skip` 可以取的 value

```html
<button data-skip="-10" class="player__button">« 10s</button>
<button data-skip="25" class="player__button">25s »</button>
```

```javascript
function skip() {
 video.currentTime += parseFloat(this.dataset.skip);
}
```

### 影片的音量、播放速度

`video.volume` 影片的音量大小
`video.playbackRate` 影片的音量大小

可以透過改變這兩個參數控制音量、播放速度

透過 name 可以更簡潔完成 range update 的功能

```html
<input type="range" name="volume" class="player__slider" min="0" max="1" step="0.05" value="1">
<input type="range" name="playbackRate" class="player__slider" min="0.5" max="2" step="0.1" value="1">
```

```javascript
const ranges = player.querySelectorAll('.player__slider');

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

function handleRangeUpdate (e) {
  video.volume [this.name] = this.value
}

```

### 影片的進度條

`video.currentTime` 當前影片的時間
`video.duration` 影片的總時間長度

透過這兩個參數可以算出進度條的百分筆

```javascript
function handleProgressUpdate (e) {
  
  const percent = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = `${percent}%`
}

```

### 結語

這次主題滿有趣的，可以自己調整影片的控制選項、樣式，網路上常看到各個影音播放平台，就有看到很多不同的 player layout，之前沒有弄過影音相關的東西，平常也沒有接觸過影音相關或是 video player 客製化的需求，基本上不太會碰到這一塊，這次主題，算是收穫滿多得
