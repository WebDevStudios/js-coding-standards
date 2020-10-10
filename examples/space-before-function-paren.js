/**
 * @since   Unknown
 * @see     https://eslint.org/docs/rules/space-before-function-paren
 *
 * @purpose Erros should show when using style func () with a space, and should
 *          not show when using func() style.
 * @purpose Arrow functions, however, can have this space, and should NOT error.
 */

/**
 * Named
 *
 * This should error as spaces before ( are not allowed.
 *
 * @author Aubrey Portwood <aubrey@webdevstudios.com>
 * @since  Friday, 4/10/2020
 * @return {boolean} Description.
 */
function named () { // This should show an error.
	return true;
}

// The anonymous function below should also be flagged.
named( function () { // This should show an error.
	return false;
} );

const arrow = () => { // This should NOT show an error.
	return true;
};

arrow();
