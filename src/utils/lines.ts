export const lines = () => {
  const colorsAttr = document.querySelectorAll('[cube-color]') as NodeListOf<HTMLElement>;
  if (!colorsAttr) return;

  colorsAttr.forEach((el) => {
    const colorVal = el.getAttribute('cube-color');
    if (colorVal) el.style.setProperty('background-color', colorVal, 'important');
  });
};
