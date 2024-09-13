//Finsweet attributes
import { linkblockedit } from '@finsweet/attributes-linkblockedit';
// import { } from '@finsweet/attributes-cmssort/'
import { cmsfilter } from '@finsweet/attributes-cmsfilter';
import { scrolldisable } from '@finsweet/attributes-scrolldisable';
// import { } from '@finsweet/attributes-cmsload/'
// import { } from '@finsweet/attributes-socialshare/'

//Modal
import { modal } from '$modal/modal';

//Nest
import { nestedElement } from './nest/nestElement';

//Utils
import { swipers } from '$utils/swipers';
import { lines } from '$utils/lines';
import { titleAnimation } from '$utils/titleAnimation';
import { elementAnimation } from '$utils/elementAnimation';
import { scrollAnimation } from '$utils/scrollAnimation';
import { socialShare } from '$utils/socialShare';
import { consoleClear } from '$utils/consoleClear';
// import { actualYear } from '$utils/actualYear';
// import { typer } from '$utils/typer';

window.Webflow ||= [];
window.Webflow.push(() => {
  consoleClear();
  // actualYear();
  // nestedElement();
  linkblockedit();
  cmsfilter();
  scrollAnimation();
  // modal();
  titleAnimation();
  elementAnimation();
  scrollAnimation();
  swipers();
  socialShare();
  // typer();
  lines();
});
