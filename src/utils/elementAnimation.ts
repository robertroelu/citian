import { gsap } from 'gsap';

export const elementAnimation = () => {
  const el = document.querySelectorAll('[el-animation]') as NodeListOf<HTMLElement>;

  el.forEach((el) => {
    const delayAttr = el.getAttribute('animation-delay');
    const delay = delayAttr ? parseFloat(delayAttr) / 1000 : 0;

    el.style.opacity = '1';

    let tl = gsap.timeline();
    tl.from(el, {
      y: '20%',
      opacity: 0,
      duration: 1,
      ease: 'ease',
      filter: 'blur(10px)',
      delay: delay,
    });
  });
};
