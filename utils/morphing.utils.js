const initMorphingButton = () => {
  const docElem = window.document.documentElement;
  let didScroll;
  let scrollPosition;

  // trick to prevent scrolling when opening/closing button
  const noScrollFn = () => {
    window.scrollTo(scrollPosition ? scrollPosition.x : 0, scrollPosition ? scrollPosition.y : 0);
  };

  const scrollPage = () => {
    scrollPosition = {
      x: window.pageXOffset || docElem.scrollLeft,
      y: window.pageYOffset || docElem.scrollTop,
    };
    didScroll = false;
  };

  const scrollHandler = () => {
    if (!didScroll) {
      didScroll = true;
      setTimeout(() => { scrollPage(); }, 60);
    }
  };

  const scrollFn = () => {
    window.addEventListener('scroll', scrollHandler);
  };

  const canScroll = () => {
    window.removeEventListener('scroll', noScrollFn);
    scrollFn();
  };

  const noScroll = () => {
    window.removeEventListener('scroll', scrollHandler);
    window.addEventListener('scroll', noScrollFn);
  };

  scrollFn();

  document.querySelectorAll('.morph-button').forEach((bttn) => {
    // eslint-disable-next-line no-new
    new window.UIMorphingButton(bttn, {
      closeEl: '.icon-close',
      onBeforeOpen() {
        // don't allow to scroll
        noScroll();
      },
      onAfterOpen() {
        // can scroll again
        canScroll();
      },
      onBeforeClose() {
        // don't allow to scroll
        noScroll();
      },
      onAfterClose() {
        // can scroll again
        canScroll();
      },
    });
  });

  return { scrollHandler, noScrollFn };
};

export {
  initMorphingButton,
};
