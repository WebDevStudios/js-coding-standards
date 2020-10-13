/**
 * @purpose To test auto-formatting of eslint --fix.
 *
 * Use `./node_modules/.bin/eslint --fix examples/js/auto-formatting.js` command
 * to test this file.
 *
 * Be carful not to fix and commit this file!
 *
 * @since   Friday, 9/25/2020
 */

/**
 * Functon
 *
 * - The padding in the function should go away.
 * - The spacing should get fixed.
 *
 * @author Aubrey Portwood <aubrey@webdevstudios.com>
 * @since  Friday, 9/25/2020
 * @return {boolean} Nothing important.
 */
function name() {

    return false; // This line uses spaces, it should use tabs, should get fixed.
     // These spaces are bad too, should get fixed.

}

name  (); // There is bad spacing here, should get fixed.

/**
 * This is Crazy
 *
 * In this example, we do not care if function titles or code inside go beyond the 80 ruler.
 *
 * @author Aubrey Portwood <aubrey@webdevstudios.com>
 * @since  Friday, 9/25/2020
 * @return {boolean} True
 */
function whataboutafunctionthatgoeswaywaywaybeyondtheeightyrulerwhatabouthtathuhhuhlikethat() {
	if ( true && false ) {
		return false;
	}

	if ( true || true || true || true || true || true || true || true || true || true || true || true ) {
		return false;
	}

	return true || true || true || true || true || true || true || true || true || true || true;
}

whataboutafunctionthatgoeswaywaywaybeyondtheeightyrulerwhatabouthtathuhhuhlikethat();

/**
 * Thing
 *
 * @author Aubrey Portwood <aubrey@webdevstudios.com>
 * @since  Friday, 10/9/2020
 * @return {boolean} Boolean value.
 */
function thing() {

	// Comment on first line must have space before.
	return true;
}

thing();
