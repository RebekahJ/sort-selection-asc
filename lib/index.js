/**
*
*	SORT: selection
*
*
*	DESCRIPTION:
*		- Performs a selection sort on an unsorted array of numeric values.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Rebekah Smith.
*
*
*	AUTHOR:
*		Rebekah Smith. rebekahjs17@gmail.com. 2014.
*
*/

'use strict';

// FUNCTIONS //

/**
* FUNCTION: selection( arr )
*	Sorts array elements into ascending order.
*
* @param {Array} arr - numeric array
*
* Modifies input array arr
*/
function selection( arr ) {
	if ( !Array.isArray( arr ) ) {
		throw new TypeError( 'selection()::invalid input argument. Must provide an array.' );
	}
	if ( arr.length < 2 ) {
		throw new Error( 'selection()::invalid input argument. Array must contain at least 2 elements.' );
	}

	return;

} // end FUNCTION selection()

// EXPORTS //

module.exports = selection;

