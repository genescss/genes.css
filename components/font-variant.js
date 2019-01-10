function fontVariant(cfg) {

  return {
    properties: {
      'fv': 'font-variant'
    },
    values: {
      'n'  : 'normal',
      'sc' : 'small-caps',
      'asc': 'all-small-caps',
      'pc' : 'petite-caps',
      'apc': 'all-petite-caps',
      'u'  : 'unicase',
      'tc' : 'titling-caps'
    }
  }

}

module.exports = fontVariant;
