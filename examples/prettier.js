/**
 * @purpose To test auto-formatting of PrettierJS.
 *
 * Use `./node_modules/.bin/prettier --write examples/js/prettier.js` command
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
 *
 * @see https://prettier.io/docs/en/options.html#tabs `useTabs`
 */
function name() {

    return false; // This line uses spaces, it should use tabs.
     // These spaces are bad too.

}

name  (); // There is bad spacing here.

/**
 * This is Crazy
 *
 * In this example, we do not care if function titles or code inside go beyond the 80 ruler.
 *
 * @author Aubrey Portwood <aubrey@webdevstudios.com>
 * @since  Friday, 9/25/2020
 * @return {boolean} True
 *
 * @see https://prettier.io/docs/en/options.html#print-width `printWidth`
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
