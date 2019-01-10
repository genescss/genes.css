function whiteSpace(cfg) {

  return {
    properties: {
      'es': 'white-space'
    },
    values: {
      'n' : 'normal',
      'nw': 'nowrap',
      'p' : 'pre',
      'pl': 'pre-line',
      'pw': 'pre-wrap'
    }
  }

}

module.exports = whiteSpace;
