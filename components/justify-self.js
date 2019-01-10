function justifySelf(cfg) {

  return {
    properties: {
      'js': 'justify-self'
    },
    values: {
      'a' : 'auto',
      'n' : 'normal',
      's' : 'stretch',
      'b' : 'baseline',
      'fs': 'flex-start',
      'gs': 'start',
      'ss': 'self-start',
      'fe': 'flex-end',
      'ge': 'end',
      'se': 'self-end',
      'l' : 'left',
      'c' : 'center',
      'r' : 'right'
    }
  }

}

module.exports = justifySelf;
