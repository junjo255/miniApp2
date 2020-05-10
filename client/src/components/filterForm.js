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
			<div className="drop-down">
			<label>
			Sort by: 
				<select value={this.props.sort} onChange={this.handleChange}>
					<option value="zip">Zipcode</option>
					<option value="positive">Positive</option>
				</select>
				</label>
			</div>
			)
	}
}

export default FilterForm;