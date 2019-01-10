function alignItems(cfg) {

  return {
    properties: {
      'ai': 'align-items'
    },
    values: {
      'n' : 'normal',
      's' : 'stretch',
      'b' : 'baseline',
      'fs': 'flex-start',
      'gs': 'start',
      'ss': 'self-start',
      'fe': 'flex-end',
      'ge': 'end',
      'se': 'self-end',
      'c' : 'center'
    }
  }

}

module.exports = alignItems;
