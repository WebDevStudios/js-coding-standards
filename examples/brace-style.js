/**
 * @since   Unknown
 * @purpose To show proper {} styles for functions.
 */

/**
 * Invalid Brace Function.
 *
 * @author Aubrey Portwood <aubrey@webdevstudios.com>
 * @since  NEXT
 * @return {boolean} Description.
 */
function foo()
{
	return true;
}

/**
 * Invalid Brace Function.
 *
 * @author Aubrey Portwood <aubrey@webdevstudios.com>
 * @since  NEXT
 * @return {boolean} Description.
 */
function baz()
{
	return false;
}

/**
 * Invalid brace use in if.
 */
if ( foo() ) {
	bar();
}
else {
	baz();
}

foo();

/**
 * Function that should be valid.
 *
 * @author Aubrey Portwood <aubrey@webdevstudios.com>
 * @since  NEXT
 * @return {boolean} Description.
 */
function bar() {
	return true;
}

/**
 * Valid brace use in if.
 */
if ( foo() ) {
	bar();
} else {
	baz();
}
