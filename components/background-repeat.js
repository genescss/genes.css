function backgroundRepeat(cfg) {

  return {
    properties: {
      'bg': 'background-repeat'
    },
    values: {
      'r'    : 'repeat',
      'rx'   : 'repeat-x',
      'ry'   : 'repeat-y',
      'nr'   : 'no-repeat',
      'space': 'space',
      'round': 'round'
    }
  }

}

module.exports = backgroundRepeat;
