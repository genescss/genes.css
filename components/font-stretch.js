function fontStretch(cfg) {

  return {
    properties: {
      'fs': 'font-stretch'
    },
    values: {
      'n' : 'normal',
      'sc': 'semi-condensed',
      'c' : 'condensed',
      'ec': 'extra-condensed',
      'uc': 'ultra-condensed',
      'se': 'semi-expanded',
      'e' : 'expanded',
      'ee': 'extra-expanded',
      'ue': 'ultra-expanded'
    },
    pattern: /^[0-9.]+%$/
  }

}

module.exports = fontStretch;
