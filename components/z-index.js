function zIndex(cfg) {

  return {
    properties: {
      'zi': 'z-index'
    },
    values: {
       'a'  : 'auto',
       '0'  : '0',
       'max': '999999',
       'min': '-999999'
    },
    pattern: /^-?(?!0)[0-9]+$/
  }

}

module.exports = zIndex;
