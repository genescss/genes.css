function userSelect(cfg) {

  return {
    properties: {
      'us': 'user-select'
    },
    values: {
      'a' : 'auto',
      't' : 'text',
      'o' : 'all',
      'no': 'none'
    }
  }

}

module.exports = userSelect;
