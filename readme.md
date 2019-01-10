![genes.css](genes.png "genes.css")

*A javascript tool for generating functional css.*

[genescss.github.io](https://genescss.github.io)

### *Installation*

`npm install genes.css --save-dev`

### *Usage*

```javascript
const genes = require('genes.css');

genes.css(source, output, config);
```

### *Documentation*
*Full documentation coming soon.*

Meanwhile, here are some basic examples...

```html
<section class="d:b">
  Section displayed as a block.
</section>
```
```css
section {
  display: block;
}
```
```html
<section class="a.d:b">
  Section displayed as a block while active.
</section>
```
```css
section:active {
  display: block;
}
```
```html
<section class="d:b@sm">
  Section displayed as a block from small screens up.
</section>
```
```css
@media (min-width: 30em) {
  section {
    display: block;
  }
}
```

### *License*
*MIT &copy; 2019 Paula Griguță <paula.la@live.com>*
