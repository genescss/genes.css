function listStyle(cfg) {

  return {
    properties: {
      'ls': 'list-style'
    },
    values: {
      'd'  : 'disc',
      'c'  : 'circle',
      's'  : 'square',
      'dm' : 'decimal',
      'dmz': 'decimal-leading-zero',
      'la' : 'lower-alpha',
      'lg' : 'lower-greek',
      'lt' : 'lower-latin',
      'lr' : 'lower-roman',
      'ua' : 'upper-alpha',
      'ug' : 'upper-greek',
      'ut' : 'upper-latin',
      'ur' : 'upper-roman',
      'i'  : 'inside',
      'o'  : 'outside',
      'no' : 'none'
    }
  }

}

module.exports = listStyle;
