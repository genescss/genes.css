function gridAutoFlow(cfg) {

  return {
    properties: {
      'g': 'grid-auto-flow'
    },
    values: {
      'r' : 'row',
      'c' : 'column',
      'rd': 'row dense',
      'cd': 'column dense'
    }
  }

}

module.exports = gridAutoFlow;
