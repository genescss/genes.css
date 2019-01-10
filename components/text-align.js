function textAlign(cfg) {

  return {
    properties: {
      'ta': 'text-align'
    },
    values: {
      'l' : 'left',
      'c' : 'center',
      'r' : 'right',
      'j' : 'justify',
      'ja': 'justify-all',
      's' : 'start',
      'e' : 'end',
      'mp': 'match-parent'
    }
  }

}

module.exports = textAlign;
