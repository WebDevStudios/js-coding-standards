/**
 * @since   Unknown
 * @purpose To show proper and improper use of comma spacing.
 */

/**
 * Valid, shold NOT show errors.
 */

const zoo = 1,
	bar = 2,
	baz = 3;

const arr = [ 1, 2, zoo, bar, baz ];

const arr2 = [ 1,, 3 ];

const obj = {
	foo: 'bar',
	baz: 'qur',
};

const obj2 = [ bar, baz ];

crush( arr2, arr, obj, obj2 );

/**
 * Crush
 *
 * @author Aubrey Portwood <aubrey@webdevstudios.com>
 * @since  Unknown
 * @param  {Array} a Array.
 * @param  {Array} b Array.
 * @param  {Object} c Object.
 * @param  {Object} d Object.
 * @return {boolean} Description.
 */
function crush( a, b, c, d ) {

	/**
	 * Foo
	 *
	 * @author Aubrey Portwood <aubrey@webdevstudios.com>
	 * @since  Unknown
	 * @param  {Array} e Array.
	 * @param  {Array} f  Array.
	 * @param  {Object} g  Object.
	 * @param  {Object} h Object.
	 * @return {boolean}     Boolean.
	 */
	function foo( e, f, g, h ) {
		return 0 === e + f + g + h;
	}

	return foo( a, b, c, d );
}

/**
 * Invalid, should SHOW errors.
 */

const zoo2 = 1,
	bar2 = 2
	,baz2 = 3;

const arr3 = [ 1,2, zoo2, bar2, baz2 ];

const arr4 = [ 1 ,, 3 ];

const obj1 = {
	foo: 'bar',baz: 'qur',
};

const obj3 = [ bar,baz ];

crush2( arr3,arr4,obj1,obj3 );

/**
 * Crush
 *
 * @author Aubrey Portwood <aubrey@webdevstudios.com>
 * @since  Unknown
 * @param  {Array} a Array.
 * @param  {Array} b Array.
 * @param  {Object} c Object.
 * @param  {Object} d Object.
 * @return {boolean} Description.
 */
function crush2( a, b,c, d ) {

	/**
	 * Foo
	 *
	 * @author Aubrey Portwood <aubrey@webdevstudios.com>
	 * @since  Unknown
	 * @param  {Array} e Array.
	 * @param  {Array} f  Array.
	 * @param  {Object} g  Object.
	 * @param  {Object} h Object.
	 * @return {boolean}     Boolean.
	 */
	function foo( e, f,g, h ) {
		return 0 === e + f + g + h;
	}

	return foo( a,b,c, d );
}
