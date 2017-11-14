import React, { Component } from "react";
// import {Result }from "./Result";
import API from "../../utils/API";
import axios from "axios";

var result = [];


class Search extends Component{
	state= {
		q:"",
		begin_date:"",
		end_date:"",
		searchResults: []	
	};
	
	handleSearchClick = (event) => {
		event.preventDefault();
		console.log("q: "+this.state.q);
		var key= "06c43476f224443fb7b33c253b7bd1c2";
    	var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + key + "&q="+this.state.q+"&begin_date="+this.state.begin_date+"0101&end_date="+this.state.end_date+"1231";
    	
    	console.log("Line 31 Search: "+queryURL);


		axios.get(queryURL).then((response) => {
			console.log(response.data.response.docs)
			result = [];
			if (response.data.response.docs[0]){
	        	for (var i=0; i<response.data.response.docs.length;i++){
	          		var resultInfo = {};
	          		resultInfo.title=response.data.response.docs[i].headline.main;
	          		resultInfo.date=response.data.response.docs[i].pub_date;
	          		resultInfo.url= response.data.response.docs[i].web_url;
	          		result.push(resultInfo);
	          	}
	        	console.log(result);
	        	this.setState({
					searchResults:result
				});
				console.log(this.state.searchResults);
			}
		});
		console.log("after api call");	  
		
	};

	handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
	    console.log("EVENT");
	    console.log(event.target);
	    const { name, value } = event.target;
	    console.log("NAME");
	    console.log(name);

    // Updating the input's state
	    this.setState({
	      [name]: value
	    });
  	};

  	handleSaveClick = event => {
  		event.preventDefault();
  		// console.log(props);
  		API.saveArticle()

  	}


	render(){
  		return (
  			<div className="row">
	  			<div className="panel panel-default">
	  				<div className="panel-heading">
	  					<h3> Search </h3>
	  				</div>
	  				<div className="panel-body">
						<form className="form">
							<div className = "form-group">
								<input
									value={this.state.q}
									name="q"
									onChange={this.handleInputChange}
									type="text" 
									className="formControl" 
									placeholder="Topic (required)" />
						  	</div>
						  	<div className = "form-group">
								<input 
									value={this.state.begin_date}
									name="begin_date"
									onChange={this.handleInputChange}
									type="number" 
									className="formControl" 
									placeholder="Start Year (optional)" />
						  	</div>
						  	<div className = "form-group">
								<input 
									value={this.state.end_date}
									name="end_date"
									onChange={this.handleInputChange}
									type="number" 
									className="formControl" 
									placeholder="End Year (optional)" />
						  	</div>
						  	<button onClick={this.handleSearchClick} type="submit" className="btn btn-default">Search</button>
						</form>
					</div>
				</div>
				<div className="panel panel-default">
					<div className="panel-heading">
						<h3> Search Results </h3>
					</div>
					<div className = "panel-body">
					{this.state.searchResults.length ? (
						<ul className="list-group">
							{this.state.searchResults.map((article,index) => (
								<li className="list-group-item" key={index}>
									<a href={article.url}>
										<h3>{article.title}</h3>
									</a>
									<p>{article.date}</p>
									<button className="btn btn-success" title={article.title} url= {article.url} date= {article.date} onClick={this.handleSaveClick}> Save </button>
								</li>
								))}
						</ul>	
						) : (
							<h3> No Results to Display </h3>
						)}		
					</div>
				</div>
				
			</div>
		)};
	};

export default Search;