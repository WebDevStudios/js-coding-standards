/**
 * @since   Unknown
 * @purpose Padded blocks should NOT be required, this example should NOT show
 *          errors when padding is not added.
 *
 * @see https://eslint.org/docs/rules/padded-blocks
 */

const accordionItemContent = [];

/**
 * Handle toggling the accordion.
 *
 * @param {Object} event The targeted element.
 *
 * @since January 31, 2020
 * @author Shannon MacMillan, Corey Collins
 */
function toggleAccordion( event ) {
	accordionItemContent.forEach( function( content ) {
		const targetParent = event.target.parentNode.closest( '.accordion-item-header' );

		// If we're clicking on this accordion...
		if ( content.previousElementSibling === targetParent ) {

			// If it's already opened, close it. Otherwise, open it!
			if ( 'false' === content.getAttribute( 'aria-hidden' ) ) {
				content.setAttribute( 'aria-hidden', 'true' );
				content.parentElement.classList.remove( 'open' );
			} else {
				content.setAttribute( 'aria-hidden', 'false' );
				content.parentElement.classList.add( 'open' );
			}
		} else {
			content.setAttribute( 'aria-hidden', 'true' );
			content.parentElement.classList.remove( 'open' );
		}
	} );
}

/**
 * Simple Function
 *
 * @author Aubrey Portwood <aubrey@webdevstudios.com>
 * @since  Friday, 9/18/2020
 */
function simpleFunction() {
	toggleAccordion();
}

simpleFunction();
