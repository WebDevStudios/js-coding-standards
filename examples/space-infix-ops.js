/**
 * @see     https://eslint.org/docs/rules/space-infix-ops
 * @since   Unknown
 *
 * @purpose Proper spacing should be used when using operators, e.g. 2+2 should
 *          show an error, while 2 + 2 is perfectly valid.
 */

let a = 2+1; // This should error because the math does not have spaces.

a = 2 + 3; // This should not, it is proper.

return a;
