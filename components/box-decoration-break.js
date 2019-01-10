function boxDecorationBreak(cfg) {

  return {
    properties: {
      'bdb': 'box-decoration-break'
    },
    values: {
      's': 'slice',
      'c': 'clone'
    }
  }

}

module.exports = boxDecorationBreak;
