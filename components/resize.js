function resize(cfg) {

  return {
    properties: {
      'r': 'resize'
    },
    values: {
      'h' : 'horizontal',
      'v' : 'vertical',
      'b' : 'both',
      'no': 'none'
    }
  }

}

module.exports = resize;
