import gsap from "gsap";
//Animate text
export const textIntro = (elem) => {
  gsap.from(elem, {
    // xPercent: -20,
    opacity: 0,
    // stagger: 0.2,
    duration: 0.5,
    scale: 0.8,
    ease: "easeIn",
  });
};

export const fromRight = (elem) => {
  gsap.from(elem, {
    xPercent: 50,
    opacity: 0,
    duration: 1,
    ease: "back",
  });
};
export const fromLeft = (elem) => {
  gsap.from(elem, {
    xPercent: -50,
    opacity: 0,
    duration: 1,
    delay: 1.2,
  });
};
export const fromTop = (elem) => {
  gsap.from(elem, {
    yPercent: -50,
    opacity: 0,
    duration: 1,
    delay: 1,
  });
};
export const fromTopCoin1 = (elem) => {
  gsap.from(elem, {
    yPercent: -100,
    duration: 1,
    delay: 0.6,
    ease: "back",
    stagger: 0.2,
  });
};
export const fromTopCoinThree = (elem) => {
  gsap.from(elem, {
    yPercent: -190,
    opacity: 0,
    duration: 1,
    delay: 0.8,
    ease: "back",
    stagger: 0.2,
  });
};
export const fromTopCoinEight = (elem) => {
  gsap.from(elem, {
    yPercent: -200,
    opacity: 0,
    duration: 1,
    delay: 1.0,
    ease: "back",
    stagger: 0.2,
  });
};
export const fromTopCoinSixteen = (elem) => {
  gsap.from(elem, {
    yPercent: -250,
    opacity: 0,
    duration: 1,
    delay: 1.2,
    ease: "back",
    stagger: 0.2,
  });
};
export const fromTopCoinFull = (elem) => {
  gsap.from(elem, {
    yPercent: -300,
    opacity: 0,
    duration: 1,
    delay: 1.4,
    ease: "back",
    stagger: 0.2,
  });
};
export const fromBottom = (elem) => {
  gsap.from(elem, {
    yPercent: 50,
    opacity: 0,
    duration: 1,
    delay: 1,
  });
};
export const fromBottom_2 = (elem) => {
  gsap.from(elem, {
    yPercent: 50,
    opacity: 0,
    duration: 1,
    delay: 1.5,
  });
};
export const fromBottom_3 = (elem) => {
  gsap.from(elem, {
    yPercent: 50,
    opacity: 0,
    duration: 1,
    delay: 2,
  });
};
export const scale = (elem) => {
  gsap.from(elem, {
    opacity: 0,
    scale: -1,
    duration: 0.5,
    ease: "ease",
  });
};
export const opacity = (elem) => {
  gsap.from(elem, {
    opacity: 0,
    duration: 0.5,
    delay: 1,
    ease: "linear",
  });
};

export const sliderLength = (elem) => {
  gsap.from(elem, {
    width: 0,
    duration: 1,
    delay: 1,
    ease: "linear",
  });
};
