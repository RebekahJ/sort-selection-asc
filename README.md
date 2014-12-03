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

For an unsorted array of size n, the time to sort the array using bubble sort is:

| *n*	        | *Time (ms)*   |
| --------------| :------------:|
| 5             |     10.0      |
| 50            |     10.1      |
| 500           |     13.0      |
| 5000          |     57.3      |
| 50000         |     4541      |

## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```

---
## Copyright

Copyright &copy; 2014. Rebekah Smith.

[travis-image]: http://img.shields.io/travis/RebekahJ/sort-selection-asc/master.svg
[travis-url]: https://travis-ci.org/RebekahJ/sort-selection-asc

[coveralls-image]: https://img.shields.io/coveralls/RebekahJ/sort-selection-asc/master.svg
[coveralls-url]: https://coveralls.io/r/RebekahJ/sort-selection-asc?branch=master