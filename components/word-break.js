function wordBreak(cfg) {

  return {
    properties: {
      'wb': 'word-break'
    },
    values: {
      'n' : 'normal',
      'ba': 'break-all',
      'ka': 'keep-all',
      'bw': 'break-word'
    }
  }

}

module.exports = wordBreak;
