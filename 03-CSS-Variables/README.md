## 簡介

### CSS 變數

### CSS 如何設定變數

[MDN CSS/var](https://developer.mozilla.org/en-US/docs/Web/CSS/var())

基本語法

```css
<style>
:root {
  --base: #ffc600;
  --spacing: 3px;
  --blur: 10px;
}
</style>
```

### 套用在 tag 上

```css
img {
  padding: var(--spacing);
  background: var(--base);
  filter: blur(var(--blur));
}
```

### 用JS設定CSS變數

```javascript
document.documentElement.style.setProperty('--base', '#aaeeaa')
document.documentElement.style.setProperty('--spacing', '10px')
document.documentElement.style.setProperty('--blur', '10px')
```
