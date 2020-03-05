const closeCurtain = () => {
  anime({
    targets: '.curtain-left .cl',
    //element, index, targetsLenght
    width: (el, i, l) => {
      return (50 - (i * 5)) + 'vw';
    },
    delay: anime.stagger(100),
    // mass, stiffness, damping, velocity
    easing: 'spring(1, 70, 12, 0)',
  });

  anime({
    targets: '.curtain-right .cr',
    width: (el, i, l) => {
      return (50 - (i * 5)) + 'vw';
    },
    delay: anime.stagger(100),
    easing: 'spring(1, 80, 12, 0)',
  });
}