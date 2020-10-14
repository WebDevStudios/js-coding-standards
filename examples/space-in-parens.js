/**
 * @see     https://eslint.org/docs/rules/space-in-parens
 * @since   Unknown
 * @purpose Spaces should be used properly in parens, e.g. func(a,b) should show
 *          an error while func( a, b ) should not.
 */

/**
 * Invalid
 *
 * Should show errors.
 */

/**
 * Named
 *
 * This should error as spaces before ( are not allowed.
 *
 * @param {string} a Value
 *
 * @author Aubrey Portwood <aubrey@webdevstudios.com>
 * @since  Friday, 4/10/2020
 * @return {boolean} Description.
 */
function named( a) { // This should show an error, and should be named( a ), see below.
	a = true;
	return a;
}

// The anonymous function below should also be flagged.
named( function( a, b) { // This should show an error and should be function( a, b ) --- see below.
	return a + b;
} );

const arrow = ( a, b) => { // This should show an error and should be = ( a, b ) --- see below.
	return a + b;
};

arrow();

/**
 * Valid
 *
 * Should NOT show errors.
 */

/**
 * Named
 *
 * This should error as spaces before ( are not allowed.
 *
 * @param {string} a Value
 *
 * @author Aubrey Portwood <aubrey@webdevstudios.com>
 * @since  Friday, 4/10/2020
 * @return {boolean} Description.
 */
function named2( a ) { // This should show an error, and should be named( a ).
	a = true;
	return a;
}

// The anonymous function below should also be flagged.
named2( function( a, b ) {
	return a + b;
} );

const arrow2 = ( a, b ) => {
	return a + b;
};

arrow2();
