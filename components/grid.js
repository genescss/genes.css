function grid(cfg) {

  return {
    properties: {
      'g': 'grid'
    },
    values: {
      'a' : 'auto / auto',
      'no': 'none'
    },
    pattern: /^(?!0)[0-9]+x(?!0)[0-9]+$/
  }

}

module.exports = grid;
