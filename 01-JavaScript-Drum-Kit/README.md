## 簡介

### 實作敲擊鍵盤播放鼓聲

audio.currentTime : audio 當前的時間

audio.play() : 播放 audio

當 keydown event 觸發，利用設定 audio currentTime = 0，在呼叫 play() 達到立即播放音效的功能

```javascript
const audio = document.querySelector('your element')

audio.currentTime = 0;
audio.play();
```

### keydown 觸發如何添加效果

添加 CSS class

```javascript
const key = document.querySelector('your element')
key.classList.add('playing')
```

### 效果結束如何移除

利用 CSS transitionend 結束時 callback function 移除

```javascript
const keys = document.querySelectorAll(`.key`)

keys.forEach(key => key.addEventListener('transitionend', removeTransition))

function removeTransition () {
  this.classList.remove('playing')
}
