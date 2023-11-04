import gsap from "gsap";

// GSAP animation function
export default function createCustomAnimation(
  elements,
  property,
  initialVal,
  finalVal,
  animationEase
) {
  elements.forEach((element) => {
    gsap.set(element, {
      [property]: initialVal,
      opacity: 0.9,
      filter: "blur(10px)",
    });

    gsap.to(element, {
      duration: 1.5,
      [property]: finalVal,
      opacity: 1,
      filter: "none",
      autoAlpha: 1,
      ease: animationEase,
      stagger: {
        grid: "auto",
        from: "random",
        each: 0.25,
      },
      scrollTrigger: {
        trigger: element,
        start: "top bottom-=100",
        end: "bottom top+=100",
        once: true,
      },
    });
  });
}
