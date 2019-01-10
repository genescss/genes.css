function overflow(cfg) {

  return {
    properties: {
      'o' : 'overflow',
      'ox': 'overflow-x',
      'oy': 'overflow-y'
    },
    values: {
      'a': 'auto',
      'v': 'visible',
      's': 'scroll',
      'h': 'hidden'
    }
  }

}

module.exports = overflow;
