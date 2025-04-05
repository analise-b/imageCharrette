if (document.body.id == "body1") {
    document.querySelector(".napoleon").addEventListener("click", () => {
        const overlays = document.querySelectorAll(".overlay");
        overlays.forEach((el, i) => {
            setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }, i * 900);
        });
    });
}

if (document.body.id == "body2") {
    document.querySelector(".napoleon").addEventListener("click", () => {
        const opacity = document.querySelectorAll(".opacity");
        opacity.forEach((el, i) => {
            setTimeout(() => {
                el.style.opacity = "1";
            }, i * 900);
        });
    });
}


if (document.body.id == "body3") {
    const mouse = document.querySelectorAll(".mouse");
    document.addEventListener("mousedown", () => {
        mouse.forEach((el, i) => {
            setTimeout(() => {
                el.style.opacity = "1";
            }, i * 900);
        });
    });

    document.addEventListener("mouseup", () => {
        mouse.forEach((el) => {
            el.style.opacity = "0";
        });
    })
}

if (document.body.id == "body4") {

    let timeout;
    const mouseMove = document.querySelectorAll(".mouseMove");
    document.addEventListener("mousemove", () => {

        mouseMove.forEach((el, i) => {
            setTimeout(() => {
                el.style.opacity = "1";
            }, i * 200);
        });

        clearTimeout(timeout);

        timeout = setTimeout(() => {
            mouseMove.forEach((el) => {
                el.style.opacity = "0";
            });
        }, 300);
    });

}

if (document.body.id == "body5") {

    const napoleonDark = document.getElementById("napoleonDark");
    setTimeout(() => {
        napoleonDark.style.opacity = "0.5";
        document.getElementById("wait").innerText = "Almost there!!!"
    }, 10000);

    setTimeout(() => {
        napoleonDark.style.opacity = "1";
        document.getElementById("wait").innerText = "Phew, he made it!!! Thanks for waiting!"
    }, 20000);

}

if (document.body.id == "body6") {

    const noMove = document.getElementById("noMove");
    document.addEventListener("mousemove", () => {
        noMove.style.opacity = "0";
        document.getElementById("sigh").innerText = "No!! Napoleon! Why did you move your mouse?!"
    });

}

if (document.body.id == "body7") {
    const space = document.querySelectorAll(".space");
    document.addEventListener("keydown", () => {
        space.forEach((el, i) => {
            setTimeout(() => {
                el.style.opacity = "1";
            }, i * 1000);
        });
    });
}


if (document.body.id == "body8") {
    const nap = document.querySelector(".nap");

    setTimeout(() => {
        nap.style.backgroundImage = "url('images/napoleon2.png')";
        document.getElementById("who").innerText = "Could it be?! No... it cant be..."
    }, 5000);

    setTimeout(() => {
        nap.style.backgroundImage = "url('images/napoleon.png')";
        document.getElementById("who").innerText = "NAPOLEON!!!"
    }, 10000);
}

if (document.body.id == "body9") {

    const images = [
        "images/napoleonPixel2.png",
        "images/napoleonPixel3.png",
        "images/napoleonPixel4.png",
        "images/napoleonPixel5.png",
        "images/napoleonPixel6.png"
    ];

    let currentIndex = 0;
    const napoleonPixel = document.getElementById("napoleonPixel");

    document.addEventListener("keydown", (event) => {
        if (event.code === "ArrowRight") {
            currentIndex = (currentIndex + 1) % images.length;
            napoleonPixel.style.backgroundImage = `url("${images[currentIndex]}")`;
        }
    });
}

if (document.body.id == "body10") {
    document.addEventListener("click", () => {
        const napoleonRandom = document.querySelector(".napoleonRandom");
        const maxX = window.innerWidth - napoleonRandom.offsetWidth;
        const maxY = window.innerHeight - napoleonRandom.offsetHeight;
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        napoleonRandom.style.left = `${randomX}px`;
        napoleonRandom.style.top = `${randomY}px`;
        napoleonRandom.style.opacity = "1";
    });
}

if (document.body.id == "body11") {
    setTimeout(() => {
        const napoleonSpin = document.querySelector(".napoleonSpin");
        napoleonSpin.style.opacity = "1";
        document.getElementById("spin").innerText = "Napoleon is spinning!"
    }
        , 5000);
}

if (document.body.id == "body12") {
    const napoleonGrey = document.querySelector(".napoleonGrey");

    setTimeout(() => {
        napoleonGrey.style.backgroundImage = "url('images/napoleon.png')";
    }, 5000);
}

if (document.body.id == "body14") {
    const napoleonSmall = document.querySelector(".napoleonSmall");
    let currentSize = 50;
    document.addEventListener("keydown", (event) => {
        if (event.code === "ArrowUp") {
            currentSize += 20;
            napoleonSmall.style.width = currentSize + "px";
            napoleonSmall.style.height = currentSize + "px";
        }
    });
}

if (document.body.id == "body15") {
    const napoleonCheck = document.querySelector(".napoleonCheck");

    setTimeout(() => {
        napoleonCheck.style.backgroundImage = "url('images/checkers2.png')";
    }, 2000);
    setTimeout(() => {
        napoleonCheck.style.backgroundImage = "url('images/checkers3.png')";
    }, 4000);
    setTimeout(() => {
        napoleonCheck.style.backgroundImage = "url('images/checkers4.png')";
    }, 6000);
    setTimeout(() => {
        napoleonCheck.style.backgroundImage = "url('images/napoleon.png')";
    }, 8000);
}

if (document.body.id == "body16") {
    const napoleonSpam1 = document.querySelector(".napoleonSpam1");
    const napoleonSpam2 = document.querySelector(".napoleonSpam2");
    const napoleonSpam3 = document.querySelector(".napoleonSpam3");
    const napoleonSpam4 = document.querySelector(".napoleonSpam4");
    const napoleonSpam5 = document.querySelector(".napoleonSpam5");

    const maxX = window.innerWidth - napoleonSpam1.offsetWidth;
    const maxY = window.innerHeight - napoleonSpam1.offsetHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    const max2X = window.innerWidth - napoleonSpam2.offsetWidth;
    const max2Y = window.innerHeight - napoleonSpam2.offsetHeight;
    const random2X = Math.random() * max2X;
    const random2Y = Math.random() * max2Y;

    const max3X = window.innerWidth - napoleonSpam3.offsetWidth;
    const max3Y = window.innerHeight - napoleonSpam3.offsetHeight;
    const random3X = Math.random() * max3X;
    const random3Y = Math.random() * max3Y;

    const max4X = window.innerWidth - napoleonSpam4.offsetWidth;
    const max4Y = window.innerHeight - napoleonSpam4.offsetHeight;
    const random4X = Math.random() * max4X;
    const random4Y = Math.random() * max4Y;

    const max5X = window.innerWidth - napoleonSpam4.offsetWidth;
    const max5Y = window.innerHeight - napoleonSpam4.offsetHeight;
    const random5X = Math.random() * max5X;
    const random5Y = Math.random() * max5Y;

    setTimeout(() => {
        napoleonSpam1.style.opacity = "1";
        napoleonSpam1.style.left = `${randomX}px`;
        napoleonSpam1.style.top = `${randomY}px`;
    }, 2000);
    setTimeout(() => {
        napoleonSpam2.style.opacity = "1";
        napoleonSpam2.style.left = `${random2X}px`;
        napoleonSpam2.style.top = `${random2Y}px`;
    }, 4000);
    setTimeout(() => {
        napoleonSpam3.style.opacity = "1";
        napoleonSpam3.style.left = `${random3X}px`;
        napoleonSpam3.style.top = `${random3Y}px`;
    }, 6000);
    setTimeout(() => {
        napoleonSpam4.style.opacity = "1";
        napoleonSpam4.style.left = `${random4X}px`;
        napoleonSpam4.style.top = `${random4Y}px`;
    }, 8000);
    setTimeout(() => {
        napoleonSpam5.style.opacity = "1";
        napoleonSpam5.style.left = `${random5X}px`;
        napoleonSpam5.style.top = `${random5Y}px`;
    }, 10000);
}

if (document.body.id == "body17") {
    const napoleonScroll = document.querySelector(".napoleonScroll");
    window.addEventListener("scroll", () => {
        let scrollPosition = window.scrollY;
        if (scrollPosition > 30) {
            document.querySelector(".napoleonScroll").style.opacity = "1";
        }

    });
}

if (document.body.id == "body18") {
    const napoleonBlur = document.querySelector(".napoleonBlur");
    document.addEventListener("click", () => {
        napoleonBlur.style.filter = "blur(0px)";
    });
}

if (document.body.id == "body19") {
    const spinner = document.querySelector(".spinner");
    const napoleonSpinner = document.querySelector(".napoleonSpinner");

    setTimeout(() => {
        spinner.style.opacity = "0";
        napoleonSpinner.style.opacity = "1";
    }, 10000);
}

if (document.body.id == "body20") {
    const napoleonBackground = document.querySelector(".napoleonBackground");
    const body20 = document.getElementById("body20");

    let keysPressed = {};

    document.addEventListener("keydown", (event) => {
        keysPressed[event.key.toLowerCase()] = true;

        if (keysPressed["n"] && keysPressed["p"]) {
            napoleonBackground.style.opacity = "1";
            body20.style.backgroundImage = "url('images/napoleon.png')";
        }
    });

}