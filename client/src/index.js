import React from 'react';
import { render } from 'react-dom';
const axios = require('axios');
import CaseContainer from './components/caseContainer.js';
import FilterForm from './components/filterForm';
import Pagination from './components/pagination';

class App extends React.Component {
     constructor(props){
     		super(props);

     		this.state = {
     			covidData: [],
                    covidDataPos: [],
                    sort: "zip",
                    showPerPage: 20,
                    currentPage: 1
     		}
               this.handleChange = this.handleChange.bind(this);
               this.handlePagination = this.handlePagination.bind(this);
     }

     componentDidMount() {
     	axios.get('api/covid')
     		.then(res => {
     			this.setState({covidData: res.data})
     		});
     }

     handleChange(sortBy) {
          this.setState({
               sort: sortBy,
               currentPage: 1
          });
     }

     handlePagination(page) {
          this.setState({
               currentPage: page
          });
     }

     render(){
          let sorted;
          let data;
          const {showPerPage, currentPage} = this.state;

          if(this.state.sort === "zip"){
               sorted = this.state.covidData;
          } else {
               sorted = this.state.covidData.slice().sort((a,b) => {
                    return b.positive - a.positive;
               });
          }

          data = sorted.slice(showPerPage * currentPage - showPerPage, showPerPage * currentPage)

          return (
               <div>
                    <FilterForm onDropDownChange={this.handleChange} sort={this.state.sort} />
                    <hr />
                    <CaseContainer cases={data} showPerPage={showPerPage} currentPage={currentPage} />
                    <Pagination onPageChange={this.handlePagination} showPerPage={showPerPage} dataLength={this.state.covidData.length} />
                    <div>Page is {currentPage}</div>
               </div>
               )
     }

}

render(<App />, document.getElementById('app'));
