function alignContent(cfg) {

  return {
    properties: {
      'ac': 'align-content'
    },
    values: {
      'n' : 'normal',
      'b' : 'baseline',
      'fs': 'flex-start',
      'gs': 'start',
      'fe': 'flex-end',
      'ge': 'end',
      'c' : 'center',
      'sa': 'space-around',
      'sb': 'space-between',
      'se': 'space-evenly',
      's' : 'stretch'
    }
  }

}

module.exports = alignContent;
