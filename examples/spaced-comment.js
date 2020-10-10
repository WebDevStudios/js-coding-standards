/**
 * @see     https://eslint.org/docs/rules/spaced-comment
 * @since   Unknown
 * @purpose Proper spacing needs to be used in commenting.
 */

// Line 9 should error because there is improper spacing at the start of /*

/*eslint spaced-comment: ["error", "always"] */

// 13 should error because there is no space between // and This

//This is a comment with a whitespace at the beginning

// 17 should error because there is no space after /* and before */

/*This is a comment with a whitespace at the beginning*/

// The below are all valid

// All are invalid, except for this one.
/* And this one */
/* eslint spaced-comment: ["error", "always"] */
// This is a comment with a whitespace at the beginning
/* This is a comment with a whitespace at the beginning */
