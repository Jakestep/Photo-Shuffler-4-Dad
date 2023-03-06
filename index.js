const images = ['images/Body1.png','images/Body2.png','images/Body3.png','images/Body4.png','images/Body5.png','images/Body6.png','images/Body7.png','images/Body8.png','images/Body9.png','images/Body1.png0','images/Body1.png1','images/Body1.png2','images/Body1.png3','images/Body1.png4','images/Body1.png5','images/Body1.png6','images/Body1.png7','images/Body1.png8','images/Body1.png9','images/Body2.png0'];
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



document.getElementById("shuffle-btn").addEventListener('click', function(){
    let whichPic = Math.floor(Math.random() * images.length)
    console.log(whichPic)
    document.getElementById('stick-pic').style.backgroundImage = `url(${images[whichPic]})`
})

