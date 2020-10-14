/**
 * @since   Unknown
 * @purpose To show proper and imporoper spacing when working with arrays
 *          and objects.
 */

/**
 * Valid
 *
 * The below examples are proper spacing when working with objects and arrays and
 * should NOT error.
 */

// simple object literals
let obj = { foo: 'bar' };

// nested object literals
obj = { foo: { zoo: 'bar' } };

// destructuring assignment (EcmaScript 6)
const { x, y } = a;

let a = { thing: 'test', things: [ a, obj ] };

a = { thing: 'test', things: [
	a, obj,
] };

// import/export declarations (EcmaScript 6)
import { foo } from 'bar';
export { foo };

foo( obj, x );

/**
 * Invalid
 *
 * The below examples are improper spacing when working with arrays and objects
 * and SHOULD show errors.
 */

// simple object literals
let obj2 = {foo: 'bar'};

// nested object literals
obj2 = {foo: { zoo: 'bar' }};

// destructuring assignment (EcmaScript 6)
const {x2, y2} = y;

let b = {thing: 'test', things: [ a, obj ]};

b = {thing: 'test', things: [
	b, obj,
]};

// import/export declarations (EcmaScript 6)
import {baz2} from 'bar2';
export {baz2};

baz2( obj2, x2, y2, b );
