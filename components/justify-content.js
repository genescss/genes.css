function justifyContent(cfg) {

  return {
    properties: {
      'jc': 'justify-content'
    },
    values: {
      'n' : 'normal',
      'fs': 'flex-start',
      'gs': 'start',
      'fe': 'flex-end',
      'ge': 'end',
      'l' : 'left',
      'c' : 'center',
      'r' : 'right',
      'sa': 'space-around',
      'sb': 'space-between',
      'se': 'space-evenly',
      's' : 'stretch'
    }
  }

}

module.exports = justifyContent;
