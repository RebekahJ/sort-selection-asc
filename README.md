sort-selection-asc
==================
[![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url]

## sel( arr )

Sorts an unsorted numeric array into ascending order using a [selection](http://en.wikipedia.org/wiki/Selection_sort) sort. 

## Examples

```javascript
// Direct to lib directory
var sel = require( './../lib' );

// Create some data
var data = new Array( 5 );
for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.round( Math.random()*100 );
}
//var data = [ 5, 7, 3 ]

// Print data for comparison
console.log("Pre-sort:")
for ( var i = 0; i < data.length; i++ ) {
	console.log( data[i] );
}

// Sort data
sel( data );

// Print sorted array
console.log("Post-sort:")
for ( var i = 0; i < data.length; i++ ) {
	console.log( data[i] );
}
```

## Notes

### Performance

## Tests

---
## Copyright

Copyright &copy; 2014. Rebekah Smith.

[travis-image]: http://img.shields.io/travis/RebekahJ/sort-selection-asc/master.svg
[travis-url]: https://travis-ci.org/RebekahJ/sort-selection-asc

[coveralls-image]: https://img.shields.io/coveralls/RebekahJ/sort-selection-asc/master.svg
[coveralls-url]: https://coveralls.io/r/RebekahJ/sort-selection-asc?branch=master