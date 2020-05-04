import React from 'react';
import { render } from 'react-dom';

class FilterForm extends React.Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.onDropDownChange(event.target.value);
	}

	render(){
		return (
			<div>
				<select value={this.props.sort} onChange={this.handleChange}>
					<option value="zip">Zipcode</option>
					<option value="positive">Positive</option>
				</select>
			</div>
			)
	}
}

export default FilterForm;