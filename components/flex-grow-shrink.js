function flexGrowShrink(cfg) {

  return {
    properties: {
      'fxg': 'flex-grow',
      'fxs': 'flex-shrink'
    },
    pattern: /^[0-9.]+$/
  }

}

module.exports = flexGrowShrink;
