function alignSelf(cfg) {

  return {
    properties: {
      'as': 'align-self'
    },
    values: {
      'a' : 'auto',
      'n' : 'normal',
      'b' : 'baseline',
      's' : 'stretch',
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

module.exports = alignSelf;
