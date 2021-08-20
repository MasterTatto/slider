const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const container = document.querySelector('.container')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const mainSlideAll = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0

sidebar.style.top = `-${(mainSlideAll - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})


function changeSlide(dir) {
    if (dir === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === mainSlideAll) {
             activeSlideIndex = 0
        }
    } else if (dir === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
             activeSlideIndex = mainSlideAll - 1
        }
    }
const height = container.clientHeight
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}