const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


function getVideo() {

  window.navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      console.log('localMediaStream: ', localMediaStream);
      

      // https://stackoverflow.com/questions/27120757/failed-to-execute-createobjecturl-on-url
      // video.src = window.URL.createObjectURL(localMediaStream)

      video.srcObject = localMediaStream
      video.play()

      paintToCanvas()
    })
    .catch(err => {
      console.log(err)
    })
}

function paintToCanvas () {
  
  return setInterval(() => {
    const width = video.videoWidth
    // console.log('width: ', width);
    const height = video.videoHeight
    // console.log('height: ', height);
    canvas.width = width
    canvas.height = height
    ctx.drawImage(video, 0, 0, width, height)
    // if (width === 0 && height === 0) return
    let pixels = ctx.getImageData(0, 0, width, height)
    // console.log('pixel: ', pixel);
    // pixels = redEffect(pixels)
    // pixels = rgbSplit(pixels)
    // ctx.globalAlpha = 0.1
    ctx.putImageData(pixels, 0, 0)
    // debugger
  }, 20)
}

// document.querySelectorAll('.rgb input').forEach(input => {
//   levels[input.name] = input.value
// })

// for (let i = 0; i < pixels.data.length; i++) {
//   red = pixels.data[i + 0];
//   green = pixels.data[i + 1];
//   blue = pixels.data[i + 2];
//   alpha = pixels.data[i + 3];
  
// }


function takePhoto () {
  snap.currentTime = 0
  snap.play()
  const data = canvas.toDataURL('/image/jpeg')
  const link = document.createElement('a')
  link.href = data
  link.setAttribute('download', 'photo')
  link.textContent = '下載影像'
  strip.insertBefore(link, strip.firstChild)
  const newImg = `<img src=${data}>`
  link.innerHTML = newImg
}

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i + 0] = pixels.data[i + 0] - 100 // red
    pixels.data[i + 1] = pixels.data[i + 1] - 50 // green
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5 // blue
  }
  return pixels
}


function rgbSplit (pixels) {
  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i - 150] = pixels.data[i + 0] // red
    pixels.data[i + 100] = pixels.data[i + 1] // green
    pixels.data[i - 150] = pixels.data[i + 2] // blue
  }
  return pixels
}

getVideo()

window.addEventListener('canplay', paintToCanvas)