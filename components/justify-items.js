function justifyItems(cfg) {

  return {
    properties: {
      'ji': 'justify-items'
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
      'll': 'legacy left',
      'c' : 'center',
      'lc': 'legacy center',
      'r' : 'right',
      'lr': 'legacy right'
    }
  }

}

module.exports = justifyItems;
