function border(cfg) {

  return {
    properties: {
      'b' : 'border',
      'bx': [ 'border-left', 'border-right' ],
      'by': [ 'border-top', 'border-bottom' ],
      'bt': 'border-top',
      'br': 'border-right',
      'bb': 'border-bottom',
      'bl': 'border-left'
    },
    values: {
      'ok': '1px solid',
      'no': '0 none'
    }
  }

}

module.exports = border;
