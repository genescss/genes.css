function fontWeight(cfg) {

  return {
    properties: {
      'f': 'font-weight'
    },
    values: {
      'b': 'bold'
    },
    pattern: /^[1-9]00$/
  }

}

module.exports = fontWeight;
