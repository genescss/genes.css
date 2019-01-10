function backgroundAttachment(cfg) {

  return {
    properties: {
      'bg': 'background-attachment'
    },
    values: {
      's': 'scroll',
      'f': 'fixed',
      'l': 'local'
    }
  }

}

module.exports = backgroundAttachment;
