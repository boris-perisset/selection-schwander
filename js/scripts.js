const viewportWidth = document.getElementById("windowWidth1")
const fontSize1a = document.getElementById("currentSize1a")
const fontSize2a = document.getElementById("currentSize2a")
const fontSize3a = document.getElementById("currentSize3a")
const fontSize4a = document.getElementById("currentSize4a")
const fontSize5a = document.getElementById("currentSize5a")
const fontSize6a = document.getElementById("currentSize6a")
const fontSize7a = document.getElementById("currentSize7a")
const fontSize8a = document.getElementById("currentSize8a")
const fontSize8b = document.getElementById("currentSize8b")
const fontSize9a = document.getElementById("currentSize9a")

function calculate(){
  
let computedFontSize1a = window.getComputedStyle(document.getElementById("size1a")).fontSize
let computedFontSize2a = window.getComputedStyle(document.getElementById("size2a")).fontSize
let computedFontSize3a = window.getComputedStyle(document.getElementById("size3a")).fontSize
let computedFontSize4a = window.getComputedStyle(document.getElementById("size4a")).fontSize
let computedFontSize5a = window.getComputedStyle(document.getElementById("size5a")).fontSize
let computedFontSize6a = window.getComputedStyle(document.getElementById("size6a")).fontSize
let computedFontSize7a = window.getComputedStyle(document.getElementById("size7a")).fontSize
let computedFontSize8a = window.getComputedStyle(document.getElementById("size8a")).fontSize
let computedFontSize8b = window.getComputedStyle(document.getElementById("size8b")).fontSize
let computedFontSize9a = window.getComputedStyle(document.getElementById("size9a")).fontSize

fontSize1a.innerText = `Current Font-Size in Pixel: ${computedFontSize1a}`
fontSize2a.innerText = `Current Font-Size in Pixel: ${computedFontSize2a}`
fontSize3a.innerText = `Current Font-Size in Pixel: ${computedFontSize3a}`
fontSize4a.innerText = `Current Font-Size in Pixel: ${computedFontSize4a}`
fontSize5a.innerText = `Current Font-Size in Pixel: ${computedFontSize5a}`
fontSize6a.innerText = `Current Font-Size in Pixel: ${computedFontSize6a}`
fontSize7a.innerText = `Current Font-Size in Pixel: ${computedFontSize7a}`
fontSize8a.innerText = `Current Font-Size in Pixel: ${computedFontSize8a}`
fontSize8b.innerText = `Current Font-Size in Pixel: ${computedFontSize8b}`
fontSize9a.innerText = `Current Font-Size in Pixel: ${computedFontSize9a}`
viewportWidth.innerText = `Current Viewport Width: ${window.innerWidth}px`
}

window.addEventListener("resize", () => {
  calculate()
});

calculate()