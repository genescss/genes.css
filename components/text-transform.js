function textTransform(cfg) {

  return {
    properties: {
      'tt': 'text-transform'
    },
    values: {
      'c' : 'capitalize',
      'u' : 'uppercase',
      'l' : 'lowercase',
      'fw': 'full-width',
      'no': 'none'
    }
  }

}

module.exports = textTransform;
