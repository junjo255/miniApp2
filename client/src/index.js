import React from 'react';
import { render } from 'react-dom';
const axios = require('axios');
import CaseContainer from './components/caseContainer.js';
import FilterForm from './components/FilterForm';

class App extends React.Component {
     constructor(props){
     		super(props);

     		this.state = {
     			covidData: [],
                    covidDataPos: [],
                    sort: "zip"
     		}
               this.handleChange = this.handleChange.bind(this);
     }

     componentDidMount() {
     	axios.get('api/covid')
     		.then(res => {
     			this.setState({covidData: res.data})
     		});
     }

     handleChange(sortBy) {
          this.setState({
               sort: sortBy
          });
     }

     render(){
          let data;
          if(this.state.sort === "zip"){
               data = this.state.covidData;
          } else {
               data = this.state.covidData.slice().sort((a,b) => {
                    return b.positive - a.positive;
               })
          }

          return (
               <div>
                    <FilterForm onDropDownChange={this.handleChange} sort={this.state.sort} />
                    <hr />
                    <CaseContainer cases={data} />
               </div>
               )
     }

}

render(<App />, document.getElementById('app'));
