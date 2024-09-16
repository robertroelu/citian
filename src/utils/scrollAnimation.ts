import SplitType from 'split-type';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const scrollAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const scrollEl = document.querySelectorAll('[scroll-animation]') as NodeListOf<HTMLElement>;
  if (!scrollEl) return;
  scrollEl.forEach((el) => {
    let typeSplit = new SplitType(el, {
      types: 'lines,words,chars',
      tagName: 'span',
    });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 70%',
        end: 'bottom 65%',
        scrub: true,
      },
    });
    tl.from(el.querySelectorAll('.word'), {
      opacity: 0.3,
      duration: 2.5,
      ease: 'power4.out',
      stagger: { each: 0.3 },
    });
  });
};
