import gsap from "gsap";

export default function createCustomAnimation(
  elements,
  property,
  initialVal,
  finalVal,
  animationEase
) {
  elements = Array.isArray(elements) ? elements : [elements];

  gsap.set(elements, {
    [property]: initialVal,
    opacity: 0.9,
    filter: "blur(10px)",
  });

  gsap.to(elements, {
    duration: 1,
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
      trigger: elements,
      start: "top bottom-=100",
      end: "bottom top+=100",
      once: true,
    },
  });
}
