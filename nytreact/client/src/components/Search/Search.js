import React, { Component } from "react";
import API from "../../utils/API";


class Search extends Component{
	state= {
		q:"",
		begin_date:"",
		end_date:"",
		searchResults: []
	};

	componentWillMount

	SearchArticles = () =>{
		console.log("search clicked");
		API.searchArticles("cats", "20160101", "20170101")
			//change above to this references once api call works
			.then(res => this.setState({searchResults: res.data}))
			.catch(err => console.log(err));
		console.log(this.state.searchResults);
	};

	render(){
  		return (
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
					  	<button onClick={this.SearchArticles} type="submit" className="btn btn-default">Search</button>
					</form>
				<p>{this.state.q}</p>
				<p>{this.searchResults}</p>
				</div>
			</div>
		);
	}
}
export default Search;