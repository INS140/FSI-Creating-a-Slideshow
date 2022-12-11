const images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg'
]
let currentImage = 0
let image = document.querySelector('.image')
let previous = document.querySelector('.previous')
let next = document.querySelector('.next')
let btn0 = document.querySelector('#button-0')
let btn1 = document.querySelector('#button-1')
let btn2 = document.querySelector('#button-2')
let btn3 = document.querySelector('#button-3')
let btn4 = document.querySelector('#button-4')
let btn5 = document.querySelector('#button-5')
let btnArray = [btn0, btn1, btn2, btn3, btn4, btn5]
image.src = images[currentImage]
btn0.innerHTML = '●'

function selectNewBubble() {
    for (let i = 0; i < btnArray.length; i++) {
        btnArray[i].innerHTML = '○'
    }
    image.src = images[currentImage]
    btnArray[currentImage].innerHTML = '●'
}

previous.onclick = function() {
    if (currentImage > 0) {
        currentImage--
    } else {
        currentImage = 5
    }
    selectNewBubble()
}

next.onclick = function() {
    nextImage()
}

btn0.onclick = function() {
    currentImage = 0
    selectNewBubble()
}

btn1.onclick = function() {
    currentImage = 1
    selectNewBubble()
}

btn2.onclick = function() {
    currentImage = 2
    selectNewBubble()
}

btn3.onclick = function() {
    currentImage = 3
    selectNewBubble()
}

btn4.onclick = function() {
    currentImage = 4
    selectNewBubble()
}

btn5.onclick = function() {
    currentImage = 5
    selectNewBubble()
}

function nextImage() {
    if (currentImage < 5) {
        currentImage++
    } else {
        currentImage = 0
    }
    selectNewBubble()
}

window.setInterval(nextImage, 2500)

let slideshow = document.querySelector('.slideshow')
let controls = document.querySelector('.controls')
previous.style.display = next.style.display = controls.style.display = 'none'

slideshow.addEventListener('mouseover', function(){
    previous.style.display = next.style.display = controls.style.display = 'inline-block'
})
slideshow.addEventListener('mouseout', function(){
    previous.style.display = next.style.display = controls.style.display = 'none'
})