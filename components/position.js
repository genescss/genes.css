function position(cfg) {

  return {
    properties: {
      'p': 'position'
    },
    values: {
      'd': 'static',
      'a': 'absolute',
      'f': 'fixed',
      'r': 'relative',
      's': 'sticky'
    }
  }

}

module.exports = position;
