function textOrientation(cfg) {

  return {
    properties: {
      'to': 'text-orientation'
    },
    values: {
      'm'  : 'mixed',
      'u'  : 'upright',
      's'  : 'sideways',
      'sr' : 'sideways-right',
      'ugo': 'use-glyph-orientation'
    }
  }

}

module.exports = textOrientation;
