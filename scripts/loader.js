const tl = anime.timeline({

})

const openCurtain = () => {
  const tlL = anime.timeline({
    easing: 'easeInSine',
  })

  const tlR = anime.timeline({
    easing: 'easeInSine',
  })

  tlL
  .add({
    targets: '.curtain-left #l-open10',
    width: 0,
  })
  .add({
    targets: '.curtain-left #l-open9',
    width: 0,
  }, 50)
  .add({
    targets: '.curtain-left #l-open8',
    width: 0,
  }, 75)
  .add({
    targets: '.curtain-left #l-open7',
    width: 0,
  }, 130)
  .add({
    targets: '.curtain-left #l-open6',
    width: 0,
  }, 180)
  .add({
    targets: '.curtain-left #l-open5',
    width: 0,
  }, 240)
  .add({
    targets: '.curtain-left #l-open4',
    width: 0,
  }, 300)
  .add({
    targets: '.curtain-left #l-open3',
    width: 0,
  }, 350)
  .add({
    targets: '.curtain-left #l-open2',
    width: 0,
  }, 410)
  .add({
    targets: '.curtain-left #l-open1',
    width: 0,
  }, 470)
    
  tlR
  .add({
    targets: '.curtain-right #r-open10',
    width: 0,
  })
  .add({
    targets: '.curtain-right #r-open9',
    width: 0,
  }, 50)
  .add({
    targets: '.curtain-right #r-open8',
    width: 0,
  }, 75)
  .add({
    targets: '.curtain-right #r-open7',
    width: 0,
  }, 130)
  .add({
    targets: '.curtain-right #r-open6',
    width: 0,
  }, 180)
  .add({
    targets: '.curtain-right #r-open5',
    width: 0,
  }, 240)
  .add({
    targets: '.curtain-right #r-open4',
    width: 0,
  }, 300)
  .add({
    targets: '.curtain-right #r-open3',
    width: 0,
  }, 350)
  .add({
    targets: '.curtain-right #r-open2',
    width: 0,
  }, 410)
  .add({
    targets: '.curtain-right #r-open1',
    width: 0,
  }, 470)
}

tl
.add({
  targets: '.load-progress',
  innerHTML: [0, 100 + '%'],
  easing: 'linear',
  duration: 2500,
  round: 1,
})
.add({
  target: '.loader',
  begin: () => {
    document.querySelector('.loader').style.display = 'none';
  },
  complete: () => {
    openCurtain()
  },
}, '+=800')