function writingMode(cfg) {

  return {
    properties: {
      'wm': 'writing-mode'
    },
    values: {
      'h' : 'horizontal-tb',
      'vl': 'vertical-lr',
      'vr': 'vertical-rl'
    }
  }

}

module.exports = writingMode;
