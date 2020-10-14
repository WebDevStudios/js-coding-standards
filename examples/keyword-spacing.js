/**
 * @since   Unknown
 * @purpose Show an error when you don't use if ( format.
 *
 * @see     https://eslint.org/docs/rules/keyword-spacing
 */

const a = 0;

if( 3 === a ) { // Should be if ( with a space.
	return a;
}
