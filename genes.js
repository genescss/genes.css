const path = require('path');
const fs   = require('fs');
const css  = require('css.of');
             require('css.escape');

const alignContent          = require('./components/align-content.js');
const alignItems            = require('./components/align-items.js');
const alignSelf             = require('./components/align-self.js');
const backfaceVisibility    = require('./components/backface-visibility.js');
const backgroundAttachment  = require('./components/background-attachment.js');
const backgroundColor       = require('./components/background-color.js');
const backgroundImage       = require('./components/background-image.js');
const backgroundPosition    = require('./components/background-position.js');
const backgroundRepeat      = require('./components/background-repeat.js');
const backgroundSize        = require('./components/background-size.js');
const border                = require('./components/border.js');
const borderColor           = require('./components/border-color.js');
const borderRadius          = require('./components/border-radius.js');
const borderStyle           = require('./components/border-style.js');
const borderWidth           = require('./components/border-width.js');
const boxDecorationBreak    = require('./components/box-decoration-break.js');
const boxShadow             = require('./components/box-shadow.js');
const boxSizing             = require('./components/box-sizing.js');
const clear                 = require('./components/clear.js');
const color                 = require('./components/color.js');
const container             = require('./components/container.js');
const cursor                = require('./components/cursor.js');
const display               = require('./components/display.js');
const edges                 = require('./components/edges.js');
const flex                  = require('./components/flex.js');
const flexBasis             = require('./components/flex-basis.js');
const flexDirection         = require('./components/flex-direction.js');
const flexGrowShrink        = require('./components/flex-grow-shrink.js');
const flexWrap              = require('./components/flex-wrap.js');
const fontFamily            = require('./components/font-family.js');
const fontKerning           = require('./components/font-kerning.js');
const fontSize              = require('./components/font-size.js');
const fontStretch           = require('./components/font-stretch.js');
const fontStyle             = require('./components/font-style.js');
const fontSynthesis         = require('./components/font-synthesis.js');
const fontVariant           = require('./components/font-variant.js');
const fontWeight            = require('./components/font-weight.js');
const grid                  = require('./components/grid.js');
const gridAutoFlow          = require('./components/grid-auto-flow.js');
const gridAutoRowsColumns   = require('./components/grid-auto-rows-columns.js');
const gridGap               = require('./components/grid-gap.js');
const gridRowColumn         = require('./components/grid-row-column.js');
const justifyContent        = require('./components/justify-content.js');
const justifyItems          = require('./components/justify-items.js');
const justifySelf           = require('./components/justify-self.js');
const letterSpacing         = require('./components/letter-spacing.js');
const lineHeight            = require('./components/line-height.js');
const listStyle             = require('./components/list-style.js');
const margin                = require('./components/margin.js');
const maxMinWidthHeight     = require('./components/max-min-width-height.js');
const opacity               = require('./components/opacity.js');
const overflow              = require('./components/overflow.js');
const padding               = require('./components/padding.js');
const pointerEvents         = require('./components/pointer-events.js');
const position              = require('./components/position.js');
const resize                = require('./components/resize.js');
const scrollBehavior        = require('./components/scroll-behavior.js');
const textAlign             = require('./components/text-align.js');
const textAlignLast         = require('./components/text-align-last.js');
const textDecoration        = require('./components/text-decoration.js');
const textEmphasis          = require('./components/text-emphasis.js');
const textIndent            = require('./components/text-indent.js');
const textJustify           = require('./components/text-justify.js');
const textOrientation       = require('./components/text-orientation.js');
const textOverflow          = require('./components/text-overflow.js');
const textRendering         = require('./components/text-rendering.js');
const textShadow            = require('./components/text-shadow.js');
const textTransform         = require('./components/text-transform.js');
const textUnderlinePosition = require('./components/text-underline-position.js');
const userSelect            = require('./components/user-select.js');
const verticalAlign         = require('./components/vertical-align.js');
const visibility            = require('./components/visibility.js');
const whiteSpace            = require('./components/white-space.js');
const widthHeight           = require('./components/width-height.js');
const wordBreak             = require('./components/word-break.js');
const wordSpacing           = require('./components/word-spacing.js');
const wordWrap              = require('./components/word-wrap.js');
const writingMode           = require('./components/writing-mode.js');
const zIndex                = require('./components/z-index.js');

function doContent(source, support) {
  var content   = '';
  var extname   = path.extname(source);
  var directory = fs.statSync(source).isDirectory();

  if (!directory) {
    let ext = support.includes(extname);
    content = ext ? fs.readFileSync(source, 'utf8') : '';
  } else {
    fs.readdirSync(source).forEach(data =>
      content += doContent(path.join(source, data), support)
    );
  }

  return content;
};

const unique = (array) => [ ...new Set(array) ];
const truthy = (array) => array.filter(e => e);
const extern = (value) => value.split(/\([^()]+\)/).filter(e => e);
const intern = (value) => value.split(/(?:x|y|l|r|t|b|w|h|c)\(/).filter(e => e).map(e => e = e.slice(0, -1));

const components = [
  // A
  alignContent,
  alignItems,
  alignSelf,
  // B
  backfaceVisibility,
  backgroundAttachment,
  backgroundColor,
  backgroundImage,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,
  border,
  borderColor,
  borderRadius,
  borderStyle,
  borderWidth,
  boxDecorationBreak,
  boxShadow,
  boxSizing,
  // C
  clear,
  color,
  container,
  cursor,
  // D
  display,
  // E
  edges,
  // F
  flex,
  flexBasis,
  flexDirection,
  flexGrowShrink,
  flexWrap,
  fontFamily,
  fontKerning,
  fontSize,
  fontStretch,
  fontStyle,
  fontSynthesis,
  fontVariant,
  fontWeight,
  // G
  grid,
  gridAutoFlow,
  gridAutoRowsColumns,
  gridGap,
  gridRowColumn,
  // J
  justifyContent,
  justifyItems,
  justifySelf,
  // L
  letterSpacing,
  lineHeight,
  listStyle,
  // M
  margin,
  maxMinWidthHeight,
  // O
  opacity,
  overflow,
  // P
  padding,
  pointerEvents,
  position,
  // R
  resize,
  // S
  scrollBehavior,
  // T
  textAlign,
  textAlignLast,
  textDecoration,
  textEmphasis,
  textIndent,
  textJustify,
  textOrientation,
  textOverflow,
  textRendering,
  textShadow,
  textTransform,
  textUnderlinePosition,
  // U
  userSelect,
  // V
  verticalAlign,
  visibility,
  // W
  whiteSpace,
  widthHeight,
  wordBreak,
  wordSpacing,
  wordWrap,
  writingMode,
  // Z
  zIndex
];

module.exports = {

  css: function(source = '', output = 'genes.css', config = {}) {

    if (!source) {
      console.error(
        '[\x1b[36mgenes.css\x1b[0m]',
        '\x1b[31mERROR: No source path found.\x1b[0m\nPlease enter a path for your source file(s).'
      );
      return;
    }

    const cfg = {
      support: [ '.html', '.jsx' ],
      options: {
        breakpoints: {
          'sm': '@media (min-width: 30em)',
          'md': '@media (min-width: 60em)',
          'lg': '@media (min-width: 90em)',
          ...(config.options || {}).breakpoints
        },
        actions    : {
          'a' : 'active',
          'al': 'any-link',
          'c' : 'checked',
          'b' : 'blank',
          'd' : 'default',
          'da': 'disabled',
          'e' : 'empty',
          'ea': 'enabled',
          'fr': 'first',
          'fc': 'first-child',
          'fs': 'fullscreen',
          'f' : 'focus',
          'fw': 'focus-within',
          'h' : 'hover',
          'iv': 'invalid',
          'v' : 'valid',
          'vi': 'visited'
        },
        fonts      : {
          'serif' : 'serif',
          'sans'  : 'sans-serif',
          'mono'  : 'monospace',
          'system': 'system-ui',
          ...(config.options || {}).fonts
        },
        colors     : {
          'white': '#FFFFFF',
          'gray' : '#939393',
          'dark' : '#696969',
          'navy' : '#111222',
          'black': '#000000',
          ...(config.options || {}).colors
        },
        scales     : {
          type  : {
            1: '12px',
            2: '14px',
            3: '16px',
            4: '18px',
            5: '24px',
            6: '30px',
            7: '36px',
            8: '48px',
            9: '60px',
            ...((config.options || {}).scales || {}).type
          },
          indent: {
            1: '1em',
            2: '2em',
            3: '3em',
            4: '4em',
            5: '5em',
            6: '6em',
            7: '7em',
            8: '8em',
            9: '9em',
            ...((config.options || {}).scales || {}).indent
          },
          size  : {
            1: '30px',
            2: '60px',
            3: '90px',
            4: '120px',
            5: '180px',
            6: '240px',
            7: '360px',
            8: '480px',
            9: '600px',
            ...((config.options || {}).scales || {}).size
          },
          space : {
            1:  '3px',
            2:  '5px',
            3:  '9px',
            4: '15px',
            5: '30px',
            6: '45px',
            7: '60px',
            8: '75px',
            9: '90px',
            ...((config.options || {}).scales || {}).space
          },
          border: {
            1: '1px',
            2: '2px',
            3: '3px',
            4: '4px',
            5: '5px',
            6: '6px',
            7: '7px',
            8: '8px',
            9: '9px',
            ...((config.options || {}).scales || {}).border
          }
        },
        containers : {
          box : '1200px',
          wide: '1800px',
          full: '100%'
        }
      }
    };

    const support = cfg.support;
    const options = cfg.options;

    const content = doContent(source, support);

    if (!content) {
      console.warn(
        '[\x1b[36mgenes.css\x1b[0m]',
        '\x1b[33mWARNING: Content is empty.\x1b[0m\nPlease add some content and make sure your source file extensions are ok.'
      );
      return;
    }

    const generalRegExp = RegExp(`\\b(?:class|className)\\b\\s*=\\s*(?:"([^"]+)"|'([^']+)'|([^"'<>\\s]+))`, 'g');
    const grammarRegExp = RegExp(`^(?:(${Object.keys(options.actions).join('|')})\\.)?(?:([a-z]{1,6}):)?([0-9A-Za-z()%.+/-]+)(!)?(?:@(${Object.keys(options.breakpoints).join('|')}))?$`);

    var matches = [], match;

    do {
      match = generalRegExp.exec(content);
      if (match) {
        let found = match[1] || match[2] || match[3];
        found && matches.push(found);
      }
    } while (match)

    matches = matches.reduce((acc, cur) => acc.concat(cur.split(' ')), []);

    const classes = unique(truthy(matches));

    var normal = classes.filter(e => /(?<![^.])f:n(?![^@])/.test(e));
    var bold   = classes.filter(e => /(?<![^.])f:b(?![^@])/.test(e));
    var italic = classes.filter(e => /(?<![^.])f:i(?![^@])/.test(e));

    function fonts(type) {
      if (normal && type) {
        for (let fn of normal) {
          for (let ft of type) {
            let n = classes.indexOf(fn);
            let t = classes.indexOf(ft);
            if (n > t) {
              classes[n] = ft;
              classes[t] = fn;
            }
          }
        }
      } else return;
    }
    function order(a, b) {
      var array;
      switch (true) {
        case normal.includes(a) && normal.includes(b): {
          array = normal;
        }
        break;
        case bold.includes(a) && bold.includes(b): {
          array = bold;
        }
        break;
        case italic.includes(a) && italic.includes(b): {
          array = italic;
        }
        break;
      }
      if (array) return array.indexOf(a) - array.indexOf(b);
      else return;
    }

    fonts(bold);
    fonts(italic);

    classes.sort(order);

    const genes = {};

    var count = 0;

    classes.forEach(name => {

      if (/^debug!?$/.test(name)) {
        genes[`.${CSS.escape(name)}`] = {
          'outline': `1px solid red${name.includes('!') ? '!important' : ''}`
        };
        return;
      }

      var match = name.match(grammarRegExp);
      var act, ppt, val, bpt;

      if (match) {
        act = match[1] || '';
        ppt = match[2] || '';
        val = match[3] || '';
        imp = match[4] || '';
        bpt = match[5] || '';
      } else return;

      const qualifiers = components.filter(component =>
        component(cfg).properties &&
        component(cfg).properties.hasOwnProperty(ppt)
      );

      const def = qualifiers.find(component =>
        component(cfg).values &&
        component(cfg).values.hasOwnProperty(val)
      );
      const any = qualifiers.find(component =>
        component(cfg).pattern &&
        component(cfg).pattern.test(val)
      );

      const defnotany = def && !any;
      const anynotdef = any && !def;
      const component = defnotany && def || anynotdef && any;

      if (component) {

        const action     = options.actions[act];
        const breakpoint = options.breakpoints[bpt];

        let property = component(cfg).properties[ppt];
        let value    = component(cfg).values[val] || val;

        switch (true) {
          case defnotany: {
            switch (property) {
              case 'clear': {
                if (val === 'fix') {
                  property = [ 'content', 'display', property ];
                  value    = [ '""', 'table', 'both' ];
                }
              }
              break;
              case 'font-style': {
                if (val === 'n') {
                  property = [ property, 'font-weight' ];
                }
              }
              break;
              case 'list-style': {
                let lst = [ 'd', 'c', 's', 'dm', 'dmz', 'la', 'lg', 'lt', 'lr', 'ua', 'ug', 'ut', 'ur' ];
                let lsp = [ 'i', 'o' ];
                switch (true) {
                  case lst.includes(val): {
                    property = `${property}-type`;
                  }
                  break;
                  case lsp.includes(val): {
                    property = `${property}-position`;
                  }
                  break;
                }
              }
              break;
              case 'text-decoration': {
                let tdl = [ 'u', 'o', 'lt' ];
                let tdc = Object.keys(cfg.options.colors);
                let tds = [ 's', 'ds', 'dt', 'db', 'w' ];
                switch (true) {
                  case tdl.includes(val): {
                    property = `${property}-line`;
                  }
                  break;
                  case tdc.includes(val): {
                    property = `${property}-color`;
                  }
                  break;
                  case tds.includes(val): {
                    property = `${property}-style`;
                  }
                  break;
                }
              }
              break;
              case 'text-emphasis': {
                let tes = [ 'f', 'o', 'c', 'oc', 'd', 'od', 'dc', 'odc', 't', 'ot', 's', 'os' ];
                let tec = Object.keys(cfg.options.colors);
                let tep = [ 'ol', 'or', 'ul', 'ur' ];
                switch (true) {
                  case tes.includes(val): {
                    property = `${property}-style`;
                  }
                  break;
                  case tec.includes(val): {
                    property = `${property}-color`;
                  }
                  break;
                  case tep.includes(val): {
                    property = `${property}-position`;
                  }
                  break;
                }
              }
              break;
            }
          }
          break;
          case anynotdef: {
            switch (property) {
              case 'background-position': {
                let symbols = extern(val);
                let numbers = intern(val);
                let checker = symbols[0];
                switch (checker) {
                  case 'x': {
                    property = symbols[1] ? property : `${property}-x`;
                    value    = numbers[1] ? `${numbers[0]} ${numbers[1]}` : numbers[0];
                  }
                  break;
                  case 'y': {
                    property = `${property}-y`;
                    value    = numbers[0];
                  }
                  break;
                  case 'l': {
                    property = symbols[1] ? property : `${property}-x`;
                    value    = numbers[1] ? symbols[1] === 't' && `left ${numbers[0]} top ${numbers[1]}` || symbols[1] === 'b' && `left ${numbers[0]} bottom ${numbers[1]}` : `left ${numbers[0]}`;
                  }
                  break;
                  case 'r': {
                    property = symbols[1] ? property : `${property}-x`;
                    value    = numbers[1] ? symbols[1] === 't' && `right ${numbers[0]} top ${numbers[1]}` || symbols[1] === 'b' && `right ${numbers[0]} bottom ${numbers[1]}` : `right ${numbers[0]}`;
                  }
                  break;
                  case 't': {
                    property = `${property}-y`;
                    value    = `top ${numbers[0]}`;
                  }
                  break;
                  case 'b': {
                    property = `${property}-y`;
                    value    = `bottom ${numbers[0]}`;
                  }
                  break;
                }
                property = [ property, 'background-repeat' ];
                value    = [ value, 'no-repeat' ];
              }
              break;
              case 'background-size': {
                let symbols = extern(val);
                let numbers = intern(val);
                let checker = symbols[0];
                switch (checker) {
                  case 'w': {
                    value = numbers[1] ? `${numbers[0]} ${numbers[1]}` : `${numbers[0]} auto`;
                  }
                  break;
                  case 'h': {
                    value = `auto ${numbers[0]}`;
                  }
                  break;
                }
              }
              break;
              case 'box-shadow': {
                let values = val.match(component(cfg).pattern);

                let x      = values[1] || '';
                let y      = values[2] || '';
                let blur   = values[3] || '';
                let spread = values[4] || '';
                let color  = values[5] || '';

                value = [ intern(x)[0], intern(y)[0], blur, spread, color ].filter(e => e).join(' ');
              }
              break;
              case 'font-style': {
                value = `oblique ${val}`;
              }
              break;
              case 'grid-gap': {
                if (val.includes('(')) {
                  let symbols = fn.extern(val);
                  let numbers = fn.intern(val);
                  let checker = symbols[0];
                  switch (checker) {
                    case 'r': {
                      property = symbols[1] ? [ property, 'gap' ] : [ 'grid-row-gap', 'row-gap' ];
                      value    = numbers[1] ? `${numbers[0]} ${numbers[1]}` : numbers[0];
                    }
                    break;
                    case 'c': {
                      property = [ 'grid-column-gap', 'column-gap' ];
                      value    = numbers[0];
                    }
                    break;
                  }
                } else value = val;
              }
              break;
              case 'grid-row':
              case 'grid-column': {
                let space = val.split(/to|go/);
                let start = space[0], end = space[1];
                let toend = val.includes('to');
                let goend = val.includes('go');
                property = start ? end ? property : `${property}-start` : `${property}-end`;
                value    = start ? end ? `${start} / ${toend && end || goend && 'span ' + end}` : start : end;
              }
              break;
              case 'grid-template': {
                let rows = val.split('x')[0];
                let cols = val.split('x')[1];
                value = `repeat(${rows}, 1fr) / repeat(${cols}, 1fr)`;
              }
              break;
              case 'text-shadow': {
                let values = val.match(component(cfg).pattern);

                let x      = values[1] || '';
                let y      = values[2] || '';
                let blur   = values[3] || '';
                let color  = values[4] || '';

                value = [ intern(x)[0], intern(y)[0], blur, color ].filter(e => e).join(' ');
              }
              break;
            }
          }
          break;
        }

        let selector    = `.${CSS.escape(name)}${action ? ':' + action : ''}`;
        let declaration = {};

        if (selector.includes('c\\:fix')) {
          selector = `${selector}:after`;
        }

        switch (typeof property) {
          case 'string': {
            declaration[property] = imp ? value + '!important' : value;
          }
          break;
          case 'object': {
            switch (typeof value) {
              case 'string':
              case 'number': {
                for (let i in property) {
                  declaration[property[i]] = imp ? value + '!important' : value;
                }
              }
              break;
              case 'object': {
                for (let i = 0; i < property.length; i++) {
                  declaration[property[i]] = imp ? value[i] + '!important' : value[i];
                }
              }
              break;
            }
          }
          break;
        }

        if (!breakpoint) {
          genes[selector] = declaration;
        } else {
          genes[breakpoint] = {
            ...genes[breakpoint],
            [selector]: declaration
          };
        }

        count ++;

      }

    });

    for (let key in genes) {
      for (let i in options.breakpoints) {
        if (key === options.breakpoints[i]) {
          let value = genes[key];
          delete genes[key];
          genes[key] = value;
        }
      }
    }

    output = !path.extname(output) ? path.format({ root: output + '/', name: 'genes.css' }) : output;

    path.dirname(output).split('/').reduce((acc, cur) => {
      var dir = path.join(acc, cur);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir);
      return dir;
    }, '');

    // fs.mkdirSync(path.dirname(output), { recursive: true });
    fs.writeFileSync(output, css.of(genes), 'utf8');

    console.info(
      '[\x1b[36mgenes.css\x1b[0m]',
      `Generated ${count} css ${count !== 1 ? 'classes' : 'class'} in \x1b[36m${output}\x1b[0m.`
    );

    return;

  }

};
