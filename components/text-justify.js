function textJustify(cfg) {

  return {
    properties: {
      'tj': 'text-justify'
    },
    values: {
      'a' : 'auto',
      'ic': 'inter-character',
      'iw': 'inter-word',
      'no': 'none'
    }
  }

}

module.exports = textJustify;
