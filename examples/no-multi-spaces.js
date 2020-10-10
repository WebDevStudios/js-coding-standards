/**
 * @since   Unknown
 * @see     https://eslint.org/docs/rules/no-multi-spaces
 * @purpose Errors show when using in-consistent spacing in conditionals, etc.
 */

if ( 1 ===  0 ) { // Notice the double spaces before 0, an error SHOULD SHOW.
	return true;
}
