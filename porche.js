"use strict";

const img = document.querySelectorAll(".slide");

const arrow = document.querySelectorAll(".arrow");

let transitionVal = 0;

const right = () => {
<<<<<<< HEAD
    if (transitionVal === -5472) {
        transitionVal = 0;
    } else {
        transitionVal += -1368;
    }
    img.forEach(e => {
        e.style.transform = `translateX(${transitionVal}px)`;
=======
    if (transitionVal === -400) {
        transitionVal = 0;
    } else {
        transitionVal += -100;
    }
    img.forEach(e => {
        e.style.transform = `translateX(${transitionVal}vw)`;
>>>>>>> 26a446b (sec commit)
        e.style.transition = 'transform 1.5s ease-in-out';
    });
}

const autoTransition = () => {
<<<<<<< HEAD
    if (transitionVal === -5472) {
        transitionVal = 0;
    } else {
        transitionVal += -1368;
    }
    img.forEach(e => {
        e.style.transform = `translateX(${transitionVal}px)`;
=======
    if (transitionVal === -400) {
        transitionVal = 0;
    } else {
        transitionVal += -100;
    }
    img.forEach(e => {
        e.style.transform = `translateX(${transitionVal}vw)`;
>>>>>>> 26a446b (sec commit)
        e.style.transition = 'transform 1.5s ease-in-out';
    });
    dead();
}

const dead = () => {
    setTimeout(autoTransition, 5000);
}

const left = () => {
    if (transitionVal === 0) {
<<<<<<< HEAD
        transitionVal += -5472
    } else {
        transitionVal += 1368
    }
    img.forEach(e => {
        e.style.transform = `translateX(${transitionVal}px)`;
=======
        transitionVal += -400
    } else {
        transitionVal += 100
    }
    img.forEach(e => {
        e.style.transform = `translateX(${transitionVal}vw)`;
>>>>>>> 26a446b (sec commit)
        e.style.transition = 'transform 1.5s ease-in-out';
    });
}

dead();

img.forEach(imgs => {
    imgs.addEventListener('mouseover', function () {
        arrow.forEach(e => {
            e.style.backgroundColor = "white";
        })
    });
})

img.forEach(imgs => {
    imgs.addEventListener('mouseout', function () {
        arrow.forEach(e => {
            e.style.backgroundColor = "";
        })
    });
});

<<<<<<< HEAD
// const modelBuildBtn = document.querySelector(".btn");

// modelBuildBtn.addEventListener('click', function () {
//     window.location.href = "https://www.porsche.com/middle-east/_india_/modelstart/all/?modelrange=718";
//     return true;
// });
=======
const moedelImage = document.querySelectorAll(".btn");

moedelImage.forEach(imgm =>{
    imgm.addEventListener('mouseover', function(){
        
    })
})
>>>>>>> 26a446b (sec commit)
