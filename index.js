const images = ['images/Body1.png','images/Body2.png','images/Body3.png','images/Body4.png','images/Body5.png','images/Body6.png','images/Body7.png','images/Body8.png','images/Body9.png','images/Body1.png','images/Body11.png','images/Body12.png','images/Body13.png','images/Body14.png','images/Body15.png','images/Body16.png','images/Body17.png','images/Body18.png','images/Body19.png'];
const renderEl = document.getElementById('stick-pic');

// document.getElementById('stick-pic').style.backgroundImage = `url(${images[0]})`

function displayImage(src, width, height) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    renderEl.appendChild(img);
}

// displayImage(images[2], 40, 40)

function shuffle() {
    let whichPic = Math.floor(Math.random() * images.length)
    console.log(whichPic)
    document.getElementById('stick-pic').style.backgroundImage = `url(${images[whichPic]})`
}

document.getElementById("shuffle-btn").addEventListener('click', function(){
    shuffle()
})
window.refreshIntervalId;
var shuffling = false;
document.getElementById('timer-btn').addEventListener('click', function() {
    if (shuffling) {
        clearInterval(window.refreshIntervalId)
        shuffling = false
    }
    let time = document.getElementById('timer-input-el').value * 1000
    window.refreshIntervalId = setInterval(function() {shuffle()}, time)
    shuffling = true;
})

document.getElementById('stop-timer-btn').addEventListener('click', function() {
    clearInterval(window.refreshIntervalId)
    shuffling = false;
})
