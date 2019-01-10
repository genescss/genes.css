function display(cfg) {

  return {
    properties: {
      'd': 'display'
    },
    values: {
      'i' : 'inline',
      'c' : 'contents',
      'b' : 'block',
      'ib': 'inline-block',
      'f' : 'flex',
      'if': 'inline-flex',
      'g' : 'grid',
      'ig': 'inline-grid',
      't' : 'table',
      'it': 'inline-table',
      'tc': 'table-cell',
      'li': 'list-item',
      'no': 'none'
    }
  }

}

module.exports = display;
