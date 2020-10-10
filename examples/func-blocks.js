/**
 * @since   Unknown
 * @purpose To ensure that arrow functions DO NOT error.
 * @purpose Also to ensure that JSX style elements do NOT error.
 */

/**
 * Example extractions.
 */
const { Component } = wp;

const Edit = ( props ) => {
	return (
		<Component data-attr={ props } />
	);
};

export default Edit;
