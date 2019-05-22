import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Add your Own Cocktail..."],
    typeSpeed: 70,
    loop: true
  });
}

export { loadDynamicBannerText };
