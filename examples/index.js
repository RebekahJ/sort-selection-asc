'use strict';

var sel = require( './../lib' );

var data = new Array( 5 );

for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.round( Math.random()*100 );
}
//var data = [ 5, 7, 3 ]

console.log("Pre-sort:")

for ( var i = 0; i < data.length; i++ ) {
	console.log( data[i] );
}

sel( data );

console.log("Post-sort:")

for ( var i = 0; i < data.length; i++ ) {
	console.log( data[i] );
}

