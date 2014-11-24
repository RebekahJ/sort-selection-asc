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

var min_id = 0,
	tmp = 0,
	len = arr.length;

	for ( var i = 0; i < len - 1; i++ ) {
		// Reset min_id start
		min_id = i;

		// Find min value in unsorted portion of array
		for ( var j = i+1; j < len; j++ ) {
			if ( arr[j] < arr[min_id] ) {
				min_id = j;
			}
		}
		
		if ( min_id != i ) {
			// Swap current element and element containing min
			tmp = arr[i];
			arr[i] = arr[min_id];
			arr[min_id] = tmp;
		}
	}

	return;

} // end FUNCTION selection()

// EXPORTS //

module.exports = selection;

