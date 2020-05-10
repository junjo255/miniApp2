import React from 'react';
import { render } from 'react-dom';


class Pagination extends React.Component {
	constructor(props) {
		super(props);
		this.handlePagination = this.handlePagination.bind(this);
	}

	handlePagination(event) {
		this.props.onPageChange(event.target.value);
	}





	render() {
		const {onPageChange, showPerPage, dataLength}	= this.props;
		const pages = [];
		for(let i = 1; i <= Math.ceil(dataLength / showPerPage); i++) {
			pages.push(i);
		}


		return (
			<ul className="pages">
				{pages.map(page => {
					return (
						<li key={page} value={page} onClick={this.handlePagination}>{page}</li>
						)
				})}
			</ul>
			)
	}
}

export default Pagination;