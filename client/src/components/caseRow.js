import React from 'react';
import { render } from 'react-dom';

const CaseRow = (props) => {
	const {zipCode, positive, total} = props.covidCase;

	return (
		<tr>
			<td>{props.idx}</td>
			<td>{zipCode}</td>
			<td>{positive}</td>
			<td>{total}</td>
		</tr>
		)
}

export default CaseRow;