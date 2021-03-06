# inflection Plus

A wrapper around [inflection](https://github.com/dreamerslab/node.inflection) to support collections. Inflection is A port of inflection-js to node.js module.

## Description
[inflection-js](http://code.google.com/p/inflection-js/) is a port of the functionality from Ruby on Rails' Active Support Inflection classes into Javascript. `inflection` is a port of `inflection-js` to node.js npm package. Instead of [extending JavaScript native](http://wonko.com/post/extending-javascript-natives) String object like `inflection-js` does, `inflection` separate the methods to a independent package to avoid unexpected behaviors.

Note: This library uses [Wiktionary](http://en.wiktionary.org) as its reference.



## Installation

Install inflection plus through npm

	npm install inflection-plus



## API

Data can be either string or array.

- inflection.pluralize( data, { override: str } );
- inflection.singularize( data, { override: srt } );
- inflection.camelize( data, { override: bool } );
- inflection.underscore( data, { override: bool } );
- inflection.humanize( data, { override: bool } );
- inflection.capitalize( data );
- inflection.dasherize( data );
- inflection.titleize( data );
- inflection.demodulize( data );
- inflection.tableize( data );
- inflection.classify( data );
- inflection.foreign_key( data, { override: bool } );
- inflection.ordinalize( data );
- inflection.transform( data, {jobs: arr} );





## Usage

> Require the module before using

		var inflection = require('inflection-plus');



## License

(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
