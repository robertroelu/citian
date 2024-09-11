import SplitType from 'split-type';
import { gsap } from 'gsap';

export const titleAnimation = () => {
  const titleEl = document.querySelector('[header-animation]') as HTMLElement;
  if (!titleEl) return;
  let typeSplit = new SplitType(titleEl, {
    types: 'lines,words',
    tagName: 'span',
    wordClass: 'header-word',
  });

  const words = document.querySelectorAll('.header-word');

  titleEl.style.opacity = '1';

  let tl = gsap.timeline();
  tl.from(words, {
    y: '20%',
    opacity: 0,
    duration: 1,
    ease: 'ease',
    stagger: 0.1,
    filter: 'blur(10px)',
    delay: 0.3,
  });
};
