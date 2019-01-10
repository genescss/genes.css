function scrollBehavior(cfg) {

  return {
    properties: {
      'sb': 'scroll-behavior'
    },
    values: {
      'a': 'auto',
      's': 'smooth'
    }
  }

}

module.exports = scrollBehavior;
