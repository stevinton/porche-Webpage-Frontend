"use strict";

const img = document.querySelectorAll(".slide");

const arrow = document.querySelectorAll(".arrow");

let transitionVal = 0;

const right = () => {
    if (transitionVal === -400) {
        transitionVal = 0;
    } else {
        transitionVal += -100;
    }
    img.forEach(e => {
        e.style.transform = `translateX(${transitionVal}vw)`;
        e.style.transition = 'transform 1.5s ease-in-out';
    });
}

const autoTransition = () => {
    if (transitionVal === -400) {
        transitionVal = 0;
    } else {
        transitionVal += -100;
    }
    img.forEach(e => {
        e.style.transform = `translateX(${transitionVal}vw)`;
        e.style.transition = 'transform 1.5s ease-in-out';
    });
    dead();
}

const dead = () => {
    setTimeout(autoTransition, 5000);
}

const left = () => {
    if (transitionVal === 0) {
        transitionVal += -400
    } else {
        transitionVal += 100
    }
    img.forEach(e => {
        e.style.transform = `translateX(${transitionVal}vw)`;
        e.style.transition = 'transform 1ms ease-in-out';
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

// for the car model image

const rightArrow = document.querySelector(".right-arrow");
const leftArrow = document.querySelector(".left-arrow");

const car = document.querySelectorAll(".carSlide");

let transitionCar = 0;

rightArrow.addEventListener('click', function () {
    arrows();
    transitionCar += -32;
    car.forEach(cars => {
        cars.style.transform = `translateX(${transitionCar}vw)`;
        cars.style.transition = "transform 0.3s ease-out";
    });
    console.log(transitionCar);
});

leftArrow.addEventListener('click', function () {
    transitionCar += 32;
    car.forEach(cars => {
        cars.style.transform = `translateX(${transitionCar}vw)`;
        cars.style.transition = "transform 0.3s ease-out";
    });
    arrows();
    console.log(transitionCar);
});

const arrows = () => {
    if (transitionCar === 0) {
        leftArrow.classList.toggle("hide");
    }
    if (transitionCar === -64) {
        rightArrow.classList.toggle("hide");
    }
}

// for the discover content

const discover = document.querySelectorAll(".discover");
console.log(discover);

discover.forEach(item => {
    item.addEventListener("mouseover", function () {
        for (let i = 0; i < item.children.length; i++) {
            if(item.children[i].tagName === "P"){
                item.children[i].style.color = "red";
            }
        }
    });
})

discover.forEach(item => {
    item.addEventListener("mouseout", function () {
        for (let i = 0; i < item.children.length; i++) {
            if(item.children[i].tagName === "P"){
                item.children[i].style.color = "";
            }
        }
    });
})