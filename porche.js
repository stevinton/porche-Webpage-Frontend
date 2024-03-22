"use strict";

const img = document.querySelectorAll(".slide");

const arrow = document.querySelectorAll(".arrow");

let transitionVal = 0;

const right = () => {
    if (transitionVal === -5472) {
        transitionVal = 0;
    } else {
        transitionVal += -1368;
    }
    img.forEach(e => {
        e.style.transform = `translateX(${transitionVal}px)`;
        e.style.transition = 'transform 1.5s ease-in-out';
    });
}

const autoTransition = () => {
    if (transitionVal === -5472) {
        transitionVal = 0;
    } else {
        transitionVal += -1368;
    }
    img.forEach(e => {
        e.style.transform = `translateX(${transitionVal}px)`;
        e.style.transition = 'transform 1.5s ease-in-out';
    });
    dead();
}

const dead = () => {
    setTimeout(autoTransition, 5000);
}

const left = () => {
    if (transitionVal === 0) {
        transitionVal += -5472
    } else {
        transitionVal += 1368
    }
    img.forEach(e => {
        e.style.transform = `translateX(${transitionVal}px)`;
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

// const modelBuildBtn = document.querySelector(".btn");

// modelBuildBtn.addEventListener('click', function () {
//     window.location.href = "https://www.porsche.com/middle-east/_india_/modelstart/all/?modelrange=718";
//     return true;
// });