function cursor(cfg) {

  return {
    properties: {
      'cur': 'cursor'
    },
    values: {
      'a'    : 'auto',
      'aka'  : 'alias',
      'as'   : 'all-scroll',
      'cl'   : 'cell',
      'cm'   : 'context-menu',
      'cr'   : 'col-resize',
      'c'    : 'copy',
      'ch'   : 'crosshair',
      'd'    : 'default',
      'er'   : 'e-resize',
      'ewr'  : 'ew-resize',
      'g'    : 'grab',
      'gg'   : 'grabbing',
      'h'    : 'help',
      'm'    : 'move',
      'nr'   : 'n-resize',
      'ner'  : 'ne-resize',
      'neswr': 'nesw-resize',
      'nsr'  : 'ns-resize',
      'nwr'  : 'nw-resize',
      'nwser': 'nwse-resize',
      'nd'   : 'no-drop',
      'na'   : 'not-allowed',
      'p'    : 'pointer',
      'pg'   : 'progress',
      'rr'   : 'row-resize',
      'sr'   : 's-resize',
      'ser'  : 'se-resize',
      'swr'  : 'sw-resize',
      't'    : 'text',
      'vt'   : 'vertical-text',
      'w'    : 'wait',
      'wr'   : 'w-resize',
      'zi'   : 'zoom-in',
      'zo'   : 'zoom-out',
      'no'   : 'none'
    }
  }

}

module.exports = cursor;
