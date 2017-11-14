import React from "react";

	
export const Result = (props) => 
		<p>{props.searchResults}</p>
		
		// <div className="panel panel-default">
		// 	<div className="panel-heading">
		// 		<h3> Search Results </h3>
		// 	</div>
		// 	<div className = "panel-body">
		// 		{props.searchResults}
		// 	{props.searchResults.length ? (
		// 		<ul className="list-group">
		// 			{props.searchResults.map(article => {
		// 			<li className="list-group-item">
		// 				<a href={article.url}>
		// 					<h4> {article.title} </h4>
		// 				</a>
		// 				<p> {article.date} </p>
		// 			</li>
		// 		})}
		// 		</ul>
		// 			): (
		// 			<h3> No results to display</h3>
		// 			)}
				
		// 	</div>

		// </div>;




export default Result;