import React, { Component } from "react";
import { Main } from "../../components/Main";
import Search from "../../components/Search";
import API from "../../utils/API";

class Article extends Component{
	state = {
    	articles: []
  	};
  	componentDidMount() {
    	this.loadArticles();
  	}

  	loadArticles = () => {
	    API.getArticles()
	      .then(res => this.setState({ articles: res.data }))
	      .catch(err => console.log(err));
  	};

	render(){
		return(
			<Main fluid>
				<div style={{ height: 300 }} className="jumbotron">
		    		<h1>New York Times Article Search</h1>
		  		</div>
		  		<Search/>

	  		</Main>
			);
		}
};




export default Article;